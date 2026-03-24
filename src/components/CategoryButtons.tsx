'use client';

import React, { useState } from 'react';
import { GiHairStrands } from 'react-icons/gi';
import { BsPersonHeart } from 'react-icons/bs';
import { FaRegCalendarAlt, FaLeaf } from 'react-icons/fa';
import { MdOutlineFaceRetouchingNatural } from 'react-icons/md';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CategoryButtons({ dict }: { dict?: any }) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const categories = [
    { id: 1, title: dict?.hairTransplant?.title || 'Saç Ekimi', icon: GiHairStrands, color: '#427bdf' }, // Logo Blue
    { id: 2, title: dict?.plasticSurgery?.title || 'Plastik Cerrahi', icon: BsPersonHeart, color: '#e9799d' }, // Logo Pink
    { id: 3, title: dict?.medicalAesthetics?.title || 'Medikal Estetik', icon: MdOutlineFaceRetouchingNatural, color: '#efc34c' }, // Logo Yellow/Gold
    { id: 4, title: dict?.epilation?.title || 'Epilasyon', icon: FaLeaf, color: '#5C7B99' } // Elegant Grey-Blue Add-on
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 xl:px-10 -mt-10 md:-mt-16 xl:-mt-20 z-40 relative pb-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 xl:gap-6 justify-center">

        {/* Category Floating Cards */}
        {categories.map((cat) => (
          <div 
            key={cat.id}
            onMouseEnter={() => setHoveredId(cat.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="group relative bg-white/95 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 flex flex-col items-center justify-center p-6 xl:p-8 cursor-pointer transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          >
            {/* Top Accent Line (Animates width on hover) */}
            <div 
              className="absolute top-0 left-0 h-1.5 w-0 group-hover:w-full transition-all duration-700 ease-out"
              style={{ backgroundColor: cat.color }}
            ></div>

            {/* Icon Container */}
            <div 
              className="flex items-center justify-center w-14 h-14 xl:w-16 xl:h-16 rounded-full mb-4 xl:mb-5 transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundColor: `${cat.color}15` }}
            >
              <cat.icon 
                className="text-3xl xl:text-4xl transition-colors duration-300" 
                style={{ color: cat.color }}
              />
            </div>

            {/* Title */}
            <span className="text-[13px] xl:text-[15px] font-bold text-gray-700 text-center tracking-wide group-hover:text-gray-900 transition-colors">
              {cat.title}
            </span>

            {/* Subtle Gradient Glow from Bottom */}
            <div 
              className="absolute -bottom-10 left-0 w-full h-1/2 opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-xl pointer-events-none"
              style={{ background: `linear-gradient(to top, ${cat.color}, transparent)` }}
            ></div>
          </div>
        ))}

        {/* Appointment Action Button */}
        <div className="group relative bg-gradient-to-br from-[#efc34c] to-[#d4a834] rounded-2xl shadow-xl hover:shadow-[#efc34c]/30 flex flex-col items-center justify-center p-6 xl:p-8 cursor-pointer transition-all duration-500 hover:-translate-y-2 border-2 border-white/20 overflow-hidden col-span-2 md:col-span-1 lg:col-span-1">
          {/* Glassmorphism Sheen */}
          <div className="absolute top-0 -inset-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine z-10" />

          <FaRegCalendarAlt className="text-3xl xl:text-4xl text-white mb-3 xl:mb-4 transition-transform duration-500 group-hover:scale-110" />
          
          <div className="flex flex-col items-center text-white relative z-20">
            <span className="text-[11px] xl:text-[12px] font-semibold tracking-widest uppercase opacity-90 mb-1">
              Ücretsiz
            </span>
            <span className="text-[15px] xl:text-[17px] font-black tracking-wide text-center">
              Randevu Al
            </span>
          </div>

          {/* Highlight ring on hover */}
          <div className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/50 transition-colors duration-500"></div>
        </div>

      </div>
    </div>
  );
}
