'use client';

import React from 'react';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function NotFoundContent({ dict, lang }: { dict?: any, lang: string }) {
  const content = dict?.notFound || {
    title: "404",
    subtitle: "Sayfa Bulunamadı",
    message: "Aradığınız sayfa mevcut değil, adı değişmiş veya geçici olarak hizmet dışı olabilir.",
    button: "Ana Sayfaya Dön"
  };

  const prefix = lang === 'tr' ? '' : `/${lang}`;

  return (
    <div className="flex flex-col items-center justify-center min-h-[65vh] px-4 py-20 bg-gradient-to-b from-white to-[#f8fafd] text-center">
      {/* Visual 404 Element */}
      <div className="relative flex justify-center items-center">
        <h1 className="text-[120px] md:text-[200px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#427bdf]/10 to-[#427bdf]/5 select-none leading-none">
          {content.title}
        </h1>
        <div className="absolute inset-0 flex items-center justify-center flex-col mt-4">
          <div className="w-16 h-1 bg-[#427bdf] rounded-full mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1e3a5f] tracking-tight">
            {content.subtitle}
          </h2>
        </div>
      </div>
      
      {/* Message and Action */}
      <p className="mt-8 text-gray-500 max-w-lg mx-auto text-lg md:text-xl font-medium leading-relaxed">
        {content.message}
      </p>

      <Link 
        href={prefix || '/'} 
        className="mt-12 inline-flex items-center px-10 py-4.5 bg-[#427bdf] text-white rounded-full font-bold text-lg hover:bg-[#2b5ebf] transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_40px_-10px_rgba(66,123,223,0.5)] hover:shadow-[0_15px_50px_-10px_rgba(66,123,223,0.6)]"
      >
        <FaHome className="mr-3 text-xl" />
        {content.button}
      </Link>
    </div>
  );
}
