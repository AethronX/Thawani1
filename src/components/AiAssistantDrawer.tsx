import React, { useState } from 'react';
import { Language } from '../types';
import { 
  X, 
  Send, 
  Sparkles, 
  Bot, 
  User, 
  RefreshCw, 
  ShieldCheck, 
  ArrowRight,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AiAssistantDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

interface Message {
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

export const AiAssistantDrawer: React.FC<AiAssistantDrawerProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const isAr = lang === 'ar';

  const [input, setInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      text: isAr
        ? 'مرحباً بك! أنا "ذكاء ثواني 2035" — المساعد المالي والتقني الذكي. كيف يمكنني مساعدتك في ربط بوابة الدفع، الاشتراطات التنظيمية، أو التحليلات اللحظية اليوم؟'
        : 'Welcome! I am Thawani Intelligence 2035 — your financial & technical AI copilot. How can I empower your merchant integration, CBO regulatory checks, or treasury settlement today?',
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const quickPrompts = isAr
    ? [
        'كيف أربط كيو ار التاجر؟',
        'ما هي رسوم التسوية الفورية T+0؟',
        'هل ثواني مرخصة من البنك المركزي؟',
        'كيف أنشئ جلسة دفع بالـ API؟',
      ]
    : [
        'How to integrate Merchant QR?',
        'What are T+0 settlement fees?',
        'Is Thawani CBO regulated?',
        'How to create an API Checkout Session?',
      ];

  const handleSendMessage = async (customText?: string) => {
    const textToSend = customText || input;
    if (!textToSend.trim() || loading) return;

    const userMsg: Message = {
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!customText) setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textToSend, lang }),
      });

      const data = await res.json();
      const aiMsg: Message = {
        sender: 'ai',
        text: data.reply || 'Answer processed.',
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      const fallbackMsg: Message = {
        sender: 'ai',
        text: isAr
          ? 'ثواني 2035: توفر منصة ثواني تسوية فورية T+0، ترخيص البنك المركزي العماني، وربط برمجي OpenAPI بنظام حماية 256-bit AES.'
          : 'Thawani 2035: Sovereign infrastructure offering T+0 settlement, CBO regulation, and 256-bit encrypted OpenAPI sessions.',
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm">
        
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="w-full max-w-lg h-full bg-[#0D1117] border-l border-white/10 shadow-2xl flex flex-col justify-between"
        >
          {/* Drawer Header */}
          <div className="p-6 bg-[#12171E] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="p-2.5 rounded-xl bg-[#00D68F]/20 text-[#00D68F] border border-[#00D68F]/40">
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="font-extrabold text-lg text-white font-display">
                    {isAr ? 'ذكاء ثواني 2035' : 'Thawani Intelligence'}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono">
                    Gemini 3.6
                  </span>
                </div>
                <span className="text-[11px] text-zinc-400 font-mono block">
                  {isAr ? 'المساعد المالي والتقني المعتمد' : 'Sovereign Financial Copilot'}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages Stream */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4 font-sans text-xs sm:text-sm">
            {messages.map((m, idx) => {
              const isAi = m.sender === 'ai';
              return (
                <div
                  key={idx}
                  className={`flex ${isAi ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[85%] p-4 rounded-2xl ${
                      isAi
                        ? 'bg-white/[0.04] border border-white/10 text-zinc-200'
                        : 'bg-[#00D68F] text-[#0A0D0F] font-semibold'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5 opacity-75 text-[10px] font-mono">
                      <span>{isAi ? (isAr ? 'ثواني الذكاء الاصطناعي' : 'Thawani AI') : (isAr ? 'أنت' : 'You')}</span>
                      <span>{m.timestamp}</span>
                    </div>
                    <div className="leading-relaxed whitespace-pre-wrap">{m.text}</div>
                  </div>
                </div>
              );
            })}

            {loading && (
              <div className="flex justify-start">
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-emerald-400 text-xs font-mono flex items-center space-x-2 rtl:space-x-reverse">
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>{isAr ? 'جاري التحليل والمعالجة...' : 'Computing financial telemetry...'}</span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Suggestion Pills */}
          <div className="px-6 py-2 border-t border-white/5 flex items-center space-x-2 rtl:space-x-reverse overflow-x-auto no-scrollbar">
            {quickPrompts.map((qp, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(qp)}
                className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 text-[11px] font-mono whitespace-nowrap transition-colors"
              >
                {qp}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <div className="p-6 bg-[#12171E] border-t border-white/10">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={isAr ? 'اسأل ثواني عن الربط، التراخيص، أو المبيعات...' : 'Ask Thawani AI about APIs, settlement, CBO...'}
                className="flex-1 px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-xs font-sans focus:outline-none focus:border-[#00D68F]"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={loading}
                className="p-3 rounded-xl bg-[#00D68F] text-[#0A0D0F] hover:bg-[#00A86B] font-bold transition-all shadow-md"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="text-[10px] font-mono text-zinc-500 mt-2 text-center">
              {isAr ? 'مدعوم بـ Gemini 3.6 Flash — أمان البنك المركزي العماني' : 'Powered by Gemini 3.6 Flash — Sovereign Security Protocol'}
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
