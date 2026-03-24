'use client';

import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaHeadset } from 'react-icons/fa';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MobileBottomNav({ dict }: { dict?: any }) {
  const handleChatOpen = () => {
    window.dispatchEvent(new Event('openChatbot'));
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full z-50">
      {/* Main Nav Bar */}
      <div className="relative flex w-full h-[62px]">
        
        {/* İletişim - Left Half */}
        <a 
          href="tel:#" 
          className="flex-1 flex justify-center items-center bg-[#2c4c7c] text-white active:bg-[#1e3a5f] transition-colors"
        >
          <FaPhoneAlt className="text-lg mr-2" />
          <span className="font-bold text-[16px] tracking-wide">{dict?.contact || "İletişim"}</span>
        </a>

        {/* Center Chatbot Button - Floating above the bar */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-5 z-10">
          <button
            onClick={handleChatOpen}
            className="relative w-[56px] h-[56px] rounded-full flex items-center justify-center shadow-lg border-[3px] border-white transition-transform active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #2c4c7c 0%, #2c4c7c 50%, #1eb852 50%, #1eb852 100%)'
            }}
          >
            <FaHeadset className="text-white text-2xl drop-shadow-sm" />
            {/* Notification dot */}
            <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
          </button>
        </div>

        {/* Spacer for center button area */}
        <div className="w-[70px] flex-shrink-0 relative">
          <div className="absolute left-0 top-0 w-1/2 h-full bg-[#2c4c7c]"></div>
          <div className="absolute right-0 top-0 w-1/2 h-full bg-[#1eb852]"></div>
        </div>

        {/* WhatsApp - Right Half */}
        <a 
          href="https://wa.me/#" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex justify-center items-center bg-[#1eb852] text-white active:bg-[#189b43] transition-colors"
        >
          <span className="font-bold text-[16px] tracking-wide mr-2">{dict?.whatsapp || "Whatsapp"}</span>
          <FaWhatsapp className="text-2xl" />
        </a>
      </div>
    </div>
  );
}
