'use client';

import React from 'react';
import { PiCalendarCheckLight } from 'react-icons/pi';
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
    }
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 xl:px-10 -mt-10 md:-mt-16 xl:-mt-20 z-40 relative pb-10">
      
      {/* 
        Grid Layout: 
        Mobile: 3 cols for squares, Randevu is full width
        Tablet (md): 4 cols for squares, Randevu is full width (or 3+1 structure)
        Desktop (lg): 6 cols. 4 squares (4 cols) + 1 Randevu (2 cols) = 6 cols total.
      */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3 xl:gap-6 justify-center">

        {/* Category Floating Square Cards */}
        {categories.map((cat) => (
          <a 
            key={cat.id}
            href={cat.href}
            className="group relative shadow-lg hover:shadow-2xl flex flex-col items-center justify-center p-4 xl:p-6 cursor-pointer transition-all duration-500 hover:-translate-y-2 overflow-hidden aspect-square rounded-xl md:rounded-2xl"
            style={{ backgroundColor: cat.color }}
          >
            {/* Subtle glass effect overlay */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Icon */}
            <div className="mb-3 md:mb-4 transform transition-transform duration-500 group-hover:-translate-y-1">
              <cat.icon 
                className="text-white text-5xl md:text-6xl font-light" 
                strokeWidth={0.5}
              />
            </div>

            {/* Title */}
            <span className="text-white font-bold text-[13px] md:text-[14px] xl:text-[15px] tracking-wide text-center px-1 z-10 leading-tight">
              {cat.title}
            </span>
          </a>
        ))}

        {/* Appointment Action Box - Rectangular (2 columns wide on desktop, full width on mobile/tablet) */}
        <a 
          href={lang === 'en' ? '/en/contact' : '/iletisim'}
          className="col-span-full lg:col-span-2 group relative shadow-xl hover:shadow-2xl flex flex-row items-center justify-center p-6 xl:p-8 cursor-pointer transition-all duration-500 hover:-translate-y-2 overflow-hidden rounded-xl md:rounded-2xl aspect-auto min-h-[120px]"
          style={{ backgroundColor: '#fcfcfc' }} // Clean white/off-white background for appointment
        >
          {/* Inner Gold Border Container connecting to parent edges slightly */}
          <div className="absolute inset-2 border-2 border-[#cca66b] pointer-events-none transition-all duration-500 group-hover:inset-1.5 rounded-lg"></div>
          
          <div className="flex items-center justify-center space-x-4 md:space-x-6 z-10">
            <PiCalendarCheckLight className="text-[#3a4f66] text-5xl md:text-[70px] transform transition-transform duration-500 group-hover:scale-110" strokeWidth={1} />
            
            <div className="flex flex-col items-start text-[#3a4f66]">
              <span className="text-[17px] md:text-[20px] font-black tracking-wide leading-tight">
                {dict?.freeAppointment || 'ÜCRETSİZ'}
              </span>
              <span className="text-[17px] md:text-[20px] font-black tracking-wide leading-tight">
                {dict?.bookAppointment || 'RANDEVU AL'}
              </span>
            </div>
          </div>
        </a>

      </div>
    </div>
  );
}
