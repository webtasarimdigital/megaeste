import { Metadata } from 'next';
import { getDictionary } from '../../../get-dictionary';
import { doctors } from '../../../data/doctors';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import DoctorListContent from '@/components/DoctorListContent';

type Props = { params: { lang: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = params.lang as 'tr' | 'en';
  return {
    title: lang === 'tr' ? 'Hekimlerimiz | Megaeste Estetik ve Plastik Cerrahi' : 'Our Doctors | Megaeste Aesthetic and Plastic Surgery',
    description: lang === 'tr'
      ? 'Megaeste kliniğinin deneyimli hekim kadrosunu tanıyın. Plastik cerrahi, dermatoloji ve saç ekimi uzmanları.'
      : 'Meet the experienced medical team of Megaeste clinic. Plastic surgery, dermatology and hair transplant specialists.',
  };
}

export default async function DoctorsPage({ params }: Props) {
  const lang = params.lang as 'tr' | 'en';
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-white">
      <Header dict={dict?.header} lang={lang} />
      <DoctorListContent doctors={doctors} lang={lang} />
      <Footer dict={dict} lang={lang} />
      <MobileBottomNav dict={dict?.mobileNav} />
    </main>
  );
}
