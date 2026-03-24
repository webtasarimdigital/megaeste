'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight, FaCalendarAlt, FaUser, FaSearch } from 'react-icons/fa';
import { BlogPost } from '../data/blog-posts';

interface Props {
  posts: BlogPost[];
  lang: 'tr' | 'en';
}

export default function BlogListContent({ posts, lang }: Props) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', ...Array.from(new Set(posts.map(p => p[lang].category)))];
  
  const filtered = posts.filter(p => {
    const c = p[lang];
    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase()) || c.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesCat = activeCategory === 'all' || c.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  const blogLink = (slug: string) => lang === 'tr' ? `/blog/${slug}` : `/${lang}/blog/${slug}`;

  return (
    <>
      {/* Hero Banner */}
      <section className="relative w-full bg-gradient-to-br from-[#0d2244] via-[#1e3a5f] to-[#2c5a8f] py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-[#427bdf] rounded-full filter blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#427bdf] rounded-full filter blur-3xl" />
        </div>
        <div className="relative w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-24">
          <nav className="flex items-center text-sm text-white/60 mb-6 font-medium">
            <Link href={lang === 'tr' ? '/' : `/${lang}`} className="hover:text-white transition-colors">
              {lang === 'tr' ? 'Ana Sayfa' : 'Home'}
            </Link>
            <FaChevronRight className="mx-2 text-[10px]" />
            <span className="text-white font-bold">Blog</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Blog</h1>
          <p className="text-white/70 text-lg max-w-xl">
            {lang === 'tr'
              ? 'Sağlık, estetik ve medikal tedaviler hakkında uzmanlarımızdan güncel bilgiler.'
              : 'Current information from our experts about health, aesthetics and medical treatments.'}
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-24 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#427bdf] text-white shadow-lg shadow-[#427bdf]/20'
                    : 'bg-[#f0f5fb] text-gray-600 hover:bg-[#e0ecf8]'
                }`}
              >
                {cat === 'all' ? (lang === 'tr' ? 'Tümü' : 'All') : cat}
              </button>
            ))}
          </div>
          {/* Search */}
          <div className="relative w-full md:w-72">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder={lang === 'tr' ? 'Ara...' : 'Search...'}
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#427bdf]/30 focus:border-[#427bdf]"
            />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-24 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post) => {
            const c = post[lang];
            return (
              <Link
                key={post.id}
                href={blogLink(c.slug)}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative w-full h-[220px] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={c.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#427bdf] text-white text-[11px] font-bold uppercase tracking-wider rounded-full">
                      {c.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1.5">
                      <FaCalendarAlt className="text-[10px]" />
                      {new Date(post.date).toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaUser className="text-[10px]" />
                      {c.author}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-[#1e3a5f] mb-3 group-hover:text-[#427bdf] transition-colors line-clamp-2">
                    {c.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{c.excerpt}</p>

                  <div className="mt-5 flex items-center gap-2 text-[#427bdf] text-sm font-bold group-hover:gap-3 transition-all">
                    {lang === 'tr' ? 'Devamını Oku' : 'Read More'}
                    <FaChevronRight className="text-[10px]" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg">{lang === 'tr' ? 'Sonuç bulunamadı.' : 'No results found.'}</p>
          </div>
        )}
      </section>
    </>
  );
}
