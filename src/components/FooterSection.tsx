import React from 'react';
import { Language } from '../types';
import { ThawaniLogo } from './ThawaniLogo';
import { Globe, Sparkles } from 'lucide-react';

interface FooterSectionProps {
  lang: Language;
  setLang: (l: Language) => void;
  onOpenAiAssistant: () => void;
  onOpenMerchantDemo: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  lang,
  setLang,
  onOpenAiAssistant,
  onOpenMerchantDemo,
}) => {
  const isAr = lang === 'ar';

  const footerNav = {
    products: {
      titleEn: 'Products',
      titleAr: 'المنتجات',
      links: [
        { nameEn: 'Thawani Pay App', nameAr: 'تطبيق ثواني للأفراد' },
        { nameEn: 'Merchant Command', nameAr: 'منصة التجار' },
        { nameEn: 'Payment Gateway SDK', nameAr: 'بوابة الدفع الإلكترونية' },
        { nameEn: 'Thawani Soundbox POS', nameAr: 'جهاز الصوت POS' },
        { nameEn: 'DirectPay Links', nameAr: 'روابط الدفع المباشرة' },
      ],
    },
    developers: {
      titleEn: 'Developers',
      titleAr: 'المطورون',
      links: [
        { nameEn: 'OpenAPI v2 Docs', nameAr: 'توثيق الـ API' },
        { nameEn: 'Sandbox Playground', nameAr: 'بيئة الاختبار' },
        { nameEn: 'Node.js & Python SDKs', nameAr: 'مكتبات البرمجة' },
        { nameEn: 'Webhook Logs', nameAr: 'سجلات الإشعارات' },
        { nameEn: 'System Status 99.999%', nameAr: 'حالة النظام' },
      ],
    },
    trust: {
      titleEn: 'Security & Legal',
      titleAr: 'الأمان والتراخيص',
      links: [
        { nameEn: 'CBO Regulatory License', nameAr: 'ترخيص البنك المركزي' },
        { nameEn: 'PCI DSS v4.0 Level 1', nameAr: 'شهادة أمان البطاقات' },
        { nameEn: 'Oman Sovereign Cloud', nameAr: 'السحابة السيادية العمانية' },
        { nameEn: 'Privacy Policy', nameAr: 'سياسة الخصوصية' },
        { nameEn: 'Terms of Service', nameAr: 'شروط الخدمة' },
      ],
    },
  };

  return (
    <footer className="bg-[var(--bg-canvas)] border-t border-[var(--border-subtle)] text-[var(--text-secondary)] py-16 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[var(--border-subtle)]">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <ThawaniLogo isAr={isAr} size={36} />

            <p className="text-xs text-[var(--text-muted)] leading-relaxed max-w-sm">
              {isAr
                ? 'منصة ثواني للتقنيات المالية الذكية مرخصة رسمياً من البنك المركزي العُماني لتقديم أحدث خدمات المدفوعات والحلول المبتكرة للتجار والأفراد.'
                : 'Thawani Technologies SAOC is licensed by the Central Bank of Oman as a Payment System Operator and Payment Service Provider.'}
            </p>

            {/* CBO Status Badge */}
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1.5 rounded-full bg-[var(--bg-subtle)] border border-[var(--border-subtle)] text-[var(--text-secondary)] text-xs font-mono">
              <span className="live-pulse-dot" />
              <span>{isAr ? 'جميع الأنظمة تعمل بكفاءة 99.999%' : 'All Sovereign Systems Operational'}</span>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerNav).map(([key, section]) => (
            <div key={key} className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase text-[var(--text-primary)] tracking-wider">
                {isAr ? section.titleAr : section.titleEn}
              </h4>
              <ul className="space-y-2 text-xs">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a href="#products" className="hover:text-[var(--text-brand)] transition-colors">
                      {isAr ? link.nameAr : link.nameEn}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono gap-4">
          <div className="text-[var(--text-muted)]">
            © 2026 Thawani Technologies SAOC. {isAr ? 'جميع الحقوق محفوظة. سلطنة عُمان' : 'All rights reserved. Sultanate of Oman.'}
          </div>

          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <button
              onClick={onOpenAiAssistant}
              className="px-3 py-1.5 rounded-lg bg-[var(--bg-subtle)] border border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors flex items-center space-x-1.5 rtl:space-x-reverse"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#00D166]" />
              <span>{isAr ? 'المساعد الذكي' : 'AI Assistant'}</span>
            </button>

            <button
              onClick={() => setLang(isAr ? 'en' : 'ar')}
              className="p-2 rounded-lg bg-[var(--bg-subtle)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors flex items-center space-x-1 rtl:space-x-reverse"
            >
              <Globe className="w-3.5 h-3.5 text-[#00D166]" />
              <span>{isAr ? 'English' : 'العربية'}</span>
            </button>

            <span className="text-[var(--text-muted)]">|</span>
            <span className="text-[var(--text-muted)]">Muscat, Sultanate of Oman</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
