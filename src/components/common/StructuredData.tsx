import React from 'react';
import { Helmet } from 'react-helmet-async';

// Base URL for links in structured data
const baseUrl = 'https://relationships-tests.vercel.app';

interface StructuredDataProps {
  type: 'home' | 'section' | 'lesson' | 'quiz' | 'glossary';
  data: any;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  let structuredData = {};

  switch (type) {
    case 'home':
      structuredData = generateHomeSchema();
      break;
    case 'section':
      structuredData = generateSectionSchema(data);
      break;
    case 'lesson':
      structuredData = generateLessonSchema(data);
      break;
    case 'quiz':
      structuredData = generateQuizSchema(data);
      break;
    case 'glossary':
      structuredData = generateGlossarySchema(data);
      break;
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

// Generate schema for home page
const generateHomeSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Bachata App",
    "description": "Learn Bachata History, Music & Dance through interactive lessons and quizzes",
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
};

// Generate schema for a section page
const generateSectionSchema = (section: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${section.title} - Bachata App`,
    "description": `Learn about ${section.title.toLowerCase()} in Bachata music, including lessons, quizzes, and a glossary of key terms.`,
    "itemListElement": [
      ...(section.lessons || []).map((lesson: any, index: number) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": lesson.title,
        "url": `${baseUrl}/section/${section.id}/lesson/${lesson.id}`
      })),
      ...(section.quizzes || []).map((quiz: any, index: number) => ({
        "@type": "ListItem",
        "position": (section.lessons?.length || 0) + index + 1,
        "name": quiz.title,
        "url": `${baseUrl}/section/${section.id}/quiz/${quiz.id}`
      }))
    ]
  };
};

// Generate schema for a lesson page
const generateLessonSchema = (data: any) => {
  const { section, lesson } = data;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": lesson?.title || "Bachata Lesson",
    "description": `Learn about ${lesson?.title?.toLowerCase() || 'bachata'} in this ${section.title.toLowerCase()} lesson.`,
    "author": {
      "@type": "Organization",
      "name": "Bachata App"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bachata App",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/favicon.webp`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/section/${section.id}/lesson/${lesson?.id}`
    }
  };
};

// Generate schema for a quiz page
const generateQuizSchema = (data: any) => {
  const { section, quiz } = data;
  return {
    "@context": "https://schema.org",
    "@type": "Quiz",
    "name": quiz.title,
    "description": `Test your knowledge with the ${quiz.title.toLowerCase()} quiz in the ${section.title.toLowerCase()} section.`,
    "educationalAlignment": {
      "@type": "AlignmentObject",
      "alignmentType": "educationalSubject",
      "targetName": "Music Education"
    },
    "about": {
      "@type": "Thing",
      "name": section.title
    }
  };
};

// Generate schema for a glossary page
const generateGlossarySchema = (data: any) => {
  const { section, glossary } = data;
  
  // Create a FAQ structure from glossary terms
  const faqEntries = glossary.flatMap((category: any) => 
    category.terms.map((term: any) => ({
      "@type": "Question",
      "name": term.term,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": term.definition
      }
    }))
  );
  
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqEntries
  };
}; 