'use client';

import React, { useState, useEffect } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
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
    <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[340px] z-[100]">
      <div className="relative flex w-full rounded-full shadow-[0_8px_25px_rgba(0,0,0,0.15)] overflow-hidden">
        
        {/* İletişim Button */}
        <a 
          href="tel:+905334814098" 
          className="flex-1 flex justify-center items-center py-[15px] bg-[#4b545c] text-white rounded-l-full z-10 active:bg-[#3a434a] transition-colors"
        >
          <svg className="w-[18px] h-[18px] mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
          <span className="font-bold text-[16px] tracking-wide pb-[1px]">{dict?.contact || "İletişim"}</span>
        </a>

        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/905334814098?text=Merhaba,%20bilgi%20almak%20istiyorum" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex justify-center items-center py-[15px] bg-[#1cb954] text-white rounded-r-full z-10 active:bg-[#18a047] transition-colors"
        >
          <span className="font-bold text-[16px] tracking-wide mr-2 pb-[1px]">{dict?.whatsapp || "Whatsapp"}</span>
          <FaWhatsapp className="text-[20px]" />
        </a>
      </div>

      {/* Scroll to Top Arrow - Centered Overlay */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[52px] h-[52px] bg-white rounded-full flex items-center justify-center shadow-lg z-20 border-[5px] border-white"
          >
            <div className="text-gray-600 hover:text-black transition-colors w-full h-full flex items-center justify-center rounded-full bg-white">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
