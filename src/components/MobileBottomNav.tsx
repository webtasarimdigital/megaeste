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
    <div className="lg:hidden fixed bottom-0 left-0 w-full z-[100] bg-white/75 backdrop-blur-md shadow-[0_-5px_15px_rgba(0,0,0,0.05)] border-t border-white/50">
      <div className="p-3 w-full">
        <div className="relative flex w-full rounded-full overflow-visible">
          
          {/* Scroll to Top Arrow - Centered */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0, y: 20, scale: 0.8, x: "-50%" }}
                animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
                exit={{ opacity: 0, y: 20, scale: 0.8, x: "-50%" }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="absolute left-1/2 -top-8 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.12)] z-20 border border-gray-50"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center active:bg-gray-50 transition-colors">
                  <FaArrowUp className="text-gray-500 text-xl font-light" />
                </div>
              </motion.button>
            )}
          </AnimatePresence>

          {/* İletişim Button */}
          <a 
            href="tel:+905334814098" 
            className="flex-1 flex justify-center items-center py-[14px] bg-[#4c555c] text-white rounded-l-full z-10"
          >
            <FaPhoneAlt className="text-lg mr-2" />
            <span className="font-bold text-[15px] tracking-wide">{dict?.contact || "İletişim"}</span>
          </a>

          {/* WhatsApp Button */}
          <a 
            href="https://wa.me/905334814098?text=Merhaba,%20bilgi%20almak%20istiyorum" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex justify-center items-center py-[14px] bg-[#1eb852] text-white rounded-r-full z-10"
          >
            <span className="font-bold text-[15px] tracking-wide mr-2">{dict?.whatsapp || "Whatsapp"}</span>
            <FaWhatsapp className="text-[22px]" />
          </a>
        </div>
      </div>
    </div>
  );
}
