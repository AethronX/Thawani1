import React from 'react';
import { Language, LayerId } from '../types';
import { THAWANI_LAYERS } from '../data/thawaniLayers';
import { 
  Smartphone, 
  Store, 
  TrendingUp, 
  Code2, 
  ArrowRight,
  Layers
} from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface FourLayersSectionProps {
  lang: Language;
  onSelectLayer: (layerId: LayerId) => void;
}

export const FourLayersSection: React.FC<FourLayersSectionProps> = ({
  lang,
  onSelectLayer,
}) => {
  const isAr = lang === 'ar';

  const getLayerIcon = (id: string) => {
    switch (id) {
      case 'pay': return Smartphone;
      case 'accept': return Store;
      case 'grow': return TrendingUp;
      case 'build': return Code2;
      default: return Layers;
    }
  };

  const layersList = [
    THAWANI_LAYERS.pay,
    THAWANI_LAYERS.accept,
    THAWANI_LAYERS.grow,
    THAWANI_LAYERS.build,
  ];

  return (
    <section id="layers" className="py-24 bg-[var(--bg-canvas)] text-[var(--text-primary)] transition-colors duration-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header — max 5 words title, max 18 words subhead */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1 rounded-full bg-[var(--bg-subtle)] border border-[var(--border-strong)] text-[var(--text-brand)] text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>{isAr ? 'البنية التحتية الرباعية' : '4-Layer Architecture'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {isAr ? 'طبقات منظومة ثواني الوطنية' : 'Four Layers of Sovereign Payments'}
          </h2>

          <p className="text-base text-[var(--text-secondary)]">
            {isAr
              ? 'بنية معمارية متكاملة تنظم جميع الخدمات المالية للأفراد، التجار والمؤسسات بسلطنة عُمان.'
              : 'Unified architectural structure organizing all personal, merchant, and enterprise payment services in Oman.'}
          </p>
        </div>

        {/* 4 Cards Grid — Signature Smile Arc Bottom Cuts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {layersList.map((layer) => {
            const IconComp = getLayerIcon(layer.id);

            return (
              <div
                key={layer.id}
                onClick={() => onSelectLayer(layer.id as LayerId)}
                className="group relative rounded-3xl bg-[var(--bg-subtle)] border border-[var(--border-subtle)] hover:border-[var(--green-500)] p-8 transition-all duration-300 hover:shadow-xl flex flex-col justify-between cursor-pointer overflow-hidden text-start"
              >
                {/* Structural Smile Arc Accent Motif at top */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[var(--green-500)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Layer Icon and Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-[var(--action-bg)] text-[var(--action-fg)] shadow-md group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] bg-[var(--border-subtle)] px-2.5 py-1 rounded-full">
                      {layer.slug.toUpperCase()}
                    </span>
                  </div>

                  {/* Card Title (max 3 words) */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--text-brand)] transition-colors">
                    {isAr ? layer.titleAr : layer.titleEn}
                  </h3>

                  {/* Card Body (max 14 words) */}
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                    {isAr ? layer.summaryAr : layer.summaryEn}
                  </p>

                  {/* Included Sub-Product Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {layer.products.slice(0, 4).map((prod) => (
                      <span
                        key={prod.id}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[var(--bg-canvas)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                      >
                        {isAr ? prod.titleAr : prod.titleEn}
                      </span>
                    ))}
                    {layer.products.length > 4 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 text-[var(--text-muted)]">
                        +{layer.products.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Button Action (max 3 words) */}
                <MagneticButton
                  onClick={() => onSelectLayer(layer.id as LayerId)}
                  strength={0.2}
                  className="w-full py-2.5 px-4 rounded-xl bg-[var(--bg-canvas)] hover:bg-[var(--action-bg)] hover:text-[var(--action-fg)] border border-[var(--border-strong)] text-xs font-bold transition-all flex items-center justify-between"
                >
                  <span>{isAr ? 'تصفح الطبقة' : 'Explore Layer'}</span>
                  <ArrowRight className="w-4 h-4 ltr:ml-1 rtl:mr-1 rtl:rotate-180" />
                </MagneticButton>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
