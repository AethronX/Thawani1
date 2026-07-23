import React from 'react';
import { Language } from '../types';
import { UserCheck, Store, Code2, PhoneCall, Mail, Headphones } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface SupportSectionProps {
  lang: Language;
}

export const SupportSection: React.FC<SupportSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  return (
    <section id="support-section" className="py-20 bg-[var(--bg-subtle)] text-[var(--text-primary)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1 rounded-full bg-[var(--bg-canvas)] border border-[var(--border-strong)] text-[var(--text-brand)] text-xs font-mono">
            <Headphones className="w-3.5 h-3.5" />
            <span>{isAr ? 'قنوات الدعم' : 'Help Channels'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {isAr ? 'مركز الدعم والمساعدة' : 'Customer and Merchant Support'}
          </h2>

          <p className="text-base text-[var(--text-secondary)]">
            {isAr
              ? 'قنوات دعم مخصصة ومستقلة لكل فئة لضمان سرعة الاستجابة والدقة العالية.'
              : 'Dedicated assistance queues for individuals, merchants, and integration developers.'}
          </p>
        </div>

        {/* 3 Separated Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Channel 1: Consumer Support */}
          <div className="rounded-3xl bg-[var(--bg-canvas)] border border-[var(--border-subtle)] p-8 shadow-sm flex flex-col justify-between text-start">
            <div>
              <div className="p-3.5 rounded-2xl bg-[var(--bg-subtle)] text-[var(--text-brand)] border border-[var(--border-subtle)] w-fit mb-6">
                <UserCheck className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold mb-3">
                {isAr ? 'دعم الأفراد' : 'Consumer Support'}
              </h3>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                {isAr
                  ? 'مساعدة فورية لمستخدمي المحفظة، رصيد الحساب، وسداد الفواتير والتحويلات.'
                  : 'Assistance for app wallet balances, bill clearing, and transfers.'}
              </p>

              <div className="space-y-2 text-xs font-mono text-[var(--text-muted)] mb-8">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <PhoneCall className="w-3.5 h-3.5 text-[var(--green-500)]" />
                  <span>800-7-2035 (Toll Free Oman)</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Mail className="w-3.5 h-3.5 text-[var(--green-500)]" />
                  <span>support@thawani.om</span>
                </div>
              </div>
            </div>

            <MagneticButton
              onClick={() => window.location.href = 'mailto:support@thawani.om'}
              strength={0.2}
              className="w-full py-2.5 px-4 rounded-xl bg-[var(--bg-subtle)] hover:bg-[var(--border-strong)] text-xs font-bold transition-all text-center"
            >
              <span>{isAr ? 'الاتصال بدعم الأفراد' : 'Contact Support'}</span>
            </MagneticButton>
          </div>

          {/* Channel 2: Merchant Support */}
          <div className="rounded-3xl bg-[var(--bg-canvas)] border border-[var(--border-subtle)] p-8 shadow-sm flex flex-col justify-between text-start">
            <div>
              <div className="p-3.5 rounded-2xl bg-[var(--bg-subtle)] text-[var(--text-brand)] border border-[var(--border-subtle)] w-fit mb-6">
                <Store className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold mb-3">
                {isAr ? 'دعم التجار' : 'Merchant Helpdesk'}
              </h3>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                {isAr
                  ? 'دعم مالي وفني ذو أولوية لتسويات المبيعات، الفروع وأجهزة نقاط البيع.'
                  : 'Priority technical operations support for business accounts and POS.'}
              </p>

              <div className="space-y-2 text-xs font-mono text-[var(--text-muted)] mb-8">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <PhoneCall className="w-3.5 h-3.5 text-[var(--green-500)]" />
                  <span>+968 2400 2035 (Merchant Line)</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Mail className="w-3.5 h-3.5 text-[var(--green-500)]" />
                  <span>merchant@thawani.om</span>
                </div>
              </div>
            </div>

            <MagneticButton
              onClick={() => window.location.href = 'mailto:merchant@thawani.om'}
              strength={0.2}
              className="w-full py-2.5 px-4 rounded-xl bg-[var(--bg-subtle)] hover:bg-[var(--border-strong)] text-xs font-bold transition-all text-center"
            >
              <span>{isAr ? 'الاتصال بدعم التجار' : 'Contact Helpdesk'}</span>
            </MagneticButton>
          </div>

          {/* Channel 3: Developer Support */}
          <div className="rounded-3xl bg-[var(--bg-canvas)] border border-[var(--border-subtle)] p-8 shadow-sm flex flex-col justify-between text-start">
            <div>
              <div className="p-3.5 rounded-2xl bg-[var(--bg-subtle)] text-[var(--text-brand)] border border-[var(--border-subtle)] w-fit mb-6">
                <Code2 className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold mb-3">
                {isAr ? 'دعم المطورين' : 'Developer Queue'}
              </h3>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                {isAr
                  ? 'دعم هندسي مباشر لربط واجهات البرمجة وفحص بيئة الاختبار.'
                  : 'Direct integration engineering support and API ticket tracking.'}
              </p>

              <div className="space-y-2 text-xs font-mono text-[var(--text-muted)] mb-8">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Code2 className="w-3.5 h-3.5 text-[var(--green-500)]" />
                  <span>api-support@thawani.om</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <Mail className="w-3.5 h-3.5 text-[var(--green-500)]" />
                  <span>SLA Response &lt; 2 Hours</span>
                </div>
              </div>
            </div>

            <MagneticButton
              onClick={() => window.location.href = 'mailto:api-support@thawani.om'}
              strength={0.2}
              className="w-full py-2.5 px-4 rounded-xl bg-[var(--bg-subtle)] hover:bg-[var(--border-strong)] text-xs font-bold transition-all text-center"
            >
              <span>{isAr ? 'تذكرة ربط جديدة' : 'Submit API Ticket'}</span>
            </MagneticButton>
          </div>

        </div>

      </div>
    </section>
  );
};
