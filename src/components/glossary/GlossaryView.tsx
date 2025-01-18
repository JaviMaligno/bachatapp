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
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Glossary - {sectionTitle}</h1>
      
      <div className="space-y-8">
        {glossary.map((section, idx) => (
          <div key={idx} className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">{section.category}</h2>
            <dl className="space-y-2">
              {section.terms.map((item, termIdx) => (
                <div key={termIdx} className="bg-white p-4 rounded-lg shadow-sm">
                  <dt className="font-medium text-gray-800">{item.term}</dt>
                  <dd className="text-gray-600 mt-1">{item.definition}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}; 