import React, { FC } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer: FC<MarkdownRendererProps> = ({ content }) => {
  const html = DOMPurify.sanitize(marked.parse(content, { async: false }));
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
} 