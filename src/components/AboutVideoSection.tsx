'use client';

import React from 'react';

export default function AboutVideoSection({ lang = 'tr' }: { lang?: string }) {
  const videos = [
    {
      id: 1,
      src: "/videos/megaeste-burun-estetigi.mp4",
      title: lang === 'tr' ? "Klinik Deneyimi" : "Clinic Experience",
      subtitle: lang === 'tr' ? "MEGAESTE Premium" : "MEGAESTE Premium",
      isWide: true,
    },
    {
      id: 2,
      src: "/videos/megaeste-epilasyon.mp4",
      title: lang === 'tr' ? "Lazer Epilasyon" : "Laser Epilation",
      subtitle: lang === 'tr' ? "Yüksek Teknoloji" : "High Technology",
      isWide: false,
    },
    {
      id: 3,
      src: "/videos/megaeste-sac-ekimi.mp4",
      title: lang === 'tr' ? "Saç Ekimi Başarısı" : "Hair Transplant",
      subtitle: lang === 'tr' ? "Uzman Kadro" : "Expert Team",
      isWide: false,
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
            <h2 className="text-3xl md:text-5xl font-black text-[#1e3a5f] leading-tight max-w-xl">
              {lang === 'tr' ? "Hizmetlerimizi Yakından Keşfedin" : 'Discover Our Services Closely'}
            </h2>
          </div>
          <p className="text-gray-500 font-medium max-w-sm text-sm md:text-[15px] pb-2">
            {lang === 'tr' 
              ? 'Premium klinik atmosferimizi, en son teknolojilerimizi ve uzman hekimlerimizin operasyon anlarını izleyin.' 
              : 'Watch our premium clinic atmosphere, latest technologies and operation moments of our expert doctors.'}
          </p>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 min-h-[500px] lg:h-[650px]">
          {videos.map((video) => (
            <div 
              key={video.id}
              className={`relative rounded-3xl overflow-hidden group shadow-md hover:shadow-2xl transition-shadow duration-500 bg-[#0d2244] w-full
                ${video.isWide ? 'md:col-span-2 aspect-video lg:aspect-auto h-full' : 'col-span-1 aspect-[9/16] lg:aspect-auto h-[400px] md:h-full lg:h-full'}
              `}
            >
              <video
                src={video.src}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
              
              {/* Linear gradient to make text readable, permanently visible instead of hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2244]/90 via-[#0d2244]/20 to-transparent pointer-events-none"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 flex flex-col justify-end h-full z-10 pointer-events-none">
                <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[#cca66b] text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mb-2 drop-shadow-md">
                    {video.subtitle}
                  </p>
                  <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-black drop-shadow-lg leading-tight">
                    {video.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
