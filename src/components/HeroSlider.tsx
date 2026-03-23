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
          <div className="hidden lg:flex absolute inset-0 flex-col justify-center items-start px-20 xl:px-32 text-white pb-10 bg-gradient-to-r from-black/60 via-black/30 to-transparent">
            <h2 className="text-2xl font-light tracking-[0.2em] text-[#C6A87E] mb-3 drop-shadow-md">DOĞAL ÖN SAÇ TASARIMI</h2>
            <h1 className="text-7xl font-serif tracking-wide mb-8 drop-shadow-lg leading-tight">
              İtalyan Çizgisi Estetiği
            </h1>
            
            <div className="flex items-center">
              <div>
                <h3 className="text-[2.75rem] font-medium mb-4 leading-tight drop-shadow-lg">Saç Ekiminde<br/><span className="font-bold">Yeni Nesil Teknoloji</span></h3>
                <p className="text-lg font-light tracking-wider max-w-lg leading-relaxed text-gray-100 drop-shadow-md border-l-2 border-[#C6A87E] pl-4">
                  Daha sık, doğal görünüm ve kalıcı sonuçlarla estetiğinizi yeniden keşfedin.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Overlay Text */}
          <div className="flex lg:hidden absolute inset-0 flex-col justify-end items-center pb-20 text-white text-center px-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
             <h2 className="text-2xl font-light tracking-[0.2em] text-[#C6A87E] mb-2 drop-shadow-lg">1 GÜNDE</h2>
             <h1 className="text-[2.5rem] font-serif mb-4 drop-shadow-lg leading-tight tracking-wide">Saç & Kaş Estetiği</h1>
             <p className="text-xl font-light tracking-wide opacity-90 drop-shadow-md pb-6 border-b border-[#C6A87E]/50">
               doğal, sık ve kalıcı sonuçlar
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
