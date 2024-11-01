import React, { useState, useCallback } from 'react';
import { ChevronDown, ChevronUp, Plus, Trash2 } from 'lucide-react';
import { useContentStore } from '../../../stores/contentStore';
import RichTextEditor from '../RichTextEditor';
import SubsectionEditor from './SubsectionEditor';
import { useExpandedSections } from '../../../hooks/useExpandedSections';
import { useToast } from '../../ui/use-toast';
import type { ContentSection as ContentSectionType, Subsection } from '../../../types/content';

interface ContentSectionProps {
  section: ContentSectionType;
}

const ContentSection: React.FC<ContentSectionProps> = ({ section }) => {
  const { updateSectionContent, removeSection, addSubsection } = useContentStore();
  const { isExpanded, toggleSection } = useExpandedSections();
  const { toast } = useToast();
  const [showAddSubsection, setShowAddSubsection] = useState(false);
  const [newSubsection, setNewSubsection] = useState({ title: '', content: '' });

  const handleContentChange = useCallback((content: string) => {
    updateSectionContent(section.id, content);
  }, [section.id, updateSectionContent]);

  const handleRemoveSection = useCallback(() => {
    if (window.confirm('確定要刪除此區塊嗎？此操作無法復原。')) {
      removeSection(section.id);
      toast({
        title: '刪除成功',
        description: '區塊已成功刪除',
        duration: 3000,
      });
    }
  }, [section.id, removeSection, toast]);

  const handleAddSubsection = useCallback(() => {
    if (!newSubsection.title || !newSubsection.content) {
      toast({
        title: '請填寫完整',
        description: '標題和內容都是必填項目',
        duration: 3000,
      });
      return;
    }

    const subsection: Subsection = {
      id: `${section.id}-${Date.now()}`,
      title: newSubsection.title,
      content: newSubsection.content,
    };

    addSubsection(section.id, subsection);
    setNewSubsection({ title: '', content: '' });
    setShowAddSubsection(false);
    toast({
      title: '新增成功',
      description: '子區塊已成功新增',
      duration: 3000,
    });
  }, [section.id, newSubsection, addSubsection, toast]);

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors">
        <button
          onClick={() => toggleSection(section.id)}
          className="flex-1 flex items-center text-left"
        >
          <div>
            <h3 className="text-lg font-medium text-gray-900">
              {section.title}
            </h3>
            {section.description && (
              <p className="mt-1 text-sm text-gray-500">
                {section.description}
              </p>
            )}
          </div>
          {isExpanded(section.id) ? (
            <ChevronUp className="h-5 w-5 text-gray-400 ml-2" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-400 ml-2" />
          )}
        </button>
        <button
          onClick={handleRemoveSection}
          className="ml-4 p-2 text-gray-400 hover:text-red-500 transition-colors"
          title="刪除區塊"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>

      {isExpanded(section.id) && (
        <div className="px-6 pb-6">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                主要內容
              </label>
              <RichTextEditor
                key={section.id}
                value={section.content}
                onChange={handleContentChange}
              />
            </div>

            <div className="space-y-4">
              {section.subsections && section.subsections.length > 0 && (
                <SubsectionEditor
                  sectionId={section.id}
                  subsections={section.subsections}
                />
              )}

              {!showAddSubsection ? (
                <button
                  onClick={() => setShowAddSubsection(true)}
                  className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  新增子區塊
                </button>
              ) : (
                <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      子區塊標題
                    </label>
                    <input
                      type="text"
                      value={newSubsection.title}
                      onChange={(e) => setNewSubsection(prev => ({ ...prev, title: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="輸入標題..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      子區塊內容
                    </label>
                    <RichTextEditor
                      value={newSubsection.content}
                      onChange={(content) => setNewSubsection(prev => ({ ...prev, content }))}
                    />
                  </div>
                  <div className="flex justify-end space-x-3">
                    <button
                      onClick={() => setShowAddSubsection(false)}
                      className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      取消
                    </button>
                    <button
                      onClick={handleAddSubsection}
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                    >
                      確認新增
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};