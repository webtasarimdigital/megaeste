import { Metadata } from 'next';
import { getDictionary } from '../../../get-dictionary';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import FloatingActionButtons from '@/components/FloatingActionButtons';
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
    <main className="min-h-screen bg-white">
      <Header dict={dict?.header} lang={lang} />
      <ContactContent dict={dict} lang={lang} />
      <Footer dict={dict?.footer} lang={lang} />
      <FloatingActionButtons lang={lang} />
      <MobileBottomNav dict={dict?.mobileNav} />
    </main>
  );
}
