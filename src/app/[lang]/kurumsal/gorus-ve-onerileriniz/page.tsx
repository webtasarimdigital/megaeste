import { Metadata } from 'next';
import React from 'react';
import FeedbackContent from '@/components/FeedbackContent';

export const metadata: Metadata = {
  title: 'Görüş ve Önerileriniz | Megaeste',
  description: 'Megaeste hakkında görüş ve önerilerinizi bizimle paylaşın. Fikirleriniz bizim için değerlidir.',
};

export default function FeedbackPage({ params }: { params: { lang: string } }) {
  // Use 'tr' as fallback if empty
  const currentLang = params?.lang || 'tr';
  
  return <FeedbackContent lang={currentLang} />;
}
