import React, { useState, useEffect } from 'react';
import { Download, FileText, RefreshCw, CheckCircle, Printer, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useFormContext } from '@/contexts/FormContext';
import { generatePDF, downloadPDF } from '@/lib/pdfGenerator';
import { toast } from 'sonner';

export function DownloadPage() {
  const { t } = useLanguage();
  const { selectedForm, extractedFields, resetForm, setCurrentStep } = useFormContext();
  const [isGenerating, setIsGenerating] = useState(true);
  const [pdfReady, setPdfReady] = useState(false);
  const [pdfBytes, setPdfBytes] = useState<Uint8Array | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const generateFormPDF = async () => {
      if (!selectedForm) {
        setError('No form template selected');
        setIsGenerating(false);
        return;
      }

      try {
        setIsGenerating(true);
        setError(null);
        
        const bytes = await generatePDF(selectedForm, extractedFields);
        setPdfBytes(bytes);
        setPdfReady(true);
        toast.success('PDF generated successfully!');
      } catch (err) {
        console.error('PDF generation error:', err);
        setError('Failed to generate PDF. Please try again.');
        toast.error('Failed to generate PDF');
      } finally {
        setIsGenerating(false);
      }
    };

    generateFormPDF();
  }, [selectedForm, extractedFields]);

  const handleDownload = () => {
    if (!pdfBytes || !selectedForm) return;
    
    const filename = `${selectedForm.id}_${Date.now()}.pdf`;
    downloadPDF(pdfBytes, filename);
    toast.success('PDF downloaded successfully!');
  };

  const handlePrint = () => {
    if (!pdfBytes) return;
    
    const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const printWindow = window.open(url, '_blank');
    if (printWindow) {
      printWindow.addEventListener('load', () => {
        printWindow.print();
      });
    }
    URL.revokeObjectURL(url);
  };

  const handleStartNew = () => {
    resetForm();
    setCurrentStep(0);
  };

  if (isGenerating) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="relative mb-8">
          <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
            <FileText className="w-16 h-16 text-primary animate-pulse" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
            <RefreshCw className="w-6 h-6 text-primary-foreground animate-spin" />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-2">Generating Your PDF...</h2>
        <p className="text-muted-foreground">Creating {selectedForm?.name} with your data</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="w-24 h-24 rounded-full bg-destructive/10 flex items-center justify-center mb-6">
          <AlertCircle className="w-12 h-12 text-destructive" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Generation Failed</h2>
        <p className="text-muted-foreground mb-6">{error}</p>
        <Button variant="outline" onClick={() => setCurrentStep(4)}>
          Go Back & Try Again
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Success State */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent/10 mb-6">
          <CheckCircle className="w-12 h-12 text-accent" />
        </div>
        <h2 className="text-3xl font-bold mb-2">{t('download.title')}</h2>
        <p className="text-muted-foreground text-lg">{t('download.subtitle')}</p>
      </div>

      {/* Form Summary Card */}
      <Card className="bg-gradient-to-br from-card to-muted/50">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-1">{selectedForm?.name}</h3>
              <p className="text-muted-foreground mb-4">
                Filled with {extractedFields.filter(f => f.value).length} fields • PDF Ready
              </p>
              
              {/* Quick preview of filled data */}
              <div className="grid grid-cols-2 gap-2 text-sm">
                {extractedFields.slice(0, 4).map(f => (
                  <div key={f.key} className="truncate">
                    <span className="text-muted-foreground">{f.key}: </span>
                    <span className="font-medium">{f.value || '-'}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Download Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          variant="hero" 
          size="xl" 
          className="flex-1"
          onClick={handleDownload}
          disabled={!pdfReady}
        >
          <Download className="w-6 h-6 mr-2" />
          {t('download.button')}
        </Button>
        <Button 
          variant="outline" 
          size="xl"
          className="flex-1"
          onClick={handlePrint}
          disabled={!pdfReady}
        >
          <Printer className="w-6 h-6 mr-2" />
          Print
        </Button>
      </div>

      {/* Security Notice */}
      <Card className="bg-accent/5 border-accent/20">
        <CardContent className="p-4 text-center">
          <p className="text-sm text-muted-foreground">
            ✓ Your documents have been automatically deleted from our servers.
            <br />
            No personal data is stored.
          </p>
        </CardContent>
      </Card>

      {/* Start New Button */}
      <div className="text-center pt-4">
        <Button variant="ghost" size="lg" onClick={handleStartNew}>
          <RefreshCw className="w-5 h-5 mr-2" />
          {t('download.startNew')}
        </Button>
      </div>
    </div>
  );
}
