import { Metadata } from 'next';
import { getDictionary } from '../../../../get-dictionary';
import { doctors, getDoctorBySlug } from '../../../../data/doctors';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import DoctorDetailContent from '@/components/DoctorDetailContent';

type Props = { params: { lang: string; slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = params.lang as 'tr' | 'en';
  const doctor = getDoctorBySlug(params.slug, lang);
  if (!doctor) return { title: 'Not Found' };
  return {
    title: doctor[lang].seoTitle,
    description: doctor[lang].seoDescription,
  };
}

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  doctors.forEach(doc => {
    params.push({ lang: 'tr', slug: doc.tr.slug });
    params.push({ lang: 'en', slug: doc.en.slug });
  });
  return params;
}

export default async function DoctorDetailPage({ params }: Props) {
  const lang = params.lang as 'tr' | 'en';
  const dict = await getDictionary(lang);
  const doctor = getDoctorBySlug(params.slug, lang);

  if (!doctor) return <div>Not Found</div>;

  return (
    <main className="min-h-screen bg-white">
      <Header dict={dict?.header} lang={lang} />
      <DoctorDetailContent doctor={doctor} lang={lang} />
      <Footer dict={dict} lang={lang} />
      <MobileBottomNav dict={dict?.mobileNav} />
    </main>
  );
}
