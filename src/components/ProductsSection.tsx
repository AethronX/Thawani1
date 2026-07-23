import React, { useState } from 'react';
import { Language } from '../types';
import { PRODUCTS_DATA } from '../data/thawaniData';
import { GlassCard } from './GlassCard';
import { 
  Smartphone, 
  LayoutDashboard, 
  Globe, 
  Send, 
  Volume2, 
  Layers, 
  Check, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedSection, AnimatedItem } from './AnimatedSection';

interface ProductsSectionProps {
  lang: Language;
  onOpenMerchantDemo: () => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  lang,
  onOpenMerchantDemo,
}) => {
  const isAr = lang === 'ar';
  const [selectedProduct, setSelectedProduct] = useState<string>(PRODUCTS_DATA[0].id);

  const getProductIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone': return Smartphone;
      case 'LayoutDashboard': return LayoutDashboard;
      case 'Globe': return Globe;
      case 'Send': return Send;
      case 'Volume2': return Volume2;
      case 'Layers': return Layers;
      default: return Smartphone;
    }
  };

  const activeProduct = PRODUCTS_DATA.find((p) => p.id === selectedProduct) || PRODUCTS_DATA[0];

  return (
    <AnimatedSection id="products" className="py-24 bg-[#0A0D0F] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedItem className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <Sparkles className="w-4 h-4 text-[#00D68F]" />
            <span>{isAr ? 'منظومة منتجات ثواني 2035' : 'Thawani Product Ecosystem 2035'}</span>
          </div>

          <h2 className="text-display-section font-extrabold text-white tracking-tight">
            {isAr ? (
              <>حلول مالية مصممة <span className="text-[#00D68F]">لنمو المستقبل</span></>
            ) : (
              <>Engineered Products for <br className="hidden sm:inline" /> <span className="text-[#00D68F]">Sovereign Financial Velocity</span></>
            )}
          </h2>

          <p className="text-lead text-zinc-300">
            {isAr
              ? 'تغطي منتجات ثواني احتياجات الأفراد والتشار والتطبيقات وسلاسل التوريد بدقة وكفاءة غير مسبوقة.'
              : 'From individual instant peer-to-peer micro-transfers to billion-dollar enterprise treasury settlement corridors.'}
          </p>
        </AnimatedItem>

        {/* 6 Products Grid Selector */}
        <AnimatedItem className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {PRODUCTS_DATA.map((prod) => {
            const Icon = getProductIcon(prod.icon);
            const isSelected = prod.id === selectedProduct;

            return (
              <GlassCard
                key={prod.id}
                onClick={() => setSelectedProduct(prod.id)}
                glow={isSelected}
                className={`p-6 cursor-pointer transition-all duration-300 ${
                  isSelected ? 'border-[#00D68F] bg-[#00D68F]/10' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${
                    isSelected ? 'bg-[#00D68F] text-[#0A0D0F]' : 'bg-white/5 text-[#00D68F]'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10">
                    {isAr ? prod.tagAr : prod.tagEn}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 font-display">
                  {isAr ? prod.titleAr : prod.titleEn}
                </h3>

                <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-4">
                  {isAr ? prod.descAr : prod.descEn}
                </p>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-emerald-400">
                  <span>{isAr ? prod.metricsAr : prod.metricsEn}</span>
                  <ArrowUpRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-0.5 -translate-y-0.5' : ''}`} />
                </div>
              </GlassCard>
            );
          })}
        </AnimatedItem>

        {/* Expanded Product Detail Showcase Card */}
        <AnimatedItem>
          <motion.div
            key={activeProduct.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-[#0D1117] border border-[#00D68F]/40 p-8 backdrop-blur-2xl relative overflow-hidden shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#00D68F]/10 text-[#00D68F] border border-[#00D68F]/30">
                  {isAr ? activeProduct.tagAr : activeProduct.tagEn}
                </span>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
                  {isAr ? activeProduct.titleAr : activeProduct.titleEn}
                </h3>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {isAr ? activeProduct.descAr : activeProduct.descEn}
                </p>

                {/* Feature Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {(isAr ? activeProduct.featuresAr : activeProduct.featuresEn).map((feat, i) => (
                    <div key={i} className="flex items-center space-x-2.5 rtl:space-x-reverse text-xs font-medium text-zinc-200 p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="p-1 rounded-full bg-[#00D68F]/20 text-[#00D68F]">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center space-x-4 rtl:space-x-reverse">
                  <button
                    onClick={onOpenMerchantDemo}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00D68F] to-[#00A86B] text-[#0A0D0F] font-bold text-xs shadow-lg shadow-[#00D68F]/20 hover:shadow-[#00D68F]/40 transition-all flex items-center space-x-2 rtl:space-x-reverse"
                  >
                    <span>{isAr ? 'تجربة المنتج الآن' : 'Launch Product Demo'}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Product Metric Visual Panel */}
              <div className="lg:col-span-5 p-8 rounded-2xl bg-black/60 border border-white/10 flex flex-col justify-center items-center text-center space-y-4">
                <div className="p-4 rounded-2xl bg-[#00D68F]/20 text-[#00D68F] border border-[#00D68F]/30">
                  {React.createElement(getProductIcon(activeProduct.icon), { className: 'w-10 h-10' })}
                </div>

                <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider">
                  {isAr ? 'إحصائية الاستخدام الكلية' : 'Ecosystem Impact Metric'}
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-[#00D68F] font-mono">
                  {isAr ? activeProduct.metricsAr : activeProduct.metricsEn}
                </div>

                <div className="text-xs text-zinc-400 font-mono pt-2 border-t border-white/10 w-full">
                  {isAr ? 'مرخص معتمد ومعالج عبر البنك المركزي' : 'CBO Regulated & Tier-4 Vaulted'}
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatedItem>

      </div>
    </AnimatedSection>
  );
};
