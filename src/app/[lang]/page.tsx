import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import CategoryButtons from '@/components/CategoryButtons';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import BlogSection from '@/components/BlogSection';
import FAQSection from '@/components/FAQSection';
import MobileBottomNav from '@/components/MobileBottomNav';
import Footer from '@/components/Footer';
import { getDictionary } from '../../get-dictionary';

export default async function Home({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang as 'tr' | 'en');

  return (
    <main className="flex min-h-screen flex-col bg-gray-50 w-full overflow-x-hidden">
      <Header dict={dict.header} lang={lang} />
      <HeroSlider dict={dict.hero} />
      
      {/* Top action area wrapper */}
      <div className="relative z-20 flex flex-col">
        <CategoryButtons dict={dict.header.nav} />
      </div>

      {/* Body content */}
      <div className="w-full flex flex-col -mt-4 xl:-mt-10 relative z-30">
        <AboutSection dict={dict} />
        <ServicesSection dict={dict} />
      </div>

      <BlogSection dict={dict} />
      <FAQSection dict={dict} />

      <Footer dict={dict.header.nav} footerDict={dict.footer} />
      <MobileBottomNav dict={dict.mobileNav} />
    </main>
  );
}
