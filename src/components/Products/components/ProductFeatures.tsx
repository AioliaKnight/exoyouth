import React from 'react';
import { Shield, Beaker, Sparkles, Award, Heart, Star } from 'lucide-react';
import { cn } from '../../../lib/utils';

// 特色資料
const features = [
  {
    icon: Shield,
    title: '純度極致',
    description: '採用專利分離技術，純度超過95%',
    stats: '95%+',
    details: [
      '專利分離技術',
      'ISO認證實驗室',
      '多重過濾與純化',
      '完整檢測報告'
    ],
    color: 'blue'
  },
  {
    icon: Sparkles,
    title: '高度活性',
    description: '活性保持超過98%，效果持久穩定',
    stats: '98%+',
    details: [
      '專業冷鏈保存',
      '活性監測系統',
      '12個月長效保存',
      '品質可追溯'
    ],
    color: 'purple'
  },
  {
    icon: Star,
    title: '嚴格品質認證',
    description: '通過國際多項品質認證，品質值得信賴',
    stats: '100%',
    details: [
      'GMP製程認證',
      'SGS檢測合格',
      'TAF認證實驗室',
      'GDP運輸認證'
    ],
    color: 'pink'
  },
  {
    icon: Heart,
    title: '專業客戶服務',
    description: '全天候專業支援，保障您的使用體驗',
    stats: '24H',
    details: [
      '專業諮詢服務',
      '冷鏈配送系統',
      '技術支援團隊',
      '完善售後服務'
    ],
    color: 'indigo'
  }
];

interface ProductFeaturesProps {
  inView: boolean;
}

const ProductFeatures: React.FC<ProductFeaturesProps> = ({ inView }) => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 標題區域 */}
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-16",
          "transform transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <span className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold bg-blue-100 text-blue-800 shadow-lg">
            <Sparkles className="w-5 h-5 mr-2" />
            核心產品特色
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
            頂尖品質，專為您打造
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600">
            集合先進的分離技術與嚴格的品質把控，讓每一滴產品都滿載科技與心血
          </p>
        </div>

        {/* 特色卡片 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                "group relative p-8 bg-white rounded-xl shadow-md hover:shadow-lg",
                "transition-all duration-500 transform hover:-translate-y-2",
                "opacity-0 translate-y-6",
                inView && "opacity-100 translate-y-0"
              )}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                zIndex: inView ? index + 1 : 0
              }}
            >
              {/* 背景效果 */}
              <div className={cn(
                "absolute inset-0 rounded-xl",
                `bg-${feature.color}-500/5 transition-opacity duration-500 group-hover:bg-${feature.color}-500/10`
              )} />

              {/* 圖標 */}
              <div className={cn(
                "relative flex items-center justify-center",
                "w-14 h-14 rounded-xl mb-6",
                `bg-${feature.color}-100 text-${feature.color}-600 shadow-md`,
                "transition-transform duration-300 group-hover:scale-110"
              )}>
                <feature.icon className="w-7 h-7" />
              </div>

              {/* 特色數據 */}
              <div className="absolute top-8 right-8">
                <span className={cn(
                  "text-2xl font-extrabold",
                  `text-${feature.color}-600`
                )}>
                  {feature.stats}
                </span>
              </div>

              {/* 內容 */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 mb-6">
                {feature.description}
              </p>

              {/* 詳細內容列表 */}
              <ul className="space-y-3">
                {feature.details.map((detail, idx) => (
                  <li 
                    key={idx}
                    className="flex items-start"
                  >
                    <span className={cn(
                      "w-1.5 h-1.5 rounded-full mt-2 mr-2",
                      `bg-${feature.color}-500`
                    )} />
                    <span className="text-sm text-gray-700">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>

              {/* 邊框效果 */}
              <div className={cn(
                "absolute inset-0 border-2 rounded-xl",
                "transition-colors duration-300",
                `border-${feature.color}-500/0`,
                `group-hover:border-${feature.color}-500/20`
              )} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
