'use client';

import React from 'react';
import { GiHairStrands } from 'react-icons/gi';
import { BsPersonHeart } from 'react-icons/bs';
import { FaTooth, FaHourglassHalf, FaRegCalendarAlt } from 'react-icons/fa';
import { MdOutlineFaceRetouchingNatural } from 'react-icons/md';

const categories = [
  { id: 1, title: 'Saç Ekimi', icon: GiHairStrands, bg: 'bg-[#5C7B99] hover:bg-[#4a637a]' },
  { id: 2, title: 'Plastik Cerrahi', icon: BsPersonHeart, bg: 'bg-[#7BA896] hover:bg-[#638778]' },
  { id: 3, title: 'Medikal Estetik', icon: MdOutlineFaceRetouchingNatural, bg: 'bg-[#BA7B8E] hover:bg-[#966372]' },
  { id: 4, title: 'Diş Estetiği', icon: FaTooth, bg: 'bg-[#A18EAC] hover:bg-[#81728a]' },
  { id: 5, title: 'Longevity', icon: FaHourglassHalf, bg: 'bg-[#A47B65] hover:bg-[#846351]' },
];

export default function CategoryButtons() {
  return (
    <div className="w-full relative z-20 xl:-mt-32 lg:-mt-24">
      {/* Desktop Layout */}
      <div className="hidden lg:flex w-full mx-auto shadow-2xl h-40 xl:h-44">
        <div className="flex w-[80%] h-full opacity-95">
          {categories.map((cat) => (
             <div key={cat.id} className={`flex-1 flex flex-col items-center justify-center text-white cursor-pointer transition-colors ${cat.bg}`}>
                <cat.icon className="text-5xl xl:text-[3.5rem] mb-4 stroke-[0.5] font-light" />
                <span className="font-bold text-sm xl:text-lg tracking-wide text-center">{cat.title}</span>
             </div>
          ))}
        </div>
        
        {/* Desktop Appointment Box */}
        <div className="w-[20%] bg-gradient-to-br from-[#EAE6DF] to-[#E3DCD1] flex items-center justify-center cursor-pointer hover:opacity-95 transition-opacity border-l-[10px] border-white max-h-full">
           <div className="flex items-center text-gray-800">
             <div className="relative mr-5 opacity-70">
                <FaRegCalendarAlt className="text-5xl" />
                <div className="absolute -bottom-1 -right-1 bg-[#EAE6DF] rounded-full p-1 border-2 border-gray-600">
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                </div>
             </div>
             <div className="flex flex-col font-black text-[22px] tracking-tight leading-6">
               <span className="text-[#333]">Ücretsiz</span>
               <span className="text-[#333]">Randevu Al</span>
             </div>
           </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden w-full flex flex-col shadow-lg">
        {/* Categories horizontally scrollable */}
        <div className="flex flex-nowrap w-full overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
           {categories.map((cat) => (
             <div key={cat.id} className={`flex-shrink-0 w-[33.33%] h-32 flex flex-col items-center justify-center text-white snap-start cursor-pointer transition-colors ${cat.bg}`}>
                <cat.icon className="text-[40px] mb-3 font-light" />
                <span className="font-bold text-xs text-center tracking-wider">{cat.title}</span>
             </div>
           ))}
        </div>
        
        {/* Mobile Appointment Box */}
        <div className="w-full py-5 bg-white flex items-center justify-center cursor-pointer">
           <div className="flex items-center justify-center text-[#4B5357] px-6 py-4 border-[1.5px] border-[#C6A87E] w-[92%] rounded-sm">
             <div className="relative mr-5 text-[#5D6366]">
                <FaRegCalendarAlt className="text-5xl opacity-80" />
                <div className="absolute -bottom-1 -right-2 bg-white rounded-full p-0.5 border-2 border-[#5D6366]">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center bg-white">
                        <span className="text-[#5D6366] text-[10px] font-black">✓</span>
                    </div>
                </div>
             </div>
             <div className="flex flex-col font-bold text-[22px] tracking-tight leading-[1.1] ml-2 text-[#4c5255]">
               <span>Ücretsiz</span>
               <span>Randevu Al</span>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
