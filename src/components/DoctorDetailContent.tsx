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
      {/* Hero */}
      <section className="relative w-full bg-gradient-to-br from-[#0d2244] via-[#1e3a5f] to-[#2c5a8f] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-[#427bdf] rounded-full filter blur-3xl" />
        </div>
        <div className="relative w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-24 py-14 md:py-20">
          {/* Breadcrumb */}
          <nav className="flex items-center text-sm text-white/60 mb-8 font-medium">
            <Link href={lang === 'tr' ? '/' : `/${lang}`} className="hover:text-white transition-colors">
              {lang === 'tr' ? 'Ana Sayfa' : 'Home'}
            </Link>
            <FaChevronRight className="mx-2 text-[10px]" />
            <Link href={lang === 'tr' ? '/hekimlerimiz' : `/${lang}/hekimlerimiz`} className="hover:text-white transition-colors">
              {lang === 'tr' ? 'Hekimlerimiz' : 'Our Doctors'}
            </Link>
            <FaChevronRight className="mx-2 text-[10px]" />
            <span className="text-white font-bold">{c.name}</span>
          </nav>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
            {/* Photo */}
            <div className="w-[200px] h-[200px] md:w-[260px] md:h-[260px] rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl flex-shrink-0">
              <Image
                src={doctor.image}
                alt={c.name}
                width={260}
                height={260}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>

            {/* Info */}
            <div className="text-center md:text-left">
              <span className="inline-block px-3 py-1 bg-[#427bdf]/30 backdrop-blur-md text-white text-xs font-bold uppercase tracking-[2px] rounded-full mb-3 border border-white/20">
                {c.title}
              </span>
              <h1 className="text-3xl md:text-4xl font-black text-white mb-3">{c.name}</h1>
              <p className="text-[#a8ccf0] text-lg font-medium mb-6">{c.specialty}</p>
              
              {/* Service Tags */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                {c.services.map((s, i) => (
                  <span key={i} className="px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white text-xs font-bold rounded-full border border-white/10">
                    {s}
                  </span>
                ))}
              </div>

              <a href="tel:#" className="inline-flex items-center gap-2 px-6 py-3 bg-[#427bdf] hover:bg-[#3568c0] text-white rounded-xl font-bold text-[15px] transition-colors shadow-lg">
                <FaPhoneAlt className="text-sm" />
                {lang === 'tr' ? 'Randevu Al' : 'Book Appointment'}
              </a>
            </div>
          </div>
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
