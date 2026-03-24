import { Metadata } from 'next';
import { getDictionary } from '../../../get-dictionary';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import NotFoundContent from '@/components/NotFoundContent';

type Props = {
  params: { lang: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = params.lang === 'en' ? 'en' : 'tr';
  const dict = await getDictionary(lang);
  return {
    title: `${dict.notFound?.title || '404'} - ${dict.notFound?.subtitle || 'Sayfa Bulunamadı'} | Megaeste`,
    description: dict.notFound?.message || 'Aradığınız sayfa bulunamadı.',
    robots: {
      index: false,
      follow: false,
    }
  };
}

export default async function CatchAllNotFoundPage({ params }: Props) {
  const lang = params.lang === 'en' ? 'en' : 'tr';
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header dict={dict?.header} lang={lang} />
      <div className="flex-grow">
        <NotFoundContent dict={dict} lang={lang} />
      </div>
      <Footer dict={dict} lang={lang} />
      <MobileBottomNav dict={dict?.mobileNav} />
    </main>
  );
}
