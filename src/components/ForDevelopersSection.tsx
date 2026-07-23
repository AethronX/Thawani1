import React from 'react';
import { Language } from '../types';
import { CODE_SNIPPET_SAMPLE } from '../data/thawaniLayers';
import { Code2, ArrowUpRight, Terminal } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface ForDevelopersSectionProps {
  lang: Language;
  onSelectBuildLayer: () => void;
}

export const ForDevelopersSection: React.FC<ForDevelopersSectionProps> = ({
  lang,
  onSelectBuildLayer,
}) => {
  const isAr = lang === 'ar';

  return (
    <section id="developers" className="py-20 bg-[var(--bg-canvas)] text-[var(--text-primary)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-6 text-start">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-[var(--bg-subtle)] border border-[var(--border-strong)] text-[var(--text-brand)] text-xs font-mono">
              <Code2 className="w-3.5 h-3.5" />
              <span>{isAr ? 'طبقة البناء للمطورين' : 'Build Layer'}</span>
            </div>

            {/* Section Heading: max 5 words */}
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {isAr ? 'واجهات المطورين المتقدمة' : 'Built for Developers'}
            </h2>

            {/* Card Body: max 14 words */}
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              {isAr
                ? 'واجهات برمجة REST ومكتبات ناتيف بتجربة اختبار فورية واستجابة أقل من ٣٠٠ ملي ثانية.'
                : 'RESTful checkout APIs and native SDK packages with sub-300ms response times.'}
            </p>

            <div className="pt-2">
              <MagneticButton
                onClick={onSelectBuildLayer}
                strength={0.3}
                className="px-6 py-3.5 rounded-xl bg-[var(--action-bg)] text-[var(--action-fg)] hover:bg-[var(--action-hover)] text-xs font-bold transition-all flex items-center space-x-2 rtl:space-x-reverse"
              >
                <span>{isAr ? 'واجهات المطورين' : 'Explore Developer APIs'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </MagneticButton>
            </div>
          </div>

          {/* Right Real Code Sample Panel */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[var(--ink-950)] border border-[var(--ink-800)] p-6 shadow-2xl text-start font-mono text-xs overflow-hidden">
              <div className="flex items-center justify-between border-b border-[var(--ink-800)] pb-3 mb-4 text-zinc-400">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Terminal className="w-4 h-4 text-[#00D166]" />
                  <span className="text-zinc-200 font-bold">POST /v2/checkout/sessions</span>
                </div>
                <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-emerald-400">cURL REST</span>
              </div>

              <pre className="overflow-x-auto text-emerald-300 leading-relaxed font-mono p-2">
                <code>{CODE_SNIPPET_SAMPLE.code}</code>
              </pre>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
