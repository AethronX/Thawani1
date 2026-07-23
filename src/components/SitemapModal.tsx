import React, { useState } from 'react';
import { Language } from '../types';
import { THAWANI_LAYERS, VERIFIED_METRICS } from '../data/thawaniLayers';
import { X, Code, FileCode2, Copy, Check, Globe } from 'lucide-react';

interface SitemapModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const SitemapModal: React.FC<SitemapModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [activeTab, setActiveTab] = useState<'sitemap' | 'jsonld'>('sitemap');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const isAr = lang === 'ar';

  // Generate XML Sitemap
  const sitemapUrls = [
    'https://thawani.om/',
    'https://thawani.om/pay/',
    'https://thawani.om/accept/',
    'https://thawani.om/grow/',
    'https://thawani.om/build/',
    'https://thawani.om/company/',
    'https://thawani.om/company/security/',
    'https://thawani.om/support/',
    ...Object.values(THAWANI_LAYERS).flatMap(l => l.products.map(p => p.canonicalUrl))
  ];

  const xmlSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapUrls.map(url => `  <url>
    <loc>${url}</loc>
    <lastmod>2026-07-23</lastmod>
    <changefreq>daily</changefreq>
    <priority>${url === 'https://thawani.om/' ? '1.0' : '0.8'}</priority>
    <xhtml:link rel="alternate" hreflang="ar" href="${url.replace('https://thawani.om/', 'https://thawani.om/ar/')}" />
    <xhtml:link rel="alternate" hreflang="en" href="${url}" />
  </url>`).join('\n')}
</urlset>`;

  // Generate FinancialService + Organization JSON-LD Schema
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://thawani.om/#organization",
        "name": "Thawani Technologies LLC",
        "alternateName": "ثواني للتقنية",
        "url": "https://thawani.om/",
        "logo": "https://thawani.om/assets/logo.png",
        "foundingDate": "2016",
        "sameAs": [
          "https://twitter.com/ThawaniPay",
          "https://www.linkedin.com/company/thawani"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Muscat",
          "addressCountry": "OM"
        }
      },
      {
        "@type": "FinancialService",
        "@id": "https://thawani.om/#financialService",
        "name": "Thawani Sovereign Payment Platform",
        "provider": {
          "@id": "https://thawani.om/#organization"
        },
        "license": "Central Bank of Oman PSP/PSO License CBO-PSP-LIC-01",
        "currenciesAccepted": "OMR",
        "paymentAccepted": "Cash, Credit Card, Debit Card, DirectPay, Apple Pay",
        "priceRange": "OMR 0.000 - OMR 50000.000",
        "areaServed": "OM"
      }
    ]
  };

  const codeText = activeTab === 'sitemap' ? xmlSitemap : JSON.stringify(jsonLdSchema, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-[var(--ink-950)] border border-[var(--ink-800)] text-white rounded-3xl w-full max-w-4xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-[var(--ink-800)] flex items-center justify-between">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Globe className="w-6 h-6 text-[#00D166]" />
            <div>
              <h3 className="text-lg font-bold">
                {isAr ? 'خريطة الموقع والترميز الهيكلي SEO' : 'XML Sitemap & Schema Inspector'}
              </h3>
              <p className="text-xs text-zinc-400 font-mono">
                Canonical 2026 Sovereign Routing
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="px-6 py-3 border-b border-[var(--ink-800)] bg-[var(--ink-900)] flex items-center justify-between">
          <div className="flex items-center space-x-2 rtl:space-x-reverse font-mono text-xs">
            <button
              onClick={() => setActiveTab('sitemap')}
              className={`px-4 py-2 rounded-xl font-bold transition-all flex items-center space-x-2 rtl:space-x-reverse ${
                activeTab === 'sitemap'
                  ? 'bg-[#00D166] text-[#0A0A0A]'
                  : 'bg-white/5 text-zinc-400 hover:text-white'
              }`}
            >
              <FileCode2 className="w-4 h-4" />
              <span>XML Sitemap (sitemap.xml)</span>
            </button>

            <button
              onClick={() => setActiveTab('jsonld')}
              className={`px-4 py-2 rounded-xl font-bold transition-all flex items-center space-x-2 rtl:space-x-reverse ${
                activeTab === 'jsonld'
                  ? 'bg-[#00D166] text-[#0A0A0A]'
                  : 'bg-white/5 text-zinc-400 hover:text-white'
              }`}
            >
              <Code className="w-4 h-4" />
              <span>JSON-LD Schema</span>
            </button>
          </div>

          <button
            onClick={handleCopy}
            className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono font-bold flex items-center space-x-1.5 rtl:space-x-reverse"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#00D166]" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? (isAr ? 'تم النسخ' : 'Copied') : (isAr ? 'نسخ الكود' : 'Copy Code')}</span>
          </button>
        </div>

        {/* Code Content */}
        <div className="p-6 overflow-y-auto font-mono text-xs text-emerald-300 leading-relaxed bg-black/50">
          <pre>
            <code>{codeText}</code>
          </pre>
        </div>

      </div>
    </div>
  );
};
