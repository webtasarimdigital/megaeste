'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaStar, FaLeaf, FaMedal, FaArrowRight, FaClock } from 'react-icons/fa';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PopularServicesArea({ lang = 'tr' }: { lang?: string }) {
  const isTr = lang === 'tr';

  return (
    <section className="w-full relative z-10 py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 xl:px-16 flex flex-col gap-16 lg:gap-24">
        
        {/* SECTION 1: EPILASYON (Pink Themes) */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <div className="inline-flex items-center space-x-2 bg-pink-50 text-pink-500 rounded-full px-4 py-1.5 w-max mb-6 border border-pink-100 shadow-sm">
              <FaStar className="text-xs" />
              <span className="text-[11px] font-black tracking-widest uppercase">{isTr ? 'POPÜLER HİZMET' : 'POPULAR SERVICE'}</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-black text-[#1e3a5f] mb-6 leading-[1.15]">
              {isTr ? 'Gelişmiş Teknoloji ile ' : 'Advanced Technology '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">
                {isTr ? 'Ağrısız Epilasyon' : 'Painless Epilation'}
              </span>
            </h2>
            
            <p className="text-gray-500 text-[15px] lg:text-[17px] leading-relaxed mb-8 font-medium">
              {isTr 
                ? 'Yeni nesil soğuk hava üflemeli lazer epilasyon cihazlarımızla 4 mevsim boyunca, acı ve ağrı hissetmeden ipeksi bir cilde kavuşun. Farklı cilt tipleri ve kıl yapılarına özel, FDA onaylı protokollerimizle kliniklerimizde konforlu ve kesin sonuçlar elde ediyoruz.' 
                : 'Achieve silky skin in all 4 seasons without pain using our next-generation cold-air-blown laser equipment. We provide comfortable and certain results with FDA-approved protocols tailored for various skin types.'}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 bg-pink-50/50 p-4 rounded-2xl border border-pink-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 shrink-0">
                  <FaLeaf />
                </div>
                <div>
                  <h4 className="font-bold text-[#1e3a5f] text-[14px]">{isTr ? 'Ağrısız İşlem' : 'Painless Process'}</h4>
                  <p className="text-[12px] text-gray-500">{isTr ? 'Soğuk hava başlıklı konfor.' : 'Cold air tip comfort.'}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-pink-50/50 p-4 rounded-2xl border border-pink-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 shrink-0">
                  <FaMedal />
                </div>
                <div>
                  <h4 className="font-bold text-[#1e3a5f] text-[14px]">{isTr ? 'Kesin Sonuç' : 'Guaranteed Result'}</h4>
                  <p className="text-[12px] text-gray-500">{isTr ? 'Etkili ve kalıcı dökülme.' : 'Effective & permanent.'}</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link 
                href={isTr ? '/hizmetler/lazer-epilasyon' : '/en/hizmetler/laser-epilation'}
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-pink-500 to-rose-400 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                {isTr ? 'Detaylı İncele' : 'View Details'} <FaArrowRight className="text-sm" />
              </Link>
              <Link 
                href={isTr ? '/iletisim' : '/en/contact'}
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-pink-500 border-2 border-pink-100 font-bold rounded-xl hover:bg-pink-50 hover:border-pink-200 transition-all flex items-center justify-center gap-2"
              >
                <FaCalendarAlt /> {isTr ? 'Randevu Al' : 'Book Now'}
              </Link>
            </div>
          </motion.div>
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl group"
          >
            <div className="absolute inset-0 bg-pink-500/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
            <Image 
              src="/images/services/lazer-yeni.png" // using existing highly visual image
              alt="Epilasyon"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Floating Info Badge */}
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] z-20 flex items-center gap-4 border border-white/50 animate-bounce-slow">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 text-xl font-bold">4</div>
              <div>
                <span className="block text-[#1e3a5f] font-black text-sm uppercase tracking-wide">{isTr ? 'Mevsim' : 'Seasons'}</span>
                <span className="block text-gray-500 text-xs font-medium">{isTr ? 'Kesintisiz Uygulama' : 'Uninterrupted'}</span>
              </div>
            </div>
          </motion.div>
        </div>


        {/* MIDDLE CTA BANNER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="w-full bg-gradient-to-r from-[#1e3a5f] to-[#2c4c7c] p-8 lg:p-12 rounded-[2rem] shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 relative overflow-hidden"
        >
          {/* Background Decorative patterns */}
          <div className="absolute -top-24 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 left-10 w-64 h-64 bg-[#cca66b]/10 rounded-full blur-3xl"></div>

          <div className="z-10 flex flex-col gap-2">
            <h3 className="text-2xl md:text-3xl font-black text-white">{isTr ? "Ertelemeyin, Gençliğinizi Geri Kazanın." : "Don't Delay, Reclaim Your Youth."}</h3>
            <p className="text-white/70 font-medium">
              {isTr ? "Uzman hekimlerimizden ücretsiz ön muayene ile tedavinizi hemen planlayın." : "Plan your treatment immediately with a free preliminary exam from our specialists."}
            </p>
          </div>
          <Link 
            href={isTr ? '/iletisim' : '/en/contact'}
            className="z-10 group relative flex items-center justify-center w-full md:w-auto"
          >
            <div className="absolute inset-0 bg-[#cca66b] blur-lg opacity-50 group-hover:opacity-100 transition-opacity rounded-full"></div>
            <div className="relative bg-[#cca66b] hover:bg-[#b08f5c] text-white px-8 py-4 rounded-xl font-black tracking-widest uppercase transition-all shadow-lg flex items-center gap-3">
              <FaCalendarAlt className="text-xl" /> {isTr ? "HEMEN RANDEVU AL" : "BOOK APPOINTMENT NOW"}
            </div>
          </Link>
        </motion.div>


        {/* SECTION 2: SAÇ EKİMİ (Dark Blue / Gold Themes) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-[#427bdf] rounded-full px-4 py-1.5 w-max mb-6 border border-blue-100 shadow-sm">
              <FaStar className="text-xs" />
              <span className="text-[11px] font-black tracking-widest uppercase">{isTr ? 'HAYAT DEĞİŞTİREN DOKUNUŞ' : 'LIFE CHANGING TOUCH'}</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-black text-[#1e3a5f] mb-6 leading-[1.15]">
              {isTr ? 'Safir FUE ve DHI ile ' : 'With Sapphire FUE & DHI '}
              <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cca66b] to-[#a8824a]">
                {isTr ? 'Gür ve Doğal Saçlar' : 'Thick & Natural Hair'}
              </span>
            </h2>
            
            <p className="text-gray-500 text-[15px] lg:text-[17px] leading-relaxed mb-8 font-medium">
              {isTr 
                ? 'Megaeste Klinik farkıyla, hiçbir iz kalmadan ve tamamen ağrısız bir şekilde saç kaybı sorunlarınıza son verin. Sizi hayalinizdeki sık, yoğun ve doğal görünümlü saçlara kavuşturan yüksek teknoloji Safir ve DHI (Choi Pen) yöntemlerimizle tanışın.' 
                : 'Put an end to hair loss completely painless and scarless with Megaeste Clinic difference. Meet our high-tech Sapphire and DHI (Choi Pen) methods that bring you the thick, dense and natural-looking hair of your dreams.'}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="group flex flex-col p-5 bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#1e3a5f] flex items-center justify-center text-[#cca66b] mb-4 group-hover:scale-110 transition-transform">
                  <FaClock className="text-xl" />
                </div>
                <h4 className="font-bold text-[#1e3a5f] text-sm mb-1">{isTr ? 'Hızlı İyileşme' : 'Fast Recovery'}</h4>
                <p className="text-[12px] text-gray-500 leading-snug">{isTr ? 'Sadece 3-4 gün içinde normal hayata dönüş imkanı.' : 'Return to normal life within just 3-4 days.'}</p>
              </div>
              <div className="group flex flex-col p-5 bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#cca66b] flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                </div>
                <h4 className="font-bold text-[#1e3a5f] text-sm mb-1">{isTr ? 'İz ve Kesi Yok' : 'No Scars / Incisions'}</h4>
                <p className="text-[12px] text-gray-500 leading-snug">{isTr ? 'Mikro teknoloji sayesinde cerrahi kesi veya dikiş kullanılmaz.' : 'Micro-technology ensures no surgical incisions or stitches.'}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link 
                href={isTr ? '/hizmetler/safir-sac-ekimi' : '/en/hizmetler/sapphire-hair-transplant'}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#1e3a5f] text-white font-bold rounded-xl shadow-[0_10px_30px_rgba(30,58,95,0.3)] hover:bg-[#142845] hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                {isTr ? 'Yöntemleri İncele' : 'View Methods'} <FaArrowRight className="text-sm" />
              </Link>
            </div>
          </motion.div>
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative h-[450px] lg:h-[550px]"
          >
            {/* Background Accent Shapes */}
            <div className="absolute top-10 -left-10 w-[80%] h-[80%] bg-[#cca66b] rounded-[3rem] opacity-20 -z-10 animate-pulse"></div>
            <div className="absolute -bottom-5 -right-5 w-[60%] h-[60%] bg-[#1e3a5f] rounded-[3rem] opacity-10 -z-10"></div>
            
            <div className="w-full h-full relative rounded-3xl overflow-hidden shadow-2xl group border-4 border-white">
              <Image 
                src="/images/gorselsac.jfif" // Using the high-quality DHI hair transplant image
                alt="Saç Ekimi"
                fill
                className="object-cover object-top transition-transform duration-1000 group-hover:scale-[1.05]"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-10 bg-[#cca66b] rounded-full"></div>
                  <div>
                    <span className="block text-white font-black text-xl tracking-wide">MAX GRAFT</span>
                    <span className="block text-white/80 font-medium text-sm">{isTr ? 'Tek Seansta Maksimum Yoğunluk' : 'Maximum Density in One Session'}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
