import React from 'react';
import { TestTube2, ShieldCheck, Award, Microscope, SparklesIcon } from 'lucide-react';

const features = [
  {
    name: '頂級純度',
    description: [
      '專利分離技術，純度達95%以上',
      'ISO 17025認證實驗室',
      '每批次檢測報告',
      '完整追溯系統'
    ],
    detailedDesc: '採用專利分離純化技術，確保每批次產品純度達95%以上。通過ISO 17025認證實驗室生產，提供完整檢測報告與追溯系統。',
    icon: TestTube2,
    color: 'blue',
    stats: {
      value: '95%+',
      label: '純度保證'
    }
  },
  {
    name: '高活性',
    description: [
      '活性保持98%以上',
      '專利保存技術',
      '全程溫控監測',
      '效期12個月'
    ],
    detailedDesc: '特殊保存配方，確保外泌體活性維持98%以上。全程溫控監測，搭配專業冷鏈配送，產品效期12個月。',
    icon: ShieldCheck,
    color: 'purple',
    stats: {
      value: '98%+',
      label: '活性保證'
    }
  },
  {
    name: '品質認證',
    description: [
      'PIC/S GMP製程認證',
      'SGS品質檢測',
      'TAF實驗室認證',
      'GDP運銷規範'
    ],
    detailedDesc: '符合國際PIC/S GMP製程規範，通過SGS品質檢測，具備TAF實驗室認證，遵循GDP運銷規範。',
    icon: Award,
    color: 'pink',
    stats: {
      value: '100%',
      label: '合格認證'
    }
  },
  {
    name: '研發實力',
    description: [
      '50+位博士研究員',
      '10年研發經驗',
      '20+項技術專利',
      '產學合作計畫'
    ],
    detailedDesc: '擁有50位以上博士級研究員，累積10年研發經驗，獲得20項以上技術專利，持續進行產學合作創新。',
    icon: Microscope,
    color: 'indigo',
    stats: {
      value: '50+',
      label: '研發團隊'
    }
  }
];

const Features = () => {
 return (
   <section id="features" className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
     {/* 背景裝飾 */}
     <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
     <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent"></div>

     <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       {/* 標題區域 */}
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

       {/* 特色卡片區 */}
       <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
         {features.map((feature, index) => (
           <div 
             key={feature.name}
             className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
             style={{ animationDelay: `${index * 0.1}s` }}
           >
             {/* 背景漸變 */}
             <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}></div>
             
             {/* 圖標 */}
             <div className={`relative flex items-center justify-center w-16 h-16 rounded-xl bg-${feature.color}-100 mb-6 group-hover:scale-110 transition-transform duration-300`}>
               <feature.icon className={`w-8 h-8 text-${feature.color}-600`} />
             </div>

             {/* 內容 */}
             <div className="relative">
               <h3 className="text-xl font-bold text-gray-900 mb-3">
                 {feature.name}
               </h3>
               <p className="text-gray-600">
                 {feature.description}
               </p>
             </div>

             {/* 懸浮效果 */}
             <div className={`absolute inset-0 border-2 border-${feature.color}-500/0 group-hover:border-${feature.color}-500/20 rounded-2xl transition-colors duration-300`}></div>
           </div>
         ))}
       </div>

       {/* 底部裝飾 */}
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