'use client';
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const slides = [
  {
    id: 1,
    desktopImg: '/images/slider_desktop_1.png',
    mobileImg: '/images/slider_mobile_1.png',
    badge: 'SAÇ EKİMİ VE ESTETİK',
    titleLine1: 'İTALYAN ÇİZGİSİ',
    titleLine2: 'ESTETİĞİ İLE',
    titleLine3: 'DOĞAL SAÇLAR',
    desc: 'Daha sık, doğal görünüm ve kalıcı sonuçlarla estetiğinizi yeniden keşfedin.',
  },
  {
    id: 2,
    desktopImg: '/images/slider_desktop_2.png',
    mobileImg: '/images/slider_mobile_2.png',
    badge: 'MEGAESTE KALİTESİ',
    titleLine1: 'MODERN TEKNOLOJİ',
    titleLine2: 'VE UZMAN EKİPLE',
    titleLine3: 'KUSURSUZ GÜLÜŞ',
    desc: 'Kişiye özel planlanan modern estetik uygulamalarıyla kendinizi özel hissedin.',
  }
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function HeroSlider({ dict }: { dict?: any }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 6000 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const activeSlides = dict || slides;

  return (
    <div className="relative w-full overflow-hidden bg-gray-100" ref={emblaRef}>
      <div className="flex">
        {activeSlides.map((slide: any, index: number) => {
          const isActive = index === selectedIndex;
          return (
            <div key={slide.id} className="relative flex-[0_0_100%] min-w-0">
              
              {/* Desktop Image with slow zoom */}
              <div className="hidden lg:block w-full h-[600px] xl:h-[700px] overflow-hidden">
                <img 
                  src={slide.desktopImg} 
                  alt={`Desktop Slider ${slide.id}`} 
                  className={`w-full h-full object-cover transition-transform duration-[7000ms] ease-out ${isActive ? 'scale-105' : 'scale-100'}`} 
                />
              </div>
              
              {/* Mobile Image with slow zoom */}
              <div className="block lg:hidden w-full h-[70vh] overflow-hidden">
                <img 
                  src={slide.mobileImg} 
                  alt={`Mobile Slider ${slide.id}`} 
                  className={`w-full h-full object-cover object-center transition-transform duration-[7000ms] ease-out ${isActive ? 'scale-105' : 'scale-100'}`} 
                />
              </div>
              
              {/* Desktop Overlay Text - Refined Typography & Animation */}
              <div className="hidden lg:flex absolute inset-0 flex-col justify-center items-start px-20 xl:px-32 text-white pb-10 bg-gradient-to-r from-[#0d2244]/90 via-[#0d2244]/50 to-transparent">
                
                <div className={`transition-all duration-700 delay-100 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} bg-[#cca66b] text-[#1e3a5f] px-5 py-2 rounded-full text-xs font-black tracking-[0.2em] mb-6 inline-flex items-center shadow-lg`}>
                  <span className="mr-2 opacity-60">#</span> {slide.badge}
                </div>

                <h1 className={`transition-all duration-700 delay-300 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} text-4xl lg:text-5xl xl:text-[56px] font-extrabold tracking-tight mb-6 leading-[1.15] drop-shadow-2xl uppercase max-w-4xl`}>
                  <span className="text-white block mb-1">{slide.titleLine1}</span>
                  <span className="text-white block mb-1">{slide.titleLine2}</span>
                  <div className="flex flex-wrap gap-x-3">
                    <span className="text-[#cca66b]">{slide.titleHighlight1}</span>
                    <span className="text-white">{slide.titleLine3}</span>
                  </div>
                  {(slide.titleHighlight2 || slide.titleLine4) && (
                    <div className="flex flex-wrap gap-x-3 mt-1">
                      <span className="text-[#cca66b]">{slide.titleHighlight2}</span>
                      <span className="text-white">{slide.titleLine4}</span>
                    </div>
                  )}
                </h1>
                
                <p className={`transition-all duration-700 delay-500 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} text-base xl:text-lg font-medium max-w-xl leading-relaxed text-white drop-shadow-md mb-10 relative after:content-[''] after:absolute after:-bottom-4 after:left-0 after:w-16 after:h-1 after:bg-[#cca66b] after:rounded-full`}>
                  {slide.desc}
                </p>

                {/* Action Buttons */}
                <div className={`transition-all duration-700 delay-700 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} flex items-center gap-5 mt-4`}>
                  <a href="/iletisim" className="bg-[#cca66b] text-[#1e3a5f] px-8 py-3.5 rounded-full font-bold text-sm tracking-widest flex items-center transition-transform hover:scale-105 shadow-xl hover:shadow-2xl">
                    {slide.contactBtn || 'İLETİŞİM'} <span className="ml-3 text-lg leading-none">→</span>
                  </a>
                  <a href="/kurumsal/hakkimizda" className="bg-transparent border-2 border-white/50 text-white hover:bg-white hover:text-[#1e3a5f] px-8 py-3.5 rounded-full font-bold text-sm tracking-widest flex items-center transition-all shadow-xl hover:shadow-2xl">
                    {slide.aboutBtn || 'HAKKIMIZDA'} <span className="ml-3 text-lg leading-none">→</span>
                  </a>
                </div>
              </div>

              {/* Mobile Overlay Text - Refined Typography & Animation */}
              <div className="flex lg:hidden absolute inset-0 flex-col justify-end items-start pb-[4.5rem] text-white px-5 sm:px-10 bg-gradient-to-t from-[#0d2244] via-[#0d2244]/70 to-transparent">
                
                <div className={`transition-all duration-700 delay-100 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'} bg-[#cca66b] text-[#1e3a5f] px-3 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] mb-4 inline-flex items-center shadow-lg`}>
                  <span className="mr-1.5 opacity-60">#</span> {slide.badge}
                </div>

                <h1 className={`transition-all duration-700 delay-300 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'} text-2xl sm:text-4xl font-extrabold tracking-tight mb-3 leading-[1.15] drop-shadow-2xl uppercase w-full`}>
                  <span className="text-white block mb-0.5">{slide.titleLine1}</span>
                  <span className="text-white block mb-0.5">{slide.titleLine2}</span>
                  <div className="flex flex-wrap gap-x-2">
                    <span className="text-[#cca66b]">{slide.titleHighlight1}</span>
                    <span className="text-white">{slide.titleLine3}</span>
                  </div>
                  {(slide.titleHighlight2 || slide.titleLine4) && (
                    <div className="flex flex-wrap gap-x-2 mt-0.5">
                      <span className="text-[#cca66b]">{slide.titleHighlight2}</span>
                      <span className="text-white">{slide.titleLine4}</span>
                    </div>
                  )}
                </h1>
                
                <p className={`transition-all duration-700 delay-500 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'} text-[13px] sm:text-[15px] font-medium max-w-[95%] leading-relaxed text-white/95 drop-shadow-md pb-5 mb-5 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[3px] after:bg-[#cca66b] after:rounded-full`}>
                  {slide.desc}
                </p>

                {/* Action Buttons (Mobile) */}
                <div className={`transition-all duration-700 delay-700 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'} flex items-center gap-3 w-full`}>
                  <a href="/iletisim" className="flex-1 justify-center bg-[#cca66b] text-[#1e3a5f] px-4 py-3 rounded-full font-bold text-[11px] tracking-widest flex items-center active:scale-95 transition-transform shadow-lg">
                    {slide.contactBtn || 'İLETİŞİM'}
                  </a>
                  <a href="/kurumsal/hakkimizda" className="flex-1 justify-center bg-transparent border border-white/40 text-white hover:bg-white/10 px-4 py-3 rounded-full font-bold text-[11px] tracking-widest flex items-center active:scale-95 transition-transform shadow-lg">
                    {slide.aboutBtn || 'HAKKIMIZDA'}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Navigation Dots */}
      <div className="absolute bottom-6 lg:bottom-12 left-0 right-0 flex justify-center space-x-3 z-30">
        {activeSlides.map((_: any, index: number) => (
          <button 
            key={index} 
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === selectedIndex ? 'bg-[#cca66b] scale-125' : 'bg-white/50 hover:bg-white'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}       />
        ))}
      </div>
    </div>
  );
}
