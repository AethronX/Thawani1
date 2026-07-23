import React from 'react';
import { Language } from '../types';
import { VERIFIED_METRICS } from '../data/thawaniLayers';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

interface MetricsBandProps {
  lang: Language;
}

export const MetricsBand: React.FC<MetricsBandProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  return (
    <section className="relative z-20 bg-[var(--ink-900)] border-y border-[var(--ink-800)] py-8 text-white shadow-md overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Verification CBO Badge Line */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10 text-xs font-mono text-[var(--ink-300)]">
          <div className="flex items-center space-x-2 rtl:space-x-reverse text-[var(--green-400)]">
            <ShieldCheck className="w-4 h-4" />
            <span className="font-semibold">
              {isAr ? 'أرقام تدقيق البنك المركزي العُماني المعتمدة' : 'Verified Central Bank of Oman Audit Metrics'}
            </span>
          </div>
          <span className="hidden sm:inline text-zinc-400">
            {isAr ? 'بيانات سيادية حية' : 'Live Sovereign Ledger'}
          </span>
        </div>

        {/* 5 Tabular Metric Slots */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {VERIFIED_METRICS.map((metric) => (
            <div key={metric.id} className="flex flex-col items-center justify-center space-y-1 group">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-mono tracking-tight text-[#00D166] tabular-nums transition-transform duration-200 group-hover:scale-105">
                {isAr ? metric.valueAr : metric.valueEn}
              </div>

              <div className="text-xs sm:text-sm font-medium text-zinc-300">
                {isAr ? metric.labelAr : metric.labelEn}
              </div>

              <div className="inline-flex items-center space-x-1 rtl:space-x-reverse text-[10px] text-emerald-400/80 font-mono">
                <CheckCircle2 className="w-3 h-3 text-[#00D166]" />
                <span>{metric.cboRef}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
