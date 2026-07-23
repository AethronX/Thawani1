import React, { useState } from 'react';
import { Language } from '../types';
import { GlassCard } from './GlassCard';
import { 
  Building2, 
  Layers, 
  RefreshCw, 
  Globe, 
  CheckCircle2, 
  ArrowRight, 
  Database, 
  Cpu, 
  CreditCard,
  ShieldCheck
} from 'lucide-react';
import { AnimatedSection, AnimatedItem } from './AnimatedSection';

interface EnterpriseSectionProps {
  lang: Language;
  onOpenMerchantDemo: () => void;
}

export const EnterpriseSection: React.FC<EnterpriseSectionProps> = ({
  lang,
  onOpenMerchantDemo,
}) => {
  const isAr = lang === 'ar';

  const [amountOmr, setAmountOmr] = useState<number>(10000);
  const [targetCurr, setTargetCurr] = useState<string>('AED');

  const rates: Record<string, number> = {
    AED: 9.54,
    SAR: 9.75,
    USD: 2.60,
    EUR: 2.38,
    QAR: 9.47,
  };

  const converted = (amountOmr * rates[targetCurr]).toFixed(2);

  return (
    <AnimatedSection id="enterprise" className="py-24 bg-[#0A0D0F] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedItem className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <Building2 className="w-4 h-4 text-[#00D68F]" />
            <span>{isAr ? 'حلول المؤسسات الكبرى والربط المالي 2035' : 'Enterprise Treasury & Multi-Currency Corridors'}</span>
          </div>

          <h2 className="text-display-section font-extrabold text-white tracking-tight">
            {isAr ? (
              <>إدارة الخزينة والتحويل الإقليمي <br className="hidden sm:inline" /> <span className="text-[#00D68F]">للمؤسسات والشركات العملاقة</span></>
            ) : (
              <>Automated Treasury Settlement & <br className="hidden sm:inline" /> <span className="text-[#00D68F]">Multi-Currency GCC Corridors</span></>
            )}
          </h2>

          <p className="text-lead text-zinc-300">
            {isAr
              ? 'تسوية مخصصة، ربط مباشر مع أنظمة ERP (SAP, Oracle, Odoo)، ومحاسبة آلية خالية من الفروقات.'
              : 'Enterprise-grade liquidity management, automated ERP reconciliation, and instant GCC inter-bank settlement.'}
          </p>
        </AnimatedItem>

        {/* Enterprise Multi-Currency Converter & ERP Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left ERP Connectors & Enterprise Specs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <GlassCard className="p-6">
                <Database className="w-8 h-8 text-[#00D68F] mb-3" />
                <h3 className="text-lg font-bold text-white font-display mb-1">
                  {isAr ? 'التكامل المباشر مع أنظمة ERP' : 'Native ERP Connectors'}
                </h3>
                <p className="text-xs text-zinc-400">
                  {isAr
                    ? 'ربط تلقائي بالأنظمة المحاسبية SAP, Oracle Financials, Odoo لترحيل الفواتير والمقبوضات لحظياً.'
                    : 'Pre-built bi-directional connectors for SAP, Oracle Cloud, and Odoo with automated journal posting.'}
                </p>
              </GlassCard>

              <GlassCard className="p-6">
                <RefreshCw className="w-8 h-8 text-[#00D68F] mb-3" />
                <h3 className="text-lg font-bold text-white font-display mb-1">
                  {isAr ? 'جداول التسوية المخصصة T+0' : 'Custom Settlement Schedule'}
                </h3>
                <p className="text-xs text-zinc-400">
                  {isAr
                    ? 'جدولة تحويل الأرباح والمبيعات للحسابات المصرفية المحلية بصورة لحظية أو في أوقات محددة.'
                    : 'Configure custom payout triggers, split settlement accounts, and multi-entity routing.'}
                </p>
              </GlassCard>
            </div>

            <div className="p-6 rounded-2xl bg-[#0D1117] border border-white/10 space-y-3 font-mono text-xs">
              <div className="text-zinc-400 font-bold border-b border-white/10 pb-2">
                {isAr ? 'معايير جودة المؤسسات الكبرى (SLA):' : 'Enterprise SLA Guarantees:'}
              </div>
              <div className="grid grid-cols-2 gap-2 text-zinc-300">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <CheckCircle2 className="w-4 h-4 text-[#00D68F]" />
                  <span>Dedicated Key Account Manager</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <CheckCircle2 className="w-4 h-4 text-[#00D68F]" />
                  <span>Custom MDR Tier Pricing</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <CheckCircle2 className="w-4 h-4 text-[#00D68F]" />
                  <span>24/7 Priority Support Hotline</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <CheckCircle2 className="w-4 h-4 text-[#00D68F]" />
                  <span>Automated VAT Invoice Generation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Multi-Currency Regional Calculator */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-[#0D1117] border border-[#00D68F]/30 backdrop-blur-2xl space-y-6">
            <div className="border-b border-white/10 pb-4">
              <div className="text-xs font-mono text-[#00D68F] uppercase">{isAr ? 'حاسبة التحويل الإقليمي الخليجي' : 'GCC Regional FX Corridor'}</div>
              <div className="text-xl font-bold text-white font-display mt-1">
                {isAr ? 'تحويل العملات بدون عمولات مضاعفة' : 'Zero-Markup GCC Treasury FX'}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-mono text-zinc-400 block mb-1">
                  {isAr ? 'المبلغ بالريال العُماني (OMR):' : 'Base Treasury Amount (OMR):'}
                </label>
                <input
                  type="number"
                  value={amountOmr}
                  onChange={(e) => setAmountOmr(Math.max(1, parseFloat(e.target.value) || 0))}
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white font-mono text-lg font-bold focus:outline-none focus:border-[#00D68F]"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-zinc-400 block mb-1">
                  {isAr ? 'عملة المستلم الخليجية / الدولية:' : 'Target GCC Currency:'}
                </label>
                <div className="grid grid-cols-5 gap-1.5 font-mono text-xs">
                  {['AED', 'SAR', 'USD', 'EUR', 'QAR'].map((curr) => (
                    <button
                      key={curr}
                      onClick={() => setTargetCurr(curr)}
                      className={`py-2 rounded-lg font-bold transition-all ${
                        targetCurr === curr ? 'bg-[#00D68F] text-[#0A0D0F]' : 'bg-white/5 text-zinc-400'
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-black/60 border border-white/10 text-center font-mono space-y-1">
                <div className="text-xs text-zinc-400 uppercase">{isAr ? 'القيمة الإجمالية المحولة' : 'Converted Payout Volume'}</div>
                <div className="text-3xl font-extrabold text-[#00D68F]">
                  {converted} <span className="text-sm font-sans">{targetCurr}</span>
                </div>
                <div className="text-[10px] text-zinc-500 pt-1">
                  {isAr ? 'سعر الصرف المباشر للبنك المركزي' : 'Live Central Bank Sovereign Benchmark Rate'}
                </div>
              </div>
            </div>

            <button
              onClick={onOpenMerchantDemo}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00D68F] to-[#00A86B] text-[#0A0D0F] font-bold text-xs tracking-wide flex items-center justify-center space-x-2 rtl:space-x-reverse shadow-lg shadow-[#00D68F]/20"
            >
              <span>{isAr ? 'طلب حساب كبار التجار والشركات' : 'Request Enterprise Treasury Onboarding'}</span>
              <ArrowRight className="w-4 h-4 ltr:ml-1 rtl:mr-1 rtl:rotate-180" />
            </button>
          </div>

        </div>

      </div>
    </AnimatedSection>
  );
};
