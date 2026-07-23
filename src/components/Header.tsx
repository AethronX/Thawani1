import React, { useState } from 'react';
import { Language } from '../types';
import { MagneticButton } from './MagneticButton';
import { ThawaniLogo } from './ThawaniLogo';
import { 
  Globe, 
  ArrowUpRight, 
  Menu, 
  X, 
  LayoutDashboard, 
  Code2, 
  Sparkles,
  QrCode,
  Lock,
  Sun,
  Moon
} from 'lucide-react';

interface HeaderProps {
  lang: Language;
  setLang: (l: Language) => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenAiAssistant: () => void;
  onOpenMerchantDemo: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  setLang,
  theme,
  onToggleTheme,
  onOpenAiAssistant,
  onOpenMerchantDemo,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isAr = lang === 'ar';

  const navLinks = [
    { id: 'ecosystem', labelEn: 'Ecosystem', labelAr: 'المنظومة', icon: QrCode },
    { id: 'products', labelEn: 'Products', labelAr: 'المنتجات', icon: LayoutDashboard },
    { id: 'dashboard', labelEn: 'Merchant Hub', labelAr: 'منصة التجار', icon: LayoutDashboard },
    { id: 'developer', labelEn: 'Developers', labelAr: 'المطورون', icon: Code2 },
    { id: 'security', labelEn: 'Security', labelAr: 'الأمان والتشفير', icon: Lock },
    { id: 'ai-features', labelEn: 'AI Intelligence', labelAr: 'الذكاء الاصطناعي', icon: Sparkles },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-2xl bg-[var(--bg-canvas)]/85 border-b border-[var(--border-subtle)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Identity & Sovereign Logo */}
        <div 
          className="cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ThawaniLogo isAr={isAr} size={36} />
        </div>

        {/* Audience Path Segments & Navigation Links */}
        <div className="hidden lg:flex items-center space-x-3 rtl:space-x-reverse">
          {/* Audience Segment Switcher */}
          <div className="bg-[var(--bg-subtle)] border border-[var(--border-strong)] p-1 rounded-full flex items-center space-x-1 rtl:space-x-reverse">
            <button
              onClick={() => scrollToSection('ecosystem')}
              className="px-4 py-1.5 text-xs font-bold rounded-full bg-[var(--action-bg)] text-[var(--action-fg)] shadow-sm transition-all duration-200"
            >
              {isAr ? 'الأفـراد' : 'Individuals'}
            </button>
            <button
              onClick={() => scrollToSection('dashboard')}
              className="px-4 py-1.5 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-subtle)] rounded-full transition-all duration-200"
            >
              {isAr ? 'التجـار' : 'Merchants'}
            </button>
            <button
              onClick={() => scrollToSection('developer')}
              className="px-3.5 py-1.5 text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded-full transition-all duration-200 font-mono"
            >
              {isAr ? 'المطورين' : 'Developers'}
            </button>
          </div>

          {/* Quick Nav Links */}
          <nav className="hidden xl:flex items-center space-x-1 rtl:space-x-reverse">
            {navLinks.slice(0, 4).map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] rounded-lg transition-all duration-200"
              >
                <span>{isAr ? link.labelAr : link.labelEn}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Right CTA Tools & Controls (Hierarchy: 1 Primary CTA, 1 Secondary, quiet neutral tools) */}
        <div className="hidden md:flex items-center space-x-3 rtl:space-x-reverse">
          
          {/* Real-time SLA Indicator */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-1.5 rounded-full bg-[var(--bg-subtle)] border border-[var(--border-subtle)] text-[var(--text-secondary)] text-xs font-mono">
            <span className="live-pulse-dot" />
            <span className="text-[11px] font-medium hidden xl:inline text-[var(--text-primary)] font-mono">
              {isAr ? 'CBO 99.999%' : 'CBO 99.999% SLA'}
            </span>
          </div>

          {/* AI Copilot Secondary Action */}
          <MagneticButton
            onClick={onOpenAiAssistant}
            strength={0.25}
            className="px-3.5 py-1.5 text-xs rounded-xl bg-[var(--bg-subtle)] hover:bg-[var(--border-strong)] border border-[var(--border-strong)] text-[var(--text-primary)] flex items-center space-x-1.5 rtl:space-x-reverse transition-all duration-200 font-medium"
          >
            <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>{isAr ? 'مساعد ثواني' : 'AI Copilot'}</span>
          </MagneticButton>

          {/* Quiet Theme Switcher Button */}
          <MagneticButton
            onClick={onToggleTheme}
            strength={0.25}
            className="p-2.5 rounded-xl bg-[var(--bg-subtle)] hover:bg-[var(--border-subtle)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-200 flex items-center justify-center text-xs"
            title={theme === 'dark' ? (isAr ? 'تفعيل المظهر الفاتح' : 'Light Mode') : (isAr ? 'تفعيل المظهر الداكن' : 'Dark Mode')}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-500" />
            )}
          </MagneticButton>

          {/* Quiet Language Switcher */}
          <MagneticButton
            onClick={() => setLang(isAr ? 'en' : 'ar')}
            strength={0.25}
            className="px-3 py-2 rounded-xl bg-[var(--bg-subtle)] hover:bg-[var(--border-subtle)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-200 flex items-center justify-center text-xs font-medium space-x-1.5 rtl:space-x-reverse"
            title="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
            <span>{isAr ? 'EN' : 'العربية'}</span>
          </MagneticButton>

          {/* Primary Merchant Portal Action */}
          <MagneticButton
            onClick={onOpenMerchantDemo}
            strength={0.3}
            className="group px-5 py-2.5 rounded-xl btn-primary-brand text-xs tracking-wide transition-all duration-300 flex items-center space-x-1.5 rtl:space-x-reverse overflow-hidden"
          >
            <span>{isAr ? 'منصة التجار' : 'Merchant Portal'}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </MagneticButton>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center space-x-2 rtl:space-x-reverse">
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 text-xs font-bold flex items-center justify-center"
            title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-500" />}
          </button>

          <button
            onClick={() => setLang(isAr ? 'en' : 'ar')}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 text-xs font-bold"
          >
            {isAr ? 'EN' : 'عربي'}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-200"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0A0A0A]/95 backdrop-blur-2xl px-6 py-6 space-y-4">
          <div className="grid grid-cols-1 gap-2">
            {navLinks.map((link) => {
              const IconComp = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-xl bg-white/[0.03] text-zinc-200 text-sm font-medium hover:bg-[#00D166]/10 hover:text-[#00D166]"
                >
                  <IconComp className="w-5 h-5 text-[#00D166]" />
                  <span>{isAr ? link.labelAr : link.labelEn}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAiAssistant();
              }}
              className="w-full py-3 rounded-xl bg-[#00D166]/15 border border-[#00D166]/30 text-[#00D166] text-sm font-semibold flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isAr ? 'افتح ذكاء ثواني الاصطناعي' : 'Launch Thawani AI'}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMerchantDemo();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00D166] to-[#004D2E] text-white font-bold text-sm flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              <span>{isAr ? 'تسجيل دخول التاجر' : 'Merchant Portal Login'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
