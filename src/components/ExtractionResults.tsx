import React, { useEffect, useState } from 'react';
import { Loader2, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useFormContext, ExtractedField, UploadedDocument } from '@/contexts/FormContext';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

// Convert File to base64
const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      // Remove the data URL prefix to get just the base64
      const base64 = result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = reject;
  });
};

// Extract document using AI
const extractFromDocument = async (doc: UploadedDocument): Promise<ExtractedField[]> => {
  const base64 = await fileToBase64(doc.file);
  
  const { data, error } = await supabase.functions.invoke('extract-document', {
    body: {
      imageBase64: base64,
      documentType: doc.type,
      mimeType: doc.file.type,
    },
  });

  if (error) {
    console.error('Extraction error:', error);
    throw new Error(error.message || 'Failed to extract document');
  }

  if (!data?.success) {
    throw new Error(data?.error || 'Extraction failed');
  }

  return data.fields || [];
};

// Merge fields from multiple documents, preferring higher confidence
const mergeFields = (allFields: ExtractedField[]): ExtractedField[] => {
  const fieldMap = new Map<string, ExtractedField>();
  const confidenceOrder = { high: 3, medium: 2, low: 1 };

  for (const field of allFields) {
    const existing = fieldMap.get(field.key);
    if (!existing || confidenceOrder[field.confidence] > confidenceOrder[existing.confidence]) {
      fieldMap.set(field.key, field);
    }
  }

  return Array.from(fieldMap.values());
};

export function ExtractionResults() {
  const { t } = useLanguage();
  const { documents, extractedFields, setExtractedFields, setCurrentStep } = useFormContext();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(true);
  const [progress, setProgress] = useState(0);
  const [processingStatus, setProcessingStatus] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processDocuments = async () => {
      if (documents.length === 0) {
        setIsProcessing(false);
        return;
      }

      try {
        const allFields: ExtractedField[] = [];
        const totalDocs = documents.length;

        for (let i = 0; i < documents.length; i++) {
          const doc = documents[i];
          setProcessingStatus(`Processing ${doc.file.name}...`);
          setProgress(Math.round(((i + 0.5) / totalDocs) * 100));

          try {
            const fields = await extractFromDocument(doc);
            allFields.push(...fields);
          } catch (docError) {
            console.error(`Error processing ${doc.file.name}:`, docError);
            toast({
              title: 'Extraction Warning',
              description: `Could not extract from ${doc.file.name}. Continuing with other documents.`,
              variant: 'destructive',
            });
          }

          setProgress(Math.round(((i + 1) / totalDocs) * 100));
        }

        // Merge fields from all documents
        const mergedFields = mergeFields(allFields);
        
        if (mergedFields.length === 0) {
          setError('No information could be extracted from the uploaded documents. Please try with clearer images.');
        } else {
          setExtractedFields(mergedFields);
          toast({
            title: 'Extraction Complete',
            description: `Successfully extracted ${mergedFields.length} fields from your documents.`,
          });
        }
      } catch (err) {
        console.error('Processing error:', err);
        setError(err instanceof Error ? err.message : 'Failed to process documents');
        toast({
          title: 'Extraction Failed',
          description: 'Could not process documents. Please try again.',
          variant: 'destructive',
        });
      } finally {
        setIsProcessing(false);
      }
    };

    processDocuments();
  }, [documents, setExtractedFields, toast]);

  const getConfidenceBadge = (confidence: 'high' | 'medium' | 'low') => {
    const styles = {
      high: 'confidence-high',
      medium: 'confidence-medium',
      low: 'confidence-low',
    };

    const labels = {
      high: t('extract.high'),
      medium: t('extract.medium'),
      low: t('extract.low'),
    };

    return (
      <span className={cn('confidence-badge', styles[confidence])}>
        {confidence === 'high' && <CheckCircle className="w-3 h-3 mr-1" />}
        {confidence === 'low' && <AlertCircle className="w-3 h-3 mr-1" />}
        {labels[confidence]}
      </span>
    );
  };

  const fieldLabels: Record<string, string> = {
    fullName: t('field.fullName'),
    dateOfBirth: t('field.dateOfBirth'),
    gender: t('field.gender'),
    fatherName: t('field.fatherName'),
    motherName: t('field.motherName'),
    address: t('field.address'),
    pincode: t('field.pincode'),
    state: t('field.state'),
    aadhaarNumber: t('field.aadhaarNumber'),
    panNumber: t('field.panNumber'),
    mobileNumber: t('field.mobileNumber'),
  };

  // Show error state
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 mb-4">
          <AlertCircle className="w-8 h-8 text-destructive" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Extraction Failed</h2>
        <p className="text-muted-foreground text-center max-w-md mb-6">{error}</p>
        <Button variant="outline" size="lg" onClick={() => setCurrentStep(1)}>
          {t('common.back')} - Try Again
        </Button>
      </div>
    );
  }

  if (isProcessing) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="relative mb-8">
          <div className="w-32 h-32 rounded-full border-4 border-muted flex items-center justify-center">
            <Loader2 className="w-16 h-16 text-primary animate-spin" />
          </div>
          <div 
            className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"
            style={{ animationDuration: '1.5s' }}
          />
        </div>
        
        <h2 className="text-2xl font-bold mb-4">{t('extract.processing')}</h2>
        <p className="text-muted-foreground mb-4">{processingStatus || 'Analyzing documents with AI...'}</p>
        
        {/* Progress bar */}
        <div className="w-full max-w-md bg-muted rounded-full h-3 overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-300 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-muted-foreground mt-2">{progress}% complete</p>

        {/* Document processing status */}
        <div className="mt-8 space-y-2">
          {documents.map((doc) => {
            const isCurrentDoc = processingStatus.includes(doc.file.name);
            const isDone = !isCurrentDoc && progress > 0;
            return (
              <div key={doc.id} className="flex items-center gap-3 text-sm">
                {isDone ? (
                  <CheckCircle className="w-5 h-5 text-accent" />
                ) : isCurrentDoc ? (
                  <Loader2 className="w-5 h-5 text-primary animate-spin" />
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-muted" />
                )}
                <span>{doc.file.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
          <CheckCircle className="w-8 h-8 text-accent" />
        </div>
        <h2 className="text-2xl font-bold">{t('extract.title')}</h2>
        <p className="text-muted-foreground">{t('extract.subtitle')}</p>
      </div>

      {/* Extracted Fields Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {extractedFields.map((field) => (
          <Card 
            key={field.key} 
            className={cn(
              "transition-all",
              field.confidence === 'low' && "border-warning/50 bg-warning/5"
            )}
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <label className="text-sm font-medium text-muted-foreground">
                  {fieldLabels[field.key] || field.key}
                </label>
                {getConfidenceBadge(field.confidence)}
              </div>
              <p className={cn(
                "text-lg font-semibold",
                !field.value && "text-muted-foreground italic"
              )}>
                {field.value || 'Not found'}
              </p>
              {field.source && (
                <p className="text-xs text-muted-foreground mt-1">
                  Source: {field.source}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Low confidence warning */}
      {extractedFields.some(f => f.confidence === 'low') && (
        <Card className="bg-warning/10 border-warning/30">
          <CardContent className="p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-warning shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Some fields need verification</p>
              <p className="text-sm text-muted-foreground">
                Fields marked with low confidence may be incorrect. You'll be able to edit them in the next step.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Continue Button */}
      <div className="flex justify-between pt-4">
        <Button variant="outline" size="lg" onClick={() => setCurrentStep(1)}>
          {t('common.back')}
        </Button>
        <Button variant="hero" size="lg" onClick={() => setCurrentStep(3)}>
          {t('common.next')}
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}
