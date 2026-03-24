'use client';

import React, { useState } from 'react';
import { GiHairStrands } from 'react-icons/gi';
import { BsPersonHeart } from 'react-icons/bs';
import { FaRegCalendarAlt, FaArrowRight, FaLeaf } from 'react-icons/fa';
import { MdOutlineFaceRetouchingNatural } from 'react-icons/md';

export default function CategoryButtons({ dict }: { dict?: any }) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const categories = [
    { id: 1, title: dict?.hairTransplant?.title || 'Saç Ekimi', icon: GiHairStrands, bg: 'from-[#5C7B99] to-[#4a637a]' },
    { id: 2, title: dict?.plasticSurgery?.title || 'Plastik Cerrahi', icon: BsPersonHeart, bg: 'from-[#7BA896] to-[#638778]' },
    { id: 3, title: dict?.medicalAesthetics?.title || 'Medikal Estetik', icon: MdOutlineFaceRetouchingNatural, bg: 'from-[#BA7B8E] to-[#966372]' },
    { id: 4, title: dict?.epilation?.title || 'Epilasyon', icon: FaLeaf, bg: 'from-[#A18EAC] to-[#81728a]' },
  ];

  return (
    <div className="w-full relative z-20 xl:-mt-36 lg:-mt-28 px-4 lg:px-10 xl:px-24">
      {/* Desktop Layout */}
      <div className="hidden lg:flex w-full mx-auto shadow-2xl h-44 xl:h-48 rounded-2xl overflow-hidden bg-white border-4 border-white">
        <div className="flex w-[75%] h-full">
          {categories.map((cat) => (
             <div 
                key={cat.id} 
                onMouseEnter={() => setHoveredId(cat.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative group flex flex-col items-center justify-center text-white cursor-pointer transition-all duration-500 ease-out bg-gradient-to-br ${cat.bg} overflow-hidden ${
                  hoveredId === cat.id ? 'flex-[1.5]' : hoveredId !== null ? 'flex-[0.8] opacity-90' : 'flex-1 opacity-100'
                }`}
             >
                <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${hoveredId === cat.id ? 'opacity-0' : 'opacity-[0.03]'}`}></div>
                
                <cat.icon className={`text-5xl xl:text-[3.8rem] mb-4 font-light transition-transform duration-500 z-10 drop-shadow-md ${
                  hoveredId === cat.id ? 'scale-110 -translate-y-2' : ''
                }`} />
                <span className={`font-bold text-sm xl:text-[17px] tracking-wide text-center z-10 transition-transform duration-500 drop-shadow-sm ${
                  hoveredId === cat.id ? 'scale-105' : ''
                }`}>{cat.title}</span>

                <div className={`absolute bottom-4 opacity-0 transform translate-y-4 transition-all duration-500 z-10 ${
                  hoveredId === cat.id ? 'opacity-100 translate-y-0' : ''
                }`}>
                  <FaArrowRight className="text-white/90 text-lg" />
                </div>
             </div>
          ))}
        </div>
        
        {/* Desktop Appointment Box */}
        <div className="w-[25%] bg-gradient-to-br from-[#C6A87E] to-[#b09367] flex items-center justify-center cursor-pointer group transition-all duration-500 relative overflow-hidden">
           <div className="absolute inset-0 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-0"></div>
           
           <div className="flex items-center text-white z-10">
             <div className="relative mr-5">
                <FaRegCalendarAlt className="text-5xl lg:text-6xl group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 drop-shadow-md" />
                <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
                    <div className="w-2.5 h-2.5 bg-[#C6A87E] rounded-full group-hover:animate-ping"></div>
                </div>
             </div>
             <div className="flex flex-col font-black text-[24px] xl:text-[28px] tracking-tight leading-[1.1] drop-shadow-sm">
               <span>Ücretsiz</span>
               <span>Randevu Al</span>
             </div>
           </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden w-full flex flex-col relative z-20 -mt-12">
        {/* Categories horizontally scrollable with card style */}
        <div className="flex flex-nowrap w-full overflow-x-auto snap-x snap-mandatory gap-3 pb-4 pt-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
           <div className="w-1 flex-shrink-0"></div>
           {categories.map((cat) => (
             <div 
               key={cat.id} 
               className={`flex-shrink-0 w-[42%] h-36 rounded-2xl shadow-lg flex flex-col items-center justify-center text-white snap-center cursor-pointer bg-gradient-to-br ${cat.bg} relative overflow-hidden transform transition-transform active:scale-95`}
             >
                <div className="absolute inset-0 bg-black opacity-0 active:opacity-10 transition-opacity"></div>
                <cat.icon className="text-[42px] mb-3 font-light drop-shadow-md" />
                <span className="font-bold text-[13px] text-center tracking-wider px-2 drop-shadow-sm leading-tight">{cat.title}</span>
             </div>
           ))}
           <div className="w-1 flex-shrink-0"></div>
        </div>
        
        {/* Mobile Appointment Box */}
        <div className="w-full px-4 mt-2 mb-4">
          <div className="w-full bg-gradient-to-br from-[#C6A87E] to-[#b09367] rounded-2xl shadow-xl flex items-center justify-center cursor-pointer py-6 relative overflow-hidden border-[3px] border-white active:scale-95 transition-transform">
             <div className="flex items-center text-white relative z-10">
               <div className="relative mr-5">
                  <FaRegCalendarAlt className="text-[44px] drop-shadow-md" />
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#C6A87E] animate-pulse"></div>
                  </div>
               </div>
               <div className="flex flex-col font-black text-[26px] tracking-tight leading-[1.1] drop-shadow-sm text-shadow-sm">
                 <span>Ücretsiz</span>
                 <span>Randevu Al</span>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
