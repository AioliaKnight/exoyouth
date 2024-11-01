import React from 'react';
import { cn } from '../../lib/utils';

interface HeroSlideProps {
  slide: {
    image: string;
    title: string;
    subtitle: string;
    description: string;
    features?: string[];
  };
  isActive: boolean;
  direction?: 'left' | 'right';
  priority?: boolean;
}

const HeroSlide: React.FC<HeroSlideProps> = ({ 
  slide, 
  isActive, 
  direction = 'right',
  priority = false 
}) => {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden transition-transform duration-700 ease-in-out",
        isActive 
          ? "opacity-100 translate-x-0" 
          : direction === 'right'
            ? "opacity-0 translate-x-full"
            : "opacity-0 -translate-x-full"
      )}
    >
      {/* Background Image */}
      <div className="relative h-full">
        <img
          src={slide.image}
          alt={slide.title}
          className={cn(
            "w-full h-full object-cover transition-transform duration-[10000ms] ease-out",
            isActive ? "scale-100" : "scale-105"
          )}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          style={{ willChange: 'transform' }}
        />

        {/* Overlay Layers */}
        <div className="absolute inset-0">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-gray-900/30" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-pattern opacity-10" />

          {/* Dynamic Light Effect */}
          <div className={cn(
            "absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent transition-opacity duration-1000",
            isActive ? "opacity-100" : "opacity-0"
          )} />

          {/* Mobile Extra Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/90 md:hidden" />
        </div>

        {/* Dynamic Decorations */}
        {isActive && (
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-slide" />
            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-slideReverse" />
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(HeroSlide, (prevProps, nextProps) => 
  prevProps.isActive === nextProps.isActive && 
  prevProps.direction === nextProps.direction
);
