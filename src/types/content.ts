export interface Subsection {
  id: string;
  title: string;
  content: string;
}

export interface ContentSection {
  id: string;
  title: string;
  content: string;
  description?: string;
  subsections?: Subsection[];
}

export interface ContentState {
  sections: ContentSection[];
  updateSectionContent: (sectionId: string, content: string) => void;
  updateSubsectionContent: (sectionId: string, subsectionId: string, content: string) => void;
  addSection: (section: ContentSection) => void;
  removeSection: (sectionId: string) => void;
  addSubsection: (sectionId: string, subsection: Subsection) => void;
  removeSubsection: (sectionId: string, subsectionId: string) => void;
}