'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight, FaGraduationCap, FaBriefcase, FaStethoscope, FaArrowRight, FaPhoneAlt } from 'react-icons/fa';
import { Doctor } from '../data/doctors';

interface Props {
  doctor: Doctor;
  lang: 'tr' | 'en';
}

export default function DoctorDetailContent({ doctor, lang }: Props) {
  const c = doctor[lang];

  return (
    <>
      {/* Split Hero Nivdis Style */}
      <section className="relative w-full min-h-[500px] lg:min-h-[600px] flex flex-col lg:flex-row overflow-hidden bg-[#f4f7fa]">
        
        {/* Left Image Area */}
        <div className="w-full lg:w-1/2 h-[450px] lg:h-auto relative">
          <Image
            src={doctor.image}
            alt={c.name}
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0d2244]/80 via-transparent to-transparent opacity-60"></div>
        </div>

        {/* Right Content Area (Blue Corporate) */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-[#1e3a5f] to-[#0d2244] px-6 lg:px-16 xl:px-24 pt-16 pb-20 flex flex-col justify-center relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center text-xs md:text-sm text-white/50 mb-10 font-medium tracking-wider uppercase">
            <Link href={lang === 'tr' ? '/' : `/${lang}`} className="hover:text-white transition-colors">
              {lang === 'tr' ? 'Ana Sayfa' : 'Home'}
            </Link>
            <FaChevronRight className="mx-3 text-[10px]" />
            <Link href={lang === 'tr' ? '/hekimlerimiz' : `/${lang}/hekimlerimiz`} className="hover:text-white transition-colors">
              {lang === 'tr' ? 'Hekimlerimiz' : 'Our Doctors'}
            </Link>
            <FaChevronRight className="mx-3 text-[10px]" />
            <span className="text-[#cca66b] font-bold">{c.name}</span>
          </nav>

          <div className="relative z-20">
            <span className="inline-block px-4 py-1.5 bg-[#cca66b]/20 text-[#cca66b] text-xs font-black uppercase tracking-[3px] rounded-full mb-4 border border-[#cca66b]/30 backdrop-blur-md">
              {c.title}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-white mb-4 drop-shadow-md">{c.name}</h1>
            <p className="text-[#a8ccf0] text-lg md:text-xl font-medium mb-10 max-w-lg">{c.specialty}</p>
            
            {/* Service Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {c.services.map((s, i) => (
                <span key={i} className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-[13px] font-bold rounded-lg border border-white/10 transition-colors cursor-default backdrop-blur-sm shadow-sm">
                  {s}
                </span>
              ))}
            </div>

            <a href="tel:#" className="inline-flex items-center gap-3 px-8 py-4 bg-[#cca66b] hover:bg-[#b58f53] text-white rounded-xl font-black tracking-widest uppercase text-[14px] transition-transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(204,166,107,0.3)]">
              <FaPhoneAlt className="text-sm" />
              {lang === 'tr' ? 'Randevu Al' : 'Book Appointment'}
            </a>
          </div>
          
          {/* Decorative Pattern */}
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#427bdf] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
        </div>
      </section>

      {/* Content */}
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-24 py-14 xl:py-20">
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-14">

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Bio */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3">
                <FaStethoscope className="text-[#427bdf]" />
                {lang === 'tr' ? 'Hakkında' : 'About'}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 leading-loose">
                {c.bio.split('\n\n').map((p, i) => (
                  <p key={i} className="mb-4 text-[15px] md:text-[16px] leading-[1.8]">{p}</p>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3">
                <FaGraduationCap className="text-[#427bdf]" />
                {lang === 'tr' ? 'Eğitim' : 'Education'}
              </h2>
              <div className="space-y-3">
                {c.education.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gradient-to-r from-[#f7faff] to-[#eef4fc] rounded-xl p-4 border border-[#d6e4f7]/30">
                    <div className="w-8 h-8 rounded-full bg-[#427bdf]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#427bdf] text-xs font-black">{i + 1}</span>
                    </div>
                    <p className="text-gray-700 text-[15px] font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-[#1e3a5f] mb-6 flex items-center gap-3">
                <FaBriefcase className="text-[#427bdf]" />
                {lang === 'tr' ? 'Deneyim' : 'Experience'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {c.experience.map((item, i) => (
                  <div key={i} className="bg-gradient-to-br from-[#1e3a5f] to-[#0d2244] rounded-xl p-5 text-white shadow-lg">
                    <p className="text-sm font-bold leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-[340px] xl:w-[380px] flex-shrink-0">
            <div className="sticky top-8 space-y-6">
              
              {/* CTA */}
              <div className="bg-gradient-to-br from-[#1e3a5f] to-[#0d2244] rounded-2xl p-7 text-white shadow-xl">
                <h3 className="text-xl font-black mb-3">
                  {lang === 'tr' ? 'Ücretsiz Konsültasyon' : 'Free Consultation'}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  {lang === 'tr'
                    ? `${c.name} ile görüşmek ve randevu almak için hemen iletişime geçin.`
                    : `Contact us now to meet with ${c.name} and schedule an appointment.`}
                </p>
                <a href="tel:#" className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#427bdf] hover:bg-[#3568c0] rounded-xl font-bold text-[15px] transition-colors shadow-lg">
                  {lang === 'tr' ? 'Randevu Al' : 'Book Appointment'}
                  <FaArrowRight className="text-sm" />
                </a>
              </div>

              {/* Specialties */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
                <div className="px-6 py-5 bg-gradient-to-r from-[#f0f5fb] to-[#e8f0fb] border-b border-gray-100">
                  <h3 className="text-lg font-black text-[#1e3a5f]">
                    {lang === 'tr' ? 'Uzmanlık Alanları' : 'Specialties'}
                  </h3>
                </div>
                <div className="p-6 space-y-2">
                  {c.services.map((s, i) => (
                    <div key={i} className="flex items-center gap-3 bg-[#f7faff] rounded-lg px-4 py-3">
                      <div className="w-2 h-2 rounded-full bg-[#427bdf]" />
                      <span className="text-sm font-semibold text-gray-700">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
