import React from 'react';
import { 
  FileText, 
  CreditCard, 
  Car, 
  Users, 
  Wallet, 
  ShoppingCart, 
  Plane, 
  Vote,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useFormContext, FormTemplate } from '@/contexts/FormContext';
import { cn } from '@/lib/utils';

const formTemplates: FormTemplate[] = [
  {
    id: 'birth_certificate',
    name: 'Birth Certificate Application',
    nameHi: 'जन्म प्रमाण पत्र आवेदन',
    description: 'Apply for birth certificate from local municipality',
    fields: ['fullName', 'dateOfBirth', 'gender', 'fatherName', 'motherName', 'address', 'pincode'],
    icon: 'FileText',
  },
  {
    id: 'driving_license',
    name: 'Driving License Application',
    nameHi: 'ड्राइविंग लाइसेंस आवेदन',
    description: 'Apply for new driving license or renewal',
    fields: ['fullName', 'dateOfBirth', 'gender', 'fatherName', 'address', 'pincode', 'aadhaarNumber'],
    icon: 'Car',
  },
  {
    id: 'pan_application',
    name: 'PAN Card Application',
    nameHi: 'पैन कार्ड आवेदन',
    description: 'Apply for new PAN card (Form 49A)',
    fields: ['fullName', 'dateOfBirth', 'gender', 'fatherName', 'address', 'pincode', 'aadhaarNumber'],
    icon: 'CreditCard',
  },
  {
    id: 'caste_certificate',
    name: 'Caste Certificate',
    nameHi: 'जाति प्रमाण पत्र',
    description: 'Apply for caste/community certificate',
    fields: ['fullName', 'dateOfBirth', 'gender', 'fatherName', 'address', 'pincode', 'state'],
    icon: 'Users',
  },
  {
    id: 'income_certificate',
    name: 'Income Certificate',
    nameHi: 'आय प्रमाण पत्र',
    description: 'Apply for income certificate',
    fields: ['fullName', 'dateOfBirth', 'gender', 'fatherName', 'address', 'pincode', 'state'],
    icon: 'Wallet',
  },
  {
    id: 'ration_card',
    name: 'Ration Card Application',
    nameHi: 'राशन कार्ड आवेदन',
    description: 'Apply for new ration card',
    fields: ['fullName', 'dateOfBirth', 'gender', 'fatherName', 'address', 'pincode', 'aadhaarNumber'],
    icon: 'ShoppingCart',
  },
  {
    id: 'passport',
    name: 'Passport Application',
    nameHi: 'पासपोर्ट आवेदन',
    description: 'Apply for new passport or renewal',
    fields: ['fullName', 'dateOfBirth', 'gender', 'fatherName', 'motherName', 'address', 'pincode', 'aadhaarNumber'],
    icon: 'Plane',
  },
  {
    id: 'voter_id',
    name: 'Voter ID Card',
    nameHi: 'मतदाता पहचान पत्र',
    description: 'Apply for new voter ID (EPIC)',
    fields: ['fullName', 'dateOfBirth', 'gender', 'fatherName', 'address', 'pincode', 'aadhaarNumber'],
    icon: 'Vote',
  },
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText,
  CreditCard,
  Car,
  Users,
  Wallet,
  ShoppingCart,
  Plane,
  Vote,
};

export function FormSelection() {
  const { t, language } = useLanguage();
  const { selectedForm, setSelectedForm, setCurrentStep } = useFormContext();

  const handleContinue = () => {
    if (selectedForm) {
      setCurrentStep(4);
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground">{t('forms.title')}</h2>
        <p className="text-sm sm:text-base text-muted-foreground mt-1">{t('forms.subtitle')}</p>
      </div>

      {/* Form Templates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
        {formTemplates.map((template) => {
          const Icon = iconMap[template.icon] || FileText;
          const isSelected = selectedForm?.id === template.id;

          return (
            <Card
              key={template.id}
              className={cn(
                "cursor-pointer transition-all duration-200 hover:shadow-md group",
                isSelected 
                  ? "border-2 border-primary ring-2 ring-primary/20 shadow-md bg-primary/[0.02]" 
                  : "border-border/60 hover:border-primary/50 hover:bg-muted/30"
              )}
              onClick={() => setSelectedForm(template)}
            >
              <CardContent className="p-5 sm:p-6">
                <div className={cn(
                  "w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-all duration-200",
                  isSelected 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "bg-primary/10 text-primary group-hover:bg-primary/15"
                )}>
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>

                <h3 className="font-semibold text-base sm:text-lg mb-1 text-foreground">
                  {language === 'hi' && template.nameHi ? template.nameHi : template.name}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{template.description}</p>

                {/* Fields preview */}
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-border/50">
                  <p className="text-xs text-muted-foreground">
                    {template.fields.length} fields required
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Continue Button */}
      <div className="flex flex-col sm:flex-row justify-between gap-3 pt-4 sm:pt-6">
        <Button 
          variant="outline" 
          size="lg" 
          onClick={() => setCurrentStep(2)}
          className="order-2 sm:order-1"
        >
          {t('common.back')}
        </Button>
        <Button 
          variant="hero" 
          size="lg" 
          onClick={handleContinue}
          disabled={!selectedForm}
          className="order-1 sm:order-2 min-w-[140px]"
        >
          {t('common.next')}
          <ArrowRight className="w-5 h-5 ml-1" />
        </Button>
      </div>
    </div>
  );
}
