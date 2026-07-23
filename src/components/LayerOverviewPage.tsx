import React from 'react';
import { Language, LayerId } from '../types';
import { THAWANI_LAYERS } from '../data/thawaniLayers';
import { ThawaniLogo } from './ThawaniLogo';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  ShieldCheck, 
  Smartphone, 
  Store, 
  TrendingUp, 
  Code2, 
  Building2, 
  Headphones,
  Copy,
  Check
} from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface LayerOverviewPageProps {
  layerId: LayerId;
  productSlug?: string;
  lang: Language;
  onNavigateHome: () => void;
  onSelectLayer: (id: LayerId) => void;
  onSelectProduct?: (productSlug: string) => void;
  onOpenMerchantDemo: () => void;
}

export const LayerOverviewPage: React.FC<LayerOverviewPageProps> = ({
  layerId,
  productSlug,
  lang,
  onNavigateHome,
  onSelectLayer,
  onSelectProduct,
  onOpenMerchantDemo,
}) => {
  const isAr = lang === 'ar';
  const layer = THAWANI_LAYERS[layerId] || THAWANI_LAYERS.pay;
  const [copiedUrl, setCopiedUrl] = React.useState(false);

  const activeProduct = productSlug 
    ? layer.products.find(p => p.slug === productSlug) || layer.products[0]
    : null;

  const currentCanonicalUrl = activeProduct 
    ? activeProduct.canonicalUrl 
    : layer.canonicalUrl;

  const handleCopyCanonical = () => {
    navigator.clipboard.writeText(currentCanonicalUrl);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  const getLayerIcon = (id: string) => {
    switch (id) {
      case 'pay': return Smartphone;
      case 'accept': return Store;
      case 'grow': return TrendingUp;
      case 'build': return Code2;
      case 'company': return Building2;
      case 'support': return Headphones;
      default: return Smartphone;
    }
  };

  const LayerIcon = getLayerIcon(layer.id);

  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] transition-colors duration-200 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Breadcrumb & Back Action */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-xs font-mono text-[var(--text-secondary)] border-b border-[var(--border-subtle)] pb-4">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <button
              onClick={onNavigateHome}
              className="hover:text-[var(--text-brand)] transition-colors font-sans font-bold flex items-center space-x-1 rtl:space-x-reverse"
            >
              <span>{isAr ? 'الرئيسية' : 'Home'}</span>
            </button>

            <span>/</span>

            <button
              onClick={() => onSelectLayer(layer.id as LayerId)}
              className={`font-semibold ${!activeProduct ? 'text-[var(--text-brand)]' : 'hover:text-[var(--text-brand)]'}`}
            >
              {isAr ? layer.titleAr : layer.titleEn}
            </button>

            {activeProduct && (
              <>
                <span>/</span>
                <span className="text-[var(--text-brand)] font-bold">
                  {isAr ? activeProduct.titleAr : activeProduct.titleEn}
                </span>
              </>
            )}
          </div>

          {/* Canonical URL Copy */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse bg-[var(--bg-subtle)] border border-[var(--border-subtle)] px-3 py-1 rounded-full text-[11px]">
            <Globe className="w-3.5 h-3.5 text-[var(--green-500)]" />
            <span className="text-[var(--text-muted)] font-mono">{currentCanonicalUrl}</span>
            <button
              onClick={handleCopyCanonical}
              className="p-1 hover:text-[var(--text-primary)] transition-colors"
              title="Copy Canonical URL"
            >
              {copiedUrl ? <Check className="w-3 h-3 text-[#00D166]" /> : <Copy className="w-3 h-3" />}
            </button>
          </div>
        </div>

        {/* Layer / Product Header Banner */}
        <div className="rounded-3xl bg-[var(--ink-900)] border border-[var(--ink-800)] p-8 sm:p-12 text-white shadow-xl mb-12 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4 text-start">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1 rounded-full bg-[#00D166]/15 border border-[#00D166]/30 text-[#00D166] text-xs font-mono">
              <LayerIcon className="w-4 h-4" />
              <span>{layer.slug.toUpperCase()} LAYER</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {activeProduct 
                ? (isAr ? activeProduct.titleAr : activeProduct.titleEn)
                : (isAr ? layer.titleAr : layer.titleEn)}
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-sans">
              {activeProduct 
                ? (isAr ? activeProduct.descAr : activeProduct.descEn)
                : (isAr ? layer.summaryAr : layer.summaryEn)}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <MagneticButton
                onClick={onOpenMerchantDemo}
                strength={0.3}
                className="px-6 py-3 rounded-xl btn-primary-brand text-xs tracking-wide transition-all duration-300 flex items-center space-x-2 rtl:space-x-reverse"
              >
                <span>{isAr ? 'منصة التجار' : 'Merchant Portal'}</span>
                <ArrowRight className="w-4 h-4 ltr:ml-1 rtl:mr-1 rtl:rotate-180" />
              </MagneticButton>

              <button
                onClick={onNavigateHome}
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all"
              >
                {isAr ? 'العودة للرئيسية' : 'Return to Home'}
              </button>
            </div>
          </div>
        </div>

        {/* Product Sub-Pages & Grid inside layer */}
        <div className="space-y-8 text-start">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">
              {isAr ? `منتجات ${layer.titleAr}` : `Products in ${layer.titleEn}`}
            </h2>
            <span className="text-xs font-mono text-[var(--text-muted)]">
              {layer.products.length} {isAr ? 'منتجات مرخصة' : 'Licensed Products'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {layer.products.map((prod) => {
              const isSelected = activeProduct?.id === prod.id;

              return (
                <div
                  key={prod.id}
                  onClick={() => onSelectProduct && onSelectProduct(prod.slug)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[var(--bg-subtle)] border-[var(--green-500)] shadow-md ring-1 ring-[var(--green-500)]'
                      : 'bg-[var(--bg-canvas)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[var(--text-brand)]">
                        {prod.badgeEn || 'Verified'}
                      </span>
                      <span className="text-[10px] font-mono text-[var(--text-muted)]">
                        {prod.slug}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold mb-2">
                      {isAr ? prod.titleAr : prod.titleEn}
                    </h3>

                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                      {isAr ? prod.descAr : prod.descEn}
                    </p>

                    <div className="space-y-1.5 mb-6">
                      {prod.featuresEn.map((feat, idx) => (
                        <div key={idx} className="flex items-center space-x-2 rtl:space-x-reverse text-xs text-[var(--text-primary)] font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[var(--green-500)] flex-shrink-0" />
                          <span>{isAr ? prod.featuresAr[idx] : feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-brand)]">
                    <span>{isAr ? 'التفاصيل والربط' : 'View Details'}</span>
                    <ArrowRight className="w-4 h-4 ltr:ml-1 rtl:mr-1 rtl:rotate-180" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
