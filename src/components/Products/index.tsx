import React, { useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '../../lib/utils';
import { products } from '../../data/products';
import ProductCard from './components/ProductCard';
import ProductHeader from './components/ProductHeader';
import ProductFeatures from './components/ProductFeatures';
import ProductBackground from './components/ProductBackground';
import ProductGrid from './components/ProductGrid';

const Products: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '50px 0px',
  });

  const memoizedProducts = useMemo(() => products, []);

  return (
    <section 
      id="products" 
      ref={ref}
      className={cn(
        "relative min-h-screen py-24 lg:py-32 overflow-hidden",
        "scroll-mt-16 transition-colors duration-500"
      )}
    >
      <ProductBackground className="absolute inset-0 z-0" />
      
      <div className={cn(
        "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        "space-y-16 sm:space-y-24"
      )}>
        <ProductHeader inView={inView} />
        <ProductFeatures inView={inView} />
        <ProductGrid 
          products={memoizedProducts}
          inView={inView}
          className="transform transition-all duration-700 delay-300"
        />
      </div>
    </section>
  );
};

export default React.memo(Products);