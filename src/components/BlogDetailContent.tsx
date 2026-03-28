'use client';
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { BlogPost } from '@/data/blog-posts';
import Link from 'next/link';
import { FaCalendarAlt, FaUserMd, FaArrowLeft } from 'react-icons/fa';

interface Props {
  post: BlogPost;
  relatedPosts: BlogPost[];
  lang: 'tr' | 'en';
}

export default function BlogDetailContent({ post, relatedPosts, lang }: Props) {
  const content = post[lang];
  const backText = lang === 'en' ? 'Back to Blog' : 'Bloga Dön';
  const relatedText = lang === 'en' ? 'Related Articles' : 'İlgili Makaleler';

  // Basic markdown to HTML renderer
  const renderContent = (text: string) => {
    return text.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('## ')) {
        return <h2 key={index} className="text-2xl md:text-3xl font-semibold text-[#1e3a5f] md:mt-12 mt-8 mb-4 leading-snug">{paragraph.replace('## ', '')}</h2>;
      }
      if (paragraph.startsWith('### ')) {
        return <h3 key={index} className="text-xl md:text-2xl font-semibold text-[#1e3a5f] mt-8 mb-4">{paragraph.replace('### ', '')}</h3>;
      }
      return <p key={index} className="text-gray-600 text-lg leading-relaxed mb-6 font-light">{paragraph}</p>;
    });
  };

  return (
    <article className="w-full bg-[#f8fafc] min-h-screen py-10 md:py-20 px-4 md:px-10 xl:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 xl:gap-20 items-start">
        
        {/* Main Article Content */}
        <div className="w-full lg:w-8/12 bg-white rounded-[2rem] shadow-sm p-6 md:p-12 xl:p-16 border border-gray-100">
          <Link href={`/${lang}/blog`} className="inline-flex items-center text-[#cca66b] hover:text-[#1e3a5f] font-semibold text-sm mb-10 transition-colors group">
            <FaArrowLeft className="mr-2 transform group-hover:-translate-x-1 transition-transform" /> {backText}
          </Link>

          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-500 mb-6 uppercase tracking-wider">
              <span className="bg-[#1e3a5f]/5 text-[#1e3a5f] px-3 py-1.5 rounded-full">{content.category}</span>
              <span className="flex items-center"><FaCalendarAlt className="mr-2 text-[#cca66b]" /> {new Date(post.date).toLocaleDateString(lang === 'en' ? 'en-US' : 'tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span className="flex items-center"><FaUserMd className="mr-1.5 text-[#cca66b]" /> {content.author}</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-light text-[#1e3a5f] leading-tight mb-8">
              {content.title}
            </h1>
            
            <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-md mb-12 relative">
              <img src={post.image} alt={content.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/30 to-transparent mix-blend-multiply"></div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-xl md:text-2xl font-light text-[#1e3a5f] mb-10 leading-relaxed border-l-4 border-[#cca66b] pl-6 italic">
              {content.excerpt}
            </p>
            {renderContent(content.content)}
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap gap-2">
            {content.tags.map((tag, idx) => (
              <span key={idx} className="bg-gray-50 text-gray-500 text-sm px-4 py-2 rounded-lg border border-gray-100">#{tag}</span>
            ))}
          </div>
        </div>

        {/* Sidebar: Related Articles */}
        <aside className="w-full lg:w-4/12 sticky top-32">
          {/* Related widget */}
          <div className="bg-white rounded-[2rem] shadow-sm p-8 border border-gray-100 mb-8">
            <h3 className="text-2xl font-semibold text-[#1e3a5f] mb-8 pb-4 border-b border-gray-100">
              {relatedText}
            </h3>
            
            <div className="flex flex-col space-y-6">
              {relatedPosts.map(related => {
                const relContent = related[lang];
                return (
                  <Link href={`/${lang}/blog/${relContent.slug}`} key={related.id} className="group flex gap-5 items-center">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-sm">
                      <img src={related.image} alt={relContent.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div>
                       <div className="text-[#cca66b] text-[11px] font-bold mb-1 uppercase tracking-wider">{relContent.category}</div>
                       <h4 className="text-[#1e3a5f] font-semibold text-sm group-hover:text-[#cca66b] transition-colors leading-snug line-clamp-2">
                         {relContent.title}
                       </h4>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          
          {/* Appointment CTA Widget */}
          <div className="bg-[#1e3a5f] rounded-[2rem] shadow-xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#cca66b]/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 transition-transform duration-700 group-hover:scale-150"></div>
            <h3 className="text-2xl font-light text-white mb-4 relative z-10">
              {lang === 'en' ? 'Start Your Journey Today' : 'Yolculuğunuza Bugün Başlayın'}
            </h3>
            <p className="text-gray-300 font-light text-sm mb-8 leading-relaxed relative z-10">
              {lang === 'en' ? 'Contact us for a free consultation and personalized aesthetic plan.' : 'Ücretsiz danışmanlık ve size özel estetik planı için bizimle iletişime geçin.'}
            </p>
            <Link href={lang === 'en' ? '/en/contact' : '/iletisim'} className="inline-flex items-center justify-center w-full bg-[#cca66b] hover:bg-white text-white hover:text-[#1e3a5f] border hover:border-white border-transparent px-6 py-4 rounded-xl font-bold transition-all duration-300 relative z-10">
              {lang === 'en' ? 'Book Consultation' : 'Ücretsiz Danışmanlık Alın'}
            </Link>
          </div>
        </aside>

      </div>
    </article>
  );
}
