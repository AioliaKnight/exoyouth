import React, { useCallback } from 'react';
import { Save } from 'lucide-react';
import ContentSection from './ContentSection';
import { useContentStore } from '../../../stores/contentStore';
import { useContentSync } from '../../../hooks/useContentSync';
import { useToast } from '../../ui/use-toast';

const ContentEditor = ({ onSave }: { onSave: () => void }) => {
  const { sections } = useContentSync();
  const { toast } = useToast();

  const handleSaveAll = useCallback(() => {
    onSave();
    toast({
      title: "儲存成功",
      description: "所有內容已更新",
      duration: 3000,
    });
  }, [onSave, toast]);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">內容管理</h2>
          <p className="mt-2 text-gray-600">管理網站各區塊的文字內容</p>
        </div>
        <button
          onClick={handleSaveAll}
          className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          <Save className="h-4 w-4 mr-2" />
          儲存所有變更
        </button>
      </div>

      <div className="space-y-6">
        {sections.map((section) => (
          <ContentSection 
            key={section.id} 
            section={section}
          />
        ))}
      </div>
    </div>
  );
};