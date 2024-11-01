import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* ExoYouth Section */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold">ExoYouth</h3>
            <p className="text-gray-400 leading-relaxed">
              致力於推動台灣生技技術發展，創造世界級的品質標準
            </p>
          </div>
          
          {/* Contact Info Section */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold">聯絡資訊</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400 hover:text-gray-200 transition-colors">
                <Phone className="h-5 w-5 mr-3" />
                <span>0800-888-888</span>
              </div>
              <div className="flex items-center text-gray-400 hover:text-gray-200 transition-colors">
                <Mail className="h-5 w-5 mr-3" />
                <span>contact@exoyouth.com</span>
              </div>
              <div className="flex items-center text-gray-400 hover:text-gray-200 transition-colors">
                <MapPin className="h-5 w-5 mr-3" />
                <span>台北市南港區研究院路二段</span>
              </div>
            </div>
          </div>

          {/* Certification Section */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-semibold">認證資訊</h3>
            <div className="text-gray-400 text-sm space-y-2">
              <p className="hover:text-gray-200 transition-colors">ISO 17025實驗室認證</p>
              <p className="hover:text-gray-200 transition-colors">PIC/S GMP製程認證</p>
              <p className="hover:text-gray-200 transition-colors">SGS品質檢測認證</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} ExoYouth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
