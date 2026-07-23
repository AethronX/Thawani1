import React, { useState } from 'react';
import { Language } from '../types';
import { CASE_STUDIES } from '../data/thawaniData';
import { GlassCard } from './GlassCard';
import { 
  Building2, 
  Quote, 
  TrendingUp, 
  Users, 
  Award, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedSection, AnimatedItem } from './AnimatedSection';

interface CustomerSuccessSectionProps {
  lang: Language;
}

export const CustomerSuccessSection: React.FC<CustomerSuccessSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const currentCase = CASE_STUDIES[activeIndex];

  return (
    <AnimatedSection id="customer-success" className="py-24 bg-[#0A0D0F] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedItem className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <Award className="w-4 h-4 text-[#00D68F]" />
            <span>{isAr ? 'قصص نجاح الشركاء والمؤسسات العُمانية' : 'Oman Enterprise Success Stories'}</span>
          </div>

          <h2 className="text-display-section font-extrabold text-white tracking-tight">
            {isAr ? (
              <>يقودون التحول الرقمي <br className="hidden sm:inline" /> <span className="text-[#00D68F]">بثقة مع ثواني</span></>
            ) : (
              <>Empowering Oman's Largest <br className="hidden sm:inline" /> <span className="text-[#00D68F]">Banks, Telecoms & Enterprises</span></>
            )}
          </h2>

          <p className="text-lead text-zinc-300">
            {isAr
              ? 'تثق أكبر المؤسسات والقطاعات الحكومية والخاصة بالسلطنة بـ ثواني لإدارة عملياتها المالية اليومية.'
              : 'Trusted by over 42,000 businesses across Sultanate of Oman for mission-critical payment operations.'}
          </p>
        </AnimatedItem>

        {/* Case Study Featured Card */}
        <div className="rounded-3xl bg-[#0D1117] border border-[#00D68F]/30 p-8 sm:p-12 backdrop-blur-2xl relative overflow-hidden shadow-2xl mb-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white font-mono font-bold text-xs">
                  {currentCase.logoText}
                </span>
                <span className="text-xs font-mono text-[#00D68F]">
                  {isAr ? currentCase.categoryAr : currentCase.categoryEn}
                </span>
              </div>

              <Quote className="w-10 h-10 text-[#00D68F]/40" />

              <blockquote className="text-xl sm:text-2xl font-bold text-white font-display leading-relaxed">
                "{isAr ? currentCase.quoteAr : currentCase.quoteEn}"
              </blockquote>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white font-sans">{currentCase.clientName}</div>
                  <div className="text-xs text-zinc-400 font-sans">{isAr ? currentCase.authorAr : currentCase.authorEn}</div>
                </div>

                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <button
                    onClick={() => setActiveIndex((prev) => (prev === 0 ? CASE_STUDIES.length - 1 : prev - 1))}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
                  </button>
                  <button
                    onClick={() => setActiveIndex((prev) => (prev + 1) % CASE_STUDIES.length)}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 rtl:rotate-180" />
                  </button>
                </div>
              </div>
            </div>

            {/* Metric Display Box */}
            <div className="lg:col-span-4 p-8 rounded-2xl bg-black/60 border border-white/10 flex flex-col items-center justify-center text-center space-y-2">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#00D68F] font-mono">
                {isAr ? currentCase.statAr : currentCase.statEn}
              </div>
              <div className="text-xs text-zinc-300 font-mono font-bold">
                {isAr ? currentCase.statLabelAr : currentCase.statLabelEn}
              </div>
              <div className="text-[10px] text-zinc-500 pt-2 border-t border-white/10 w-full font-mono">
                {isAr ? 'نتائج موثقة ومحققة بـ ثواني' : 'Verified Enterprise Outcome'}
              </div>
            </div>

          </div>

        </div>

      </div>
    </AnimatedSection>
  );
};
