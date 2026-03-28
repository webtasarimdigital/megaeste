import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import CategoryButtons from '@/components/CategoryButtons';
import AboutSection from '@/components/AboutSection';
import AboutVideoSection from '@/components/AboutVideoSection';
import PopularServicesArea from '@/components/PopularServicesArea';
import ServicesShowcase from '@/components/ServicesShowcase';
import QuickAppointment from '@/components/QuickAppointment';
import BlogSection from '@/components/BlogSection';
import FAQSection from '@/components/FAQSection';
import MobileBottomNav from '@/components/MobileBottomNav';
import Footer from '@/components/Footer';
import { getDictionary } from '../../get-dictionary';

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang as 'tr' | 'en');

  return (
    <main className="flex min-h-screen flex-col bg-gray-50 w-full overflow-x-hidden">
      
      {/* JSON-LD Structured Data for Home Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://megaeste.com/#organization",
                "name": "Megaeste Estetik ve Plastik Cerrahi",
                "url": "https://megaeste.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://megaeste.com/images/megaeste-logo-png.png",
                  "width": 600,
                  "height": 184
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+90-533-481-4098",
                  "contactType": "customer service",
                  "availableLanguage": ["Turkish", "English"]
                },
                "sameAs": [
                  "https://www.instagram.com/mega.estetik"
                ]
              },
              {
                "@type": "WebSite",
                "@id": "https://megaeste.com/#website",
                "url": "https://megaeste.com",
                "name": "Megaeste",
                "publisher": {
                  "@id": "https://megaeste.com/#organization"
                },
                "inLanguage": lang === 'tr' ? 'tr-TR' : 'en-US'
              }
            ]
          })
        }}
      />

      <Header dict={dict.header} lang={lang} />
      <HeroSlider dict={dict.hero} />
      
      {/* Top action area wrapper */}
      <div className="relative z-20 flex flex-col">
        <CategoryButtons dict={dict.header.nav} lang={lang} />
      </div>

      {/* Body content */}
      <div className="w-full flex flex-col -mt-4 xl:-mt-10 relative z-30">
        <AboutSection dict={dict} />
        <ServicesShowcase dict={dict} lang={lang} />
        <QuickAppointment lang={lang} />
      </div>

      <AboutVideoSection lang={lang} />
      
      <PopularServicesArea lang={lang} />
      <BlogSection dict={dict} />
      <FAQSection dict={dict} />

      <Footer dict={dict.header.nav} footerDict={dict.footer} />
      <MobileBottomNav dict={dict.mobileNav} />
    </main>
  );
}
