import React, { useState } from 'react';
import { Language } from '../types';
import { TRUST_METRICS } from '../data/thawaniData';
import { GlassCard } from './GlassCard';
import { 
  ShieldCheck, 
  Lock, 
  Server, 
  Activity, 
  Check, 
  FileText, 
  Award, 
  Fingerprint, 
  Database,
  Cpu
} from 'lucide-react';
import { motion } from 'motion/react';

import { AnimatedSection, AnimatedItem } from './AnimatedSection';

interface TrustCenterSectionProps {
  lang: Language;
}

export const TrustCenterSection: React.FC<TrustCenterSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';
  const [selectedTrustId, setSelectedTrustId] = useState<string>('cbo');

  const getTrustIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return ShieldCheck;
      case 'Lock': return Lock;
      case 'Server': return Server;
      case 'Activity': return Activity;
      default: return ShieldCheck;
    }
  };

  const selectedMetric = TRUST_METRICS.find((m) => m.id === selectedTrustId) || TRUST_METRICS[0];

  return (
    <AnimatedSection id="trust-center" className="py-24 bg-[#0A0D0F] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedItem className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <ShieldCheck className="w-4 h-4 text-[#00D68F]" />
            <span>{isAr ? 'مركز الأمان والامتثال المعتمد' : 'Sovereign Trust & Compliance Center'}</span>
          </div>

          <h2 className="text-display-section font-extrabold text-white tracking-tight">
            {isAr ? (
              <>أمان مصنّف سيادياً وفق <br className="hidden sm:inline" /> <span className="text-[#00D68F]">أنظمة البنك المركزي العُماني</span></>
            ) : (
              <>Regulated & Engineered for <br className="hidden sm:inline" /> <span className="text-[#00D68F]">Zero-Trust Sovereignty</span></>
            )}
          </h2>

          <p className="text-lead text-zinc-300">
            {isAr
              ? 'تعتمد ثواني أقصى المعايير الأمنية العالمية مع تخزين كامل للبيانات داخل مراكز البيانات الوطنية بسلطنة عُمان.'
              : 'Architected with 12 distinct security layers, 100% in-country data residency in Oman, and audited PCI DSS v4.0 Level 1 compliance.'}
          </p>
        </AnimatedItem>

        {/* 4 Trust Metric Cards Grid */}
        <AnimatedItem className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {TRUST_METRICS.map((metric) => {
            const Icon = getTrustIcon(metric.icon);
            const isSelected = metric.id === selectedTrustId;

            return (
              <GlassCard
                key={metric.id}
                onClick={() => setSelectedTrustId(metric.id)}
                glow={isSelected}
                className={`p-6 cursor-pointer transition-all duration-300 ${
                  isSelected ? 'border-[#00D68F] bg-[#00D68F]/10' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${
                    isSelected ? 'bg-[#00D68F] text-[#0A0D0F]' : 'bg-white/5 text-[#00D68F]'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-emerald-400 border border-white/10">
                    {isAr ? metric.badgeAr : metric.badgeEn}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 font-display">
                  {isAr ? metric.titleAr : metric.titleEn}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {isAr ? metric.descAr : metric.descEn}
                </p>

                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#00D68F]">
                  <span>{isSelected ? (isAr ? 'التفاصيل نشطة' : 'Active Inspector') : (isAr ? 'انقر للتفاصيل' : 'Click to Inspect')}</span>
                  <Check className={`w-4 h-4 transition-transform ${isSelected ? 'scale-100' : 'scale-0'}`} />
                </div>
              </GlassCard>
            );
          })}
        </AnimatedItem>

        {/* Selected Trust Inspector Detail Panel */}
        <AnimatedItem>
          <motion.div
            key={selectedMetric.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-[#0D1117] border border-[#00D68F]/30 p-8 backdrop-blur-2xl relative overflow-hidden"
          >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D68F]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            <div className="lg:col-span-2 space-y-4">
              <div className="inline-flex items-center space-x-2 rtl:space-x-reverse text-xs font-mono text-[#00D68F]">
                <Award className="w-4 h-4" />
                <span>{isAr ? 'تقرير الامتثال المعتمد 2035' : 'Official Verification Matrix 2035'}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                {isAr ? selectedMetric.titleAr : selectedMetric.titleEn}
              </h3>

              <p className="text-zinc-300 text-sm leading-relaxed">
                {isAr ? selectedMetric.descAr : selectedMetric.descEn}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-[10px] text-zinc-400 uppercase font-mono">{isAr ? 'الترخيص' : 'Authorization'}</div>
                  <div className="text-xs font-bold text-white mt-1">CBO Circular #1092</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-[10px] text-zinc-400 uppercase font-mono">{isAr ? 'التشفير' : 'Encryption'}</div>
                  <div className="text-xs font-bold text-emerald-400 mt-1">Quantum-Safe AES</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-[10px] text-zinc-400 uppercase font-mono">{isAr ? 'مقر البيانات' : 'Data Residency'}</div>
                  <div className="text-xs font-bold text-white mt-1">Muscat Tier-4 Facility</div>
                </div>
              </div>
            </div>

            {/* Visual Security Checklist */}
            <div className="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-3 font-mono text-xs">
              <div className="text-zinc-400 font-bold border-b border-white/10 pb-2 flex items-center justify-between">
                <span>{isAr ? 'فحص طبقات الحماية:' : 'Security Controls Status:'}</span>
                <span className="text-emerald-400">100% Passed</span>
              </div>

              <div className="flex items-center space-x-2 rtl:space-x-reverse text-zinc-300">
                <Check className="w-4 h-4 text-[#00D68F]" />
                <span>ISO/IEC 27001:2022 Certified</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-zinc-300">
                <Check className="w-4 h-4 text-[#00D68F]" />
                <span>PCI DSS v4.0 Level 1 Compliant</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-zinc-300">
                <Check className="w-4 h-4 text-[#00D68F]" />
                <span>Oman Cyber Defense Center (CDC) Tokenization</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-zinc-300">
                <Check className="w-4 h-4 text-[#00D68F]" />
                <span>Real-time Anti-Money Laundering (AML) AI</span>
              </div>
            </div>

          </div>
        </motion.div>
        </AnimatedItem>

      </div>
    </AnimatedSection>
  );
};
