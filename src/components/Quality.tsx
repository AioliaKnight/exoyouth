import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const qualityPoints = [
  'ISO 17025實驗室認證',
  'PIC/S GMP製程認證',
  'SGS品質檢測認證',
  'TAF實驗室認證',
  '全程-80°C溫控',
  '即時溫度監測',
  'GPS定位追蹤',
  '48小時到貨保證',
];

const Quality = () => {
  return (
    <section id="quality" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">
            品質保證，值得您的信賴
          </h2>
          <p className="mt-4 max-w-3xl text-base md:text-lg text-gray-600 mx-auto">
            我們的產品經過嚴格的國際標準認證，從生產到交付，全程細心呵護，只為確保您能擁有最優質的體驗。卓越品質，始終如一。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {qualityPoints.map((point, index) => (
            <div 
              key={index}
              className="flex items-center p-5 bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-105"
            >
              <CheckCircle2 className="h-8 w-8 text-green-600 mr-4 flex-shrink-0" />
              <span className="text-gray-800 font-semibold text-lg md:text-xl leading-snug">
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quality;
