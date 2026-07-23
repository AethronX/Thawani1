import React from 'react';
import { Language } from '../types';
import { ShieldCheck, Lock, Cpu } from 'lucide-react';

interface TrustStripProps {
  lang: Language;
}

export const TrustStrip: React.FC<TrustStripProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const trustFacts = [
    {
      id: 'cbo',
      icon: ShieldCheck,
      titleEn: 'CBO Licensed',
      titleAr: 'ترخيص البنك المركزي',
      descEn: 'Licensed Payment System Operator',
      descAr: 'مرخص رسمياً كخادم ومزود دفع',
    },
    {
      id: 'pci',
      icon: Lock,
      titleEn: 'PCI-DSS Level 1',
      titleAr: 'شهادة PCI-DSS العالمية',
      descEn: 'Highest Global Card Security',
      descAr: 'أعلى معايير أمان البطاقات المصرفية',
    },
    {
      id: 'inhouse',
      icon: Cpu,
      titleEn: 'In-House Technology',
      titleAr: 'تقنية وطنية مستقلة',
      descEn: '100% Oman Sovereign Data Residency',
      descAr: 'تخزين واستضافة البيانات داخل السلطنة',
    },
  ];

  return (
    <section className="py-12 bg-[var(--ink-900)] border-y border-[var(--ink-800)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compressed Single Horizontal Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x rtl:md:divide-x-reverse divide-[var(--ink-800)]">
          {trustFacts.map((fact) => {
            const IconComp = fact.icon;
            return (
              <div key={fact.id} className="flex items-center space-x-4 rtl:space-x-reverse pt-4 md:pt-0 first:pt-0">
                <div className="p-3 rounded-2xl bg-[#00D166]/10 text-[#00D166] border border-[#00D166]/20 flex-shrink-0">
                  <IconComp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {isAr ? fact.titleAr : fact.titleEn}
                  </h4>
                  <p className="text-xs text-zinc-400 font-sans">
                    {isAr ? fact.descAr : fact.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
