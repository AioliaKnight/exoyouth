import React from 'react';
import { SparklesIcon } from 'lucide-react';
import { features } from './featureData';
import FeatureCard from './FeatureCard';
import { cn } from '../../../lib/utils';

const Features = () => {
  return (
    <section id="features" className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
            <SparklesIcon className="w-4 h-4 mr-2" />
            精選特色
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
            產品特色
          </h2>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            堅持台灣製造，嚴選合格實驗室
            <br />
            打造追求完美的研發環境
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.name}
              {...feature}
              index={index}
            />
          ))}
        </div>

        <div className="mt-20 text-center">
          <a 
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
          >
            了解更多 →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;