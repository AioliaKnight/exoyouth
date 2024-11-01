import React from 'react';
import { Bold, Italic, List, Type, Link, Underline } from 'lucide-react';
import type { TextStyle } from './types';
import { cn } from '../../../lib/utils';

interface ToolbarButton {
  icon: typeof Bold;
  style: TextStyle;
  title: string;
  shortcut?: string;
}

interface ToolbarProps {
  onStyleClick: (style: TextStyle) => void;
  disabled: boolean;
}

const tools: ToolbarButton[] = [
  { icon: Bold, style: 'bold', title: '粗體', shortcut: 'Ctrl+B' },
  { icon: Italic, style: 'italic', title: '斜體', shortcut: 'Ctrl+I' },
  { icon: Underline, style: 'underline', title: '底線', shortcut: 'Ctrl+U' },
  { icon: List, style: 'list', title: '項目符號' },
  { icon: Type, style: 'heading', title: '標題' },
  { icon: Link, style: 'link', title: '連結', shortcut: 'Ctrl+K' }
];

const Toolbar: React.FC<ToolbarProps> = ({ onStyleClick, disabled }) => {
  return (
    <div className="flex items-center gap-1 p-2 border-b border-gray-200 bg-gray-50">
      {tools.map(({ icon: Icon, style, title, shortcut }) => (
        <button
          key={style}
          type="button"
          onClick={() => onStyleClick(style)}
          disabled={disabled}
          className={cn(
            "p-1.5 rounded transition-colors group relative",
            disabled 
              ? "opacity-50 cursor-not-allowed" 
              : "hover:bg-gray-200 active:bg-gray-300"
          )}
          title={shortcut ? `${title} (${shortcut})` : title}
        >
          <Icon className="h-4 w-4 text-gray-600" />
          
          {/* Tooltip */}
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {title}
            {shortcut && <span className="ml-1 text-gray-400">{shortcut}</span>}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Toolbar;