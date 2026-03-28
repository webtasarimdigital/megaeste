/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata } from 'next';
import { getDictionary } from '../../../../get-dictionary';
import { services } from '../../../../data/services';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import NotFoundContent from '@/components/NotFoundContent';
import CategoryDetailContent from '@/components/CategoryDetailContent';

type Props = {
  params: { lang: string; slug: string };
};

const categoriesMap: Record<string, any> = {
  'sac-ekimi': {
    titleKey: 'hairTransplant',
    bgImage: '/images/services/dhi-sac-ekimi.png',
  },
  'plastik-cerrahi': {
    titleKey: 'plasticSurgery',
    bgImage: '/images/services/burun-estetigi.png',
  },
  'medikal-estetik': {
    titleKey: 'medicalAesthetics',
    bgImage: '/images/services/medikal-cilt-bakimi.png',
  },
  'epilasyon': {
    titleKey: 'epilation',
    bgImage: '/images/services/lazer-epilasyon.png',
  },
  // English slugs mapping
  'hair-transplant': {
    titleKey: 'hairTransplant',
    bgImage: '/images/services/dhi-sac-ekimi.png',
  },
  'plastic-surgery': {
    titleKey: 'plasticSurgery',
    bgImage: '/images/services/burun-estetigi.png',
  },
  'medical-aesthetics': {
    titleKey: 'medicalAesthetics',
    bgImage: '/images/services/medikal-cilt-bakimi.png',
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = params.lang as 'tr' | 'en';
  const slug = params.slug;
  const categoryProps = categoriesMap[slug];

  if (!categoryProps) return { title: 'Sayfa Bulunamadı | Megaeste' };
  
  const dict = await getDictionary(lang);
  const title = (dict?.header?.nav as any)?.[categoryProps.titleKey]?.title || 'Kategori';

  return {
    title: `${title} | Megaeste Klinik`,
    description: `${title} kategorisi altındaki tüm tedavilerimiz.`,
  };
}

export async function generateStaticParams() {
  return [
    { lang: 'tr', slug: 'sac-ekimi' },
    { lang: 'tr', slug: 'plastik-cerrahi' },
    { lang: 'tr', slug: 'medikal-estetik' },
    { lang: 'tr', slug: 'epilasyon' },
    { lang: 'en', slug: 'hair-transplant' },
    { lang: 'en', slug: 'plastic-surgery' },
    { lang: 'en', slug: 'medical-aesthetics' },
    { lang: 'en', slug: 'epilation' },
  ];
}

export default async function CategoryPage({ params }: Props) {
  const lang = params.lang as 'tr' | 'en';
  const dict = await getDictionary(lang);
  const slug = params.slug;
  const categoryProps = categoriesMap[slug];

  if (!categoryProps) {
    return (
      <>
        <Header dict={dict?.header} lang={lang} />
        <main className="min-h-screen bg-white flex flex-col">
          <div className="flex-grow">
            <NotFoundContent dict={dict} lang={lang} />
          </div>
        </main>
        <Footer dict={dict} lang={lang} />
        <MobileBottomNav dict={dict?.mobileNav} />
      </>
    );
  }

  // Find all services matching this category slug
  const servicesList = services.filter((s: any) => s[lang].categorySlug === slug);

  const categoryTitle = (dict?.header?.nav as any)?.[categoryProps.titleKey]?.title || 'Kategori';
  const subTitle = dict?.services?.subtitle || 'Size Özel Gelişmiş Tedavi Yöntemleri';

  return (
    <>
      <Header dict={dict?.header} lang={lang} />
      <main className="min-h-screen bg-[#f8fafc] flex flex-col">
        <CategoryDetailContent
          categorySlug={slug}
          categoryTitle={categoryTitle}
          subTitle={subTitle}
          bgImage={categoryProps.bgImage}
          servicesList={servicesList}
          lang={lang}
        />
      </main>
      <Footer dict={dict} lang={lang} />
      <MobileBottomNav dict={dict?.mobileNav} />
    </>
  );
}
