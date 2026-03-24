import { Metadata } from 'next';
import { getDictionary } from '../../../get-dictionary';
import { blogPosts } from '../../../data/blog-posts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import BlogListContent from '@/components/BlogListContent';

type Props = { params: { lang: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = params.lang as 'tr' | 'en';
  return {
    title: lang === 'tr' ? 'Blog | Megaeste Estetik ve Plastik Cerrahi' : 'Blog | Megaeste Aesthetic and Plastic Surgery',
    description: lang === 'tr'
      ? 'Saç ekimi, estetik cerrahi ve medikal estetik hakkında güncel blog yazıları.'
      : 'Current blog articles about hair transplant, aesthetic surgery and medical aesthetics.',
  };
}

export default async function BlogPage({ params }: Props) {
  const lang = params.lang as 'tr' | 'en';
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-white">
      <Header dict={dict?.header} lang={lang} />
      <BlogListContent posts={blogPosts} lang={lang} />
      <Footer dict={dict} lang={lang} />
      <MobileBottomNav dict={dict?.mobileNav} />
    </main>
  );
}
