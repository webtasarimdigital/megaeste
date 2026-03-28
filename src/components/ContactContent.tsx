'use client';
/* eslint-disable @next/next/no-img-element */

import React from 'react';
import QuickContact from './QuickContact';

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export default function ContactContent({ dict, lang }: { dict?: any, lang: string }) {
  const isTr = lang === 'tr';
  const title = isTr ? 'İletişim' : 'Contact Us';
  const subtitle = isTr ? 'BİZE ULAŞIN' : 'GET IN TOUCH';
  const desc = isTr 
    ? 'Uzman hekimlerimizden randevu almak veya aklınıza takılan soruları sormak için aşağıdaki iletişim kanallarından bize rahatlıkla ulaşabilirsiniz.'
    : 'You can easily reach us through the contact channels below to book an appointment with our expert physicians or ask any questions you have.';

  return (
    <div className="w-full bg-[#f8fafc] pb-10">
      
      {/* Premium Compact Hero Section (Matching Inner Pages) */}
      <section className="relative w-full h-[400px] lg:h-[45vh] min-h-[350px] bg-[#0d2244] flex items-center justify-center overflow-hidden">
        
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0d2244]/80 z-10 mix-blend-multiply"></div>
          {/* We use a gradient to make text stand out */}
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0d2244] to-transparent z-20"></div>
          
          <img 
            src="/images/megaeste-hero.jfif" 
            alt="Megaeste İletişim" 
            className="w-full h-full object-cover object-top opacity-50 blur-[2px] transform scale-105"
          />
        </div>

        {/* Content */}
        <div className="relative z-30 flex flex-col items-center justify-center text-center px-4 mt-10">
          <div className="flex items-center space-x-3 mb-4 md:mb-6">
            <div className="w-6 h-[2px] bg-[#cca66b]"></div>
            <span className="text-[#cca66b] text-[11px] md:text-xs font-black tracking-[0.3em] uppercase drop-shadow-md">
              {subtitle}
            </span>
            <div className="w-6 h-[2px] bg-[#cca66b]"></div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[60px] font-black text-white tracking-tight leading-none mb-6 drop-shadow-xl">
            {title}
          </h1>
          <p className="text-gray-300 text-sm md:text-base font-medium max-w-xl leading-relaxed drop-shadow-sm">
            {desc}
          </p>
        </div>

      </section>

      {/* Reused Quick Contact Block - Needs negative margin to overlap hero */}
      <div className="relative z-40 -mt-16 sm:-mt-20 xl:-mt-24 px-4 w-full max-w-[1440px] mx-auto">
        {/* QuickContact already has nice paddings and shadow. We just render it here. */}
        <QuickContact />
      </div>

    </div>
  );
}
