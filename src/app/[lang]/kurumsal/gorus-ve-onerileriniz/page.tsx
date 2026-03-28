import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import FeedbackContent from '@/components/FeedbackContent';
import { getDictionary } from '../../../../get-dictionary';

export const metadata: Metadata = {
  title: 'Görüş ve Önerileriniz | Megaeste',
  description: 'Megaeste hakkında görüş ve önerilerinizi bizimle paylaşın. Fikirleriniz bizim için değerlidir.',
};

export default async function FeedbackPage({ params }: { params: { lang: string } }) {
  const currentLang = params?.lang || 'tr';
  const dict = await getDictionary(currentLang as 'tr' | 'en');

  return (
    <>
      <Header dict={dict} lang={currentLang} />
      <main className="flex min-h-screen flex-col bg-gray-50 w-full overflow-x-hidden">
        <FeedbackContent dict={dict} lang={currentLang} />
      </main>
      <Footer dict={dict} lang={currentLang} />
      <MobileBottomNav dict={dict?.mobileNav} />
    </>

  );
}
