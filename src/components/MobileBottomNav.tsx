'use client';

import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MobileBottomNav({ dict }: { dict?: any }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="lg:hidden fixed bottom-6 left-0 right-0 z-[100] px-4">
      
      <div className="relative w-full max-w-[380px] mx-auto">
        {/* Scroll to Top Arrow - Centered over the middle split */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 10 }}
              className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-50 pointer-events-auto"
            >
              <button
                onClick={scrollToTop}
                className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.2)] border border-gray-100/50 active:scale-90 transition-transform"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e3a5f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="19" x2="12" y2="5"></line>
                  <polyline points="5 12 12 5 19 12"></polyline>
                </svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bar background (The Floating Pill) */}
        <div className="bg-white/90 backdrop-blur-md rounded-full shadow-[0_6px_25px_rgba(0,0,0,0.12)] border border-white/50 p-1">
          <div className="flex w-full items-stretch rounded-full overflow-hidden h-[50px]">
            
            {/* İletişim Button */}
            <a 
              href="tel:+905334814098" 
              className="flex-1 flex justify-center items-center px-4 bg-[#3d4450] text-white active:bg-slate-700 transition-colors pr-8"
            >
              <svg className="w-[15px] h-[15px] mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
              <span className="font-bold text-[13px] tracking-wide whitespace-nowrap">{dict?.contact || "İletişim"}</span>
            </a>

            {/* Empty Center Space (Visual Seam for Arrow) */}
            <div className="w-[2px] bg-white/20 h-full" />

            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/905334814098?text=Merhaba,%20bilgi%20almak%20istiyorum" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex justify-center items-center px-4 bg-[#1cb954] text-white active:bg-green-600 transition-colors pl-8"
            >
              <span className="font-bold text-[13px] tracking-wide mr-2 whitespace-nowrap">{dict?.whatsapp || "Whatsapp"}</span>
              <FaWhatsapp className="text-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
