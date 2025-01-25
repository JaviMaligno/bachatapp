import React from 'react';
import { ChevronRight, Ban } from 'lucide-react';
import { Section } from '../../types';

interface MainMenuProps {
  sections: Section[];
  onSectionSelect: (sectionId: string) => void;
}

export const MainMenu: React.FC<MainMenuProps> = ({ sections, onSectionSelect }) => (
  <div className="space-y-6 p-6">
    <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Learn Bachata</h1>
    {sections.map((section) => (
      <div key={section.id} className="relative">
        <button
          onClick={() => !section.comingSoon && onSectionSelect(section.id)}
          className={`w-full p-6 rounded-xl ${section.color} 
            ${section.comingSoon ? 'opacity-60 cursor-not-allowed' : 'hover:opacity-90'} 
            transition-all group flex justify-between items-center`}
        >
          <div>
            <h2 className="text-xl font-semibold text-black mb-2">{section.title}</h2>
            <p className="text-black/80">{section.description}</p>
          </div>
          <ChevronRight className="text-black w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity" />
        </button>
        
        {section.comingSoon && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-2 bg-black/60 text-white px-4 py-2 rounded-lg">
              <Ban className="w-5 h-5" />
              <span className="font-semibold">Coming Soon</span>
            </div>
          </div>
        )}
      </div>
    ))}
  </div>
); 