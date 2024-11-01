import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { initialSections } from './initialContent';
import type { ContentState } from '../types/content';

export const useContentStore = create<ContentState>()(
  persist(
    (set) => ({
      sections: initialSections,
      
      updateSectionContent: (sectionId, content) =>
        set((state) => ({
          sections: state.sections.map((section) =>
            section.id === sectionId ? { ...section, content } : section
          ),
        })),

      updateSubsectionContent: (sectionId, subsectionId, content) =>
        set((state) => ({
          sections: state.sections.map((section) =>
            section.id === sectionId
              ? {
                  ...section,
                  subsections: section.subsections?.map((sub) =>
                    sub.id === subsectionId ? { ...sub, content } : sub
                  ),
                }
              : section
          ),
        })),

      addSection: (section) =>
        set((state) => ({
          sections: [...state.sections, section],
        })),

      removeSection: (sectionId) =>
        set((state) => ({
          sections: state.sections.filter((section) => section.id !== sectionId),
        })),

      addSubsection: (sectionId, subsection) =>
        set((state) => ({
          sections: state.sections.map((section) =>
            section.id === sectionId
              ? {
                  ...section,
                  subsections: [...(section.subsections || []), subsection],
                }
              : section
          ),
        })),

      removeSubsection: (sectionId, subsectionId) =>
        set((state) => ({
          sections: state.sections.map((section) =>
            section.id === sectionId
              ? {
                  ...section,
                  subsections: section.subsections?.filter(
                    (sub) => sub.id !== subsectionId
                  ),
                }
              : section
          ),
        })),
    }),
    {
      name: 'content-storage',
      version: 1,
    }
  )
);