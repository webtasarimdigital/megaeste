'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight, FaCalendarAlt, FaUser, FaTag, FaArrowRight } from 'react-icons/fa';
import { BlogPost } from '../data/blog-posts';

interface Props {
  post: BlogPost;
  content: BlogPost['tr'];
  relatedPosts: BlogPost[];
  lang: 'tr' | 'en';
}

export default function BlogDetailContent({ post, content, relatedPosts, lang }: Props) {
  const blogLink = (slug: string) => lang === 'tr' ? `/blog/${slug}` : `/${lang}/blog/${slug}`;

  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <Image src={post.image} alt={content.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2244]/95 via-[#0d2244]/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-24 pb-10">
            <nav className="flex items-center text-sm text-white/60 mb-5 font-medium">
              <Link href={lang === 'tr' ? '/' : `/${lang}`} className="hover:text-white transition-colors">
                {lang === 'tr' ? 'Ana Sayfa' : 'Home'}
              </Link>
              <FaChevronRight className="mx-2 text-[10px]" />
              <Link href={lang === 'tr' ? '/blog' : `/${lang}/blog`} className="hover:text-white transition-colors">Blog</Link>
              <FaChevronRight className="mx-2 text-[10px]" />
              <span className="text-white font-bold truncate max-w-xs">{content.title}</span>
            </nav>
            <span className="inline-block px-3 py-1 bg-[#427bdf] text-white text-[11px] font-bold uppercase tracking-wider rounded-full mb-4">
              {content.category}
            </span>
            <h1 className="text-2xl md:text-4xl font-black text-white leading-tight max-w-3xl">{content.title}</h1>
            <div className="flex items-center gap-5 text-white/60 text-sm mt-4">
              <span className="flex items-center gap-1.5"><FaCalendarAlt className="text-xs" />{new Date(post.date).toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span className="flex items-center gap-1.5"><FaUser className="text-xs" />{content.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-24 py-14 xl:py-20">
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-14">
          
          {/* Article Content */}
          <article className="flex-1 min-w-0">
            <div className="prose prose-lg max-w-none">
              {content.content.split('\n\n').map((block, i) => {
                if (block.startsWith('## ')) {
                  return <h2 key={i} className="text-xl md:text-2xl font-black text-[#1e3a5f] mt-10 mb-4">{block.replace('## ', '')}</h2>;
                }
                return <p key={i} className="text-gray-600 text-[15px] md:text-[16px] leading-[1.9] mb-5">{block}</p>;
              })}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 mt-10 pt-8 border-t border-gray-100">
              <FaTag className="text-gray-400 text-sm" />
              {content.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-[#f0f5fb] text-[#427bdf] text-xs font-bold rounded-full">{tag}</span>
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="w-full lg:w-[340px] xl:w-[380px] flex-shrink-0">
            <div className="sticky top-8 space-y-6">
              
              {/* CTA */}
              <div className="bg-gradient-to-br from-[#1e3a5f] to-[#0d2244] rounded-2xl p-7 text-white shadow-xl">
                <h3 className="text-xl font-black mb-3">
                  {lang === 'tr' ? 'Ücretsiz Konsültasyon' : 'Free Consultation'}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  {lang === 'tr' ? 'Uzman ekibimizle görüşmek için hemen iletişime geçin.' : 'Contact us now to speak with our expert team.'}
                </p>
                <a href="tel:#" className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#427bdf] hover:bg-[#3568c0] rounded-xl font-bold text-[15px] transition-colors shadow-lg">
                  {lang === 'tr' ? 'Randevu Al' : 'Book Appointment'}
                  <FaArrowRight className="text-sm" />
                </a>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
                  <div className="px-6 py-5 bg-gradient-to-r from-[#f0f5fb] to-[#e8f0fb] border-b border-gray-100">
                    <h3 className="text-lg font-black text-[#1e3a5f]">
                      {lang === 'tr' ? 'İlgili Yazılar' : 'Related Articles'}
                    </h3>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {relatedPosts.map((rel) => {
                      const rc = rel[lang];
                      return (
                        <Link key={rel.id} href={blogLink(rc.slug)} className="group flex items-center gap-4 px-6 py-4 hover:bg-[#f7faff] transition-colors">
                          <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
                            <Image src={rel.image} alt={rc.title} width={56} height={56} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-[13px] text-gray-800 group-hover:text-[#427bdf] transition-colors line-clamp-2">{rc.title}</h4>
                            <span className="text-xs text-gray-400">{rc.category}</span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
