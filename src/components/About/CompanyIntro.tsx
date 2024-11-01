import React from 'react';
import { Building2 } from 'lucide-react';
import { useContent } from '../../hooks/useContent';

const stats = [
  { value: '50+', label: '研發人員' },
  { value: '30+', label: '專利技術' },
  { value: '10+', label: '國際認證' },
  { value: '200+', label: '合作診所' }
];

const CompanyIntro = () => {
  const { content, subsections } = useContent('about');
  const mission = subsections.find(s => s.id === 'about-mission')?.content;
  const vision = subsections.find(s => s.id === 'about-vision')?.content;

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900">公司簡介</h2>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            {content}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
              alt="研發實驗室"
              className="rounded-2xl shadow-xl"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-2xl" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">企業使命</h3>
                <p className="text-blue-700">{mission}</p>
              </div>
              <div className="bg-rose-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-rose-900 mb-2">企業願景</h3>
                <p className="text-rose-700">{vision}</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-gray-50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyIntro;