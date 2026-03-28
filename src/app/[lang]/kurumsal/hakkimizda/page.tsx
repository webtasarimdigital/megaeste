import React from 'react';
import { getDictionary } from '../../../../get-dictionary';
import AboutUsContent from '../../../../components/AboutUsContent';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import MobileBottomNav from '../../../../components/MobileBottomNav';

export async function generateMetadata({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang as 'tr' | 'en');
  return {
    title: `${dict.aboutUs?.title || (lang === 'tr' ? 'Hakkımızda' : 'About Us')} | Megaeste Klinik`,
    description: dict.aboutUs?.description,
  };
}

export default async function AboutUsPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang as 'tr' | 'en');
  
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Header dict={dict?.header} lang={lang} />
      <div className="flex-grow">
        <AboutUsContent dict={dict} lang={lang} />
      </div>
      <Footer dict={dict} lang={lang} />
      <MobileBottomNav dict={dict?.mobileNav} />
    </main>
  );
}
