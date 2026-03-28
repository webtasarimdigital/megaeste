'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Doctor } from '../data/doctors';

interface Props {
  doctor: Doctor;
  lang: 'tr' | 'en';
}

export default function DoctorDetailContent({ doctor, lang }: Props) {
  const c = doctor[lang];

  return (
    <section className="w-full min-h-screen bg-[#f8fafc] py-16 md:py-24 px-4 md:px-10 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white rounded-[2rem] shadow-sm overflow-hidden flex flex-col md:flex-row border border-gray-100">
        
        {/* Left Side: Full Photo */}
        <div className="w-full md:w-5/12 h-[450px] md:h-auto min-h-[600px] relative shrink-0">
          <Image
            src={doctor.image}
            alt={c.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Right Side: Content Area */}
        <div className="w-full md:w-7/12 p-8 md:p-14 lg:p-16 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-[#1e3a5f] mb-2">{c.name}</h1>
            <h2 className="text-[#cca66b] text-lg font-medium mb-8">{c.title} {c.specialty}</h2>

            <div className="flex flex-wrap gap-2 mb-8">
              {c.services.map((service, idx) => (
                <span key={idx} className="bg-[#f0f5fa] text-[#1e3a5f] text-[11px] font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                  {service}
                </span>
              ))}
            </div>

            <div className="prose prose-lg text-gray-500 font-light leading-relaxed mb-8 max-w-none">
              {/* Splitting bio into paragraphs for better reading formatting as seen in screenshot */}
              {c.bio.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-5">{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link 
                href={lang === 'tr' ? '/hekimlerimiz' : `/${lang}/hekimlerimiz`}
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-full border border-gray-200 text-[#1e3a5f] hover:bg-gray-50 font-semibold text-sm transition-colors group"
              >
                <FaArrowLeft className="mr-3 text-gray-400 group-hover:-translate-x-1 transition-transform" />
                {lang === 'tr' ? 'HEKİMLERİMİZE DÖN' : 'BACK TO DOCTORS'}
              </Link>
              <Link 
                href={lang === 'tr' ? '/iletisim' : `/${lang}/contact`}
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-full bg-[#cca66b] text-white hover:bg-[#b89560] font-semibold text-sm transition-colors group shadow-sm"
              >
                {lang === 'tr' ? 'RANDEVU AL' : 'BOOK APPOINTMENT'}
                <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
