'use client';

import React from 'react';

export default function AboutVideoSection({ lang = 'tr' }: { lang?: string }) {
  const videoRefs = React.useRef<{ [key: number]: HTMLVideoElement | null }>({});
  const [playingState, setPlayingState] = React.useState<{ [key: number]: boolean }>({});

  React.useEffect(() => {
    const isMobile = window.innerWidth < 1024;

    // Observer to play video only when it's substantially in viewport (saves battery, prevents iOS block errors)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.4 } // Play when 40% visible
    );

    Object.values(videoRefs.current).forEach((video) => {
      if (video) {
        // Enforce basic iOS silent autoplay rules strictly via JS before playing
        video.muted = true;
        video.playsInline = true;
        
        if (isMobile) {
          observer.observe(video);
        } else {
          // On desktop, ensure they are strictly paused initially for the hover effect
          video.pause();
        }
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

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
    <section className="w-full bg-[#f8fafc] py-16 xl:py-24 relative">
      {/* Hide iOS native play button globally for this section to prevent double-buttons */}
      <style dangerouslySetInnerHTML={{__html: `
        video::-webkit-media-controls-start-playback-button {
          display: none !important;
          -webkit-appearance: none;
        }
        video::-webkit-media-controls {
          display: none !important;
        }
      `}} />
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
              onClick={() => {
                // Tap to play/pause on mobile
                if (window.innerWidth < 1024) {
                  const v = videoRefs.current[video.id];
                  if (v) {
                    if (v.paused) v.play().catch(() => {});
                    else v.pause();
                  }
                }
              }}
              onMouseEnter={() => {
                // Hover to play on desktop
                if (window.innerWidth >= 1024) {
                  videoRefs.current[video.id]?.play().catch(() => {});
                }
              }}
              onMouseLeave={() => {
                // Leave to pause on desktop
                if (window.innerWidth >= 1024) {
                  videoRefs.current[video.id]?.pause();
                }
              }}
              className={`relative rounded-3xl overflow-hidden group shadow-md hover:shadow-2xl transition-shadow duration-500 bg-[#0d2244] w-full cursor-pointer lg:cursor-default
                ${video.isWide 
                  ? 'md:col-span-2 aspect-video md:aspect-auto md:h-[400px] lg:h-full' 
                  : 'col-span-1 aspect-video md:aspect-auto md:h-[400px] lg:h-full'}
              `}
            >
              <video
                ref={(el) => { videoRefs.current[video.id] = el; }}
                src={`${video.src}#t=0.001`}
                muted
                loop
                playsInline
                preload="metadata"
                /* Removed autoPlay attribute to fix "play interrupted by pause" race condition on desktop hover! */
                onPlay={() => setPlayingState(prev => ({ ...prev, [video.id]: true }))}
                onPause={() => setPlayingState(prev => ({ ...prev, [video.id]: false }))}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
              
              {/* Linear gradient covering the bottom nicely */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2244] via-[#0d2244]/40 to-transparent opacity-80 pointer-events-none"></div>
              
              {/* Play Button Overlay - Bottom Right */}
              <div className={`absolute bottom-20 lg:bottom-24 right-6 lg:right-8 pointer-events-none z-20 transition-all duration-500 ${playingState[video.id] ? 'opacity-0 scale-150' : 'opacity-100 scale-100'}`}>
                <div className="w-11 h-11 md:w-12 md:h-12 bg-[#cca66b] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(204,166,107,0.4)]">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 flex flex-col justify-end h-full z-30 pointer-events-none">
                <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[#cca66b] text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mb-2 drop-shadow-md">
                    {video.subtitle}
                  </p>
                  {/* Fixed height container for perfect horizontal alignment regardless of line breaks */}
                  <div className="h-10 md:h-12 lg:h-16 flex items-start">
                    <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-black drop-shadow-lg leading-tight">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
