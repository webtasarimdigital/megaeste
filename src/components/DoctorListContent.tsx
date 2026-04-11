'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { Doctor } from '../data/doctors';

interface Props {
  doctors: Doctor[];
  lang: 'tr' | 'en';
}

export default function DoctorListContent({ doctors, lang }: Props) {
  const docLink = (slug: string) => lang === 'tr' ? `/hekimlerimiz/${slug}` : `/${lang}/hekimlerimiz/${slug}`;

  return (
    <>
      {/* Adjusted Taller Hero Section for Better Overlap */}
      <section className="relative w-full h-[300px] lg:h-[35vh] min-h-[300px] bg-[#0d2244] flex items-center justify-center overflow-hidden pb-8">
        
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0d2244]/80 z-10 mix-blend-multiply"></div>
          {/* We use a gradient to make text stand out */}
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0d2244] to-transparent z-20"></div>
          
          <Image 
            src="/images/services/medikal-cilt-bakimi.webp" 
            alt="Megaeste Hekimlerimiz" 
            fill
            className="object-cover object-top opacity-50 blur-[2px] transform scale-105"
            sizes="100vw"
          />
        </div>

        {/* Content */}
        <div className="relative z-30 flex flex-col items-center justify-center text-center px-4 -mt-16 md:-mt-20">
          <div className="flex items-center space-x-3 mb-3 md:mb-5">
            <div className="w-5 h-[2px] bg-[#cca66b]"></div>
            <span className="text-[#cca66b] text-[11px] md:text-xs font-black tracking-[0.3em] uppercase drop-shadow-md">
              {lang === 'tr' ? 'PROFESYONEL EKİBİMİZ' : 'OUR PROFESSIONAL TEAM'}
            </span>
            <div className="w-5 h-[2px] bg-[#cca66b]"></div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-none mb-4 drop-shadow-xl">
            {lang === 'tr' ? 'Hekimlerimiz' : 'Our Doctors'}
          </h1>
          <p className="text-gray-300 text-sm md:text-base font-medium max-w-xl leading-relaxed drop-shadow-sm">
            {lang === 'tr'
              ? 'Alanında uzman ve deneyimli kadromuzla yanınızdayız.'
              : 'We stand by your side with our expert and experienced team.'}
          </p>
        </div>
      </section>

      {/* Doctor Cards (Deep Overlap) */}
      <section className="relative z-40 -mt-12 md:-mt-16 lg:-mt-20 w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-24 pb-16 xl:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc, idx) => {
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={idx < 3}
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
