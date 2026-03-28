'use client';
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
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

  const activeSlides = dict || slides;

  return (
    <div className="relative w-full overflow-hidden bg-gray-100" ref={emblaRef}>
      <div className="flex">
        {activeSlides.map((slide: any) => (
          <div key={slide.id} className="relative flex-[0_0_100%] min-w-0">
            {/* Desktop Image */}
            <img 
              src={slide.desktopImg} 
              alt={`Desktop Slider ${slide.id}`} 
              className="hidden lg:block w-full h-[600px] xl:h-[700px] object-cover" 
            />
            {/* Mobile Image */}
            <img 
              src={slide.mobileImg} 
              alt={`Mobile Slider ${slide.id}`} 
              className="block lg:hidden w-full h-[70vh] object-cover object-center" 
            />
            
            {/* Desktop Overlay Text - Premium Nivdis Style */}
            <div className="hidden lg:flex absolute inset-0 flex-col justify-center items-start px-20 xl:px-32 text-white pb-10 bg-gradient-to-r from-[#0d2244]/85 via-[#0d2244]/40 to-transparent">
              
              <div className="bg-[#cca66b] text-[#1e3a5f] px-5 py-2 rounded-full text-[13px] font-black tracking-[0.2em] mb-7 inline-flex items-center shadow-lg">
                <span className="mr-2 opacity-60">#</span> {slide.badge}
              </div>

              <h1 className="text-[4rem] xl:text-[5.5rem] font-black tracking-tighter mb-6 leading-[1.05] drop-shadow-2xl">
                <span className="text-[#cca66b] block">{slide.titleLine1}</span>
                <span className="text-white block">{slide.titleLine2}</span>
                <span className="text-[#cca66b] block">{slide.titleLine3}</span>
              </h1>
              
              <p className="text-lg xl:text-xl font-medium max-w-xl leading-relaxed text-white drop-shadow-md mb-10 border-l-4 border-[#cca66b] pl-6">
                {slide.desc}
              </p>

              {/* Action Buttons */}
              <div className="flex items-center gap-5">
                <a href="/iletisim" className="bg-[#cca66b] text-[#1e3a5f] px-9 py-4 rounded-full font-black text-sm tracking-widest flex items-center transition-transform hover:scale-105 shadow-xl hover:shadow-2xl">
                  İLETİŞİM <span className="ml-3 text-lg leading-none">→</span>
                </a>
                <a href="/kurumsal/hakkimizda" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-9 py-4 rounded-full font-black text-sm tracking-widest flex items-center transition-all hover:scale-105 hover:bg-white/20 shadow-xl">
                  HAKKIMIZDA <span className="ml-3 text-lg leading-none">→</span>
                </a>
              </div>
            </div>

            {/* Mobile Overlay Text - Premium Nivdis Style */}
            <div className="flex lg:hidden absolute inset-0 flex-col justify-end items-start pb-[4.5rem] text-white px-6 xl:px-10 bg-gradient-to-t from-[#0d2244]/95 via-[#0d2244]/50 to-transparent">
              
              <div className="bg-[#cca66b] text-[#1e3a5f] px-4 py-2 rounded-full text-[11px] font-black tracking-[0.2em] mb-5 inline-flex items-center shadow-lg">
                <span className="mr-1.5 opacity-60">#</span> {slide.badge}
              </div>

              <h1 className="text-[2.6rem] sm:text-5xl font-black tracking-tighter mb-5 leading-[1.05] drop-shadow-2xl">
                <span className="text-[#cca66b] block">{slide.titleLine1}</span>
                <span className="text-white block">{slide.titleLine2}</span>
                <span className="text-[#cca66b] block">{slide.titleLine3}</span>
              </h1>
              
              <p className="text-[15px] sm:text-base font-medium max-w-[95%] leading-relaxed text-white/95 drop-shadow-md pb-6 mb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-[#cca66b] after:rounded-full">
                {slide.desc}
              </p>

              {/* Action Buttons (Mobile) */}
              <div className="flex items-center gap-3 w-full">
                <a href="/iletisim" className="flex-1 justify-center bg-[#cca66b] text-[#1e3a5f] px-4 py-4 rounded-full font-black text-[12px] tracking-widest flex items-center active:scale-95 transition-transform shadow-lg">
                  İLETİŞİM <span className="ml-2 text-base leading-none">→</span>
                </a>
                <a href="/kurumsal/hakkimizda" className="flex-1 justify-center bg-white/10 backdrop-blur-md border border-white/30 text-white px-4 py-4 rounded-full font-black text-[12px] tracking-widest flex items-center active:scale-95 transition-transform shadow-lg">
                  HAKKIMIZDA <span className="ml-2 text-base leading-none">→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Dots */}
      <div className="absolute bottom-12 lg:bottom-16 left-0 right-0 flex justify-center space-x-3 z-30">
        {activeSlides.map((_: any, index: number) => (
          <button 
            key={index} 
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-colors border border-gray-300"
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
