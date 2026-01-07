import React, { useCallback, useState } from 'react';
import { Upload, X, FileText, Image as ImageIcon, Loader2, RotateCw, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useFormContext, UploadedDocument } from '@/contexts/FormContext';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_TYPES = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];

export function DocumentUpload() {
  const { t } = useLanguage();
  const { documents, addDocument, removeDocument, setCurrentStep } = useFormContext();
  const { toast } = useToast();
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const detectDocumentType = (fileName: string): UploadedDocument['type'] => {
    const name = fileName.toLowerCase();
    if (name.includes('aadhaar') || name.includes('aadhar')) return 'aadhaar';
    if (name.includes('pan')) return 'pan';
    if (name.includes('voter') || name.includes('epic')) return 'voter_id';
    if (name.includes('driving') || name.includes('license') || name.includes('dl')) return 'driving_license';
    if (name.includes('passport')) return 'passport';
    return 'other';
  };

  const handleFiles = useCallback(async (files: FileList | File[]) => {
    const fileArray = Array.from(files);
    
    for (const file of fileArray) {
      // Validate file type
      if (!ALLOWED_TYPES.includes(file.type)) {
        toast({
          title: 'Invalid file type',
          description: `${file.name} is not a supported format. Please use PDF, JPG, or PNG.`,
          variant: 'destructive',
        });
        continue;
      }

      // Validate file size
      if (file.size > MAX_FILE_SIZE) {
        toast({
          title: 'File too large',
          description: `${file.name} exceeds 10MB limit.`,
          variant: 'destructive',
        });
        continue;
      }

      setIsUploading(true);

      // Create preview
      const preview = await new Promise<string>((resolve) => {
        if (file.type === 'application/pdf') {
          resolve('/placeholder.svg'); // PDF placeholder
        } else {
          const reader = new FileReader();
          reader.onload = (e) => resolve(e.target?.result as string);
          reader.readAsDataURL(file);
        }
      });

      const doc: UploadedDocument = {
        id: `doc-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        file,
        preview,
        type: detectDocumentType(file.name),
        status: 'pending',
      };

      addDocument(doc);
      setIsUploading(false);

      toast({
        title: 'Document uploaded',
        description: `${file.name} added successfully.`,
      });
    }
  }, [addDocument, toast]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files.length) {
      handleFiles(e.dataTransfer.files);
    }
  }, [handleFiles]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      handleFiles(e.target.files);
    }
  }, [handleFiles]);

  const handleContinue = () => {
    if (documents.length === 0) {
      toast({
        title: 'No documents uploaded',
        description: 'Please upload at least one document to continue.',
        variant: 'destructive',
      });
      return;
    }
    setCurrentStep(2);
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Upload Zone */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={cn(
          "relative border-2 border-dashed rounded-2xl p-8 sm:p-12 text-center transition-all duration-300 cursor-pointer group",
          isDragging 
            ? "border-primary bg-primary/5 scale-[1.01] shadow-lg" 
            : "border-border bg-card hover:border-primary/60 hover:bg-primary/[0.02] hover:shadow-md",
          isUploading && "pointer-events-none opacity-70"
        )}
        onClick={() => document.getElementById('file-input')?.click()}
      >
        <input
          id="file-input"
          type="file"
          multiple
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={handleFileInput}
          className="hidden"
        />

        <div className="flex flex-col items-center gap-4">
          {isUploading ? (
            <Loader2 className="w-14 h-14 sm:w-16 sm:h-16 text-primary animate-spin" />
          ) : (
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/15 group-hover:scale-105">
              <Upload className="w-8 h-8 sm:w-10 sm:h-10 text-primary transition-transform duration-300 group-hover:-translate-y-0.5" />
            </div>
          )}

          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground">
              {isUploading ? t('upload.uploading') : t('upload.dragDrop')}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">{t('upload.supported')}</p>
          </div>

          <Button 
            variant="outline" 
            size="lg" 
            className="mt-2 sm:mt-4 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
          >
            Browse Files
          </Button>
        </div>
      </div>

      {/* Uploaded Documents Grid */}
      {documents.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-base sm:text-lg font-semibold text-foreground">
            Uploaded Documents ({documents.length})
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {documents.map((doc) => (
              <Card 
                key={doc.id} 
                className="group overflow-hidden border border-border/60 bg-card transition-all duration-200 hover:border-primary/40 hover:shadow-md"
              >
                <CardContent className="p-4">
                  <div className="aspect-[4/3] relative mb-3 rounded-lg overflow-hidden bg-muted/50">
                    {doc.file.type === 'application/pdf' ? (
                      <div className="absolute inset-0 flex items-center justify-center bg-muted/30">
                        <FileText className="w-12 h-12 sm:w-16 sm:h-16 text-muted-foreground/60" />
                      </div>
                    ) : (
                      <img
                        src={doc.preview}
                        alt={doc.file.name}
                        className="w-full h-full object-cover"
                      />
                    )}

                    {/* Overlay actions */}
                    <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center justify-center gap-2">
                      <Button 
                        size="icon" 
                        variant="secondary" 
                        className="h-9 w-9 sm:h-10 sm:w-10 bg-card/90 hover:bg-card transition-transform duration-200 hover:scale-105"
                      >
                        <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
                      </Button>
                      <Button 
                        size="icon" 
                        variant="secondary" 
                        className="h-9 w-9 sm:h-10 sm:w-10 bg-card/90 hover:bg-card transition-transform duration-200 hover:scale-105"
                      >
                        <RotateCw className="w-4 h-4 sm:w-5 sm:h-5" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-sm sm:text-base truncate text-foreground">{doc.file.name}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground capitalize">
                        {doc.type.replace('_', ' ')} • {(doc.file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="shrink-0 h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors duration-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeDocument(doc.id);
                      }}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Continue Button */}
      <div className="flex justify-end pt-4 sm:pt-6">
        <Button 
          variant="hero" 
          size="lg" 
          onClick={handleContinue}
          disabled={documents.length === 0}
          className="min-w-[140px]"
        >
          {t('upload.continue')}
        </Button>
      </div>
    </div>
  );
}
