import React from 'react';
import { Sparkles } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface ProductHeaderProps {
  inView: boolean;
}

const ProductHeader: React.FC<ProductHeaderProps> = ({ inView }) => {
  return (
    <div className="relative py-16 lg:py-24 overflow-hidden">
      <div className={cn(
        "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
        "transform transition-all duration-1000 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}>
        
        {/* 精選產品標籤 */}
        <div className="relative z-10 mb-8 sm:mb-12">
          <div className={cn(
            "inline-flex items-center px-6 py-2.5 rounded-full",
            "bg-gradient-to-r from-rose-50 to-rose-100 shadow-lg shadow-rose-100/50",
            "hover:shadow-rose-200/50 transform hover:scale-105 transition-all duration-300"
          )}>
            <Sparkles className="w-5 h-5 mr-2 text-rose-600 animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-rose-700 to-rose-900 bg-clip-text text-transparent">
              精選產品
            </span>
          </div>
        </div>

        {/* 標題 */}
        <h2 className={cn(
          "text-4xl sm:text-5xl lg:text-6xl font-bold",
          "bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent",
          "tracking-tight leading-tight mb-6 sm:mb-8"
        )}>
          專業級外泌體保養品
        </h2>

        {/* 描述 */}
        <p className={cn(
          "text-lg sm:text-xl lg:text-2xl text-gray-600",
          "leading-relaxed max-w-3xl mx-auto",
          "transition-all duration-700 delay-200"
        )}>
          採用先進外泌體科技，為您的肌膚帶來全方位的呵護，
          <br className="hidden sm:inline" />
          打造專屬的青春方程式
        </p>

        {/* 背景裝飾 */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-rose-50/30 to-transparent" />
      </div>
    </div>
  );
};

export default ProductHeader;
