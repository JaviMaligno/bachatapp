import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Section } from '../../types';

interface MainMenuProps {
  sections: Section[];
  onSectionSelect: (sectionId: string) => void;
}

export const MainMenu: React.FC<MainMenuProps> = ({ sections, onSectionSelect }) => (
  <div className="space-y-6 p-6">
    <h1 className="text-3xl font-bold text-gray-800 mb-8">Learn Bachata</h1>
    {sections.map((section) => (
      <button
        key={section.id}
        onClick={() => onSectionSelect(section.id)}
        className={`w-full p-6 rounded-xl ${section.color} hover:opacity-90 transition-all group flex justify-between items-center`}
      >
        <div>
          <h2 className="text-xl font-semibold text-black mb-2">{section.title}</h2>
          <p className="text-black/80">{section.description}</p>
        </div>
        <ChevronRight className="text-black w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity" />
      </button>
    ))}
  </div>
); 