'use client';

import React from 'react';
import { PiCalendarCheckLight, PiHourglassLight } from 'react-icons/pi';
import { TbDental } from 'react-icons/tb';
import { SlUserFemale, SlUser } from 'react-icons/sl';
import { CiFaceSmile } from "react-icons/ci";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CategoryButtons({ dict, lang = 'tr' }: { dict?: any, lang?: string }) {

  const categories = [
    { 
      id: 1, 
      title: dict?.hairTransplant?.title || 'Saç Ekimi', 
      icon: SlUser, 
      color: '#4f6f8f', // Muted Blue
      href: lang === 'en' ? '/en/hizmetler/hair-transplant' : '/hizmetler/sac-ekimi'
    },
    { 
      id: 2, 
      title: dict?.plasticSurgery?.title || 'Plastik Cerrahi', 
      icon: SlUserFemale, 
      color: '#729788', // Muted Green
      href: lang === 'en' ? '/en/hizmetler/plastic-surgery' : '/hizmetler/plastik-cerrahi'
    },
    { 
      id: 3, 
      title: dict?.medicalAesthetics?.title || 'Medikal Estetik', 
      icon: CiFaceSmile, 
      color: '#ad6778', // Muted Rose
      href: lang === 'en' ? '/en/hizmetler/medical-aesthetics' : '/hizmetler/medikal-estetik'
    },
    { 
      id: 4, 
      title: dict?.dentistry?.title || 'Diş Estetiği', 
      icon: TbDental, 
      color: '#9f8eab', // Muted Purple
      href: lang === 'en' ? '/en/hizmetler/dentistry' : '/hizmetler/dis-estetigi'
    },
    { 
      id: 5, 
      title: dict?.longevity?.title || 'Longevity', 
      icon: PiHourglassLight, 
      color: '#bc7365', // Muted Rust
      href: lang === 'en' ? '/en/hizmetler/longevity' : '/hizmetler/longevity'
    }
  ];

  return (
    <div className="w-full relative z-40">
      {/* Container spanning full width with a max-width limit if desired, but image shows full width blocks */}
      <div className="w-full flex flex-wrap lg:flex-nowrap">
        
        {/* Service Categories Container - takes up most space */}
        <div className="w-full lg:w-5/6 flex flex-wrap md:flex-nowrap shadow-xl">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={cat.href}
              className="group relative flex flex-col items-center justify-center py-6 md:py-8 flex-1 min-w-[33%] md:min-w-0 cursor-pointer transition-all duration-300 overflow-hidden hover:brightness-110"
              style={{ backgroundColor: cat.color }}
            >
              {/* Subtle glass effect overlay */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon Container with elegant sizing */}
              <div className="mb-4 transform transition-transform duration-500 group-hover:-translate-y-1">
                <cat.icon 
                  className="text-white text-5xl md:text-6xl font-light" 
                  strokeWidth={0.5}
                />
              </div>

              {/* Title */}
              <span className="text-white font-bold text-[13px] md:text-[14px] xl:text-[15px] tracking-wide text-center px-2 z-10">
                {cat.title}
              </span>
            </a>
          ))}
        </div>

        {/* Appointment Action Button - The remaining 1/6th space */}
        <a 
          href={lang === 'en' ? '/en/contact' : '/iletisim'}
          className="w-full lg:w-1/6 min-w-[200px] flex flex-row lg:flex-col items-center justify-center p-4 py-6 md:py-8 cursor-pointer transition-all duration-500 hover:brightness-105 group border-t lg:border-t-0 border-white/20"
          style={{ backgroundColor: '#dddad1' }} // Beige translucent looking color
        >
          {/* Inner Gold Border Container connecting to parent edges slightly */}
          <div className="absolute inset-2 md:inset-3 border border-[#cca66b] pointer-events-none transition-all duration-500 group-hover:inset-1"></div>
          
          <PiCalendarCheckLight className="text-[#3a4f66] text-5xl md:text-6xl mb-0 lg:mb-3 mr-4 lg:mr-0 transform transition-transform duration-500 group-hover:scale-110 z-10" />
          
          <div className="flex flex-col items-start lg:items-center text-[#3a4f66] z-10">
            <span className="text-[15px] md:text-[16px] font-extrabold tracking-wide uppercase leading-tight">
              {dict?.freeAppointment || 'Ücretsiz'}
            </span>
            <span className="text-[15px] md:text-[16px] font-extrabold tracking-wide uppercase leading-tight">
              {dict?.bookAppointment || 'Randevu Al'}
            </span>
          </div>
        </a>

      </div>
    </div>
  );
}
