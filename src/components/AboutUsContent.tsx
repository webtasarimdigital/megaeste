'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import Image from 'next/image';
import { PiCheckCircleThin, PiHeartbeatThin, PiShieldCheckThin, PiStethoscopeThin } from 'react-icons/pi';
import QuickContact from './QuickContact';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

export default function AboutUsContent({ dict, lang }: { dict: any, lang: string }) {
  const content = dict?.aboutUs;

  return (
    <div className="w-full bg-white relative">
      {/* Hero */}
      {/* Adjusted Compact Hero Section */}
      <section className="relative w-full h-[240px] lg:h-[28vh] min-h-[240px] bg-[#0d2244] flex items-center justify-center overflow-hidden pb-8">
        
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0d2244]/80 z-10 mix-blend-multiply"></div>
          {/* We use a gradient to make text stand out */}
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0d2244] to-transparent z-20"></div>
          
          <img 
            src="/images/services/medikal-cilt-bakimi.png" 
            alt="Megaeste Hakkımızda" 
            className="w-full h-full object-cover object-top opacity-50 blur-[2px] transform scale-105"
          />
        </div>

        {/* Content */}
        <div className="relative z-30 flex flex-col items-center justify-center text-center px-4 -mt-4">
          <div className="flex items-center space-x-3 mb-3 md:mb-5">
            <div className="w-5 h-[2px] bg-[#cca66b]"></div>
            <span className="text-[#cca66b] text-[11px] md:text-xs font-black tracking-[0.3em] uppercase drop-shadow-md">
              MEGAESTE CLINIC
            </span>
            <div className="w-5 h-[2px] bg-[#cca66b]"></div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-none mb-4 drop-shadow-xl">
            {content?.title || (lang === 'tr' ? 'Hakkımızda' : 'About Us')}
          </h1>
          <p className="text-gray-300 text-sm md:text-base font-medium max-w-xl leading-relaxed drop-shadow-sm">
            {lang === 'tr'
              ? 'Teknolojiyi ve estetiği bir araya getiren modern sağlık merkezi.'
              : 'Modern healthcare center combining technology and aesthetics.'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative z-40 -mt-6 sm:-mt-10 w-full max-w-[1440px] mx-auto px-4 md:px-8 xl:px-12 pb-16 md:pb-24">
        <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-6 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Text */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-black text-[#1e3a5f] leading-tight">
              {lang === 'en' ? "Modern Healthcare Center Combining Technology and Aesthetics" : "Teknolojiyi ve Estetiği Bir Araya Getiren Modern Sağlık Merkezi"}
            </h2>
            
            <div className="w-16 h-1 bg-[#cca66b] rounded-full"></div>
            
            <div className="prose prose-lg text-gray-600 leading-relaxed max-w-none">
              <p className="font-semibold text-lg text-gray-800">
                {content?.description}
              </p>
              <p>{content?.mission}</p>
              <p>{content?.vision}</p>
              <p>{content?.approach}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {[
                { icon: PiStethoscopeThin, text: lang === 'en' ? "Expert Doctors" : "Uzman Hekimler" },
                { icon: PiShieldCheckThin, text: lang === 'en' ? "Reliable Results" : "Güvenilir Sonuçlar" },
                { icon: PiHeartbeatThin, text: lang === 'en' ? "Patient Satisfaction" : "Hasta Memnuniyeti" },
                { icon: PiCheckCircleThin, text: lang === 'en' ? "International Standards" : "Uluslararası Standartlar" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#cca66b]/30 hover:bg-[#cca66b]/5 transition-colors">
                  <item.icon className="text-3xl text-[#cca66b] flex-shrink-0" />
                  <span className="font-bold text-sm text-[#1e3a5f]">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="relative">
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-gradient-to-tr from-[#eef4fc] to-[#f7faff] rounded-[40px] -rotate-3 z-0"></div>
            
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg border border-white">
                  <Image src="/images/services/burun-estetigi.png" alt="Plastik Cerrahi" fill className="object-cover" />
                </div>
                <div className="relative h-48 md:h-56 rounded-2xl overflow-hidden shadow-lg border border-white">
                  <Image src="/images/services/lazer-epilasyon.png" alt="Lazer Epilasyon" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative h-48 md:h-56 rounded-2xl overflow-hidden shadow-lg border border-white">
                  <Image src="/images/services/medikal-cilt-bakimi.png" alt="Medikal Estetik" fill className="object-cover" />
                </div>
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg border border-white">
                  <Image src="/images/services/dhi-sac-ekimi.png" alt="Saç Ekimi" fill className="object-cover object-top" />
                </div>
              </div>
            </div>
            
            {/* Overlay Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 border-l-4 border-[#cca66b] flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold">
                15+
              </div>
              <div>
                <p className="font-black text-[#1e3a5f] text-lg leading-tight">{lang === 'en' ? "Years of" : "Yıllık"}</p>
                <p className="text-gray-500 text-sm font-medium">{lang === 'en' ? "Experience" : "Deneyim"}</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Appointment CTA Section using QuickContact */}
      <section className="w-full bg-gradient-to-b from-white to-[#f4f7fb] pt-10 pb-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 xl:px-12 text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-[#1e3a5f] mb-4">
            {content?.bookTitle || "Güzelliğinize Doğru İlk Adımı Atın"}
          </h2>
          <p className="text-gray-600 font-medium max-w-2xl mx-auto flex items-center justify-center gap-2">
            <span>{content?.bookDesc || "Uzman hekimlerimizden ücretsiz ön değerlendirme almak için formu doldurun."}</span>
          </p>
        </div>
        <QuickContact />
      </section>

      {/* Full Width Map */}
      <section className="w-full h-[400px] md:h-[500px] relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1505.5786884610996!2d29.110287114660724!3d41.020524949502906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac9aa1b35b6df%3A0x6b4457223b37807c!2sMegaeste%20Estetik%20%26%20Plastik%20Cerrahi!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="hover:grayscale-0 transition-all duration-700 pointer-events-auto"
        />
      </section>

    </div>
  );
}
