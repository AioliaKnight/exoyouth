import { useContentStore } from '../stores/contentStore';

export const useContent = (sectionId: string) => {
  const { sections } = useContentStore();
  const section = sections.find(s => s.id === sectionId);

  return {
    content: section?.content || '',
    subsections: section?.subsections || [],
    description: section?.description || ''
  };
};