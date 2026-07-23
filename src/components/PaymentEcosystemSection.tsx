import React, { useState } from 'react';
import { Language } from '../types';
import { GlassCard } from './GlassCard';
import { 
  QrCode, 
  Smartphone, 
  Globe, 
  Send, 
  Volume2, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Zap,
  CreditCard
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedSection, AnimatedItem } from './AnimatedSection';

interface PaymentEcosystemSectionProps {
  lang: Language;
  onOpenMerchantDemo: () => void;
}

export const PaymentEcosystemSection: React.FC<PaymentEcosystemSectionProps> = ({
  lang,
  onOpenMerchantDemo,
}) => {
  const isAr = lang === 'ar';
  const [activeChannel, setActiveChannel] = useState<string>('qr');

  const channels = [
    {
      id: 'qr',
      titleEn: 'In-Store Dynamic QR',
      titleAr: 'رمز QR الديناميكي في المتاجر',
      icon: QrCode,
      tagEn: 'Retail & POS',
      tagAr: 'المتاجر والمبيعات',
      descEn: 'Instant screen-to-phone checkout for physical retail counters with sub-200ms soundbox verification.',
      descAr: 'دفع فوري من الشاشة للهاتف بمجرد الضبط في المتجر مع تأكيد صوتی لحظي خلال أجزاء من الثانية.',
      statEn: '< 200ms',
      statLabelEn: 'Scan Latency',
      statAr: 'أقل من 200ms',
      statLabelAr: 'سرعة المسح',
    },
    {
      id: 'gateway',
      titleEn: 'Online Checkout Gateway',
      titleAr: 'بوابة المتاجر الإلكترونية',
      icon: Globe,
      tagEn: 'E-Commerce SDK',
      tagAr: 'التجارة الإلكترونية',
      descEn: 'Ultra-fast web and mobile SDKs with native Apple Pay, tokenized card saving, and 99.8% authorization rate.',
      descAr: 'حزم برمجية فائقة السرعة للمواقع والتطبيقات بدعم ناتيف لـ Apple Pay وحفظ البطاقات المشفرة.',
      statEn: '99.8%',
      statLabelEn: 'Auth Approval Rate',
      statAr: '99.8%',
      statLabelAr: 'معدل قبول المعاملات',
    },
    {
      id: 'links',
      titleEn: 'DirectPay & Smart Links',
      titleAr: 'روابط الدفع المباشرة',
      icon: Send,
      tagEn: 'Social & Invoicing',
      tagAr: 'الفواتير والتواصل الاجتماعي',
      descEn: 'Generate single-use or multi-use encrypted URLs for WhatsApp, Instagram sales, or enterprise contracts.',
      descAr: 'إنشاء روابط دفع مشفرة فورية لمشاركتها عبر الواتساب والمبيعات والعقود التجارية مع تنبيه لحظي.',
      statEn: '100% Instant',
      statLabelEn: 'Settlement Speed',
      statAr: 'تسوية فورية',
      statLabelAr: 'سرعة تحويل الأموال',
    },
    {
      id: 'pos',
      titleEn: 'Thawani Soundbox POS',
      titleAr: 'جهاز التاجر الصوتي',
      icon: Volume2,
      tagEn: 'Hardware POS',
      tagAr: 'الأجهزة الصوتية المبتكرة',
      descEn: 'Cellular 5G soundbox speaker that announces received payments clearly in Arabic and English in real-time.',
      descAr: 'جهاز بث صوتی بشريحة 5G مدمجة ينطق بمبلغ الدفع باللغة العربية والإنجليزية فوراً بدون الحاجة لشاشات إضافية.',
      statEn: '85,000+',
      statLabelEn: 'Deploys in Oman',
      statAr: '85,000+',
      statLabelAr: 'جهاز يعمل الآن',
    },
  ];

  const current = channels.find((c) => c.id === activeChannel) || channels[0];

  return (
    <AnimatedSection id="ecosystem" className="py-24 bg-[#0A0D0F] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimatedItem className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1 rounded-full bg-[#00D68F]/10 border border-[#00D68F]/20 text-[#00D68F] text-xs font-mono mb-3">
              <Zap className="w-3.5 h-3.5" />
              <span>{isAr ? 'منظومة المدفوعات المتكاملة' : 'Omnichannel Payment Infrastructure'}</span>
            </div>
            <h2 className="text-display-section font-extrabold text-white tracking-tight">
              {isAr ? (
                <>قنوات دفع متعددة، <span className="text-[#00D68F]">تسوية لحظية واحدة</span></>
              ) : (
                <>One Unified Ledger, <span className="text-[#00D68F]">Every Payment Channel</span></>
              )}
            </h2>
          </div>

          <button
            onClick={onOpenMerchantDemo}
            className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs transition-all flex items-center space-x-2 rtl:space-x-reverse self-start md:self-auto"
          >
            <span>{isAr ? 'تجربة منصة التجار' : 'Explore Channel Matrix'}</span>
            <ArrowRight className="w-4 h-4 text-[#00D68F] ltr:ml-1 rtl:mr-1 rtl:rotate-180" />
          </button>
        </AnimatedItem>

        {/* Ecosystem Interactive Grid */}
        <AnimatedItem className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Channel Selector Cards */}
          <div className="lg:col-span-5 space-y-3">
            {channels.map((chan) => {
              const Icon = chan.icon;
              const isSelected = chan.id === activeChannel;

              return (
                <div
                  key={chan.id}
                  onClick={() => setActiveChannel(chan.id)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? 'bg-[#00D68F]/15 border-[#00D68F] shadow-[0_0_25px_rgba(0,214,143,0.15)]'
                      : 'bg-[#0D1117] border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <div className={`p-2.5 rounded-xl ${
                        isSelected ? 'bg-[#00D68F] text-[#0A0D0F]' : 'bg-white/5 text-[#00D68F]'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-bold text-white font-display">
                        {isAr ? chan.titleAr : chan.titleEn}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-zinc-400">
                      {isAr ? chan.tagAr : chan.tagEn}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 line-clamp-2 mt-1">
                    {isAr ? chan.descAr : chan.descEn}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Interactive Live Channel Showcase Visualizer */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="h-full rounded-3xl bg-[#0D1117] border border-[#00D68F]/30 p-8 backdrop-blur-2xl flex flex-col justify-between relative overflow-hidden shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#00D68F]/10 rounded-full blur-3xl pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-4 rounded-2xl bg-[#00D68F]/20 text-[#00D68F] border border-[#00D68F]/40">
                      {React.createElement(current.icon, { className: 'w-8 h-8' })}
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {isAr ? 'قناة دفع معتمدة' : 'Verified Channel Engine'}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-3">
                    {isAr ? current.titleAr : current.titleEn}
                  </h3>

                  <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    {isAr ? current.descAr : current.descEn}
                  </p>

                  {/* Channel Interactive Metric Mock */}
                  <div className="p-6 rounded-2xl bg-black/50 border border-white/10 grid grid-cols-2 gap-4 font-mono">
                    <div>
                      <div className="text-[11px] text-zinc-400 uppercase">
                        {isAr ? current.statLabelAr : current.statLabelEn}
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-[#00D68F] mt-1">
                        {isAr ? current.statAr : current.statEn}
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] text-zinc-400 uppercase">
                        {isAr ? 'الأمان المستهدف' : 'Target Security'}
                      </div>
                      <div className="text-lg font-bold text-white mt-2 flex items-center space-x-1 rtl:space-x-reverse">
                        <CheckCircle2 className="w-4 h-4 text-[#00D68F]" />
                        <span>256-bit AES</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-400">
                    {isAr ? 'متوافق مع البنك المركزي العماني' : 'Compliant with Central Bank of Oman'}
                  </span>
                  <button
                    onClick={onOpenMerchantDemo}
                    className="px-4 py-2 rounded-xl bg-[#00D68F] text-[#0A0D0F] hover:bg-[#00A86B] font-bold text-xs transition-colors flex items-center space-x-1 rtl:space-x-reverse"
                  >
                    <span>{isAr ? 'تفعيل القناة' : 'Activate Channel'}</span>
                    <ArrowRight className="w-3.5 h-3.5 ltr:ml-1 rtl:mr-1 rtl:rotate-180" />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </AnimatedItem>

      </div>
    </AnimatedSection>
  );
};
