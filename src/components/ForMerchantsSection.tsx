import React from 'react';
import { Language } from '../types';
import { LayoutDashboard, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface ForMerchantsSectionProps {
  lang: Language;
  onOpenMerchantDemo: () => void;
}

export const ForMerchantsSection: React.FC<ForMerchantsSectionProps> = ({
  lang,
  onOpenMerchantDemo,
}) => {
  const isAr = lang === 'ar';

  const merchantHighlights = isAr
    ? ['تسوية فورية T+0', 'إدارة صلاحيات الفروع', 'تصدير الإقرار الضريبي تلقائياً']
    : ['Instant T+0 Settlement', 'Multi-Branch Staff Matrix', 'Automated Tax VAT Export'];

  return (
    <section id="merchants" className="py-20 bg-[var(--bg-subtle)] text-[var(--text-primary)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* One Single Panel */}
        <div className="rounded-3xl bg-[var(--bg-canvas)] border border-[var(--border-strong)] p-8 sm:p-12 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden">
          
          <div className="max-w-2xl space-y-6 text-start">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-[var(--bg-subtle)] border border-[var(--border-subtle)] text-[var(--text-brand)] text-xs font-mono">
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>{isAr ? 'منصة التجار' : 'Merchant Platform'}</span>
            </div>

            {/* Section Heading: max 5 words */}
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {isAr ? 'منصة التجار الوطنية' : 'For Oman Merchants'}
            </h2>

            {/* Card Body: max 14 words */}
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              {isAr
                ? 'مركز قيادة موحد لإدارة التسويات اللحظية، الفروع، وإصدار الفواتير لجميع الأنشطة التجارية.'
                : 'Unified command center for real-time multi-branch settlements, staff permissions, and automated invoicing.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {merchantHighlights.map((feat, idx) => (
                <div key={idx} className="flex items-center space-x-2 rtl:space-x-reverse text-xs font-medium text-[var(--text-primary)] bg-[var(--bg-subtle)] p-2.5 rounded-xl border border-[var(--border-subtle)]">
                  <CheckCircle2 className="w-4 h-4 text-[var(--green-500)] flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* One Action Button — max 3 words label */}
          <div className="flex-shrink-0">
            <MagneticButton
              onClick={onOpenMerchantDemo}
              strength={0.3}
              className="px-8 py-4 rounded-xl btn-primary-brand text-sm tracking-wide transition-all duration-300 flex items-center space-x-2 rtl:space-x-reverse shadow-lg"
            >
              <span>{isAr ? 'منصة التجار' : 'Merchant Portal'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>
          </div>

        </div>

      </div>
    </section>
  );
};
