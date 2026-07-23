import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TrustCenterSection } from './components/TrustCenterSection';
import { PaymentEcosystemSection } from './components/PaymentEcosystemSection';
import { ProductsSection } from './components/ProductsSection';
import { MerchantDashboardSection } from './components/MerchantDashboardSection';
import { DeveloperPlatformSection } from './components/DeveloperPlatformSection';
import { QRPaymentsSection } from './components/QRPaymentsSection';
import { SecuritySection } from './components/SecuritySection';
import { EnterpriseSection } from './components/EnterpriseSection';
import { AIFeaturesSection } from './components/AIFeaturesSection';
import { CustomerSuccessSection } from './components/CustomerSuccessSection';
import { FutureVisionSection } from './components/FutureVisionSection';
import { CTASection } from './components/CTASection';
import { FooterSection } from './components/FooterSection';
import { AiAssistantDrawer } from './components/AiAssistantDrawer';
import { SectionReveal } from './components/SectionReveal';
import { Sparkles, MessageSquare } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [aiDrawerOpen, setAiDrawerOpen] = useState<boolean>(false);
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

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'light bg-[#F8FAFC] text-slate-900' : 'bg-[#0A0D0F] text-zinc-100'} font-sans selection:bg-[#00D68F] selection:text-[#0A0D0F] ${
      lang === 'ar' ? 'font-sans-ar' : ''
    }`}>
      
      {/* 1. Header Navigation */}
      <Header
        lang={lang}
        setLang={setLang}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenAiAssistant={() => setAiDrawerOpen(true)}
        onOpenMerchantDemo={() => scrollToSection('dashboard')}
      />

      <main>
        {/* Section 1: Hero */}
        <SectionReveal>
          <HeroSection
            lang={lang}
            onOpenMerchantDemo={() => scrollToSection('dashboard')}
            onOpenAiAssistant={() => setAiDrawerOpen(true)}
          />
        </SectionReveal>

        {/* Section 2: Trust Center */}
        <SectionReveal>
          <TrustCenterSection lang={lang} />
        </SectionReveal>

        {/* Section 3: Payment Ecosystem */}
        <SectionReveal>
          <PaymentEcosystemSection
            lang={lang}
            onOpenMerchantDemo={() => scrollToSection('dashboard')}
          />
        </SectionReveal>

        {/* Section 4: Products */}
        <SectionReveal>
          <ProductsSection
            lang={lang}
            onOpenMerchantDemo={() => scrollToSection('dashboard')}
          />
        </SectionReveal>

        {/* Section 5: Merchant Dashboard */}
        <SectionReveal>
          <MerchantDashboardSection lang={lang} />
        </SectionReveal>

        {/* Section 6: Developer Platform */}
        <SectionReveal>
          <DeveloperPlatformSection lang={lang} />
        </SectionReveal>

        {/* Section 7: QR Payments */}
        <SectionReveal>
          <QRPaymentsSection lang={lang} />
        </SectionReveal>

        {/* Section 8: Security & AI Fraud Shield */}
        <SectionReveal>
          <SecuritySection lang={lang} />
        </SectionReveal>

        {/* Section 9: Enterprise Solutions */}
        <SectionReveal>
          <EnterpriseSection
            lang={lang}
            onOpenMerchantDemo={() => scrollToSection('dashboard')}
          />
        </SectionReveal>

        {/* Section 10: AI Features */}
        <SectionReveal>
          <AIFeaturesSection
            lang={lang}
            onOpenAiAssistant={() => setAiDrawerOpen(true)}
          />
        </SectionReveal>

        {/* Section 11: Customer Success */}
        <SectionReveal>
          <CustomerSuccessSection lang={lang} />
        </SectionReveal>

        {/* Section 12: Future Vision 2035 */}
        <SectionReveal>
          <FutureVisionSection lang={lang} />
        </SectionReveal>

        {/* Section 13: Call To Action */}
        <SectionReveal>
          <CTASection
            lang={lang}
            onOpenMerchantDemo={() => scrollToSection('dashboard')}
          />
        </SectionReveal>
      </main>

      {/* Section 14: Premium Footer */}
      <FooterSection
        lang={lang}
        setLang={setLang}
        onOpenAiAssistant={() => setAiDrawerOpen(true)}
        onOpenMerchantDemo={() => scrollToSection('dashboard')}
      />

      {/* Persistent Floating AI Assistant Launcher Button */}
      <button
        onClick={() => setAiDrawerOpen(true)}
        className="fixed bottom-6 ltr:right-6 rtl:left-6 z-40 p-4 rounded-full bg-gradient-to-r from-[#00D68F] to-[#00A86B] text-[#0A0D0F] font-bold shadow-[0_0_30px_rgba(0,214,143,0.4)] hover:shadow-[0_0_45px_rgba(0,214,143,0.6)] hover:scale-105 transition-all duration-300 flex items-center space-x-2 rtl:space-x-reverse"
        title="Open Thawani Intelligence AI"
      >
        <Sparkles className="w-6 h-6" />
        <span className="hidden sm:inline font-mono text-xs font-bold">
          {lang === 'ar' ? 'مساعد ثواني' : 'Thawani AI'}
        </span>
      </button>

      {/* Thawani AI Copilot Drawer */}
      <AiAssistantDrawer
        isOpen={aiDrawerOpen}
        onClose={() => setAiDrawerOpen(false)}
        lang={lang}
      />

    </div>
  );
}
