import { Metadata } from 'next';
import { getDictionary } from '../../../../get-dictionary';
import { blogPosts, getBlogBySlug, getRelatedPosts } from '../../../../data/blog-posts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import BlogDetailContent from '@/components/BlogDetailContent';

type Props = { params: { lang: string; slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = params.lang as 'tr' | 'en';
  const post = getBlogBySlug(params.slug, lang);
  if (!post) return { title: 'Not Found' };
  return {
    title: post[lang].seoTitle,
    description: post[lang].seoDescription,
  };
}

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  blogPosts.forEach(post => {
    params.push({ lang: 'tr', slug: post.tr.slug });
    params.push({ lang: 'en', slug: post.en.slug });
  });
  return params;
}

export default async function BlogDetailPage({ params }: Props) {
  const lang = params.lang as 'tr' | 'en';
  const dict = await getDictionary(lang);
  const post = getBlogBySlug(params.slug, lang);

  if (!post) return <div>Not Found</div>;

  const content = post[lang];
  const relatedPosts = getRelatedPosts(content.relatedSlugs, lang);

  return (
    <main className="min-h-screen bg-white">
      <Header dict={dict?.header} lang={lang} />
      <BlogDetailContent post={post} content={content} relatedPosts={relatedPosts} lang={lang} />
      <Footer dict={dict} lang={lang} />
      <MobileBottomNav dict={dict?.mobileNav} />
    </main>
  );
}
