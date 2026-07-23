import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PaymentEcosystemSection } from './components/PaymentEcosystemSection';
import { ProductsSection } from './components/ProductsSection';
import { MerchantDashboardSection } from './components/MerchantDashboardSection';
import { DeveloperPlatformSection } from './components/DeveloperPlatformSection';
import { SecuritySection } from './components/SecuritySection';
import { AIFeaturesSection } from './components/AIFeaturesSection';
import { CustomerSuccessSection } from './components/CustomerSuccessSection';
import { QRPaymentsSection } from './components/QRPaymentsSection';
import { TrustCenterSection } from './components/TrustCenterSection';
import { FutureVisionSection } from './components/FutureVisionSection';
import { CTASection } from './components/CTASection';
import { FooterSection } from './components/FooterSection';
import { AiAssistantDrawer } from './components/AiAssistantDrawer';
import { SectionReveal } from './components/SectionReveal';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [isAiOpen, setIsAiOpen] = useState<boolean>(false);
  const [showMerchantDemo, setShowMerchantDemo] = useState<boolean>(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('thawani_theme');
      if (saved === 'light' || saved === 'dark') return saved;
    }
    return 'dark';
  });

  // Set RTL or LTR on root html element
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  // Sync theme with document element
  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('thawani_theme', next);
      return next;
    });
  };

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'light bg-[#0A1A10] text-slate-100' : 'bg-[#06180E] text-zinc-100'} font-sans selection:bg-[#00D166] selection:text-[#06180E]`}>
      
      {/* Sovereign Header with Audience Path Switcher */}
      <Header
        lang={lang}
        setLang={setLang}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenAiAssistant={() => setIsAiOpen(true)}
        onOpenMerchantDemo={() => setShowMerchantDemo(true)}
      />

      <main>
        {showMerchantDemo ? (
          /* Merchant Demo Command Center View */
          <div className="pt-20 pb-16">
            <div className="max-w-7xl mx-auto px-4 mb-6 flex items-center justify-between">
              <button
                onClick={() => setShowMerchantDemo(false)}
                className="text-xs font-mono font-bold text-[var(--green-400)] hover:underline"
              >
                {lang === 'ar' ? '← العودة للرئيسية' : '← Return to Sovereign Homepage'}
              </button>
            </div>
            <MerchantDashboardSection lang={lang} />
          </div>
        ) : (
          <>
            {/* 1. Concise Hero Section with Real 3s Payment Simulation */}
            <SectionReveal>
              <HeroSection
                lang={lang}
                onOpenMerchantDemo={() => setShowMerchantDemo(true)}
                onOpenAiAssistant={() => setIsAiOpen(true)}
              />
            </SectionReveal>

            {/* 2. Interactive Payment Ecosystem Infrastructure Matrix */}
            <SectionReveal>
              <PaymentEcosystemSection lang={lang} />
            </SectionReveal>

            {/* 3. Product Family Grid */}
            <SectionReveal>
              <ProductsSection lang={lang} />
            </SectionReveal>

            {/* 4. Merchant Operating System & Real-time Command Hub */}
            <SectionReveal>
              <MerchantDashboardSection lang={lang} />
            </SectionReveal>

            {/* 5. Developer First API Platform & Interactive Sandbox */}
            <SectionReveal>
              <DeveloperPlatformSection lang={lang} />
            </SectionReveal>

            {/* 6. Dynamic Fraud Detection Engine & Biometric Security */}
            <SectionReveal>
              <SecuritySection lang={lang} />
            </SectionReveal>

            {/* 7. Neural AI Financial Intelligence Suite */}
            <SectionReveal>
              <AIFeaturesSection lang={lang} />
            </SectionReveal>

            {/* 8. QR Code Ecosystem & Soft POS */}
            <SectionReveal>
              <QRPaymentsSection lang={lang} />
            </SectionReveal>

            {/* 9. Proven Enterprise Case Studies */}
            <SectionReveal>
              <CustomerSuccessSection lang={lang} />
            </SectionReveal>

            {/* 10. Regulatory Trust & CBO Compliance Center */}
            <SectionReveal>
              <TrustCenterSection lang={lang} />
            </SectionReveal>

            {/* 11. Thawani Vision 2035 & Sovereign Fintech Horizon */}
            <SectionReveal>
              <FutureVisionSection lang={lang} />
            </SectionReveal>

            {/* 12. Primary Call to Action Banner */}
            <SectionReveal>
              <CTASection
                lang={lang}
                onOpenMerchantDemo={() => setShowMerchantDemo(true)}
              />
            </SectionReveal>
          </>
        )}
      </main>

      {/* Sovereign Footer */}
      <FooterSection
        lang={lang}
        setLang={setLang}
        onOpenAiAssistant={() => setIsAiOpen(true)}
        onOpenMerchantDemo={() => setShowMerchantDemo(true)}
      />

      {/* AI Assistant Drawer Modal */}
      <AiAssistantDrawer
        isOpen={isAiOpen}
        onClose={() => setIsAiOpen(false)}
        lang={lang}
      />

    </div>
  );
}
