import React, { useMemo } from 'react';
import { ChevronRight, Star, Package2, Award } from 'lucide-react';
import { cn } from '../../../lib/utils';
import type { ProductType } from '../../../types';

interface ProductCardProps {
  product: ProductType;
  view: 'grid' | 'list';
  index: number;
  inView: boolean;
  onSelect: (product: ProductType) => void;
}

const specLabels: Record<string, string> = {
  purity: '純度',
  activity: '活性',
  storage: '保存方式',
  shelfLife: '保存期限'
};

const ProductCard: React.FC<ProductCardProps> = React.memo(({ 
  product, 
  view, 
  index, 
  inView,
  onSelect 
}) => {
  const formattedPrice = useMemo(() => {
    return typeof product.price === 'number' 
      ? `NT$ ${product.price.toLocaleString()}`
      : product.price;
  }, [product.price]);

  return (
    <div
      className={cn(
        "group relative bg-white rounded-2xl overflow-hidden h-full",
        "shadow-sm hover:shadow-xl transition-all duration-500",
        "opacity-0 translate-y-4 hover:-translate-y-1",
        inView && "animate-slide-up",
        view === 'list' ? "sm:flex sm:gap-8" : "",
      )}
      style={{ 
        animationDelay: `${index * 100}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {/* Image Container */}
      <div className={cn(
        "relative overflow-hidden flex-shrink-0",
        view === 'list' ? "sm:w-1/3" : "aspect-[4/3]"
      )}>
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 
                   group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Tags */}
        {!product.highlight && product.tags && product.tags.length > 0 && (
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {product.tags.map((tag, idx) => (
              <span
                key={`tag-${idx}`}
                className={cn(
                  "px-3 py-1.5 rounded-full text-sm font-medium",
                  "bg-white/90 text-rose-600 backdrop-blur-sm",
                  "shadow-lg animate-fade-in border border-rose-100",
                  "transform transition-all duration-300",
                  "hover:scale-105 hover:bg-rose-50"
                )}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Highlight Badge */}
        {product.highlight && (
          <div className="absolute top-4 right-4 px-4 py-1.5 
                       bg-gradient-to-r from-amber-500 to-amber-600
                       text-white text-sm font-medium rounded-full
                       shadow-lg animate-pulse-slow
                       flex items-center gap-1.5">
            <Star className="w-4 h-4" />
            熱銷推薦
          </div>
        )}

        {/* Hover Overlay */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent",
          "opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          "flex items-center justify-center"
        )}>
          <button 
            onClick={() => onSelect(product)}
            className={cn(
              "transform -translate-y-4 group-hover:translate-y-0",
              "transition-all duration-500 ease-out delay-100",
              "px-6 py-3 rounded-full",
              "bg-white text-rose-600 font-medium",
              "hover:bg-rose-50 active:scale-95",
              "shadow-lg hover:shadow-xl"
            )}
          >
            <span className="flex items-center gap-2">
              了解更多
              <ChevronRight className="w-4 h-4 transition-transform 
                                   group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </div>

      {/* Content Container */}
      <div className={cn(
        "flex flex-col h-full",
        view === 'list' ? "sm:w-2/3 p-8" : "p-6"
      )}>
        {/* Title & Description */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 
                       group-hover:text-rose-600 transition-colors">
            {product.name}
          </h3>
          <p className={cn(
            "text-gray-600 text-sm leading-relaxed",
            view === 'list' ? "" : "line-clamp-2"
          )}>
            {product.description}
          </p>
        </div>

        {/* Specifications */}
        {product.specs && (
          <div className="grid grid-cols-2 gap-3 mb-6">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} 
                   className="flex items-start gap-2 px-3 py-2.5 bg-gray-50 
                            rounded-lg hover:bg-gray-100 transition-colors">
                {key === 'purity' && <Award className="w-4 h-4 text-rose-500 mt-0.5" />}
                {key === 'activity' && <Package2 className="w-4 h-4 text-rose-500 mt-0.5" />}
                <div>
                  <dt className="text-xs text-gray-500 mb-0.5">
                    {specLabels[key] || key}
                  </dt>
                  <dd className="text-sm text-gray-900 font-medium">
                    {value}
                  </dd>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Price */}
        <div className="mt-auto">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-2xl font-bold text-rose-600">
              {formattedPrice}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                NT$ {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          {product.highlight && (
            <span className="text-xs text-rose-600">
              限時優惠 · 數量有限
            </span>
          )}
        </div>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;