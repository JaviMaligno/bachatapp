import React from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const html = DOMPurify.sanitize(marked(content));
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
} 