'use client';

import React from 'react';
import { FaCalendarAlt, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function FloatingActionButtons({ lang = 'tr' }: { lang?: string }) {
  return (
    // Hidden on mobile (hidden md:flex), stick to right center
    <div className="fixed right-4 top-1/2 -translate-y-1/2 flex-col gap-4 z-50 hidden md:flex">
      
      {/* Appointment Button (Black) */}
      <a 
        href={lang === 'en' ? '/en/contact' : '/iletisim'} 
        title={lang === 'en' ? 'Book Appointment' : 'Randevu Al'}
        className="w-[52px] h-[52px] bg-black text-white hover:scale-110 transition-transform shadow-2xl flex items-center justify-center rounded-full"
      >
        <FaCalendarAlt size={22} />
      </a>

      {/* Instagram Button (Gradient) */}
      <a 
        href="https://instagram.com/megaeste" 
        target="_blank" 
        rel="noopener noreferrer"
        title="Instagram"
        className="w-[52px] h-[52px] text-white hover:scale-110 transition-transform shadow-2xl flex items-center justify-center rounded-full relative"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] pointer-events-none"></div>
        <FaInstagram size={28} className="relative z-10" />
      </a>

      {/* WhatsApp Button (Green) */}
      <a 
        href="https://wa.me/908502223789" 
        target="_blank" 
        rel="noopener noreferrer"
        title="WhatsApp"
        className="w-[52px] h-[52px] bg-[#25D366] text-white hover:scale-110 transition-transform shadow-2xl flex items-center justify-center rounded-full"
      >
        <FaWhatsapp size={28} />
      </a>

    </div>
  );
}
