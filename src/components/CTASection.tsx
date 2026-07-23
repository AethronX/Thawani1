import React, { useState } from 'react';
import { Language } from '../types';
import { AnimatedSection, AnimatedItem } from './AnimatedSection';
import { MagneticButton } from './MagneticButton';
import { 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Zap, 
  Calculator, 
  Sparkles,
  Building2,
  PhoneCall
} from 'lucide-react';

interface CTASectionProps {
  lang: Language;
  onOpenMerchantDemo: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({
  lang,
  onOpenMerchantDemo,
}) => {
  const isAr = lang === 'ar';

  const [monthlyVolumeOmr, setMonthlyVolumeOmr] = useState<number>(25000);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [merchantEmail, setMerchantEmail] = useState<string>('');

  // Estimate traditional bank fee vs Thawani 2035 rate
  const bankFee = monthlyVolumeOmr * 0.022; // 2.2%
  const thawaniFee = monthlyVolumeOmr * 0.0095; // 0.95%
  const monthlySavings = bankFee - thawaniFee;

  const handleSubmitReg = (e: React.FormEvent) => {
    e.preventDefault();
    if (merchantEmail) {
      setSubmitted(true);
    }
  };

  return (
    <AnimatedSection className="py-24 bg-[var(--bg-canvas)] text-[var(--text-primary)] relative border-t border-[var(--border-subtle)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedItem className="rounded-3xl bg-[var(--ink-900)] border border-[var(--ink-800)] p-8 sm:p-14 backdrop-blur-2xl relative overflow-hidden shadow-[var(--shadow-lg)] text-white">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D68F]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Story & Instant Registration */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1 rounded-full bg-[#00D68F]/15 border border-[#00D68F]/30 text-[#00D68F] text-xs font-mono">
                <Zap className="w-4 h-4" />
                <span>{isAr ? 'الانضمام الفوري لتجار ثواني 2035' : 'Instant Merchant Onboarding 2035'}</span>
              </div>

              <h2 className="text-display-section font-extrabold text-white tracking-tight">
                {isAr ? (
                  <>ابدأ قبول المدفوعات مع ثواني <br /> <span className="text-[#00D68F]">في أقل من 5 دقائق</span></>
                ) : (
                  <>Transform Your Merchant Payment <br /> <span className="text-[#00D68F]">Infrastructure Today</span></>
                )}
              </h2>

              <p className="text-lead text-zinc-300">
                {isAr
                  ? 'انضم لأكثر من 42,000 تاجر في سلطنة عُمان واحصل على تسوية فورية وبوابة دفع فائقة السرعة.'
                  : 'Zero setup fees, instant T+0 bank payouts, and 24/7 dedicated support for Omani merchants.'}
              </p>

              {/* Form */}
              {submitted ? (
                <div className="p-6 rounded-2xl bg-[#00D68F]/15 border border-[#00D68F]/40 text-emerald-300 text-sm font-sans flex items-center space-x-3 rtl:space-x-reverse">
                  <Check className="w-6 h-6 text-[#00D68F]" />
                  <span>
                    {isAr
                      ? 'تم استلام طلب التسجيل بنجاح! سيتواصل معك مستشار ثواني خلال دقائق.'
                      : 'Merchant onboarding request received! A Thawani account executive will contact you shortly.'}
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmitReg} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    value={merchantEmail}
                    onChange={(e) => setMerchantEmail(e.target.value)}
                    placeholder={isAr ? 'أدخل بريدك الإلكتروني أو رقم السجل التجاري' : 'Enter work email or Commercial Reg CR...'}
                    className="flex-1 px-5 py-4 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00D68F]"
                  />
                  <MagneticButton
                    type="submit"
                    strength={0.35}
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#00D68F] to-[#00A86B] text-[#0A0D0F] font-bold text-sm tracking-wide shadow-lg shadow-[#00D68F]/25 hover:shadow-[#00D68F]/40 transition-all flex items-center justify-center space-x-2 rtl:space-x-reverse whitespace-nowrap"
                  >
                    <span>{isAr ? 'افتح حساب التاجر' : 'Get Started Free'}</span>
                    <ArrowRight className="w-4 h-4 ltr:ml-1 rtl:mr-1 rtl:rotate-180" />
                  </MagneticButton>
                </form>
              )}
            </div>

            {/* Right Interactive Fee Savings Calculator */}
            <div className="lg:col-span-5 p-8 rounded-2xl bg-black/60 border border-white/10 font-mono space-y-4">
              <div className="flex items-center space-x-2 rtl:space-x-reverse border-b border-white/10 pb-3 text-xs text-zinc-400 uppercase">
                <Calculator className="w-4 h-4 text-[#00D68F]" />
                <span>{isAr ? 'حاسبة التوفير المالي للتاجر' : 'Merchant Savings Estimator'}</span>
              </div>

              <div>
                <label className="text-xs text-zinc-300 block mb-1">
                  {isAr ? 'حجم المبيعات الشهرية المقدر (OMR):' : 'Estimated Monthly Sales (OMR):'}
                </label>
                <input
                  type="range"
                  min="2000"
                  max="200000"
                  step="1000"
                  value={monthlyVolumeOmr}
                  onChange={(e) => setMonthlyVolumeOmr(parseInt(e.target.value))}
                  className="w-full accent-[#00D68F] bg-white/10 h-2 rounded-lg cursor-pointer"
                />
                <div className="text-right rtl:text-left text-sm font-bold text-white mt-1">
                  {monthlyVolumeOmr.toLocaleString()} OMR
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2 text-xs">
                <div className="flex justify-between text-zinc-400">
                  <span>{isAr ? 'رسوم البنوك التقليدية (~2.2%):' : 'Legacy Bank Fee (~2.2%):'}</span>
                  <span className="text-red-400 font-bold">{bankFee.toFixed(2)} OMR</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>{isAr ? 'رسوم ثواني 2035 الميسرة (~0.95%):' : 'Thawani Tiered Rate (~0.95%):'}</span>
                  <span className="text-emerald-400 font-bold">{thawaniFee.toFixed(2)} OMR</span>
                </div>
                <div className="pt-2 border-t border-white/10 flex justify-between text-sm font-bold">
                  <span className="text-white">{isAr ? 'توفيرك الشهري الصافي:' : 'Net Monthly Savings:'}</span>
                  <span className="text-[#00D68F]">{monthlySavings.toFixed(2)} OMR</span>
                </div>
              </div>

              <div className="text-[10px] text-zinc-500 text-center">
                {isAr ? 'تسوية فورية بدون أي مصاريف أو رسوم إخفاء' : 'Instant T+0 Bank Settlement Included'}
              </div>
            </div>

          </div>

        </AnimatedItem>

      </div>
    </AnimatedSection>
  );
};
