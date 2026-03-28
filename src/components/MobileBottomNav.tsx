'use client';

import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MobileBottomNav({ dict }: { dict?: any }) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full z-50 bg-white shadow-[0_-5px_15px_rgba(0,0,0,0.05)] border-t border-gray-100">
      <div className="p-3 px-4 w-full">
        <div className="relative flex w-full rounded-full overflow-visible">
          
          {/* İletişim Button - Gray/Dark */}
          <a 
            href="tel:+905334814098" 
            className="flex-1 flex justify-center items-center py-3.5 bg-[#3d4347] text-white rounded-l-full"
          >
            <FaPhoneAlt className="text-lg mr-2" />
            <span className="font-bold text-[16px] tracking-wide">{dict?.contact || "İletişim"}</span>
          </a>

          {/* Center Map Button - replacing chatbot, now blue/gold */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-5 z-20">
            <a
              href="https://maps.app.goo.gl/j5kTpopsUyhxsjqd9" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-[56px] h-[56px] rounded-full bg-[#1e3a5f] flex items-center justify-center shadow-lg border-4 border-white transition-transform active:scale-95"
            >
              <FaMapMarkerAlt className="text-[#cca66b] text-[24px] drop-shadow-sm" />
            </a>
          </div>

          {/* WhatsApp Button - Green */}
          <a 
            href="https://wa.me/905334814098?text=Merhaba,%20bilgi%20almak%20istiyorum" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex justify-center items-center py-3.5 bg-[#1eb852] text-white rounded-r-full"
          >
            <span className="font-bold text-[16px] tracking-wide mr-2">{dict?.whatsapp || "Whatsapp"}</span>
            <FaWhatsapp className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
