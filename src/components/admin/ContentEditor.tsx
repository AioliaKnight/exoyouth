import React, { useState } from 'react';
import { Save, ChevronDown, ChevronUp } from 'lucide-react';
import RichTextEditor from './RichTextEditor';

interface ContentSection {
  id: string;
  title: string;
  content: string;
  description?: string;
  subsections?: {
    id: string;
    title: string;
    content: string;
  }[];
}

const ContentEditor = ({ onSave }: { onSave: () => void }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [sections, setSections] = useState<ContentSection[]>([
    {
      id: 'hero',
      title: '首頁橫幅',
      description: '首頁輪播區塊的主要標題與描述文字',
      content: '從細胞開始，煥發肌膚光采',
      subsections: [
        {
          id: 'hero-subtitle',
          title: '副標題',
          content: '專業級外泌體保養品'
        },
        {
          id: 'hero-description',
          title: '描述文字',
          content: 'ExoYouth以尖端外泌體科技，為您打造專屬的青春方程式'
        }
      ]
    },
    {
      id: 'about',
      title: '關於我們',
      description: '公司簡介與核心理念',
      content: 'ExoYouth 致力於尖端生物科技研發，專注於外泌體技術的創新與應用',
      subsections: [
        {
          id: 'about-mission',
          title: '企業使命',
          content: '以創新科技，推動台灣生技產業發展，為消費者帶來最優質的保養體驗'
        },
        {
          id: 'about-vision',
          title: '企業願景',
          content: '成為亞洲領先的外泌體技術研發與應用公司'
        }
      ]
    },
    {
      id: 'quality',
      title: '品質保證',
      description: '品質認證與規範說明',
      content: '堅持最高品質標準，提供最優質的產品',
      subsections: [
        {
          id: 'quality-cert',
          title: '認證說明',
          content: 'ISO 17025實驗室認證、PIC/S GMP製程認證、SGS品質檢測認證'
        },
        {
          id: 'quality-process',
          title: '製程管理',
          content: '全程溫控監測，確保產品品質穩定'
        }
      ]
    },
    {
      id: 'contact',
      title: '聯絡資訊',
      description: '客服與諮詢相關資訊',
      content: '專業團隊為您服務，提供完整技術支援與諮詢',
      subsections: [
        {
          id: 'contact-service',
          title: '服務時間',
          content: '週一至週六 10:00-20:00'
        },
        {
          id: 'contact-address',
          title: '公司地址',
          content: '台北市南港區研究院路二段'
        }
      ]
    }
  ]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const handleContentChange = (sectionId: string, content: string) => {
    setSections(prev => 
      prev.map(section => 
        section.id === sectionId
          ? { ...section, content }
          : section
      )
    );
  };

  const handleSubsectionChange = (sectionId: string, subsectionId: string, content: string) => {
    setSections(prev => 
      prev.map(section => 
        section.id === sectionId
          ? {
              ...section,
              subsections: section.subsections?.map(sub =>
                sub.id === subsectionId
                  ? { ...sub, content }
                  : sub
              )
            }
          : section
      )
    );
  };

  const handleSaveAll = () => {
    // 這裡可以添加保存到後端的邏輯
    onSave();
  };

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
          <div 
            key={section.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="text-left">
                <h3 className="text-lg font-medium text-gray-900">
                  {section.title}
                </h3>
                {section.description && (
                  <p className="mt-1 text-sm text-gray-500">
                    {section.description}
                  </p>
                )}
              </div>
              {expandedSections.includes(section.id) ? (
                <ChevronUp className="h-5 w-5 text-gray-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              )}
            </button>

            {expandedSections.includes(section.id) && (
              <div className="px-6 pb-6">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      主要內容
                    </label>
                    <RichTextEditor
                      value={section.content}
                      onChange={(content) => handleContentChange(section.id, content)}
                    />
                  </div>

                  {section.subsections && section.subsections.length > 0 && (
                    <div className="space-y-4">
                      <h4 className="text-sm font-medium text-gray-700">
                        子區塊內容
                      </h4>
                      {section.subsections.map((subsection) => (
                        <div key={subsection.id}>
                          <label className="block text-sm font-medium text-gray-600 mb-2">
                            {subsection.title}
                          </label>
                          <RichTextEditor
                            value={subsection.content}
                            onChange={(content) => 
                              handleSubsectionChange(section.id, subsection.id, content)
                            }
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentEditor;