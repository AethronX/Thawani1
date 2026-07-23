import React, { useState } from 'react';
import { Language, FraudSimParams, FraudAnalysisResult } from '../types';
import { GlassCard } from './GlassCard';
import { 
  ShieldAlert, 
  ShieldCheck, 
  Lock, 
  Fingerprint, 
  Globe, 
  Cpu, 
  Zap, 
  AlertTriangle, 
  CheckCircle2,
  RefreshCw
} from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedSection, AnimatedItem } from './AnimatedSection';

interface SecuritySectionProps {
  lang: Language;
}

export const SecuritySection: React.FC<SecuritySectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const [params, setParams] = useState<FraudSimParams>({
    amountOMR: 250,
    ipLocation: 'Oman (Local)',
    deviceFingerprint: 'Verified Biometric',
    velocity: 'Normal (<3 txns/hr)',
    merchantCategory: 'Grocery & Retail',
  });

  const [analyzing, setAnalyzing] = useState<boolean>(false);

  // Calculate Neural Risk Score
  const computeRisk = (): FraudAnalysisResult => {
    let score = 5;

    let ipRisk = 5;
    if (params.ipLocation === 'GCC Region') ipRisk = 25;
    if (params.ipLocation === 'International (High Risk)') ipRisk = 75;

    let devRisk = 5;
    if (params.deviceFingerprint === 'Known Device') devRisk = 15;
    if (params.deviceFingerprint === 'New Untrusted Device') devRisk = 65;

    let velRisk = 5;
    if (params.velocity === 'High (15+ txns/hr)') velRisk = 70;

    let amtRisk = 5;
    if (params.amountOMR > 500) amtRisk = 40;
    if (params.amountOMR > 2000) amtRisk = 85;

    score = Math.min(99, Math.max(4, Math.floor((ipRisk + devRisk + velRisk + amtRisk) / 3.2)));

    let status: 'APPROVED' | 'STEP_UP_3DS' | 'DECLINED_FRAUD' = 'APPROVED';
    let recommendationEn = 'Nominal transaction fingerprint. Approved instantly with zero customer friction.';
    let recommendationAr = 'بصمة المعاملة مطابقة تماماً للمستخدم. تمت الموافقة الفورية بدون أي احتكاك.';

    if (score > 40 && score <= 70) {
      status = 'STEP_UP_3DS';
      recommendationEn = 'Elevated anomaly detected. Triggered biometric step-up 3DS 2.2 authentication.';
      recommendationAr = 'شذوذ طفيف في السلوك. تم طلب التحقق البيومتري الإضافي بنجاح.';
    } else if (score > 70) {
      status = 'DECLINED_FRAUD';
      recommendationEn = 'High probability fraud signature matched. Transaction blocked by Sovereign Shield.';
      recommendationAr = 'احتمالية احتيال عالية. تم اعتراض العملية وحظرها بواسطة درع الحماية.';
    }

    return {
      riskScore: score,
      status,
      recommendationEn,
      recommendationAr,
      threatMatrix: {
        ipRisk,
        velocityRisk: velRisk,
        amountRisk: amtRisk,
        deviceRisk: devRisk,
      },
    };
  };

  const result = computeRisk();

  return (
    <AnimatedSection id="security" className="py-24 bg-[#0A0D0F] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedItem className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <Lock className="w-4 h-4 text-[#00D68F]" />
            <span>{isAr ? 'محرك حماية ثواني العصبي 2035' : 'Thawani Neural Shield & Threat Engine'}</span>
          </div>

          <h2 className="text-display-section font-extrabold text-white tracking-tight">
            {isAr ? (
              <>حماية استباقية بالذكاء الاصطناعي <br className="hidden sm:inline" /> <span className="text-[#00D68F]">لمكافحة الاحتيال اللحظي</span></>
            ) : (
              <>AI Fraud Shield. Sub-14ms <br className="hidden sm:inline" /> <span className="text-[#00D68F]">Risk Neural Evaluation</span></>
            )}
          </h2>

          <p className="text-lead text-zinc-300">
            {isAr
              ? 'يحلل محرك الأمان التكيفي أكثر من 180 نقطة بيانات حيوية في أقل من 14 ملي ثانية لمنع أي محاولة احتيال مسبقاً.'
              : 'Evaluates 180+ biometric, IP, device, and velocity vectors per transaction in sub-14ms before settlement authorization.'}
          </p>
        </AnimatedItem>

        {/* Interactive Fraud Matrix Simulator */}
        <div className="rounded-3xl bg-[#0D1117] border border-white/10 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_25px_70px_rgba(0,0,0,0.7)] grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Controls Form */}
          <div className="lg:col-span-6 space-y-5">
            <div className="border-b border-white/10 pb-3">
              <h3 className="text-lg font-bold text-white font-display">
                {isAr ? 'محاكي تقييم مخاطر المعاملة الحية' : 'Live Risk Parameter Simulator'}
              </h3>
              <p className="text-xs text-zinc-400">
                {isAr ? 'غيّر المعايير لمشاهدة الاستجابة التلقائية لمحرك الحماية' : 'Adjust variables to observe real-time AI risk score calculation'}
              </p>
            </div>

            {/* Amount */}
            <div className="space-y-1">
              <label className="text-xs font-mono text-zinc-300 flex justify-between">
                <span>{isAr ? 'مبلغ المعاملة:' : 'Transaction Volume:'}</span>
                <span className="text-emerald-400 font-bold">{params.amountOMR} OMR</span>
              </label>
              <input
                type="range"
                min="10"
                max="3000"
                step="50"
                value={params.amountOMR}
                onChange={(e) => setParams({ ...params, amountOMR: parseInt(e.target.value) })}
                className="w-full accent-[#00D68F] bg-white/10 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* IP Location */}
            <div className="space-y-1">
              <label className="text-xs font-mono text-zinc-300">{isAr ? 'موقع مصدر الـ IP:' : 'IP Origin Corridor:'}</label>
              <div className="grid grid-cols-3 gap-2">
                {(['Oman (Local)', 'GCC Region', 'International (High Risk)'] as const).map((loc) => (
                  <button
                    key={loc}
                    onClick={() => setParams({ ...params, ipLocation: loc })}
                    className={`py-2 px-2 rounded-xl text-[11px] font-mono font-medium transition-all ${
                      params.ipLocation === loc ? 'bg-[#00D68F] text-[#0A0D0F] font-bold' : 'bg-white/5 text-zinc-400 hover:text-white'
                    }`}
                  >
                    {loc.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Device */}
            <div className="space-y-1">
              <label className="text-xs font-mono text-zinc-300">{isAr ? 'بصمة الجهاز المستخدم:' : 'Device Fingerprint:'}</label>
              <div className="grid grid-cols-3 gap-2">
                {(['Verified Biometric', 'Known Device', 'New Untrusted Device'] as const).map((dev) => (
                  <button
                    key={dev}
                    onClick={() => setParams({ ...params, deviceFingerprint: dev })}
                    className={`py-2 px-2 rounded-xl text-[11px] font-mono font-medium transition-all ${
                      params.deviceFingerprint === dev ? 'bg-[#00D68F] text-[#0A0D0F] font-bold' : 'bg-white/5 text-zinc-400 hover:text-white'
                    }`}
                  >
                    {dev.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Velocity */}
            <div className="space-y-1">
              <label className="text-xs font-mono text-zinc-300">{isAr ? 'معدل التكرار (Velocity):' : 'Transaction Velocity:'}</label>
              <div className="grid grid-cols-2 gap-2">
                {(['Normal (<3 txns/hr)', 'High (15+ txns/hr)'] as const).map((vel) => (
                  <button
                    key={vel}
                    onClick={() => setParams({ ...params, velocity: vel })}
                    className={`py-2 px-2 rounded-xl text-[11px] font-mono font-medium transition-all ${
                      params.velocity === vel ? 'bg-[#00D68F] text-[#0A0D0F] font-bold' : 'bg-white/5 text-zinc-400 hover:text-white'
                    }`}
                  >
                    {vel}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* AI Risk Score Output Display */}
          <div className="lg:col-span-6 p-8 rounded-2xl bg-black/60 border border-white/10 flex flex-col justify-between relative overflow-hidden">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="text-xs font-mono text-zinc-400 uppercase">
                  {isAr ? 'نتيجة تقييم المخاطر العصبية' : 'Neural Risk Score Gauge'}
                </div>
                <div className="text-xs font-mono text-emerald-400 flex items-center space-x-1 rtl:space-x-reverse">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>14ms Latency</span>
                </div>
              </div>

              {/* Gauge Circle */}
              <div className="flex items-center justify-center space-x-8 rtl:space-x-reverse">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <div className={`absolute inset-0 rounded-full border-4 transition-colors duration-500 ${
                    result.riskScore > 70 ? 'border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.4)]' : result.riskScore > 40 ? 'border-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.4)]' : 'border-[#00D68F] shadow-[0_0_30px_rgba(0,214,143,0.4)]'
                  }`} />
                  <div className="text-center font-mono">
                    <div className="text-3xl font-extrabold text-white">{result.riskScore}</div>
                    <div className="text-[10px] text-zinc-400 uppercase">/ 100 Risk</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-mono text-zinc-400">{isAr ? 'القرار اللحظي:' : 'Instant Decision:'}</div>
                  <div className={`px-4 py-2 rounded-xl text-xs font-bold font-mono border ${
                    result.status === 'APPROVED'
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                      : result.status === 'STEP_UP_3DS'
                      ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                      : 'bg-red-500/10 text-red-400 border-red-500/30'
                  }`}>
                    {result.status}
                  </div>
                </div>
              </div>

              {/* Recommendation Box */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-sans text-zinc-300">
                {isAr ? result.recommendationAr : result.recommendationEn}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-[10px] font-mono text-zinc-500 flex justify-between">
              <span>{isAr ? 'درع الأمان السيادي لربط البنوك' : 'Oman Sovereign Banking Shield'}</span>
              <span className="text-emerald-400">100% CBO Compliant</span>
            </div>

          </div>

        </div>

      </div>
    </AnimatedSection>
  );
};
