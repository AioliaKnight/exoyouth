import React, { useState, useEffect } from 'react';
import { Grid, List, Search, LayoutGrid, LayoutList, Filter } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import type { ProductType } from '../../../types';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

interface ProductGridProps {
  products: ProductType[];
  inView: boolean;
}

interface ViewToggleProps {
  view: 'grid' | 'list';
  onToggle: () => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ view, onToggle }) => (
  <button 
    onClick={onToggle}
    className={cn(
      "group flex items-center gap-2 px-4 py-2 rounded-full",
      "bg-white border-2 hover:border-rose-200",
      "transition-all duration-300 hover:-translate-y-0.5",
      "shadow-sm hover:shadow-md",
      view === 'grid' 
        ? "border-rose-200 text-rose-600" 
        : "border-gray-200 text-gray-600"
    )}
    aria-label={view === 'grid' ? '切換至列表視圖' : '切換至網格視圖'}
  >
    {view === 'grid' 
      ? <LayoutList className="w-4 h-4 transition-colors" />
      : <LayoutGrid className="w-4 h-4 transition-colors" />
    }
    <span className="text-sm font-medium">
      {view === 'grid' ? '切換列表' : '切換網格'}
    </span>
  </button>
);

const EmptyState: React.FC = () => (
  <div className="text-center py-24 px-4">
    <div className="mb-6 inline-flex items-center justify-center w-16 h-16 
                   rounded-full bg-rose-100 text-rose-600">
      <Search className="w-8 h-8" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">
      尚無商品
    </h3>
    <p className="text-gray-500 max-w-sm mx-auto">
      目前沒有可顯示的產品，請稍後再查看。
    </p>
  </div>
);

const ProductGrid: React.FC<ProductGridProps> = ({ products, inView }) => {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useMediaQuery('(max-width: 640px)');

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleViewToggle = () => {
    if (!isMobile) {
      setView(prev => prev === 'grid' ? 'list' : 'grid');
    }
  };

  return (
    <section 
      className="relative w-full bg-gradient-to-b from-gray-50 to-white" 
      aria-label="產品列表"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Controls */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            全部商品
            <span className="ml-2 text-sm font-medium text-gray-500">
              ({products.length})
            </span>
          </h2>
          
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded-full
                             bg-white border-2 border-gray-200 
                             hover:border-rose-200 transition-all duration-300
                             shadow-sm hover:shadow-md hover:-translate-y-0.5">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">篩選</span>
            </button>
            
            {!isMobile && <ViewToggle view={view} onToggle={handleViewToggle} />}
          </div>
        </div>

        {/* Products Grid/List */}
        {isLoading ? (
          // Loading Skeleton
          <div className={cn(
            "grid gap-6 sm:gap-8",
            view === 'grid' 
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
              : "grid-cols-1"
          )}>
            {Array.from({ length: 8 }).map((_, i) => (
              <div 
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm
                         animate-pulse"
              >
                <div className="aspect-[3/4] bg-gray-200" />
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded" />
                    <div className="h-3 bg-gray-200 rounded w-5/6" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div 
            className={cn(
              "grid gap-6 sm:gap-8 transition-all duration-500",
              view === 'grid' 
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
                : "grid-cols-1"
            )}
            role="list"
          >
            {products.map((product, index) => (
              <ProductCard
                key={`product-${product.id}`}
                product={product}
                view={isMobile ? 'grid' : view}
                index={index}
                inView={inView}
                onSelect={setSelectedProduct}
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && products.length === 0 && <EmptyState />}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};

export default React.memo(ProductGrid);