'use client';

import React from 'react';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BlogSection({ dict }: { dict?: any }) {
  const content = dict?.blog || {
    title: 'BLOG',
    subtitle: 'Son Yazılarımız'
  };

  const posts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600',
      category: 'Saç Ekimi',
      date: '22 Mar 2026',
      title: 'DHI Saç Ekimi Nedir? Avantajları Nelerdir?',
      excerpt: 'DHI tekniği ile geleneksel yöntemler arasındaki farkları ve avantajlarını keşfedin.',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&q=80&w=600',
      category: 'Medikal Estetik',
      date: '18 Mar 2026',
      title: 'Yüz Mezoterapisi: Gençlik İksiri',
      excerpt: 'Cildinizi yenileyen mezoterapi uygulamaları hakkında bilmeniz gereken her şey.',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600',
      category: 'Plastik Cerrahi',
      date: '12 Mar 2026',
      title: 'Burun Estetiği Sonrası İyileşme Süreci',
      excerpt: 'Rinoplasti sonrası dikkat etmeniz gereken önemli noktalar ve iyileşme takvimi.',
    },
  ];

  return (
    <section className="w-full relative py-20 xl:py-28 px-4 lg:px-10 xl:px-24 bg-gradient-to-b from-[#f0f5fa] to-white overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#427bdf]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      {/* Header */}
      <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-end md:justify-between mb-14">
        <div>
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-[3px] bg-[#427bdf] rounded-full"></div>
            <span className="text-[#427bdf] font-black tracking-widest text-xs uppercase">{content.title}</span>
          </div>
          <h2 className="text-3xl md:text-4xl xl:text-[2.8rem] font-bold text-[#1e3a5f] leading-tight">
            {content.subtitle}
          </h2>
        </div>
        <a href="#" className="mt-6 md:mt-0 flex items-center text-[#427bdf] font-bold text-sm hover:gap-3 gap-2 transition-all group">
          Tümünü Gör <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Cards */}
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/60"
          >
            {/* Image */}
            <div className="relative h-[220px] overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/60 to-transparent"></div>
              
              {/* Category Badge */}
              <span className="absolute top-4 left-4 bg-[#427bdf] text-white text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                {post.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-7 flex flex-col">
              <div className="flex items-center text-gray-400 text-[12px] font-semibold mb-3">
                <FaCalendarAlt className="mr-2 text-[#427bdf]/60" />
                {post.date}
              </div>
              <h3 className="text-[#1e3a5f] font-extrabold text-[17px] leading-snug mb-3 group-hover:text-[#427bdf] transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-400 text-[13px] leading-relaxed line-clamp-2 mb-5">
                {post.excerpt}
              </p>
              <a href="#" className="flex items-center text-[#427bdf] font-bold text-[13px] mt-auto group-hover:gap-2 gap-1 transition-all">
                Devamını Oku <FaArrowRight className="text-[10px]" />
              </a>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#427bdf] to-[#7fb3ff] group-hover:w-full transition-all duration-700"></div>
          </article>
        ))}
      </div>
    </section>
  );
}
