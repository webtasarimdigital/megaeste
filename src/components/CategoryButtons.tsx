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
      color: 'rgba(79, 111, 143, 0.65)', // Muted Blue (Translucent)
      href: lang === 'en' ? '/en/hizmetler/hair-transplant' : '/hizmetler/sac-ekimi'
    },
    { 
      id: 2, 
      title: dict?.plasticSurgery?.title || 'Plastik Cerrahi', 
      icon: BodyIcon,
      color: 'rgba(114, 151, 136, 0.65)', // Muted Green (Translucent)
      href: lang === 'en' ? '/en/hizmetler/plastic-surgery' : '/hizmetler/plastik-cerrahi'
    },
    { 
      id: 3, 
      title: dict?.medicalAesthetics?.title || 'Medikal Estetik', 
      icon: FaceIcon,
      color: 'rgba(173, 103, 120, 0.65)', // Muted Rose (Translucent)
      href: lang === 'en' ? '/en/hizmetler/medical-aesthetics' : '/hizmetler/medikal-estetik'
    },
    { 
      id: 4, 
      title: dict?.epilation?.title || 'Epilasyon', 
      icon: EpilationIcon,
      color: 'rgba(159, 142, 171, 0.65)', // Muted Purple (Translucent)
      href: lang === 'en' ? '/en/hizmetler/epilation' : '/hizmetler/epilasyon'
    }
  ];

  return (
    <>
      {/* Mobile/Tablet Glassmorphism Bar (Esteworld Style - Sits flush atop the content) */}
      <div className="flex md:hidden w-full h-[64px] -mt-[64px] bg-transparent backdrop-blur-sm relative z-30 shadow-[0_-5px_15px_rgba(0,0,0,0.1)]">
        <div className="w-full flex">
          {categories.slice(0, 3).map((cat) => (
            <a 
              key={cat.id}
              href={cat.href}
              className="flex-1 flex flex-col items-center justify-center border-r border-white/20 last:border-none transition-colors"
              style={{ backgroundColor: `${cat.color.replace('0.65', '0.85')}` }}
            >
              <cat.icon className="text-white/90 w-8 h-8 stroke-[0.5]" />
            </a>
          ))}
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 xl:px-10 z-20 relative pt-8 pb-10 md:pt-0 mb-10 md:-mt-16 xl:-mt-20">
        
        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-6 gap-3 xl:gap-6 justify-center">

          {/* Category Floating Square Cards */}
          {categories.map((cat) => (
            <a 
              key={cat.id}
              href={cat.href}
              className="group relative shadow-lg hover:shadow-2xl flex flex-col items-center justify-center p-4 xl:p-6 cursor-pointer transition-all duration-500 hover:-translate-y-2 overflow-hidden aspect-square rounded-xl md:rounded-2xl backdrop-blur-md"
              style={{ backgroundColor: cat.color }}
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
