import { useState, useCallback } from 'react';

export const useExpandedSections = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const isExpanded = useCallback(
    (sectionId: string) => expandedSections.includes(sectionId),
    [expandedSections]
  );

  const toggleSection = useCallback((sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  }, []);

  return {
    expandedSections,
    isExpanded,
    toggleSection,
  };
};