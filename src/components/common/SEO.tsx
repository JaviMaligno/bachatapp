import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
  pathname?: string;
}

// Base domain for canonical URLs and OG tags
const baseUrl = 'https://relationships-tests.vercel.app';

export const SEO: React.FC<SEOProps> = ({
  title = 'Bachata App - Learn Bachata History, Music & Dance',
  description = 'Explore the history, music (instruments, rhythm, structure), and dance of Bachata through interactive lessons and quizzes.',
  image,
  article = false,
  pathname,
}) => {
  const location = useLocation();
  const currentPath = pathname || location.pathname;
  const url = `${baseUrl}${currentPath}`;
  
  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={`${baseUrl}${image}`} />}
      
      {/* Twitter tags */}
      {image && <meta name="twitter:card" content="summary_large_image" />}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={`${baseUrl}${image}`} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
}; 