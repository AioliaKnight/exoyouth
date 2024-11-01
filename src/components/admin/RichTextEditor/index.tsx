import React, { useState } from 'react';
import Toolbar from './Toolbar';
import { useRichText } from './useRichText';
import type { TextStyle } from './types';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  minHeight?: string;
  placeholder?: string;
  showPreview?: boolean;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ 
  value, 
  onChange,
  minHeight = '120px',
  placeholder = '在此輸入內容...',
  showPreview = true
}) => {
  const { applyStyle, getStyledContent } = useRichText();
  const [selectedText, setSelectedText] = useState('');

  const handleSelect = () => {
    const selection = window.getSelection();
    if (selection) {
      setSelectedText(selection.toString());
    }
  };

  const handleStyleClick = (style: TextStyle) => {
    const newContent = applyStyle(value, selectedText, style);
    onChange(newContent);
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <Toolbar onStyleClick={handleStyleClick} disabled={!selectedText} />
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onSelect={handleSelect}
        className="w-full p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
        style={{ minHeight }}
        placeholder={placeholder}
      />
      {showPreview && (
        <div className="p-2 border-t border-gray-200 bg-gray-50">
          <div className="text-xs text-gray-500">預覽：</div>
          <div 
            className="mt-1 p-2 text-sm text-gray-700 prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: getStyledContent(value) }}
          />
        </div>
      )}
    </div>
  );
};