'use client';

import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaHeadset } from 'react-icons/fa';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MobileBottomNav({ dict }: { dict?: any }) {
  const handleChatOpen = () => {
    window.dispatchEvent(new Event('openChatbot'));
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full z-50 bg-white shadow-[0_-5px_15px_rgba(0,0,0,0.05)] border-t border-gray-100">
      <div className="p-3 px-4 w-full">
        <div className="relative flex w-full rounded-full overflow-visible">
          
          {/* İletişim Button - Gray/Dark */}
          <a 
            href="tel:#" 
            className="flex-1 flex justify-center items-center py-3.5 bg-[#3d4347] text-white rounded-l-full"
          >
            <FaPhoneAlt className="text-lg mr-2" />
            <span className="font-bold text-[16px] tracking-wide">{dict?.contact || "İletişim"}</span>
          </a>

          {/* Center Chatbot Button - WhatsApp-style green circle */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-4 z-10">
            <button
              onClick={handleChatOpen}
              className="relative w-[52px] h-[52px] rounded-full bg-[#1eb852] flex items-center justify-center shadow-lg border-[3px] border-white transition-transform active:scale-95"
            >
              <FaHeadset className="text-white text-[22px] drop-shadow-sm" />
              {/* Notification dot */}
              <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
            </button>
          </div>

          {/* WhatsApp Button - Green */}
          <a 
            href="https://wa.me/#" 
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
