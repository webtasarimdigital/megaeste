'use client';

import React, { useRef, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

export default function AboutVideoSection({ lang = 'tr' }: { lang?: string }) {
  const videos = [
    {
      id: 1,
      src: "/videos/megaeste-klinik-tanitim.mp4",
      title: lang === 'tr' ? "Modern Klinik Turu" : "Modern Clinic Tour",
      subtitle: lang === 'tr' ? "MEGAESTE KLİNİK" : "MEGAESTE CLINIC"
    },
    {
      id: 2,
      src: "/videos/megaeste-sac-ekimi.mp4",
      title: lang === 'tr' ? "Saç Ekimi Başarısı" : "Hair Transplant Success",
      subtitle: lang === 'tr' ? "MEGAESTE KLİNİK" : "MEGAESTE CLINIC"
    },
    {
      id: 3,
      src: "/videos/megaeste-burun-estetigi.mp4",
      title: lang === 'tr' ? "Burun Estetiği Süreci" : "Rhinoplasty Process",
      subtitle: lang === 'tr' ? "MEGAESTE KLİNİK" : "MEGAESTE CLINIC"
    }
  ];

  return (
    <section className="w-full bg-[#f8fafc] py-16 xl:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-[3px] bg-[#cca66b] rounded-full"></div>
              <h3 className="text-[#cca66b] font-black tracking-widest text-sm uppercase">
                {lang === 'tr' ? 'MEGAESTE DENEYİMİ' : 'MEGAESTE EXPERIENCE'}
              </h3>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#1e3a5f] leading-tight">
              {lang === 'tr' ? "Hizmetlerimizi Keşfedin" : 'Discover Our Services'}
            </h2>
          </div>
          <p className="text-gray-500 font-medium max-w-md text-sm md:text-[15px] pb-2">
            {lang === 'tr' 
              ? 'Klinik atmosferimizi, uzmanlığımızı ve hasta deneyimlerimizi yakından inceleyin. Videoların üzerine gelerek detayları izleyebilirsiniz.' 
              : 'Take a closer look at our clinic atmosphere, expertise, and patient experiences. Hover over the videos to watch details.'}
          </p>
        </div>

        {/* 3-Column Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function VideoCard({ video }: { video: any }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(e => console.log('Autoplay blocked:', e));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div 
      className="relative w-full aspect-[9/16] md:aspect-[3/4] lg:aspect-[9/16] rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.1)] group cursor-pointer bg-[#0d2244]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={video.src}
        muted
        loop
        playsInline
        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
      />
      
      {/* Overlay Gradient for Text */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0d2244]/90 via-[#0d2244]/40 to-transparent pointer-events-none opacity-90 transition-opacity duration-700"></div>
      
      {/* Play Icon and Content */}
      <div className="absolute bottom-8 left-8 right-8 z-10 flex flex-col items-start transition-transform duration-500 group-hover:-translate-y-2">
        <div className="w-12 h-12 bg-[#cca66b] text-white rounded-full flex items-center justify-center shadow-lg mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {isPlaying ? <FaPause className="text-[16px]" /> : <FaPlay className="text-[16px] ml-1" />}
        </div>
        
        <h3 className="text-white text-xl lg:text-2xl font-bold mb-1 drop-shadow-md leading-tight">
          {video.title}
        </h3>
        <p className="text-gray-300 text-[11px] font-black tracking-widest uppercase drop-shadow-md">
          {video.subtitle}
        </p>
      </div>
    </div>
  );
}
