'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function HeroSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 6000 })]);

  return (
    <div className="relative w-full overflow-hidden bg-gray-100" ref={emblaRef}>
      <div className="flex">
        {/* Slide 1 */}
        <div className="relative flex-[0_0_100%] min-w-0">
          {/* Desktop Image */}
          <img 
            src="/images/slider_desktop.png" 
            alt="Desktop Slider" 
            className="hidden lg:block w-full h-[600px] xl:h-[700px] object-cover" 
          />
          {/* Mobile Image */}
          <img 
            src="/images/slider_mobile.png" 
            alt="Mobile Slider" 
            className="block lg:hidden w-full h-[70vh] object-cover object-center" 
          />
          
          {/* Desktop Overlay Text */}
          <div className="hidden lg:flex absolute inset-0 flex-col justify-center items-start px-20 xl:px-32 text-white pb-10">
            <h2 className="text-3xl font-bold tracking-widest text-[#FFE0A3] mb-1 drop-shadow-md">DOĞAL ÖN SAÇ TASARIMI</h2>
            <h1 className="text-7xl font-serif italic tracking-wide mb-8 drop-shadow-lg leading-none">
              İTALYAN <span className="text-[100px] font-light not-italic font-sans relative -top-6">çizgisi</span><span className="text-2xl align-top">®</span>
            </h1>
            
            <div className="flex items-center">
              <div>
                <h3 className="text-5xl font-black mb-2 leading-tight drop-shadow-lg">SAÇ EKİMİNDE<br/>YENİ TREND</h3>
                <p className="text-xl font-medium tracking-wide max-w-md leading-snug drop-shadow-md">DOĞAL GÖRÜNÜMDE İLERİ TEKNİK VE ÜSTÜN BAŞARI</p>
              </div>
              
              {/* Fake Red Badge */}
              <div className="ml-12 mt-6 z-10">
                <div className="w-56 h-56 bg-[#c41515] text-white rounded-full flex flex-col justify-center items-center transform -rotate-[15deg] shadow-[0_10px_30px_rgb(0,0,0,0.5)] relative">
                  {/* Jagged border simulation via multiple box shadows or a simple dashed ring */}
                  <div className="w-full flex justify-center text-center px-4 leading-none mb-1">
                    <span className="font-extrabold text-[26px] tracking-tighter" style={{ textShadow: "1px 1px 3px black" }}>ESTEWORLD</span>
                  </div>
                  <div className="w-full flex justify-center text-center px-4 leading-none">
                    <span className="font-extrabold text-[26px] tracking-tighter" style={{ textShadow: "1px 1px 3px black" }}>PATENTLİDİR</span>
                  </div>
                  <div className="absolute inset-2 rounded-full border-[3px] border-dashed border-white/60 pointer-events-none"></div>
                  <div className="absolute inset-0 rounded-full border-[6px] border-[#c41515] shadow-[0_0_0_2px_rgba(255,255,255,0.8)] pointer-events-none m-1"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Overlay Text */}
          <div className="flex lg:hidden absolute inset-0 flex-col justify-end items-center pb-32 text-white text-center px-4 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
             {/* Fake Red Badge Mobile */}
             <div className="w-40 h-40 bg-[#c41515] text-white rounded-full flex flex-col justify-center items-center transform -rotate-12 shadow-2xl mb-6 mt-10">
                <span className="font-extrabold text-xl tracking-tighter" style={{ textShadow: "1px 1px 3px balck" }}>ESTEWORLD</span>
                <span className="font-extrabold text-xl tracking-tighter" style={{ textShadow: "1px 1px 3px black" }}>PATENTLİDİR</span>
                <div className="absolute inset-2 rounded-full border-[2px] border-dashed border-white/60 pointer-events-none"></div>
             </div>
             <h2 className="text-4xl font-light tracking-widest uppercase mb-1 drop-shadow-lg">1 GÜNDE</h2>
             <h1 className="text-[2.75rem] font-serif mb-2 drop-shadow-lg leading-tight tracking-wide">KAŞ ESTETİĞİ</h1>
             <p className="text-4xl font-main italic lowercase opacity-90 drop-shadow-md pb-4">doğal ve kalıcı</p>
          </div>
        </div>
      </div>
    </div>
  );
}
