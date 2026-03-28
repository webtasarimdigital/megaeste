'use client';

import React from 'react';
import { PiCalendarCheckThin } from 'react-icons/pi';
import { HairIcon, FaceIcon, BodyIcon, EpilationIcon } from './CategoryIcons';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CategoryButtons({ dict, lang = 'tr' }: { dict?: any, lang?: string }) {

  const categories = [
    { 
      id: 1, 
      title: dict?.hairTransplant?.title || 'Saç Ekimi', 
      icon: HairIcon,
      color: '#4f6f8f', // Solid Blue
      href: lang === 'en' ? '/en/services/hair-transplant' : '/kategori/sac-ekimi'
    },
    { 
      id: 2, 
      title: dict?.plasticSurgery?.title || 'Plastik Cerrahi', 
      icon: BodyIcon,
      color: '#729788', // Solid Green
      href: lang === 'en' ? '/en/services/plastic-surgery' : '/kategori/plastik-cerrahi'
    },
    { 
      id: 3, 
      title: dict?.medicalAesthetics?.title || 'Medikal Estetik', 
      icon: FaceIcon,
      color: '#ad6778', // Solid Rose
      href: lang === 'en' ? '/en/services/medical-aesthetics' : '/kategori/medikal-estetik'
    },
    { 
      id: 4, 
      title: dict?.epilation?.title || 'Epilasyon', 
      icon: EpilationIcon,
      color: '#9f8eab', // Solid Purple
      href: lang === 'en' ? '/en/services/epilation' : '/kategori/epilasyon'
    }
  ];

  return (
    <>
      {/* Mobile 3-Column Solid Bar (User's desired layout from image 1) */}
      <div className="flex md:hidden flex-col w-full relative z-30 bg-[#f4f7fa]">
        
        {/* The 3 Colored Service Blocks */}
        <div className="w-full grid grid-cols-3">
          {categories.slice(0, 3).map((cat) => (
            <a 
              key={cat.id}
              href={cat.href}
              className="flex flex-col items-center justify-start pt-6 pb-4 px-1 border-r border-white/15 last:border-r-0 transition-opacity active:opacity-80 h-full"
              style={{ backgroundColor: cat.color }}
            >
              <cat.icon className="text-white w-10 h-10 mb-2 font-light stroke-[0.5]" />
              <span className="text-white font-bold text-[12px] sm:text-[13px] tracking-wide text-center leading-tight drop-shadow-sm mt-auto">
                {cat.title}
              </span>
            </a>
          ))}
        </div>

        {/* The "Ücretsiz Randevu Al" Box (From Image 1) */}
        <div className="w-full p-4 bg-[#f4f7fa]">
          <a 
            href={lang === 'en' ? '/en/contact' : '/iletisim'}
            className="flex items-center justify-center p-4 bg-white border-2 border-[#cca66b] transition-transform active:scale-95 shadow-sm"
          >
            <PiCalendarCheckThin className="text-[#3a4f66] text-[50px] mr-5" />
            <div className="flex flex-col items-start text-[#3a4f66]">
              <span className="text-[19px] font-black tracking-wide leading-tight">{lang === 'en' ? 'FREE' : 'Ücretsiz'}</span>
              <span className="text-[19px] font-black tracking-wide leading-tight">{lang === 'en' ? 'APPOINTMENT' : 'Randevu Al'}</span>
            </div>
          </a>
        </div>
      </div>

      <div className="hidden md:block w-full max-w-[1440px] mx-auto px-4 xl:px-10 z-20 relative pt-8 pb-10 md:pt-0 mb-10 md:-mt-16 xl:-mt-20">
        
        {/* Desktop Grid Layout */}
        <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-3 xl:gap-6 justify-center">

          {/* Category Floating Square Cards */}
          {categories.map((cat) => (
            <a 
              key={cat.id}
              href={cat.href}
              className="group relative shadow-lg hover:shadow-2xl flex flex-col items-center justify-center p-4 xl:p-6 cursor-pointer transition-all duration-500 hover:-translate-y-2 overflow-hidden aspect-square rounded-xl md:rounded-2xl backdrop-blur-md"
              style={{ backgroundColor: `${cat.color}E6` }} // E6 = 90% opacity
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="mb-3 md:mb-4 transform transition-transform duration-500 group-hover:-translate-y-1">
                <cat.icon className="text-white w-[76px] h-[76px] font-light" />
              </div>

              <span className="text-white font-medium text-[14px] xl:text-[15px] tracking-wide text-center px-1 z-10 leading-tight">
                {cat.title}
              </span>
            </a>
          ))}

          {/* Appointment Action Box */}
          <a 
            href={lang === 'en' ? '/en/contact' : '/iletisim'}
            className="col-span-full lg:col-span-2 group relative shadow-xl hover:shadow-2xl flex flex-row items-center justify-center p-6 xl:p-8 cursor-pointer transition-all duration-500 hover:-translate-y-2 overflow-hidden rounded-xl md:rounded-2xl aspect-auto min-h-[120px]"
            style={{ backgroundColor: '#faf5eb' }}
          >
            <div className="absolute inset-2 border-[1.5px] border-[#cca66b] pointer-events-none transition-all duration-500 group-hover:inset-1.5 rounded-lg opacity-80"></div>
            
            <div className="flex items-center justify-center space-x-6 z-10">
              <PiCalendarCheckThin className="text-[#3a4f66] text-[70px] transform transition-transform duration-500 group-hover:scale-110" strokeWidth={1} />
              
              <div className="flex flex-col items-start text-[#3a4f66]">
                <span className="text-[20px] font-black tracking-widest leading-tight uppercase relative inline-block after:content-[''] after:block after:w-full after:h-[1px] after:bg-[#cca66b] after:mt-1 after:mb-1">
                  {lang === 'en' ? 'FREE' : 'HEMEN ÜCRETSİZ'}
                </span>
                <span className="text-[20px] font-bold tracking-widest leading-tight uppercase text-[#cca66b]">
                  {lang === 'en' ? 'APPOINTMENT' : 'RANDEVU AL'}
                </span>
              </div>
            </div>
          </a>

        </div>
      </div>
    </>
  );
}
