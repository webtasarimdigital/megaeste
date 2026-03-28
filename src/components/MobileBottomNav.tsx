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
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[100]">
      
      {/* Bar background */}
      <div className="bg-white/85 backdrop-blur-md border-t border-gray-200/50 px-4 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
        <div className="relative w-full max-w-[380px] mx-auto">
          
          {/* Scroll to Top Arrow - Exactly midway, flex centered to avoid fractional pixel bugs */}
          <div className="absolute left-0 right-0 -top-3.5 flex justify-center z-50 pointer-events-none">
            <AnimatePresence>
              {showScrollTop && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.5, y: 20 }}
                  className="pointer-events-auto flex items-center justify-center transform-gpu"
                >
                  <button
                    onClick={scrollToTop}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.15)] border border-gray-100/50 active:scale-95 transition-transform"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1e3a5f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="19" x2="12" y2="5"></line>
                      <polyline points="5 12 12 5 19 12"></polyline>
                    </svg>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Button Pill Container */}
          <div className="flex w-full rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.1)] overflow-hidden relative z-10 border border-gray-100/50">
            {/* İletişim Button */}
            <a 
              href="tel:+905334814098" 
              className="w-1/2 flex justify-center items-center py-[10px] bg-[#4b545c] text-white active:bg-[#3a434a] transition-colors"
            >
              <svg className="w-[16px] h-[16px] mr-1.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
              <span className="font-bold text-[14px] tracking-wide">{dict?.contact || "İletişim"}</span>
            </a>

            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/905334814098?text=Merhaba,%20bilgi%20almak%20istiyorum" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/2 flex justify-center items-center py-[10px] bg-[#1cb954] text-white active:bg-[#18a047] transition-colors"
            >
              <span className="font-bold text-[14px] tracking-wide mr-1.5">{dict?.whatsapp || "Whatsapp"}</span>
              <FaWhatsapp className="text-[18px]" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
