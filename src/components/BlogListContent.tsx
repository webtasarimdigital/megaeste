'use client';
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { BlogPost } from '@/data/blog-posts';
import Link from 'next/link';
import { FaCalendarAlt, FaArrowRight, FaUserMd } from 'react-icons/fa';

interface Props {
  posts: BlogPost[];
  lang: 'tr' | 'en';
}

export default function BlogListContent({ posts, lang }: Props) {
  const headerText = lang === 'en' ? 'Megaeste Blog' : 'Megaeste Blog';
  const subtitle = lang === 'en' ? 'Explore our latest articles on aesthetic and medical excellence' : 'Estetik ve klinik mükemmellik üzerine son makalelerimizi keşfedin';
  
  return (
    <div className="bg-[#f8fafc] min-h-[70vh]">
      {/* Adjusted Compact Hero Section */}
      <section className="relative w-full h-[240px] lg:h-[28vh] min-h-[240px] bg-[#0d2244] flex items-center justify-center overflow-hidden pb-8">
        
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0d2244]/80 z-10 mix-blend-multiply"></div>
          {/* We use a gradient to make text stand out */}
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0d2244] to-transparent z-20"></div>
          
          <img 
            src="/images/services/medikal-cilt-bakimi.png" 
            alt="Megaeste Blog" 
            className="w-full h-full object-cover object-top opacity-50 blur-[2px] transform scale-105"
          />
        </div>

        {/* Content */}
        <div className="relative z-30 flex flex-col items-center justify-center text-center px-4 -mt-4">
          <div className="flex items-center space-x-3 mb-3 md:mb-5">
            <div className="w-5 h-[2px] bg-[#cca66b]"></div>
            <span className="text-[#cca66b] text-[11px] md:text-xs font-black tracking-[0.3em] uppercase drop-shadow-md">
              {lang === 'tr' ? 'SON YAZILARIMIZ' : 'OUR LATEST ARTICLES'}
            </span>
            <div className="w-5 h-[2px] bg-[#cca66b]"></div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-none mb-4 drop-shadow-xl">
            {headerText}
          </h1>
          <p className="text-gray-300 text-sm md:text-base font-medium max-w-xl leading-relaxed drop-shadow-sm">
            {subtitle}
          </p>
        </div>
      </section>

      <div className="relative z-40 -mt-6 sm:-mt-10 pb-16 md:pb-24 px-4 md:px-10 xl:px-24">
       <div className="max-w-7xl mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {posts.map((post) => {
             const content = post[lang];
             return (
               <article key={post.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col border border-gray-100">
                 <Link href={`/${lang}/blog/${content.slug}`} className="block relative h-64 overflow-hidden bg-gray-100">
                    <img src={post.image} alt={content.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/80 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute top-5 left-5 bg-white backdrop-blur-md text-[#1e3a5f] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                      {content.category}
                    </div>
                 </Link>
                 <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center text-[#cca66b] text-xs font-medium mb-4 space-x-4">
                      <span className="flex items-center"><FaCalendarAlt className="mr-2" />{new Date(post.date).toLocaleDateString(lang === 'en' ? 'en-US' : 'tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      <span className="flex items-center"><FaUserMd className="mr-1.5" />{content.author}</span>
                    </div>
                    <Link href={`/${lang}/blog/${content.slug}`} className="block">
                      <h2 className="text-[#1e3a5f] font-semibold text-xl mb-4 group-hover:text-[#cca66b] transition-colors line-clamp-2 leading-snug">
                        {content.title}
                      </h2>
                    </Link>
                    <p className="text-gray-500 text-[15px] font-light leading-relaxed line-clamp-3 mb-8 flex-grow">
                      {content.excerpt}
                    </p>
                    <Link href={`/${lang}/blog/${content.slug}`} className="flex items-center text-[#1e3a5f] font-bold text-sm group-hover:text-[#cca66b] transition-colors w-fit">
                      {lang === 'en' ? 'Read Full Article' : 'Makaleyi Oku'} <FaArrowRight className="ml-2 text-xs transition-transform group-hover:translate-x-1" />
                    </Link>
                 </div>
               </article>
             );
           })}
         </div>
       </div>
      </div>
    </div>
  );
}
