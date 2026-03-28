import { Metadata } from 'next';
import { getDictionary } from '../../../../get-dictionary';
import { services, getServiceBySlug, getRelatedServices } from '../../../../data/services';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import ServiceDetailContent from '@/components/ServiceDetailContent';

import NotFoundContent from '@/components/NotFoundContent';

type Props = {
  params: { lang: string; slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = params.lang as 'tr' | 'en';
  const service = getServiceBySlug(params.slug, lang);
  if (!service) return { title: 'Sayfa Bulunamadı | Megaeste' };
  const content = service[lang];
  return {
    title: content.seoTitle,
    description: content.seoDescription,
    alternates: {
      languages: {
        'tr': `/${service.tr.slug === params.slug ? `hizmetler/${service.tr.slug}` : `hizmetler/${service.tr.slug}`}`,
        'en': `/en/hizmetler/${service.en.slug}`,
      },
    },
  };
}

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  services.forEach(service => {
    params.push({ lang: 'tr', slug: service.tr.slug });
    params.push({ lang: 'en', slug: service.en.slug });
  });
  return params;
}

export default async function ServiceDetailPage({ params }: Props) {
  const lang = params.lang as 'tr' | 'en';
  const dict = await getDictionary(lang);
  const service = getServiceBySlug(params.slug, lang);

  if (!service) {
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

  const content = service[lang];
  const relatedServices = getRelatedServices(content.relatedSlugs, lang);

  return (
    <>
      <Header dict={dict?.header} lang={lang} />
      <main className="min-h-screen bg-white">
        <ServiceDetailContent
          service={service}
          content={content}
          relatedServices={relatedServices}
          lang={lang}
        />
      </main>
      <Footer dict={dict} lang={lang} />
      <MobileBottomNav dict={dict?.mobileNav} />
    </>
  );
}
