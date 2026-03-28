'use client';

import React from 'react';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function NotFoundContent({ dict, lang }: { dict?: any, lang: string }) {
  const content = dict?.notFound || {
    title: "404",
    subtitle: "Sayfa Bulunamadı",
    message: "Aradığınız sayfa silinmiş, adı değiştirilmiş veya geçici olarak ulaşılamıyor olabilir.",
    button: "Ana Sayfaya Dön"
  };

  const isTr = lang === 'tr';
  const prefix = isTr ? '' : `/${lang}`;

  const headingText = isTr ? "Görünüşe Göre Yanlış Yere Geldiniz" : "Looks Like You're in the Wrong Place";
  const descText = isTr 
    ? "Aradığınız sayfa silinmiş, adı değiştirilmiş veya geçici olarak ulaşılamıyor olabilir. Gülüşünüze kavuşmak için ana sayfamıza dönebilirsiniz."
    : "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. You can return to our homepage to get your smile back.";

  const btnHome = isTr ? "ANA SAYFAYA DÖN" : "RETURN TO HOME";
  const btnContact = isTr ? "BİZİMLE İLETİŞİME GEÇİN" : "CONTACT US";
  const badgeText = isTr ? "SAYFA BULUNAMADI" : "PAGE NOT FOUND";

  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] px-4 py-20 bg-[#f9fbff] text-center font-sans relative overflow-hidden">
      
      {/* Decorative Blur Elements purely for clinical premium feel */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#427bdf]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#cca66b]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
        
        {/* 404 Typography */}
        <div className="relative flex justify-center items-center mb-10">
          <div className="text-[140px] md:text-[220px] font-black leading-none tracking-tighter flex items-center select-none">
            <span className="text-[#3d4450]">4</span>
            <span className="text-[#f4b329]">0</span>
            <span className="text-[#3d4450]">4</span>
          </div>
          
          {/* Overlapping Badge */}
          <div className="absolute -bottom-6 md:-bottom-8 px-6 md:px-10 py-2.5 md:py-3.5 bg-[#3d4450] rounded-full shadow-xl border-4 border-[#f9fbff] transform transition-transform hover:scale-105">
            <span className="text-[#f4b329] font-black text-sm md:text-base tracking-[0.2em]">
              {badgeText}
            </span>
          </div>
        </div>
        
        {/* Headings */}
        <h1 className="mt-8 md:mt-12 text-3xl md:text-[42px] font-extrabold text-[#1a2b49] tracking-tight leading-tight">
          {headingText}
        </h1>
        
        {/* Body Text */}
        <p className="mt-6 md:mt-8 text-gray-500 text-base md:text-[18px] font-medium leading-relaxed max-w-lg px-4 drop-shadow-sm">
          {descText}
        </p>

        {/* Action Buttons */}
        <div className="mt-10 md:mt-14 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full px-4">
          <Link 
            href={prefix || '/'} 
            className="w-full md:w-auto flex items-center justify-center px-8 md:px-10 py-4.5 bg-[#f4b329] text-[#1a2b49] rounded-xl font-bold text-[14px] md:text-[15px] tracking-wide hover:bg-[#dfa120] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(244,179,41,0.5)] uppercase"
          >
            <FaHome className="mr-3 text-lg mb-0.5" />
            {btnHome}
          </Link>
          
          <Link
            href={`${prefix}/iletisim`}
            className="w-full md:w-auto flex items-center justify-center px-8 md:px-10 py-4.5 bg-white border-2 border-gray-200 text-[#3d4450] rounded-xl font-bold text-[14px] md:text-[15px] tracking-wide hover:border-[#1a2b49] hover:text-[#1a2b49] hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 uppercase"
          >
            {btnContact}
          </Link>
        </div>

      </div>
    </div>
  );
}
