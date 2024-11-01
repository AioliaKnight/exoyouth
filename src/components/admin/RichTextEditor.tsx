import React from 'react';
import { Bold, Italic, List, Type } from 'lucide-react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="flex items-center gap-1 p-2 border-b border-gray-200 bg-gray-50">
        <button
          type="button"
          className="p-1.5 rounded hover:bg-gray-200 transition-colors"
          title="粗體"
        >
          <Bold className="h-4 w-4 text-gray-600" />
        </button>
        <button
          type="button"
          className="p-1.5 rounded hover:bg-gray-200 transition-colors"
          title="斜體"
        >
          <Italic className="h-4 w-4 text-gray-600" />
        </button>
        <button
          type="button"
          className="p-1.5 rounded hover:bg-gray-200 transition-colors"
          title="項目符號"
        >
          <List className="h-4 w-4 text-gray-600" />
        </button>
        <button
          type="button"
          className="p-1.5 rounded hover:bg-gray-200 transition-colors"
          title="字體大小"
        >
          <Type className="h-4 w-4 text-gray-600" />
        </button>
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full min-h-[120px] p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
        placeholder="在此輸入內容..."
      />
    </div>
  );
};

export default RichTextEditor;