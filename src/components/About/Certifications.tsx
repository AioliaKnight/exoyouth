import React from 'react';
import { Award, Shield } from 'lucide-react';

const certifications = [
  { name: 'ISO 17025', description: '實驗室認證' },
  { name: 'PIC/S GMP', description: '製程認證' },
  { name: 'SGS', description: '品質檢測認證' },
  { name: 'TAF', description: '實驗室認證' }
];

const Certifications = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900">認證資質</h2>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            符合國際標準，獲得多項權威認證
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert) => (
            <div key={cert.name} className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-green-500 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">{cert.name}</h3>
              </div>
              <p className="text-gray-600">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;