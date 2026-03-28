'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight, FaArrowRight } from 'react-icons/fa';
import { Doctor } from '../data/doctors';

interface Props {
  doctors: Doctor[];
  lang: 'tr' | 'en';
}

export default function DoctorListContent({ doctors, lang }: Props) {
  const docLink = (slug: string) => lang === 'tr' ? `/hekimlerimiz/${slug}` : `/${lang}/hekimlerimiz/${slug}`;

  return (
    <>
      {/* Hero */}
      <section className="relative w-full bg-[url('/images/services/medikal-cilt-bakimi.png')] bg-cover bg-center bg-no-repeat py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0d2244]/80 backdrop-blur-[2px]"></div>
        <div className="relative w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-24 flex flex-col items-center text-center">
          <nav className="flex items-center text-xs md:text-sm text-white/50 mb-6 font-medium tracking-wide">
            <Link href={lang === 'tr' ? '/' : `/${lang}`} className="hover:text-white transition-colors">
              {lang === 'tr' ? 'Ana Sayfa' : 'Home'}
            </Link>
            <FaChevronRight className="mx-3 text-[10px]" />
            <span className="text-white font-semibold">{lang === 'tr' ? 'Hekimlerimiz' : 'Our Doctors'}</span>
          </nav>
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-5 rounded-full bg-white/10 border border-white/20 text-[#cca66b] text-xs font-bold tracking-widest uppercase">
            {lang === 'tr' ? 'Profesyonel Ekibimiz' : 'Our Professional Team'}
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-5 tracking-tight">
            {lang === 'tr' ? 'Hekimlerimiz' : 'Our Doctors'}
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-xl font-light">
            {lang === 'tr'
              ? 'Alanında uzman ve deneyimli kadromuzla yanınızdayız.'
              : 'We stand by your side with our expert and experienced team.'}
          </p>
        </div>
      </section>

      {/* Doctor Cards */}
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-24 py-16 xl:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc) => {
            const c = doc[lang];
            return (
              <Link
                key={doc.id}
                href={docLink(c.slug)}
                className="group bg-white rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col"
              >
                {/* Photo Area */}
                <div className="relative w-full h-[360px] overflow-hidden bg-gradient-to-b from-[#f5f8fc] to-[#e4eef8]">
                  <Image
                    src={doc.image}
                    alt={c.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
                </div>

                <div className="p-8 pt-6 relative flex flex-col flex-grow bg-white z-10 rounded-t-3xl -mt-6">
                  <div className="flex items-center justify-between mb-2">
                     <span className="text-[11px] font-bold text-[#cca66b] uppercase tracking-[2px]">{c.title}</span>
                  </div>
                  <h2 className="text-2xl font-black text-[#1e3a5f] mb-1 group-hover:text-[#427bdf] transition-colors">{c.name}</h2>
                  <p className="text-gray-500 text-[14.5px] font-medium mb-5">{c.specialty}</p>

                  {/* Services */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {c.services.slice(0, 3).map((s, i) => (
                      <span key={i} className="px-2.5 py-1 bg-[#f0f5fb] text-[#427bdf] text-[11px] font-bold rounded-full">{s}</span>
                    ))}
                    {c.services.length > 3 && (
                      <span className="px-2.5 py-1 bg-[#f0f5fb] text-gray-400 text-[11px] font-bold rounded-full">+{c.services.length - 3}</span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-[#427bdf] text-sm font-bold group-hover:gap-3 transition-all">
                    {lang === 'tr' ? 'Profili Görüntüle' : 'View Profile'}
                    <FaArrowRight className="text-xs" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
