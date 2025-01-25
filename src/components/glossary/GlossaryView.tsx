import React from 'react';
import { GlossarySection } from '../../types/Lesson';
import { BackButton } from '../common/BackButton';

interface GlossaryViewProps {
  glossary: GlossarySection[];
  sectionTitle: string;
  onBack: () => void;
}

export const GlossaryView: React.FC<GlossaryViewProps> = ({ 
  glossary, 
  sectionTitle,
  onBack 
}) => {
  return (
    <div className="p-6">
      <BackButton onClick={onBack} label={`Back to ${sectionTitle}`} />
      
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Glossary</h1>
      
      <div className="space-y-8">
        {glossary.map((section) => (
          <div key={section.category}>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              {section.category}
            </h2>
            
            <div className="space-y-4">
              {section.terms.map((term) => (
                <div 
                  key={term.term} 
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">{term.term}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{term.definition}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 