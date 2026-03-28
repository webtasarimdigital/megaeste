'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import Image from 'next/image';
import { PiCheckCircleThin, PiHeartbeatThin, PiShieldCheckThin, PiStethoscopeThin } from 'react-icons/pi';


export default function AboutUsContent({ dict, lang }: { dict: any, lang: string }) {
  const content = dict?.aboutUs;

  return (
    <div className="w-full bg-white relative">
      {/* Hero */}
      {/* Adjusted Taller Hero Section for Better Overlap */}
      <section className="relative w-full h-[300px] lg:h-[35vh] min-h-[300px] bg-[#0d2244] flex items-center justify-center overflow-hidden pb-8">
        
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0d2244]/80 z-10 mix-blend-multiply"></div>
          {/* We use a gradient to make text stand out */}
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0d2244] to-transparent z-20"></div>
          
          <Image 
            src="/images/services/medikal-cilt-bakimi.png" 
            alt="Megaeste Hakkımızda" 
            fill
            className="object-cover object-top opacity-50 blur-[2px] transform scale-105"
            sizes="100vw"
          />
        </div>

        {/* Content */}
        <div className="relative z-30 flex flex-col items-center justify-center text-center px-4 -mt-16 md:-mt-20">
          <div className="flex items-center space-x-3 mb-3 md:mb-5">
            <div className="w-5 h-[2px] bg-[#cca66b]"></div>
            <span className="text-[#cca66b] text-[11px] md:text-xs font-black tracking-[0.3em] uppercase drop-shadow-md">
              MEGAESTE CLINIC
            </span>
            <div className="w-5 h-[2px] bg-[#cca66b]"></div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-none mb-4 drop-shadow-xl">
            {content?.title || (lang === 'tr' ? 'Hakkımızda' : 'About Us')}
          </h1>
          <p className="text-gray-300 text-sm md:text-base font-medium max-w-xl leading-relaxed drop-shadow-sm">
            {lang === 'tr'
              ? 'Teknolojiyi ve estetiği bir araya getiren modern sağlık merkezi.'
              : 'Modern healthcare center combining technology and aesthetics.'}
          </p>
        </div>
      </section>

      {/* Main Content (Deep Overlap) */}
      <section className="relative z-40 -mt-12 md:-mt-16 lg:-mt-20 w-full max-w-[1440px] mx-auto px-4 md:px-8 xl:px-12 pb-16 md:pb-24">
        <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-6 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Text */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-black text-[#1e3a5f] leading-tight">
              {lang === 'en' ? "Modern Healthcare Center Combining Technology and Aesthetics" : "Teknolojiyi ve Estetiği Bir Araya Getiren Modern Sağlık Merkezi"}
            </h2>
            
            <div className="w-16 h-1 bg-[#cca66b] rounded-full"></div>
            
            <div className="prose prose-lg text-gray-600 leading-relaxed max-w-none">
              <p className="font-semibold text-lg text-gray-800">
                {content?.description}
              </p>
              <p>{content?.mission}</p>
              <p>{content?.vision}</p>
              <p>{content?.approach}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {[
                { icon: PiStethoscopeThin, text: lang === 'en' ? "Expert Doctors" : "Uzman Hekimler" },
                { icon: PiShieldCheckThin, text: lang === 'en' ? "Reliable Results" : "Güvenilir Sonuçlar" },
                { icon: PiHeartbeatThin, text: lang === 'en' ? "Patient Satisfaction" : "Hasta Memnuniyeti" },
                { icon: PiCheckCircleThin, text: lang === 'en' ? "International Standards" : "Uluslararası Standartlar" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#cca66b]/30 hover:bg-[#cca66b]/5 transition-colors">
                  <item.icon className="text-3xl text-[#cca66b] flex-shrink-0" />
                  <span className="font-bold text-sm text-[#1e3a5f]">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="relative">
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-gradient-to-tr from-[#eef4fc] to-[#f7faff] rounded-[40px] -rotate-3 z-0"></div>
            
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg border border-white">
                  <Image src="/images/services/burun-estetigi.png" alt="Plastik Cerrahi" fill className="object-cover" />
                </div>
                <div className="relative h-48 md:h-56 rounded-2xl overflow-hidden shadow-lg border border-white">
                  <Image src="/images/services/lazer-epilasyon.png" alt="Lazer Epilasyon" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative h-48 md:h-56 rounded-2xl overflow-hidden shadow-lg border border-white">
                  <Image src="/images/services/medikal-cilt-bakimi.png" alt="Medikal Estetik" fill className="object-cover" />
                </div>
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg border border-white">
                  <Image src="/images/services/dhi-sac-ekimi.png" alt="Saç Ekimi" fill className="object-cover object-top" />
                </div>
              </div>
            </div>
            
            {/* Overlay Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 border-l-4 border-[#cca66b] flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold">
                15+
              </div>
              <div>
                <p className="font-black text-[#1e3a5f] text-lg leading-tight">{lang === 'en' ? "Years of" : "Yıllık"}</p>
                <p className="text-gray-500 text-sm font-medium">{lang === 'en' ? "Experience" : "Deneyim"}</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Vision / Mission / Values - Premium Dark Section */}
      <section className="w-full bg-[#1e3a5f] py-20 md:py-28 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#cca66b]/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] -ml-64 -mb-64"></div>

        <div className="max-w-[1280px] mx-auto px-4 md:px-8 xl:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: <PiStethoscopeThin className="text-4xl text-[#cca66b]" />,
                title: lang === 'en' ? 'Our Vision' : 'Vizyonumuz',
                desc: lang === 'en'
                  ? 'To be a leading center in health tourism by combining the latest aesthetic and medical technologies.'
                  : 'En son estetik ve medikal teknolojileri hasta odaklı bakım anlayışıyla birleştirerek öncü olmak.',
              },
              {
                icon: <PiHeartbeatThin className="text-4xl text-[#cca66b]" />,
                title: lang === 'en' ? 'Our Mission' : 'Misyonumuz',
                desc: lang === 'en'
                  ? 'To provide reliable, transparent and science-based treatment methods in medical aesthetics.'
                  : 'Sağlık ve medikal estetik alanında güvenilir, şeffaf ve bilimsel tedavi yöntemleri sunmak.',
              },
              {
                icon: <PiShieldCheckThin className="text-4xl text-[#cca66b]" />,
                title: lang === 'en' ? 'Our Values' : 'Değerlerimiz',
                desc: lang === 'en'
                  ? 'Transparency, honesty, sterilization and continuous education are our core values.'
                  : 'Şeffaflık, dürüstlük, sterilizasyon ve sürekli eğitim temel değerlerimizdir.',
              },
            ].map((item, i) => (
              <div key={i} className="group bg-slate-800/40 backdrop-blur-sm rounded-[2rem] p-8 lg:p-10 border border-white/5 hover:border-[#cca66b]/30 transition-all duration-500">
                <div className="w-16 h-16 bg-[#cca66b]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-white font-black text-2xl mb-4 tracking-tight">{item.title}</h3>
                <p className="text-gray-400 text-[15px] leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Family / Final CTA - Redesigned without form */}
      <section className="w-full bg-white pt-20 pb-24 md:pb-32">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 xl:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#1e3a5f] mb-6 tracking-tight">
            {lang === 'en' ? 'Meet the Megaeste Family' : 'Megaeste Ailesiyle Tanışın'}
          </h2>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
            {lang === 'en' 
              ? 'For everything you need for a healthy future, Megaeste is waiting for you. Schedule your appointment today.' 
              : 'Sağlıklı bir gelecek için ihtiyacınız olan her şey Megaeste\'de sizi bekliyor. Hemen randevunuzu oluşturun.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <a 
              href={lang === 'tr' ? '/iletisim' : '/en/contact'}
              className="w-full sm:w-auto px-10 py-5 bg-[#cca66b] text-white font-black text-lg rounded-2xl hover:bg-[#b58f53] shadow-[0_10px_20px_rgba(204,166,107,0.3)] transition-all hover:-translate-y-1 active:scale-95"
            >
              {lang === 'en' ? 'Contact Us' : 'İletişime Geçin'}
            </a>
            <a 
              href={lang === 'tr' ? '/hekimlerimiz' : '/en/doctors'}
              className="w-full sm:w-auto px-10 py-5 bg-[#1e3a5f] text-white font-black text-lg rounded-2xl hover:bg-[#142946] shadow-[0_10px_20px_rgba(30,58,95,0.2)] transition-all hover:-translate-y-1 active:scale-95"
            >
              {lang === 'en' ? 'Our Doctors' : 'Hekimlerimizi Gör'}
            </a>
          </div>
        </div>
      </section>

      {/* Full Width Map */}
      <section className="w-full h-[400px] md:h-[500px] relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1505.5786884610996!2d29.110287114660724!3d41.020524949502906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac9aa1b35b6df%3A0x6b4457223b37807c!2sMegaeste%20Estetik%20%26%20Plastik%20Cerrahi!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="hover:grayscale-0 transition-all duration-700 pointer-events-auto"
        />
      </section>

    </div>
  );
}
