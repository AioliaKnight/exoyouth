import React, { useState } from 'react';
import { Image as ImageIcon, Upload, X } from 'lucide-react';
import { useToast } from '../ui/use-toast';

interface ImageSection {
  id: string;
  name: string;
  description: string;
  currentImage: string;
  location: string;
}

const imageSections: ImageSection[] = [
  {
    id: 'hero-1',
    name: '首頁主視覺 1',
    description: '首頁輪播第一張圖片',
    currentImage: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908',
    location: '首頁 > 主視覺輪播'
  },
  {
    id: 'hero-2',
    name: '首頁主視覺 2',
    description: '首頁輪播第二張圖片',
    currentImage: 'https://images.unsplash.com/photo-1614859324967-1973c3a5967e',
    location: '首頁 > 主視覺輪播'
  },
  {
    id: 'lab-1',
    name: '實驗室環境 1',
    description: '無塵實驗室環境照片',
    currentImage: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074',
    location: '關於我們 > 研發設施'
  },
  {
    id: 'lab-2',
    name: '實驗室設備',
    description: '精密研究設備照片',
    currentImage: 'https://images.unsplash.com/photo-1576086213369-97a306d36557',
    location: '關於我們 > 研發設施'
  },
  {
    id: 'contact',
    name: '諮詢服務圖片',
    description: '客戶服務區塊背景圖片',
    currentImage: 'https://images.unsplash.com/photo-1576086213369-97a306d36557',
    location: '聯絡我們'
  }
];

const ImageManager = () => {
  const { toast } = useToast();
  const [sections, setSections] = useState<ImageSection[]>(imageSections);
  const [selectedImage, setSelectedImage] = useState<ImageSection | null>(null);

  const handleImageUpdate = (id: string, newUrl: string) => {
    setSections(prev => 
      prev.map(section => 
        section.id === id 
          ? { ...section, currentImage: newUrl }
          : section
      )
    );

    toast({
      title: "圖片更新成功",
      description: "新的圖片已成功設定",
      duration: 3000,
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">圖片管理</h2>
          <p className="mt-2 text-gray-600">管理網站各區塊的圖片內容</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section) => (
          <div 
            key={section.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-100">
              <img
                src={section.currentImage}
                alt={section.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {section.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {section.description}
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    位置：{section.location}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedImage(section)}
                  className="inline-flex items-center px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 text-sm font-medium hover:bg-blue-100 transition-colors"
                >
                  <Upload className="h-4 w-4 mr-1.5" />
                  更換圖片
                </button>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center text-sm text-gray-500">
                  <ImageIcon className="h-4 w-4 mr-1.5" />
                  目前圖片：
                  <a 
                    href={section.currentImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 text-blue-600 hover:text-blue-700 truncate"
                  >
                    {section.currentImage}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 更換圖片對話框 */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">
                更換圖片 - {selectedImage.name}
              </h3>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  新圖片網址
                </label>
                <input
                  type="url"
                  placeholder="輸入圖片URL"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  onChange={(e) => {
                    // 這裡可以添加圖片預覽邏輯
                  }}
                />
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-blue-800 mb-2">圖片要求</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• 建議尺寸：1920 x 1080 像素</li>
                  <li>• 檔案格式：JPG, PNG</li>
                  <li>• 檔案大小：不超過 2MB</li>
                </ul>
              </div>

              <div className="flex justify-end space-x-4 mt-6">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  取消
                </button>
                <button
                  onClick={() => {
                    // 這裡添加更新圖片的邏輯
                    handleImageUpdate(selectedImage.id, "新的圖片URL");
                    setSelectedImage(null);
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  確認更換
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageManager;