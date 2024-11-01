import React from 'react';
import { Trash2 } from 'lucide-react';
import RichTextEditor from '../RichTextEditor';
import { useContentStore } from '../../../stores/contentStore';
import { useToast } from '../../ui/use-toast';
import type { Subsection } from '../../../types/content';

interface SubsectionEditorProps {
  sectionId: string;
  subsections: Subsection[];
}

const SubsectionEditor: React.FC<SubsectionEditorProps> = ({
  sectionId,
  subsections
}) => {
  const { updateSubsectionContent, removeSubsection } = useContentStore();
  const { toast } = useToast();

  const handleContentChange = (subsectionId: string, content: string) => {
    updateSubsectionContent(sectionId, subsectionId, content);
  };

  const handleRemoveSubsection = (subsectionId: string, title: string) => {
    if (window.confirm(`確定要刪除「${title}」子區塊嗎？此操作無法復原。`)) {
      removeSubsection(sectionId, subsectionId);
      toast({
        title: '刪除成功',
        description: '子區塊已成功刪除',
        duration: 3000,
      });
    }
  };

  return (
    <div className="space-y-6">
      <h4 className="text-sm font-medium text-gray-700">
        子區塊內容
      </h4>
      {subsections.map((subsection) => (
        <div key={subsection.id} className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium text-gray-600">
              {subsection.title}
            </label>
            <button
              onClick={() => handleRemoveSubsection(subsection.id, subsection.title)}
              className="p-1 text-gray-400 hover:text-red-500 transition-colors"
              title="刪除子區塊"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
          <RichTextEditor
            value={subsection.content}
            onChange={(content) => handleContentChange(subsection.id, content)}
          />
        </div>
      ))}
    </div>
  );
};

export default SubsectionEditor;