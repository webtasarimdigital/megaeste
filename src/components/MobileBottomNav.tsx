'use client';

import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

export default function MobileBottomNav() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full z-50 bg-white shadow-[0_-5px_15px_rgba(0,0,0,0.05)] border-t border-gray-100">
      <div className="p-3 px-4 w-full">
        <div className="flex w-full rounded-full overflow-hidden shadow-sm">
          {/* Iletisim Button */}
          <a 
            href="tel:#" 
            className="flex-1 flex justify-center items-center py-3.5 bg-[#4B5357] text-white hover:bg-[#3d4347] transition-colors"
          >
            <FaPhoneAlt className="text-lg mr-2" />
            <span className="font-bold text-[17px] tracking-wide">İletişim</span>
          </a>

          {/* Whatsapp Button */}
          <a 
            href="https://wa.me/#" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex justify-center items-center py-3.5 bg-[#1eb852] text-white hover:bg-[#189b43] transition-colors"
          >
            <span className="font-bold text-[17px] tracking-wide mr-2">Whatsapp</span>
            <FaWhatsapp className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
