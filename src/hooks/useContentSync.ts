import { useEffect, useCallback } from 'react';
import { useContentStore } from '../stores/contentStore';
import type { ContentSection } from '../types/content';

export const useContentSync = () => {
  const { 
    sections, 
    updateSectionContent, 
    updateSubsectionContent 
  } = useContentStore();

  const handleStorageChange = useCallback((e: StorageEvent) => {
    if (e.key === 'content-storage') {
      try {
        const newState = JSON.parse(e.newValue || '{}');
        if (newState.state?.sections) {
          newState.state.sections.forEach((section: ContentSection) => {
            updateSectionContent(section.id, section.content);
            section.subsections?.forEach(sub => {
              updateSubsectionContent(section.id, sub.id, sub.content);
            });
          });
        }
      } catch (error) {
        console.error('Error syncing content:', error);
      }
    }
  }, [updateSectionContent, updateSubsectionContent]);

  useEffect(() => {
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [handleStorageChange]);

  return { sections };
};