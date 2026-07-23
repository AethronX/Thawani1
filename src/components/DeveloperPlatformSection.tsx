import React, { useState } from 'react';
import { Language } from '../types';
import { API_SNIPPETS } from '../data/thawaniData';
import { GlassCard } from './GlassCard';
import { 
  Code2, 
  Terminal, 
  Copy, 
  Check, 
  Play, 
  Zap, 
  ShieldAlert, 
  Cpu, 
  Layers, 
  FileCode2,
  Box
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedSection, AnimatedItem } from './AnimatedSection';

interface DeveloperPlatformSectionProps {
  lang: Language;
}

export const DeveloperPlatformSection: React.FC<DeveloperPlatformSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const [activeLang, setActiveLang] = useState<'curl' | 'node' | 'python' | 'php' | 'go'>('node');
  const [copied, setCopied] = useState<boolean>(false);
  const [executing, setExecuting] = useState<boolean>(false);
  const [responseLog, setResponseLog] = useState<string | null>(null);

  const activeSnippet = API_SNIPPETS.find((s) => s.language === activeLang) || API_SNIPPETS[1];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExecuteSandbox = () => {
    setExecuting(true);
    setResponseLog(null);

    setTimeout(() => {
      const mockResponse = {
        code: 20000,
        description: "Success",
        data: {
          session_id: `session_thawani_2035_${Math.floor(100000 + Math.random() * 900000)}`,
          client_reference_id: "ORDER-2035-8841",
          mode: "payment",
          total_amount: 15000,
          currency: "OMR",
          payment_url: "https://checkout.thawani.om/pay/session_thawani_2035_8841",
          created_at: new Date().toISOString(),
          sovereign_region: "om-central-1",
          hmr_signature: "sha256_e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
        }
      };
      setResponseLog(JSON.stringify(mockResponse, null, 2));
      setExecuting(false);
    }, 800);
  };

  const sdks = [
    { name: '@thawani/node', version: 'v4.2.0', downloads: '120k/mo', descEn: 'TypeScript / Node.js official SDK', descAr: 'المكتبة الرسمية لنود وجافاسكريبت' },
    { name: 'thawani-python', version: 'v3.1.0', downloads: '85k/mo', descEn: 'Async Python 3.11+ client', descAr: 'مكتبة بايثون السريعة للأعمال' },
    { name: 'thawani/laravel', version: 'v5.0.1', downloads: '210k/mo', descEn: 'Laravel & PHP 8.2 native package', descAr: 'حزمة لارافيل و PHP المعتمدة' },
    { name: 'thawani-go', version: 'v2.1.0', downloads: '45k/mo', descEn: 'Zero-allocation Go package', descAr: 'حزمة لغة جو فائقة الأداء' },
  ];

  return (
    <AnimatedSection id="developer" className="py-24 bg-[#0A0D0F] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedItem className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1 rounded-full bg-[#00D68F]/10 border border-[#00D68F]/20 text-[#00D68F] text-xs font-mono">
            <Code2 className="w-4 h-4" />
            <span>{isAr ? 'منصة المطورين والبنية البرمجية' : 'Developer Platform & OpenAPI v2'}</span>
          </div>

          <h2 className="text-display-section font-extrabold text-white tracking-tight">
            {isAr ? (
              <>واجهة برمجية مصممة <br className="hidden sm:inline" /> <span className="text-[#00D68F]">للمطورين والأداء الفائق</span></>
            ) : (
              <>API First. Built for <br className="hidden sm:inline" /> <span className="text-[#00D68F]">Sub-200ms Engineers</span></>
            )}
          </h2>

          <p className="text-lead text-zinc-300">
            {isAr
              ? 'اربط متجرك بـ 3 أسطر برمجة فقط. توثيق OpenAPI تفاعلي، مكتبات رسمية، وتجربة Sandbox متكاملة.'
              : 'Deploy production-grade checkout in under 10 minutes. Clean OpenAPI endpoints, HMAC signatures, and automated webhook sandbox.'}
          </p>
        </AnimatedItem>

        {/* API Explorer Terminal Window */}
        <div className="rounded-3xl bg-[#0D1117] border border-white/10 overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.8)] mb-12">
          
          {/* Terminal Window Header */}
          <div className="bg-[#12171E] px-6 py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono text-zinc-400 ltr:ml-3 rtl:mr-3">
                POST /v2/checkout/sessions
              </span>
            </div>

            {/* Language Tabs */}
            <div className="flex items-center space-x-1 rtl:space-x-reverse bg-black/40 p-1 rounded-xl border border-white/10">
              {API_SNIPPETS.map((snip) => (
                <button
                  key={snip.language}
                  onClick={() => setActiveLang(snip.language)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                    activeLang === snip.language
                      ? 'bg-[#00D68F] text-[#0A0D0F] font-bold shadow'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {snip.label}
                </button>
              ))}
            </div>

            {/* Copy & Execute Sandbox Buttons */}
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <button
                onClick={handleCopyCode}
                className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 text-xs font-mono flex items-center space-x-1.5 rtl:space-x-reverse transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? (isAr ? 'تم النسخ!' : 'Copied!') : (isAr ? 'نسخ الكود' : 'Copy Code')}</span>
              </button>

              <button
                onClick={handleExecuteSandbox}
                disabled={executing}
                className="px-3.5 py-1.5 rounded-lg bg-[#00D68F] text-[#0A0D0F] hover:bg-[#00A86B] font-bold text-xs font-mono flex items-center space-x-1.5 rtl:space-x-reverse transition-all shadow-md"
              >
                <Play className={`w-3.5 h-3.5 ${executing ? 'animate-spin' : ''}`} />
                <span>{executing ? (isAr ? 'جاري التشغيل...' : 'Running...') : (isAr ? 'تجربة الـ API' : 'Execute API')}</span>
              </button>
            </div>

          </div>

          {/* Terminal Body Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x rtl:lg:divide-x-reverse divide-white/10">
            
            {/* Code View */}
            <div className="lg:col-span-7 p-6 bg-[#0A0D0F] font-mono text-xs overflow-x-auto text-emerald-300 leading-relaxed min-h-[320px]">
              <pre className="text-zinc-300">
                <code>{activeSnippet.code}</code>
              </pre>
            </div>

            {/* Sandbox Live Response Output */}
            <div className="lg:col-span-5 p-6 bg-[#0D1117] font-mono text-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 text-zinc-400 uppercase text-[10px]">
                  <span>{isAr ? 'استجابة الـ Sandbox الحية' : 'Live Sandbox Response'}</span>
                  <span className="text-emerald-400 font-bold">200 OK</span>
                </div>

                {responseLog ? (
                  <pre className="text-emerald-400 text-[11px] overflow-x-auto bg-black/50 p-4 rounded-xl border border-emerald-500/30">
                    <code>{responseLog}</code>
                  </pre>
                ) : (
                  <div className="text-zinc-600 italic p-6 text-center border border-dashed border-white/10 rounded-xl">
                    {isAr
                      ? 'انقر على "تجربة الـ API" لمشاهدة استجابة الخادم اللحظية مع التوقيع الرقمي.'
                      : 'Click "Execute API" above to simulate a live 200 OK payload execution from Oman Sovereign Gateway.'}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-white/10 text-[10px] text-zinc-500 flex items-center justify-between">
                <span>SDK Version: 2035.4.1</span>
                <span>HMAC-SHA256 Auth</span>
              </div>
            </div>

          </div>

        </div>

        {/* SDK Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sdks.map((sdk, i) => (
            <div key={i} className="p-5 rounded-2xl bg-[#0D1117] border border-white/5 hover:border-[#00D68F]/30 transition-all">
              <div className="flex items-center justify-between mb-2">
                <Box className="w-5 h-5 text-[#00D68F]" />
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">
                  {sdk.version}
                </span>
              </div>
              <div className="font-mono font-bold text-white text-sm mb-1">{sdk.name}</div>
              <div className="text-xs text-zinc-400 mb-2">{isAr ? sdk.descAr : sdk.descEn}</div>
              <div className="text-[10px] font-mono text-zinc-500">{sdk.downloads}</div>
            </div>
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
};
