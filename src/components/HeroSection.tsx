import React, { useState, useEffect } from 'react';
import { Language, EcosystemNode } from '../types';
import { ECOSYSTEM_NODES } from '../data/thawaniData';
import { 
  Play, 
  RotateCw, 
  CheckCircle2, 
  Smartphone, 
  QrCode, 
  Wallet, 
  Building2, 
  Store, 
  Zap, 
  ShieldCheck, 
  ArrowRight,
  Volume2,
  Lock,
  Cpu
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MagneticButton } from './MagneticButton';

interface HeroSectionProps {
  lang: Language;
  onOpenMerchantDemo: () => void;
  onOpenAiAssistant: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onOpenMerchantDemo,
  onOpenAiAssistant,
}) => {
  const isAr = lang === 'ar';

  const [activeStep, setActiveStep] = useState<number>(0);
  const [autoSimulate, setAutoSimulate] = useState<boolean>(true);
  const [txnAmount, setTxnAmount] = useState<number>(12.500);
  const [soundboxPing, setSoundboxPing] = useState<boolean>(false);
  const [totalSimulatedTxns, setTotalSimulatedTxns] = useState<number>(14209);

  // Icon Mapper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone': return Smartphone;
      case 'QrCode': return QrCode;
      case 'Wallet': return Wallet;
      case 'Building2': return Building2;
      case 'Store': return Store;
      case 'CheckCircle2': return CheckCircle2;
      default: return Zap;
    }
  };

  // Cycle transaction simulation through nodes (4s loop: 6 nodes * 666ms)
  useEffect(() => {
    if (!autoSimulate) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        const next = (prev + 1) % ECOSYSTEM_NODES.length;
        if (next === ECOSYSTEM_NODES.length - 1) {
          // Play soundbox trigger visual
          setSoundboxPing(true);
          setTimeout(() => setSoundboxPing(false), 900);
          setTotalSimulatedTxns((t) => t + 1);
        }
        return next;
      });
    }, 666);
    return () => clearInterval(interval);
  }, [autoSimulate]);

  const triggerNewTxn = () => {
    const randomAmount = (Math.random() * 100 + 5).toFixed(3);
    setTxnAmount(parseFloat(randomAmount));
    setActiveStep(0);
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center pt-8 pb-20 overflow-hidden bg-[var(--bg-canvas)] text-[var(--text-primary)] transition-colors duration-200">
      
      {/* Background Ambient Lighting & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,196,110,0.12),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-subtle)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-subtle)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-1.5 rounded-full bg-[var(--bg-subtle)] border border-[var(--border-strong)] text-[var(--text-primary)] shadow-sm backdrop-blur-md"
          >
            <span className="live-pulse-dot" />
            <span className="micro-label text-[var(--text-primary)]">
              {isAr 
                ? 'ثواني 2035 — الجيل الجديد لمنظومة المدفوعات الوطنية بسلطنة عُمان' 
                : 'Thawani 2035 — Oman Sovereign Next-Gen Payment Architecture'}
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-[var(--text-brand)] ltr:ml-1 rtl:mr-1 rtl:rotate-180" />
          </motion.div>
        </div>

        {/* Concise Posture Headline & Supporting Copy */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-title max-w-3xl mx-auto"
          >
            {isAr ? (
              <>
                فلوسـك تتحرّك <br />
                <span className="accent">
                  بسرعـة عُـمـان
                </span>
              </>
            ) : (
              <>
                Payments at the <br />
                <span className="accent">
                  Speed of Oman
                </span>
              </>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lead max-w-2xl mx-auto text-[var(--text-secondary)] font-normal"
          >
            {isAr
              ? 'تسوية مدفوعات فورية في ٣ ثوانٍ لجميع الأفراد والتجار والمؤسسات بسلطنة عُمان.'
              : 'Instant, sovereign 3-second payment clearing for every individual, merchant, and enterprise in Oman.'}
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <MagneticButton
              onClick={onOpenMerchantDemo}
              strength={0.4}
              className="px-8 py-4 rounded-xl btn-primary-brand text-sm tracking-wide transition-all duration-300 flex items-center space-x-2 rtl:space-x-reverse"
            >
              <span>{isAr ? 'ابدأ كتاجر مع ثواني' : 'Launch Merchant Portal'}</span>
              <ArrowRight className="w-4 h-4 ltr:ml-1 rtl:mr-1 rtl:rotate-180" />
            </MagneticButton>

            <MagneticButton
              onClick={onOpenAiAssistant}
              strength={0.35}
              className="px-8 py-4 rounded-xl btn-secondary-brand font-semibold text-sm backdrop-blur-xl transition-all duration-300 flex items-center space-x-2 rtl:space-x-reverse"
            >
              <Cpu className="w-4 h-4 text-[var(--accent)]" />
              <span>{isAr ? 'تجربة ذكاء ثواني 2035' : 'Explore AI Architecture'}</span>
            </MagneticButton>
          </motion.div>
        </div>

        {/* SECTION 1 ECOSYSTEM SIMULATION VISUALIZER - Instrument Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-16 relative"
        >
          {/* Deliberately Framed Dark Instrument Panel Container */}
          <div className="relative rounded-3xl bg-[var(--ink-900)] border border-[var(--ink-800)] p-6 sm:p-8 backdrop-blur-2xl shadow-[var(--shadow-lg)] text-white">
            
            {/* Visualizer Top Bar Controls */}
            <div className="flex flex-wrap items-center justify-between border-b border-[var(--ink-800)] pb-4 mb-8 gap-4">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-[var(--green-400)]" />
                <span className="text-xs font-mono text-[var(--ink-300)] ltr:ml-2 rtl:mr-2">
                  {isAr ? 'محاكي منظومة التدفق اللحظي — ثواني 2035 Kernel' : 'Live Ecosystem Flow Engine — Thawani 2035 Kernel'}
                </span>
              </div>

              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <button
                  onClick={() => setAutoSimulate(!autoSimulate)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all ${
                    autoSimulate
                      ? 'bg-[#00D166]/10 border-[#00D166]/30 text-[#00D166]'
                      : 'bg-zinc-800 border-zinc-700 text-zinc-400'
                  }`}
                >
                  {autoSimulate ? (isAr ? 'المحاكاة التلقائية: تعمل' : 'Auto Flow: Active') : (isAr ? 'المحاكاة: متوقفة' : 'Auto Flow: Paused')}
                </button>

                <button
                  onClick={triggerNewTxn}
                  className="px-3 py-1.5 rounded-lg bg-[#00D166] text-[#0A0A0A] hover:bg-[#004D2E] hover:text-white text-xs font-bold transition-all flex items-center space-x-1 rtl:space-x-reverse"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>{isAr ? 'معاملة جديدة' : 'Simulate Txn'}</span>
                </button>
              </div>
            </div>

            {/* Current Active Transaction Card Ticker */}
            <div className="mb-8 p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="p-2.5 rounded-lg bg-[#00D166]/15 text-[#00D166] border border-[#00D166]/30">
                  <Zap className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 uppercase tracking-wider font-mono">
                    {isAr ? 'المبلغ المحول اللحظي' : 'Active Flow Volume'}
                  </div>
                  <div className="text-xl font-bold text-white font-mono flex items-baseline space-x-1.5 rtl:space-x-reverse">
                    <span>{txnAmount.toFixed(3)}</span>
                    <span className="text-xs text-[#00D166] font-sans">OMR (ريال عماني)</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-6 rtl:space-x-reverse font-mono text-xs">
                <div>
                  <span className="text-zinc-500 block">{isAr ? 'زمن المعالجة' : 'Kernel Latency'}</span>
                  <span className="text-[#00D166] font-semibold">14ms RTGS</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">{isAr ? 'حالة التشفير' : 'Security Layer'}</span>
                  <span className="text-zinc-200 font-semibold">256-bit AES</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">{isAr ? 'إجمالي المعاملات المحاكاة' : 'Simulated Counter'}</span>
                  <span className="text-[#00D166] font-bold">{totalSimulatedTxns.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* The 6 Node Interactive Pipeline */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 relative">
              {ECOSYSTEM_NODES.map((node, index) => {
                const IconComponent = getIcon(node.iconName);
                const isActive = activeStep === index;
                const isPassed = activeStep > index;

                return (
                  <div
                    key={node.id}
                    onClick={() => setActiveStep(index)}
                    className={`relative cursor-pointer p-4 rounded-2xl transition-all duration-300 border ${
                      isActive
                        ? 'bg-[#00D166]/15 border-[#00D166] shadow-[0_0_30px_rgba(0,209,102,0.25)] scale-105'
                        : isPassed
                        ? 'bg-[#004D2E]/20 border-[#00D166]/30 text-zinc-300'
                        : 'bg-white/[0.02] border-white/5 text-zinc-500 hover:border-white/20'
                    }`}
                  >
                    {/* Step Number Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-[#00D166] text-[#0A0A0A] font-bold' : 'bg-white/10 text-zinc-400'
                      }`}>
                        0{index + 1}
                      </span>
                      {isActive && (
                        <span className="flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D166] opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D166]" />
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className={`p-3 rounded-xl transition-colors ${
                        isActive ? 'bg-[#00D166] text-[#0A0A0A]' : isPassed ? 'bg-[#00D166]/20 text-[#00D166]' : 'bg-white/5 text-zinc-400'
                      }`}>
                        <IconComponent className="w-6 h-6" />
                      </div>

                      <div className="font-semibold text-xs text-white line-clamp-1">
                        {isAr ? node.nameAr : node.nameEn}
                      </div>

                      <div className="text-[10px] text-zinc-400 font-mono">
                        {isAr ? node.metricAr : node.metricEn}
                      </div>
                    </div>

                    {/* Step Particle Connecting Line indicator on desktop */}
                    {index < ECOSYSTEM_NODES.length - 1 && (
                      <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                        <div className={`w-3 h-0.5 ${isPassed || isActive ? 'bg-[#00D166]' : 'bg-zinc-800'}`} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Soundbox Audio Confirmation Sound visualizer */}
            <AnimatePresence>
              {soundboxPing && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="mt-6 p-4 rounded-xl bg-gradient-to-r from-[#004D2E]/80 to-[#141414]/90 border border-[#00D166]/40 flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3 rtl:space-x-reverse text-emerald-300">
                    <Volume2 className="w-6 h-6 animate-bounce text-[#00D166]" />
                    <div>
                      <div className="text-xs font-bold font-mono">
                        {isAr ? 'إشعار صوتی فوري من Thawani Soundbox:' : 'Thawani Soundbox Audio Confirmation:'}
                      </div>
                      <div className="text-sm font-semibold text-white">
                        {isAr 
                          ? `"تمت عملية الدفع بنجاح: ${txnAmount.toFixed(3)} ريال عماني"`
                          : `"Payment Received: ${txnAmount.toFixed(3)} OMR"`}
                      </div>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-[#00D166] bg-[#00D166]/20 px-3 py-1 rounded-full border border-[#00D166]/30">
                    {isAr ? 'تم الخصم والإيداع' : 'T+0 Settled'}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
