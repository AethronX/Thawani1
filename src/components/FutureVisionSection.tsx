import React from 'react';
import { Language } from '../types';
import { GlassCard } from './GlassCard';
import { AnimatedSection, AnimatedItem } from './AnimatedSection';
import { 
  Sparkles, 
  Cpu, 
  Fingerprint, 
  Globe, 
  Zap, 
  Lock, 
  Bot, 
  Layers 
} from 'lucide-react';

interface FutureVisionSectionProps {
  lang: Language;
}

export const FutureVisionSection: React.FC<FutureVisionSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  return (
    <AnimatedSection id="future-vision" className="py-24 bg-[#0A0D0F] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedItem className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <Sparkles className="w-4 h-4 text-[#00D68F]" />
            <span>{isAr ? 'رؤية ثواني المتقدمة 2035' : 'Thawani Future Architecture 2035'}</span>
          </div>

          <h2 className="text-display-section font-extrabold text-white tracking-tight">
            {isAr ? (
              <>تقنيات الدفع السيادية <br className="hidden sm:inline" /> <span className="text-[#00D68F]">للعقد القادم</span></>
            ) : (
              <>Pioneering Quantum-Resistant <br className="hidden sm:inline" /> <span className="text-[#00D68F]">Autonomous Financial Protocols</span></>
            )}
          </h2>

          <p className="text-lead text-zinc-300">
            {isAr
              ? 'نبني الآن البنية التحتية للمدفوعات ذاتية المعالجة، الدفع البيومتري بدون لمس، وتشفير الكوانتوم المتقدم.'
              : 'Preparing sovereign financial systems for AI-agent autonomous micro-payments, biometric palm auth, and post-quantum cryptography.'}
          </p>
        </AnimatedItem>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <GlassCard className="p-6">
            <Lock className="w-8 h-8 text-[#00D68F] mb-3" />
            <div className="text-xs font-mono text-emerald-400 mb-1">01. Cryptography</div>
            <h3 className="text-lg font-bold text-white font-display mb-2">
              {isAr ? 'التشفير المقاوم للكوانتوم' : 'Post-Quantum Cryptography'}
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {isAr
                ? 'حماية السجلات المالية المشفرة وفق خوارزميات Lattice-Based المقاومة لبرمجيات الحواسيب الخارقة.'
                : 'Lattice-based encryption signatures safeguarding long-term sovereign ledgers against quantum decrypt attempts.'}
            </p>
          </GlassCard>

          <GlassCard className="p-6">
            <Fingerprint className="w-8 h-8 text-[#00D68F] mb-3" />
            <div className="text-xs font-mono text-emerald-400 mb-1">02. Biometrics</div>
            <h3 className="text-lg font-bold text-white font-display mb-2">
              {isAr ? 'الدفع البيومتري بدون لمس' : 'Zero-Device Biometric Pay'}
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {isAr
                ? 'خاصية الدفع ببصمة كف اليد أو الشرايين الحيوية مباشرة دون الحاجة لحمل الهاتف أو البطاقة.'
                : 'Palm vein and iris authentication allowing frictionless walk-out retail checkout with zero hardware devices.'}
            </p>
          </GlassCard>

          <GlassCard className="p-6">
            <Bot className="w-8 h-8 text-[#00D68F] mb-3" />
            <div className="text-xs font-mono text-emerald-400 mb-1">03. AI Agents</div>
            <h3 className="text-lg font-bold text-white font-display mb-2">
              {isAr ? 'مدفوعات الذكاء الاصطناعي الذاتية' : 'Agentic Micro-Transactions'}
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {isAr
                ? 'بروتوكولات تمكّن وكلاء الذكاء الاصطناعي من إجراء المعاملات الدقيقة المبرمجة بأمان تام.'
                : 'Machine-to-machine sub-baiza streaming payments enabling autonomous AI software to purchase resources.'}
            </p>
          </GlassCard>

          <GlassCard className="p-6">
            <Globe className="w-8 h-8 text-[#00D68F] mb-3" />
            <div className="text-xs font-mono text-emerald-400 mb-1">04. GCC Corridors</div>
            <h3 className="text-lg font-bold text-white font-display mb-2">
              {isAr ? 'المواصفة الخليجية الموحدة' : 'Unified GCC Sovereign Rail'}
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {isAr
                ? 'ربط تسديد فوري موحد بين البنوك المركزية لدول مجلس التعاون الخليجي بسرعة الصرف المباشر.'
                : 'Real-time multi-currency clearing protocol linking all 6 GCC Central Banks with sub-second clearing.'}
            </p>
          </GlassCard>
        </div>

      </div>
    </AnimatedSection>
  );
};
