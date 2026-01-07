import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface Step {
  id: number;
  labelKey: string;
  descKey: string;
}

const steps: Step[] = [
  { id: 1, labelKey: 'step.upload', descKey: 'step.upload.desc' },
  { id: 2, labelKey: 'step.extract', descKey: 'step.extract.desc' },
  { id: 3, labelKey: 'step.selectForm', descKey: 'step.selectForm.desc' },
  { id: 4, labelKey: 'step.review', descKey: 'step.review.desc' },
  { id: 5, labelKey: 'step.download', descKey: 'step.download.desc' },
];

interface StepIndicatorProps {
  currentStep: number;
  className?: string;
}

export function StepIndicator({ currentStep, className }: StepIndicatorProps) {
  const { t } = useLanguage();

  return (
    <div className={cn("w-full py-4 sm:py-6", className)}>
      <div className="flex items-center justify-between relative">
        {/* Progress line background */}
        <div className="absolute top-5 sm:top-6 left-0 right-0 h-0.5 sm:h-1 bg-muted mx-6 sm:mx-8 rounded-full">
          {/* Progress line fill */}
          <div 
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500 ease-out"
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          />
        </div>

        {steps.map((step) => {
          const isCompleted = step.id < currentStep;
          const isCurrent = step.id === currentStep;
          const isUpcoming = step.id > currentStep;

          return (
            <div 
              key={step.id} 
              className="flex flex-col items-center relative z-10 group"
            >
              {/* Step circle */}
              <div
                className={cn(
                  "flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full text-sm sm:text-lg font-bold transition-all duration-300 border-2",
                  isCompleted && "bg-accent text-accent-foreground border-accent shadow-md",
                  isCurrent && "bg-primary text-primary-foreground border-primary shadow-lg scale-110",
                  isUpcoming && "bg-muted text-muted-foreground border-muted-foreground/30 group-hover:border-primary/50 group-hover:bg-muted/80"
                )}
                style={isCurrent ? { boxShadow: 'var(--shadow-glow)' } : undefined}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <span>{step.id}</span>
                )}
              </div>

              {/* Step label */}
              <span
                className={cn(
                  "mt-2 sm:mt-3 text-xs sm:text-sm font-medium text-center max-w-[80px] sm:max-w-[100px] hidden sm:block transition-colors duration-200",
                  isCurrent && "text-primary font-semibold",
                  isCompleted && "text-accent",
                  isUpcoming && "text-muted-foreground group-hover:text-foreground/70"
                )}
              >
                {t(step.labelKey)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
