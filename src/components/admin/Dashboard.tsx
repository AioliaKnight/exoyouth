import React, { useState } from 'react';
import { LayoutGrid, Package, FileText, Settings, Image } from 'lucide-react';
import Sidebar from './Sidebar';
import ContentEditor from './ContentEditor';
import ProductManager from './ProductManager';
import ImageManager from './ImageManager';
import { useToast } from '../ui/use-toast';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('content');
  const { toast } = useToast();

  const menuItems = [
    { id: 'content', label: '內容管理', icon: FileText },
    { id: 'products', label: '產品管理', icon: Package },
    { id: 'images', label: '圖片管理', icon: Image },
    { id: 'settings', label: '系統設定', icon: Settings },
  ];

  const handleSave = () => {
    toast({
      title: "儲存成功",
      description: "您的變更已成功儲存",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar 
          menuItems={menuItems} 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />
        
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {activeSection === 'content' && (
              <ContentEditor onSave={handleSave} />
            )}
            {activeSection === 'products' && (
              <ProductManager onSave={handleSave} />
            )}
            {activeSection === 'images' && (
              <ImageManager />
            )}
            {activeSection === 'settings' && (
              <div className="text-center text-gray-500 mt-20">
                系統設定功能開發中...
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;