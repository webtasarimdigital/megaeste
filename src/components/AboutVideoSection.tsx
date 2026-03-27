'use client';

import React, { useRef } from 'react';
import { FaPlay } from 'react-icons/fa';

export default function AboutVideoSection({ lang = 'tr' }: { lang?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log('Video autoplay blocked or loading:', e));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <section className="w-full bg-[#f4f7fa] py-16 xl:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-[3px] bg-[#cca66b] rounded-full"></div>
              <h3 className="text-[#cca66b] font-black tracking-widest text-sm uppercase">
                {lang === 'tr' ? 'Megaeste Klinik' : 'Megaeste Clinic'}
              </h3>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#1e3a5f] leading-tight">
              {lang === 'tr' ? "Megaeste'yi Tanıyın" : 'Get to Know Megaeste'}
            </h2>
          </div>
          <p className="text-gray-500 font-medium max-w-md text-sm md:text-[15px] pb-2">
            {lang === 'tr' 
              ? 'Uzman hekim kadromuz, son teknoloji cihazlarımız ve hasta odaklı konforlu klinik ortamımızla tanışın. Sizin için hazırladığımız özel tanıtım videomuzu izleyin.' 
              : 'Meet our expert medical staff, state-of-the-art equipment, and patient-focused comfortable clinic environment. Watch our special introductory video.'}
          </p>
        </div>

        {/* Video Container */}
        <div 
          className="relative w-full h-[400px] md:h-[550px] lg:h-[650px] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group cursor-pointer bg-[#0d2244]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video
            ref={videoRef}
            src="/videos/megaeste-klinik-tanitim.mp4" 
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            poster="/images/megaeste-estetik.jpg" 
          />
          
          {/* Overlay Gradient for Text */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d2244]/90 via-[#0d2244]/20 to-transparent pointer-events-none opacity-80 group-hover:opacity-60 transition-opacity duration-700"></div>
          
          {/* Central Play Button */}
          <div className="absolute inset-0 flex items-center justify-center transition-all duration-700 group-hover:scale-125 group-hover:opacity-0">
            <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-[0_0_40px_rgba(30,58,95,0.3)]">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.2)] transform hover:scale-105 transition-transform">
                <FaPlay className="text-[#1e3a5f] text-2xl ml-1" />
              </div>
            </div>
          </div>
          
          {/* Bottom Content Area */}
          <div className="absolute bottom-10 left-8 md:bottom-12 md:left-12 z-10 pointer-events-none transition-transform duration-700 transform group-hover:-translate-y-4">
            <div className="inline-block px-4 py-1.5 bg-[#cca66b]/20 backdrop-blur-md text-[#cca66b] text-xs font-black uppercase tracking-[3px] rounded-full mb-3 border border-[#cca66b]/30">
              {lang === 'tr' ? 'Tanıtım Filmi' : 'Introductory Video'}
            </div>
            <h3 className="text-white text-3xl md:text-5xl font-black mb-3 drop-shadow-md">
              {lang === 'tr' ? 'Modern & Güvenilir Klinik' : 'Modern & Reliable Clinic'}
            </h3>
            <p className="text-white/80 text-sm md:text-base font-medium drop-shadow-sm max-w-xl">
              {lang === 'tr' 
                ? 'Estetik, plastik cerrahi ve medikal uygulamalarda uluslararası standartlarda hizmet veriyoruz. Hayalinizdeki görünüme güvenle ulaşın.' 
                : 'We provide international standard services in aesthetics, plastic surgery, and medical applications. Safely achieve your dream look.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
