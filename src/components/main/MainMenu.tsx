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
        className={`w-full p-6 rounded-xl ${section.color} hover:opacity-90 transition-all group`}
      >
        {/* ... rest of your main menu button content ... */}
      </button>
    ))}
  </div>
); 