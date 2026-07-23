import React, { useState } from 'react';
import { Language } from '../types';
import { 
  QrCode, 
  Smartphone, 
  Volume2, 
  Zap, 
  CheckCircle2, 
  Share2, 
  RefreshCw, 
  VolumeX,
  CreditCard,
  Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedSection, AnimatedItem } from './AnimatedSection';

interface QRPaymentsSectionProps {
  lang: Language;
}

export const QRPaymentsSection: React.FC<QRPaymentsSectionProps> = ({ lang }) => {
  const isAr = lang === 'ar';

  const [qrAmount, setQrAmount] = useState<number>(18.500);
  const [billNote, setBillNote] = useState<string>(isAr ? 'عشاء مطعم الموج البحري' : 'Al Mouj Waterfront Dining');
  const [scannedStatus, setScannedStatus] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [splitCount, setSplitCount] = useState<number>(3);

  const handleSimulateScan = () => {
    setScannedStatus(true);
    setTimeout(() => {
      setScannedStatus(false);
    }, 3500);
  };

  const perPersonAmount = (qrAmount / splitCount).toFixed(3);

  return (
    <AnimatedSection id="qr-payments" className="py-24 bg-[#0A0D0F] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedItem className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <QrCode className="w-4 h-4 text-[#00D68F]" />
            <span>{isAr ? 'تقنية كيو ار ثواني الديناميكية 2035' : 'Thawani Dynamic QR Payment Engine'}</span>
          </div>

          <h2 className="text-display-section font-extrabold text-white tracking-tight">
            {isAr ? (
              <>امسح رمز QR، <span className="text-[#00D68F]">وادفع في أجزاء من الثانية</span></>
            ) : (
              <>Sub-200ms QR Payments & <br className="hidden sm:inline" /> <span className="text-[#00D68F]">Instant Soundbox Ping</span></>
            )}
          </h2>

          <p className="text-lead text-zinc-300">
            {isAr
              ? 'حوّل شاشات المتاجر، المطاعم، وروابط التباعد إلى منافذ تحصيل فورية مع إشعار صوتی فوري عبر Thawani Soundbox.'
              : 'Generate dynamic encrypted QR codes on any screen or bill with zero hardware overhead and instant acoustic confirmation.'}
          </p>
        </AnimatedItem>

        {/* QR Interactive Studio Box */}
        <div className="rounded-3xl bg-[#0D1117] border border-white/10 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_25px_70px_rgba(0,0,0,0.7)] grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Controls & Customization */}
          <div className="lg:col-span-6 space-y-6">
            <div className="border-b border-white/10 pb-4">
              <h3 className="text-xl font-bold text-white font-display mb-1">
                {isAr ? 'مولّد رمز كيو ار الديناميكي التفاعلي' : 'Dynamic QR Generator Studio'}
              </h3>
              <p className="text-xs text-zinc-400">
                {isAr ? 'جرب خصم ومسح الكيو ار مباشرة مع تقسيم الفاتورة' : 'Customize invoice parameters and test instant mobile scanning'}
              </p>
            </div>

            {/* Amount Slider / Input */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-zinc-300 flex justify-between">
                <span>{isAr ? 'مبلغ الفاتورة (بالريال العماني)' : 'Bill Amount (OMR)'}</span>
                <span className="text-[#00D68F] font-bold">{qrAmount.toFixed(3)} OMR</span>
              </label>
              <input
                type="range"
                min="1.000"
                max="250.000"
                step="0.500"
                value={qrAmount}
                onChange={(e) => setQrAmount(parseFloat(e.target.value))}
                className="w-full accent-[#00D68F] bg-white/10 h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* Note Input */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-zinc-300">
                {isAr ? 'وصف المعاملة / اسم المتجر' : 'Transaction Note / Store Name'}
              </label>
              <input
                type="text"
                value={billNote}
                onChange={(e) => setBillNote(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-sans focus:outline-none focus:border-[#00D68F]"
              />
            </div>

            {/* Split Bill Calculator */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-300 flex items-center space-x-1.5 rtl:space-x-reverse">
                  <Users className="w-4 h-4 text-[#00D68F]" />
                  <span>{isAr ? 'خاصية تقسيم الفاتورة الذكية' : 'Smart Split Bill'}</span>
                </span>
                <span className="text-emerald-400 font-bold">{splitCount} {isAr ? 'أفراد' : 'people'}</span>
              </div>

              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                {[2, 3, 4, 5, 6].map((num) => (
                  <button
                    key={num}
                    onClick={() => setSplitCount(num)}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                      splitCount === num ? 'bg-[#00D68F] text-[#0A0D0F]' : 'bg-white/5 text-zinc-400'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>

              <div className="text-xs font-mono text-zinc-400 pt-2 border-t border-white/5 flex justify-between">
                <span>{isAr ? 'حصة الفرد الواحد:' : 'Per Person Share:'}</span>
                <span className="text-white font-bold">{perPersonAmount} OMR</span>
              </div>
            </div>

            <button
              onClick={handleSimulateScan}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00D68F] to-[#00A86B] text-[#0A0D0F] font-bold text-sm tracking-wide shadow-lg shadow-[#00D68F]/25 hover:shadow-[#00D68F]/40 transition-all flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              <Smartphone className="w-5 h-5" />
              <span>{isAr ? 'محاكاة المسح الضوئي والدفع' : 'Simulate Mobile QR Scan'}</span>
            </button>
          </div>

          {/* Dynamic Generated QR Visual Display */}
          <div className="lg:col-span-6 p-8 rounded-2xl bg-black/60 border border-white/10 flex flex-col items-center justify-center text-center relative overflow-hidden">
            
            {/* Visual QR Code Card */}
            <div className="relative p-6 rounded-2xl bg-white text-black shadow-2xl mb-6 group cursor-pointer" onClick={handleSimulateScan}>
              <div className="w-48 h-48 border-4 border-black p-2 relative flex flex-col items-center justify-center bg-white">
                
                {/* Custom QR Vector Visual Pattern */}
                <div className="grid grid-cols-6 gap-1.5 w-full h-full p-2 bg-zinc-100 rounded">
                  {Array.from({ length: 36 }).map((_, idx) => (
                    <div
                      key={idx}
                      className={`rounded-sm transition-colors ${
                        (idx % 2 === 0 && idx % 3 !== 0) || idx === 0 || idx === 5 || idx === 30 || idx === 35
                          ? 'bg-[#0A0D0F]'
                          : idx % 5 === 0
                          ? 'bg-[#00D68F]'
                          : 'bg-zinc-200'
                      }`}
                    />
                  ))}
                </div>

                {/* Center Thawani Logo Mark */}
                <div className="absolute inset-0 m-auto w-10 h-10 rounded-lg bg-[#0A0D0F] border-2 border-[#00D68F] flex items-center justify-center text-[#00D68F] font-bold text-xs shadow-md">
                  ثواني
                </div>
              </div>

              <div className="text-[10px] font-mono text-zinc-600 mt-3 uppercase tracking-wider font-bold">
                {isAr ? 'رمز كيو ار مشفر بنقرة واحدة' : '256-Bit Encrypted Dynamic QR'}
              </div>
            </div>

            <div className="text-white font-bold text-xl font-mono">
              {qrAmount.toFixed(3)} OMR
            </div>
            <div className="text-xs text-zinc-400 font-sans mt-1">
              {billNote}
            </div>

            {/* Soundbox Notification Simulation Layer */}
            <AnimatePresence>
              {scannedStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute inset-0 bg-[#0A0D0F]/95 backdrop-blur-md p-6 flex flex-col items-center justify-center text-center z-20 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[#00D68F] flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 animate-bounce" />
                  </div>

                  <div className="text-xl font-extrabold text-white font-display">
                    {isAr ? 'تم استلام الدفعة بنجاح!' : 'Payment Received Successfully!'}
                  </div>

                  <div className="text-sm font-mono text-emerald-400">
                    {qrAmount.toFixed(3)} OMR
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono text-emerald-300 flex items-center space-x-2 rtl:space-x-reverse">
                    <Volume2 className="w-4 h-4 text-[#00D68F]" />
                    <span>
                      {isAr
                        ? `تنبيه صوتی: "تم دفع ${qrAmount.toFixed(3)} ريال عماني"`
                        : `Thawani Soundbox: "Paid ${qrAmount.toFixed(3)} OMR"`}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </AnimatedSection>
  );
};
