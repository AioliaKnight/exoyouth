import { useCallback } from 'react';
import type { TextStyle } from './types';

export const useRichText = () => {
  const applyStyle = useCallback((content: string, selectedText: string, style: TextStyle): string => {
    if (!selectedText) return content;

    const styleMap: Record<TextStyle, (text: string) => string> = {
      bold: (text) => `**${text}**`,
      italic: (text) => `*${text}*`,
      underline: (text) => `_${text}_`,
      list: (text) => text.split('\n').map(line => `• ${line}`).join('\n'),
      heading: (text) => `## ${text}`,
      link: (text) => `[${text}](url)`
    };

    const styledText = styleMap[style]?.(selectedText) ?? selectedText;
    return content.replace(selectedText, styledText);
  }, []);

  const getStyledContent = useCallback((content: string): string => {
    const transformations = [
      { pattern: /\*\*(.*?)\*\*/g, replacement: '<strong>$1</strong>' },
      { pattern: /\*(.*?)\*/g, replacement: '<em>$1</em>' },
      { pattern: /_(.*?)_/g, replacement: '<u>$1</u>' },
      { pattern: /^• (.*)$/gm, replacement: '<li>$1</li>' },
      { pattern: /^## (.*$)/gm, replacement: '<h2 class="text-lg font-bold">$1</h2>' },
      { pattern: /\[(.*?)\]\((.*?)\)/g, replacement: '<a href="$2" class="text-blue-600 hover:underline">$1</a>' },
      { pattern: /\n/g, replacement: '<br>' }
    ];

    let html = content;
    transformations.forEach(({ pattern, replacement }) => {
      html = html.replace(pattern, replacement);
    });

    if (html.includes('<li>')) {
      html = html.replace(/(<li>.*?<\/li>)+/g, '<ul class="list-disc pl-4">$&</ul>');
    }

    return html;
  }, []);

  return {
    applyStyle,
    getStyledContent
  };
};