import React from 'react';
import { Microscope, Beaker, TestTube2 } from 'lucide-react';

const facilities = [
  {
    title: '無塵實驗室',
    description: '符合 ISO Class 7 標準',
    image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800',
    icon: Microscope
  },
  {
    title: '研發中心',
    description: '先進研發設備',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    icon: Beaker
  },
  {
    title: '分析實驗室',
    description: '高精密分析儀器',
    image: 'https://images.unsplash.com/photo-1581093458791-9d42d2c8e356?auto=format&fit=crop&q=80&w=800',
    icon: TestTube2
  }
];

const Laboratory = () => {
  return (
    <section id="lab" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Microscope className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900">研發設施</h2>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            配備先進研發設備，打造專業研發環境
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility) => (
            <div 
              key={facility.title} 
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <facility.icon className="h-8 w-8 text-white mb-3 transform group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-white mb-2">{facility.title}</h3>
                  <p className="text-white/90">{facility.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            我們的實驗室配備最先進的研發設備，包括高精度分析儀器、無塵操作環境，
            以及完整的品質監控系統，確保每一個產品都能達到最高品質標準。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Laboratory;