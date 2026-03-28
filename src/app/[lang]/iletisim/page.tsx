import { Metadata } from 'next';
import { getDictionary } from '../../../get-dictionary';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import ContactContent from '@/components/ContactContent';

type Props = {
  params: { lang: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = params.lang === 'en' ? 'en' : 'tr';
  
  return {
    title: lang === 'tr' ? 'İletişim | Megaeste' : 'Contact Us | Megaeste',
    description: lang === 'tr' 
      ? 'Megaeste Estetik Merkezi iletişim bilgileri, adres, telefon ve mesaj formu.' 
      : 'Megaeste Aesthetics Center contact information, address, phone and message form.',
  };
}

export default async function ContactPage({ params }: Props) {
  const lang = params.lang === 'en' ? 'en' : 'tr';
  const dict = await getDictionary(lang);

  return (
    <>
      <Header dict={dict?.header} lang={lang} />
      <main className="min-h-screen bg-white">
        <ContactContent dict={dict} lang={lang} />
      </main>
      <Footer dict={dict?.footer} lang={lang} />
      <MobileBottomNav dict={dict?.mobileNav} />
    </>

  );
}
