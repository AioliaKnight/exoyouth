import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';
import HeroSlide from './HeroSlide';
import '../../index.css'; // Import your CSS file for additional animations

const slides = [
  {
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80",
    title: "煥發肌膚光采",
    subtitle: "從細胞開始",
    description: "ExoYouth以尖端外泌體科技，為您打造專屬的青春方程式",
    features: ["億級濃度", "專利技術", "活性保證"]
  },
  {
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80",
    title: "專業級外泌體",
    subtitle: "極致純淨",
    description: "95%以上純度，98%以上活性，為您帶來最優質的體驗",
    features: ["95%純度", "98%活性", "全程溫控"]
  },
  {
    image: "https://images.unsplash.com/photo-1612344441107-ef12287e4872?auto=format&fit=crop&q=80",
    title: "品質保證",
    subtitle: "安心守護",
    description: "ISO認證實驗室，全程溫控配送，堅持最高品質標準",
    features: ["ISO認證", "專業製程", "品質保證"]
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const changeSlide = useCallback((index: number) => {
    setDirection(index > currentSlide ? 'right' : 'left');
    setCurrentSlide(index);
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    setDirection('right');
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection('left');
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;

    const touchEnd = e.touches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
      setTouchStart(null);
    }
  };

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative h-[85vh] md:h-[90vh] overflow-hidden bg-gray-900"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <HeroSlide
          key={slide.title}
          slide={slide}
          isActive={currentSlide === index}
          direction={direction}
          priority={index === 0}
        />
      ))}

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col justify-center h-full max-w-xl">
          <div className={cn(
            "space-y-6",
            "transition-all duration-700 ease-in-out transform",
            "opacity-0 translate-y-4",
            currentSlide === 0 && "opacity-100 translate-y-0",
            currentSlide === 1 && "!opacity-100 !translate-y-0",
            currentSlide === 2 && "!opacity-100 !translate-y-0"
          )}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100/90 text-blue-900 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 mr-2" />
              專業級外泌體
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              <span className="block">{slides[currentSlide].title}</span>
              <span className="block mt-2 bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                {slides[currentSlide].subtitle}
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
              {slides[currentSlide].description}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-3">
              {slides[currentSlide].features.map((feature, index) => (
                <span
                  key={feature}
                  className={cn(
                    "px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-sm bg-white/10 text-white backdrop-blur-sm",
                    "transform transition-all duration-500",
                    "hover:bg-white/20"
                  )}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeIn 0.6s ease-out forwards'
                  }}
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={scrollToProducts}
                className="group inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                探索產品
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4">
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => changeSlide(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  currentSlide === index 
                    ? "w-8 bg-blue-500" 
                    : "bg-white/50 hover:bg-white/80"
                )}
                aria-label={`切換至第${index + 1}張投影片`}
              />
            ))}
          </div>
          
          <ChevronDown 
            className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-bounce cursor-pointer" 
            onClick={scrollToProducts}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;