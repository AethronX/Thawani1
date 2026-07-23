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
    { id: 'ecosystem', labelEn: 'Ecosystem Matrix', labelAr: 'خريطة المنظومة', icon: QrCode },
    { id: 'products', labelEn: 'Products & Apps', labelAr: 'المنتجات والتطبيقات', icon: QrCode },
    { id: 'dashboard', labelEn: 'Merchant OS', labelAr: 'منصة التجار', icon: LayoutDashboard },
    { id: 'developer', labelEn: 'API & SDKs', labelAr: 'المطورون', icon: Code2 },
    { id: 'security', labelEn: 'Security & CBO', labelAr: 'الأمان والامتثال', icon: Lock },
    { id: 'ai-features', labelEn: 'AI Core', labelAr: 'الذكاء الاصطناعي', icon: Sparkles },
  ];

  const handleNavClick = (id: string) => {
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
          className="cursor-pointer flex items-center space-x-3 rtl:space-x-reverse" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ThawaniLogo isAr={isAr} size={36} />
        </div>

        {/* Audience Segment Switcher & Direct Anchors */}
        <nav className="hidden md:flex items-center space-x-1 rtl:space-x-reverse bg-[var(--bg-subtle)] border border-[var(--border-strong)] p-1.5 rounded-full">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="px-3.5 py-1.5 text-xs font-medium rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-canvas)] transition-all duration-200 flex items-center space-x-1.5 rtl:space-x-reverse"
              >
                <Icon className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
                <span>{isAr ? link.labelAr : link.labelEn}</span>
              </button>
            );
          })}
        </nav>

        {/* Right CTA Tools & Controls */}
        <div className="hidden md:flex items-center space-x-3 rtl:space-x-reverse">
          
          {/* CBO Licensed Badge */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-1.5 rounded-full bg-[var(--bg-subtle)] border border-[var(--border-subtle)] text-[var(--text-secondary)] text-xs font-mono">
            <span className="live-pulse-dot" />
            <span className="text-[11px] font-medium hidden lg:inline text-[var(--text-primary)] font-mono">
              {isAr ? 'مرخص من البنك المركزي' : 'CBO Licensed'}
            </span>
          </div>

          {/* AI Assistant Button */}
          <MagneticButton
            onClick={onOpenAiAssistant}
            strength={0.2}
            className="px-3.5 py-2 rounded-xl bg-[var(--bg-subtle)] hover:bg-[var(--border-subtle)] border border-[var(--border-subtle)] text-[var(--text-primary)] transition-all duration-200 flex items-center space-x-2 rtl:space-x-reverse text-xs font-semibold"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00D166] animate-pulse" />
            <span>{isAr ? 'المساعد الذكي' : 'Thawani AI'}</span>
          </MagneticButton>

          {/* Theme Switcher Button */}
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

          {/* Language Switcher */}
          <MagneticButton
            onClick={() => setLang(isAr ? 'en' : 'ar')}
            strength={0.25}
            className="px-3.5 py-2 rounded-xl bg-[var(--bg-subtle)] hover:bg-[var(--border-subtle)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-200 flex items-center justify-center text-xs font-bold space-x-1.5 rtl:space-x-reverse"
            title="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
            <span>{isAr ? 'English' : 'العربية'}</span>
          </MagneticButton>

          {/* Primary Action: Merchant Portal */}
          <MagneticButton
            onClick={onOpenMerchantDemo}
            strength={0.3}
            className="group px-5 py-2.5 rounded-xl btn-primary-brand text-xs tracking-wide transition-all duration-300 flex items-center space-x-1.5 rtl:space-x-reverse overflow-hidden shadow-sm"
          >
            <span>{isAr ? 'منصة التجار' : 'Merchant Portal'}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </MagneticButton>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center space-x-2 rtl:space-x-reverse">
          <button
            onClick={() => setLang(isAr ? 'en' : 'ar')}
            className="px-3 py-1.5 rounded-lg bg-[var(--bg-subtle)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-xs font-bold"
          >
            {isAr ? 'EN' : 'عربي'}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[var(--bg-subtle)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--border-subtle)] bg-[var(--bg-canvas)] px-6 py-6 space-y-4">
          <div className="space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-xl bg-[var(--bg-subtle)] text-[var(--text-primary)] text-sm font-medium border border-[var(--border-subtle)]"
                >
                  <Icon className="w-4 h-4 text-[var(--text-brand)]" />
                  <span>{isAr ? link.labelAr : link.labelEn}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[var(--border-subtle)] space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAiAssistant();
              }}
              className="w-full py-3 rounded-xl bg-[var(--bg-subtle)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-xs font-bold flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              <Sparkles className="w-4 h-4 text-[#00D166]" />
              <span>{isAr ? 'المساعد الذكي' : 'Thawani AI'}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMerchantDemo();
              }}
              className="w-full py-3 rounded-xl btn-primary-brand text-xs font-bold flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              <span>{isAr ? 'منصة التجار' : 'Merchant Portal'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
