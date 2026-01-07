import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Lock, Trash2 } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-card/80 border-t border-border/50 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 py-5 sm:py-6">
        {/* Security badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
            <Shield className="w-4 h-4 text-accent" />
            <span>Secure Processing</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
            <Lock className="w-4 h-4 text-accent" />
            <span>Encrypted Data</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
            <Trash2 className="w-4 h-4 text-accent" />
            <span>Auto-Deleted After Use</span>
          </div>
        </div>

        <p className="text-center text-xs sm:text-sm text-muted-foreground">
          {t('app.secure')}
        </p>

        <div className="mt-4 pt-4 border-t border-border/50 text-center text-xs text-muted-foreground">
          <p>© 2024 Seva Sahayak. Made for Indian Citizens.</p>
        </div>
      </div>
    </footer>
  );
}
