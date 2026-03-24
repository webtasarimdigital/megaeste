'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight, FaArrowRight, FaStethoscope } from 'react-icons/fa';
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
      <section className="relative w-full bg-gradient-to-br from-[#0d2244] via-[#1e3a5f] to-[#2c5a8f] py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-80 h-80 bg-[#427bdf] rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1e3a5f] rounded-full filter blur-3xl" />
        </div>
        <div className="relative w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-24">
          <nav className="flex items-center text-sm text-white/60 mb-6 font-medium">
            <Link href={lang === 'tr' ? '/' : `/${lang}`} className="hover:text-white transition-colors">
              {lang === 'tr' ? 'Ana Sayfa' : 'Home'}
            </Link>
            <FaChevronRight className="mx-2 text-[10px]" />
            <span className="text-white font-bold">{lang === 'tr' ? 'Hekimlerimiz' : 'Our Doctors'}</span>
          </nav>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-12 rounded-full bg-[#427bdf]/20 flex items-center justify-center">
              <FaStethoscope className="text-xl text-[#427bdf]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white">{lang === 'tr' ? 'Hekimlerimiz' : 'Our Doctors'}</h1>
          </div>
          <p className="text-white/70 text-lg max-w-xl">
            {lang === 'tr'
              ? 'Alanında uzman, deneyimli hekim kadromuzla tanışın. Sağlığınız ve güzelliğiniz profesyonel ellerde.'
              : 'Meet our experienced medical team of experts. Your health and beauty in professional hands.'}
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
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
              >
                {/* Photo */}
                <div className="relative w-full h-[320px] overflow-hidden bg-gradient-to-b from-[#f0f5fb] to-[#e8f0fb]">
                  <Image
                    src={doc.image}
                    alt={c.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
                </div>

                {/* Info */}
                <div className="p-6 -mt-4 relative">
                  <span className="text-xs font-bold text-[#427bdf] uppercase tracking-[2px] mb-2 block">{c.title}</span>
                  <h2 className="text-xl font-black text-[#1e3a5f] mb-2 group-hover:text-[#427bdf] transition-colors">{c.name}</h2>
                  <p className="text-gray-500 text-sm mb-4">{c.specialty}</p>

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
