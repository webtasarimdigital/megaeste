'use client';
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';

export default function BlogSection({ dict, lang = 'tr' }: { dict?: any, lang?: string }) {
  const content = dict?.blog || {
    title: lang === 'en' ? 'BLOG' : 'BLOG',
    subtitle: lang === 'en' ? 'Our Latest Articles' : 'Son Yazılarımız',
    viewAll: lang === 'en' ? 'View All' : 'Tümünü Gör',
    readMore: lang === 'en' ? 'Read More' : 'Devamını Oku'
  };

  // Get the latest 3 posts and map them to the active language
  const posts = blogPosts.slice(0, 3).map(post => ({
    id: post.id,
    image: post.image,
    date: post.date,
    category: post[lang as 'tr' | 'en'].category,
    title: post[lang as 'tr' | 'en'].title,
    excerpt: post[lang as 'tr' | 'en'].excerpt,
    slug: post[lang as 'tr' | 'en'].slug,
  }));

  const blogBaseUrl = lang === 'en' ? '/en/blog' : '/blog';

  return (
    <section className="w-full relative py-20 xl:py-28 px-4 lg:px-10 xl:px-24 bg-gradient-to-b from-[#f0f5fa] to-white overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#427bdf]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      {/* Header */}
      <div className="w-full max-w-[1440px] mx-auto flex flex-row items-end justify-between mb-8 md:mb-14 border-b border-gray-100 pb-4 md:pb-6">
        <div>
          <div className="flex items-center space-x-2 md:space-x-3 mb-2 md:mb-3">
            <div className="w-6 md:w-10 h-[2px] md:h-[3px] bg-[#cca66b] rounded-full"></div>
            <span className="text-[#cca66b] font-black tracking-widest text-[10px] md:text-xs uppercase">{content.title}</span>
          </div>
          <h2 className="text-[22px] md:text-4xl xl:text-[2.8rem] font-light text-[#1e3a5f] leading-tight">
            {content.subtitle}
          </h2>
        </div>
        <Link 
          href={blogBaseUrl} 
          className="flex items-center justify-center px-4 md:px-8 py-2 md:py-3.5 rounded-full border border-gray-200 text-[#1e3a5f] hover:bg-[#cca66b] hover:text-white hover:border-[#cca66b] font-medium text-[11px] md:text-sm transition-all group shadow-sm whitespace-nowrap ml-4"
        >
          {content.viewAll} <FaArrowRight className="text-[10px] md:text-xs ml-2 md:ml-3 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Cards */}
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12">
        {posts.map((post) => (
          <article
            key={post.id}
            className="group relative bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 border border-gray-100/60 flex flex-col"
          >
            {/* Image */}
            <div className="relative h-[260px] overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/90 via-[#1e3a5f]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              {/* Category Badge */}
              <span className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-[#1e3a5f] text-[11px] font-bold px-5 py-2 rounded-full uppercase tracking-wider shadow-lg">
                {post.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-8 xl:p-10 flex flex-col flex-grow bg-gradient-to-br from-white to-gray-50/30">
              <div className="flex items-center text-[#cca66b] text-[13px] font-medium mb-4">
                <FaCalendarAlt className="mr-2" />
                {new Date(post.date).toLocaleDateString(lang === 'en' ? 'en-US' : 'tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
              <h3 className="text-[#1e3a5f] font-semibold text-xl xl:text-2xl leading-snug mb-4 group-hover:text-[#cca66b] transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-500 text-[15px] font-light leading-relaxed line-clamp-3 mb-8">
                {post.excerpt}
              </p>
              <Link href={`${blogBaseUrl}/${post.slug}`} className="flex items-center text-[#1e3a5f] font-bold text-[14px] mt-auto group-hover:text-[#cca66b] transition-colors w-fit">
                {content.readMore} <FaArrowRight className="text-[12px] ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 w-0 h-[4px] bg-[#cca66b] group-hover:w-full transition-all duration-700"></div>
          </article>
        ))}
      </div>
    </section>
  );
}
