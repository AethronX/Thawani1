import React from 'react';
import { Language } from '../types';
import { ShieldCheck, Lock, Cpu, CheckCircle2, FileText, ExternalLink, ArrowRight } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface SecurityCenterPageProps {
  lang: Language;
  onNavigateHome: () => void;
  onOpenMerchantDemo: () => void;
}

export const SecurityCenterPage: React.FC<SecurityCenterPageProps> = ({
  lang,
  onNavigateHome,
  onOpenMerchantDemo,
}) => {
  const isAr = lang === 'ar';

  const securityPillars = [
    {
      id: 'pci',
      titleEn: 'PCI-DSS v4.0 Level 1 Certification',
      titleAr: 'اعتماد PCI-DSS الإصدار 4.0 الأعلى عالمياً',
      descEn: 'Annual audit by qualified security assessors ensuring zero unencrypted cardholder data storage.',
      descAr: 'تدقيق سنوي مستقل يضمن عدم تخزين أي بيانات بطاقات مصرفية غير مشفرة.',
    },
    {
      id: 'cbo',
      titleEn: 'CBO Regulatory Escrow Vaults',
      titleAr: 'حسابات الضمان المعتمدة من البنك المركزي',
      descEn: 'All merchant settlement funds are held in segregated CBO-monitored escrow accounts.',
      descAr: 'جميع أموال تسويات التجار محفوظة في حسابات ضمان منفصلة ومراقبة.',
    },
    {
      id: 'residency',
      titleEn: 'Sovereign Omani Data Residency',
      titleAr: 'استضافة البيانات السيادية داخل سلطنة عُمان',
      descEn: 'Primary and disaster recovery servers operated exclusively within Oman sovereign data centers.',
      descAr: 'خوادم التشغيل واستعادة البيانات تعمل كلياً داخل مراكز البيانات الوطنية.',
    },
    {
      id: 'vulnerability',
      titleEn: '24/7 Threat Intelligence & Bug Bounty',
      titleAr: 'الرصد الأمني المستمر وبرنامج الثغرات',
      descEn: 'Automated vulnerability scanning and direct responsible disclosure channels for security engineers.',
      descAr: 'فحص آلي للثغرات وقناة الإفصاح المسؤول المباشرة لمهندسي الأمان.',
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] transition-colors duration-200 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-start">
        
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 rtl:space-x-reverse text-xs font-mono text-[var(--text-muted)] mb-8">
          <button onClick={onNavigateHome} className="hover:text-[var(--text-brand)]">
            {isAr ? 'الرئيسية' : 'Home'}
          </button>
          <span>/</span>
          <span>{isAr ? 'عن ثواني' : 'Company'}</span>
          <span>/</span>
          <span className="text-[var(--text-brand)] font-bold">{isAr ? 'مركز الأمان' : 'Security Center'}</span>
        </div>

        {/* Hero Banner */}
        <div className="rounded-3xl bg-[var(--ink-950)] border border-[var(--ink-800)] p-8 sm:p-12 text-white shadow-2xl mb-12 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1 rounded-full bg-[#00D166]/15 border border-[#00D166]/30 text-[#00D166] text-xs font-mono">
              <ShieldCheck className="w-4 h-4" />
              <span>CBO REGULATED & PCI-DSS LEVEL 1</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {isAr ? 'مركز الأمان والامتثال المصرفي' : 'Sovereign Security Architecture'}
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-sans">
              {isAr
                ? 'بنية أمان معتمدة من البنك المركزي العُماني لتوفير أعلى مستويات التشفير والحماية المالية.'
                : 'Central Bank regulated payment security, PCI-DSS Level 1 encryption, and local data residency.'}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <MagneticButton
                onClick={onOpenMerchantDemo}
                strength={0.3}
                className="px-6 py-3 rounded-xl btn-primary-brand text-xs tracking-wide transition-all duration-300 flex items-center space-x-2 rtl:space-x-reverse"
              >
                <span>{isAr ? 'منصة التجار' : 'Merchant Portal'}</span>
                <ArrowRight className="w-4 h-4 ltr:ml-1 rtl:mr-1 rtl:rotate-180" />
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {securityPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="p-8 rounded-3xl bg-[var(--bg-subtle)] border border-[var(--border-subtle)] space-y-4"
            >
              <div className="p-3 rounded-2xl bg-[var(--bg-canvas)] border border-[var(--border-subtle)] text-[var(--green-500)] w-fit">
                <Lock className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold">
                {isAr ? pillar.titleAr : pillar.titleEn}
              </h3>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {isAr ? pillar.descAr : pillar.descEn}
              </p>
            </div>
          ))}
        </div>

        {/* Vulnerability Disclosure & Report Link */}
        <div className="rounded-3xl bg-[var(--bg-canvas)] border border-[var(--border-strong)] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold mb-1">
              {isAr ? 'الإفصاح المسؤول عن الثغرات' : 'Responsible Security Disclosure'}
            </h3>
            <p className="text-xs text-[var(--text-secondary)]">
              {isAr
                ? 'لإرسال تقارير الأمان الهندسية مباشرة لفريق الحماية السيادي ثواني.'
                : 'Direct escalation queue for security researchers and vulnerability advisories.'}
            </p>
          </div>

          <a
            href="mailto:security@thawani.om"
            className="px-6 py-3 rounded-xl bg-[var(--action-bg)] text-[var(--action-fg)] hover:bg-[var(--action-hover)] text-xs font-bold transition-all flex items-center space-x-2 rtl:space-x-reverse flex-shrink-0"
          >
            <FileText className="w-4 h-4" />
            <span>security@thawani.om</span>
          </a>
        </div>

      </div>
    </div>
  );
};
