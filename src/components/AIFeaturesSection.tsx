import React, { useState } from 'react';
import { Language } from '../types';
import { GlassCard } from './GlassCard';
import { AnimatedSection, AnimatedItem } from './AnimatedSection';
import { 
  Sparkles, 
  TrendingUp, 
  Search, 
  Mic, 
  MessageSquare, 
  Bot, 
  ArrowRight,
  Send,
  Zap
} from 'lucide-react';

interface AIFeaturesSectionProps {
  lang: Language;
  onOpenAiAssistant: () => void;
}

export const AIFeaturesSection: React.FC<AIFeaturesSectionProps> = ({
  lang,
  onOpenAiAssistant,
}) => {
  const isAr = lang === 'ar';

  const [aiPrompt, setAiPrompt] = useState<string>(
    isAr ? 'ما هي أعلى الفروع مبيعاً هذا الأسبوع وما هي توقعات التدفق النقدي؟' : 'Which store branches had highest volume this week and what is the cash flow forecast?'
  );

  const [quickResponse, setQuickResponse] = useState<string | null>(null);

  const handleQuickAsk = () => {
    setQuickResponse(
      isAr
        ? 'حسب التحليلات اللحظية لـ ثواني الذكاء الاصطناعي: تصدر فرع مسقط مول بـ 28,450.000 ر.ع. نتوقع زيادة المبيعات بنسبة 18.5% خلال نهاية الأسبوع القادمة.'
        : 'Thawani AI Insight: Muscat Mall branch led sales with 28,450.000 OMR (+22% YoY). Predictive model forecasts +18.5% cash inflow over the upcoming weekend.'
    );
  };

  return (
    <AnimatedSection id="ai-features" className="py-24 bg-[#0A0D0F] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedItem className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <Sparkles className="w-4 h-4 text-[#00D68F]" />
            <span>{isAr ? 'ذكاء ثواني الاصطناعي للمالية 2035' : 'Thawani Intelligence Copilot 2035'}</span>
          </div>

          <h2 className="text-display-section font-extrabold text-white tracking-tight">
            {isAr ? (
              <>إدارة المبيعات والمالية <br className="hidden sm:inline" /> <span className="text-[#00D68F]">باللغة الطبيعية التفاعلية</span></>
            ) : (
              <>Ask Anything. Execute Instantly with <br className="hidden sm:inline" /> <span className="text-[#00D68F]">Natural Language Financial AI</span></>
            )}
          </h2>

          <p className="text-lead text-zinc-300">
            {isAr
              ? 'مساعد مالي ذكي مدعوم بـ Gemini 3.6 Flash للإجابة عن أسئلة التجار، التنبؤ بالإيرادات، واكتشاف أي شذوذ مالي فوراً.'
              : 'Direct natural language queries for real-time reconciliation, predictive cash flow forecasting, and instant CBO compliance checks.'}
          </p>
        </AnimatedItem>

        {/* AI Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <GlassCard className="p-6">
            <TrendingUp className="w-8 h-8 text-[#00D68F] mb-3" />
            <h3 className="text-xl font-bold text-white font-display mb-2">
              {isAr ? 'التنبؤ المالي للتدفق النقدي' : 'Predictive Cash Flow'}
            </h3>
            <p className="text-xs text-zinc-400">
              {isAr
                ? 'خوارزميات تنبؤية تحلل الأداء التاريخي لتوقع السيولة النقدية المطلوبة بدقة 98.4%.'
                : 'Neural forecasting engines analyzing seasonal retail patterns to project cash flow 90 days ahead.'}
            </p>
          </GlassCard>

          <GlassCard className="p-6">
            <MessageSquare className="w-8 h-8 text-[#00D68F] mb-3" />
            <h3 className="text-xl font-bold text-white font-display mb-2">
              {isAr ? 'الاستفسارات الصوتية والنصية' : 'Voice & Natural Text Query'}
            </h3>
            <p className="text-xs text-zinc-400">
              {isAr
                ? 'اسأل مساعد ثواني باللغة العربية الفصحى أو الإنجليزية للحصول على تقارير مبيعات سريعة.'
                : 'Ask questions in plain Arabic or English to generate instant visual charts and settlement summaries.'}
            </p>
          </GlassCard>

          <GlassCard className="p-6">
            <Bot className="w-8 h-8 text-[#00D68F] mb-3" />
            <h3 className="text-xl font-bold text-white font-display mb-2">
              {isAr ? 'المستشار الذكي للتجار' : 'Smart Business Advisor'}
            </h3>
            <p className="text-xs text-zinc-400">
              {isAr
                ? 'اقتراحات ذكية لتحسين خيارات الدفع وتخفيض التكاليف التشغيلية للمتاجر.'
                : 'Automated recommendations on optimal settlement windows and customer checkout conversion metrics.'}
            </p>
          </GlassCard>
        </div>

        {/* Interactive AI Query Box Demo */}
        <div className="rounded-3xl bg-[#0D1117] border border-[#00D68F]/30 p-8 backdrop-blur-2xl shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse text-xs font-mono text-emerald-400">
              <Sparkles className="w-4 h-4 text-[#00D68F]" />
              <span>{isAr ? 'محاكي تجربة ذكاء ثواني المباشر' : 'Live Thawani AI Sandbox'}</span>
            </div>

            <button
              onClick={onOpenAiAssistant}
              className="px-4 py-1.5 rounded-full bg-[#00D68F]/20 text-[#00D68F] border border-[#00D68F]/40 text-xs font-mono hover:bg-[#00D68F]/30 transition-colors"
            >
              {isAr ? 'افتح المساعد الكامل' : 'Open Full Copilot'}
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                placeholder={isAr ? 'اكتب سؤالك المالي هنا...' : 'Ask Thawani AI anything...'}
                className="w-full px-5 py-3.5 rounded-2xl bg-black/60 border border-white/10 text-white font-sans text-sm focus:outline-none focus:border-[#00D68F] pr-12"
              />
              <button
                onClick={handleQuickAsk}
                className="absolute ltr:right-3 rtl:left-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-[#00D68F] text-[#0A0D0F] hover:bg-[#00A86B] transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={handleQuickAsk}
              className="px-6 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono font-bold transition-colors whitespace-nowrap"
            >
              {isAr ? 'تحليل السؤال' : 'Analyze Prompt'}
            </button>
          </div>

          {quickResponse && (
            <div className="p-5 rounded-2xl bg-[#00D68F]/10 border border-[#00D68F]/30 text-emerald-300 text-xs sm:text-sm font-sans leading-relaxed">
              <div className="font-bold text-white mb-1 font-mono flex items-center space-x-1.5 rtl:space-x-reverse">
                <Sparkles className="w-4 h-4 text-[#00D68F]" />
                <span>Thawani Intelligence Answer:</span>
              </div>
              {quickResponse}
            </div>
          )}
        </div>

      </div>
    </AnimatedSection>
  );
};
