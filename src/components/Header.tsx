import React from 'react';
import { Shield, HelpCircle, LogIn, LogOut, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { useFormContext } from '@/contexts/FormContext';

export function Header() {
  const { t } = useLanguage();
  const { user, isAuthenticated, signOut } = useAuth();
  const { toast } = useToast();
  const { resetForm, setCurrentStep } = useFormContext();

  const handleSignOut = async () => {
    await signOut();
    toast({
      title: 'Signed out',
      description: 'You have been successfully signed out.',
    });
  };

  const handleLogoClick = () => {
    resetForm();
    setCurrentStep(0);
  };

  return (
    <header className="w-full bg-card/95 backdrop-blur-md border-b border-border/50 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo - Clickable to go home */}
        <Link 
          to="/" 
          onClick={handleLogoClick}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center shadow-md transition-all duration-200 group-hover:shadow-lg group-hover:scale-105">
            <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
              {t('app.title')}
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
              {t('app.subtitle')}
            </p>
          </div>
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSelector />
          <Button 
            variant="ghost" 
            size="icon" 
            className="hidden sm:flex hover:bg-primary/10 transition-colors duration-200"
          >
            <HelpCircle className="w-5 h-5" />
          </Button>

          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline text-sm text-muted-foreground">
                <User className="w-4 h-4 inline mr-1" />
                {user?.email?.split('@')[0]}
              </span>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleSignOut}
                className="hover:bg-destructive/10 hover:text-destructive hover:border-destructive/50 transition-all duration-200"
              >
                <LogOut className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">Sign Out</span>
              </Button>
            </div>
          ) : (
            <Button 
              variant="outline" 
              size="sm" 
              asChild
              className="hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all duration-200"
            >
              <Link to="/auth">
                <LogIn className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">Sign In</span>
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
