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
    <section className="w-full relative z-10 py-10 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 xl:px-16 flex flex-col gap-16 lg:gap-24">
        
        {/* Main Section Title */}
        <div className="text-center md:mb-[-2rem] lg:mb-[-3rem]">
          <h2 className="text-3xl lg:text-4xl xl:text-[2.6rem] font-black text-[#1e3a5f] tracking-tight">
            {isTr ? 'Popüler Hizmetler' : 'Popular Services'}
          </h2>
          <div className="w-24 h-1.5 bg-[#cca66b] mx-auto mt-4 rounded-full"></div>
        </div>

        
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
                {isTr ? 'Konforlu Epilasyon' : 'Comfortable Epilation'}
              </span>
            </h2>
            
            <p className="text-gray-500 text-[15px] lg:text-[17px] leading-relaxed mb-8 font-medium">
              {isTr 
                ? 'Yeni nesil soğuk hava üflemeli lazer epilasyon cihazlarımızla 4 mevsim boyunca, yüksek konforla ipeksi bir cilde kavuşun. Farklı cilt tipleri ve kıl yapılarına özel, FDA onaylı protokollerimizle kliniklerimizde başarılı sonuçlar elde ediyoruz.' 
                : 'Achieve silky skin in all 4 seasons with high comfort using our next-generation cold-air-blown laser equipment. We provide successful results with FDA-approved protocols tailored for various skin types.'}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 bg-pink-50/50 p-4 rounded-2xl border border-pink-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 shrink-0">
                  <FaLeaf />
                </div>
                <div>
                  <h4 className="font-bold text-[#1e3a5f] text-[14px]">{isTr ? 'Konforlu İşlem' : 'Comfortable Process'}</h4>
                  <p className="text-[12px] text-gray-500">{isTr ? 'Soğuk hava başlıklı teknoloji.' : 'Cold air technology.'}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-pink-50/50 p-4 rounded-2xl border border-pink-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 shrink-0">
                  <FaMedal />
                </div>
                <div>
                  <h4 className="font-bold text-[#1e3a5f] text-[14px]">{isTr ? 'Etkili Sonuç' : 'Effective Result'}</h4>
                  <p className="text-[12px] text-gray-500">{isTr ? 'Gözle görülür azalma.' : 'Visible reduction.'}</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3">
              <Link 
                href={isTr ? '/hizmetler/lazer-epilasyon' : '/en/treatments/laser-hair-removal'}
                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-pink-500 to-rose-400 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 text-[13px] md:text-sm"
              >
                {isTr ? 'Lazer Epilasyon Hizmetini İncele' : 'View Laser Epilation'} <FaArrowRight className="text-xs" />
              </Link>
              <Link 
                href={isTr ? '/hizmetler/igneli-lazer-epilasyonu' : '/en/treatments/needle-laser-epilation'}
                className="w-full sm:w-auto px-6 py-3.5 bg-white text-pink-500 border border-pink-100 font-bold rounded-xl shadow-sm hover:bg-pink-50 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 text-[13px] md:text-sm"
              >
                {isTr ? 'İğneli Lazer Hizmetini İncele' : 'View Needle Epilation'} <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </motion.div>
          
          {/* Dual Image Layout for Epilation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative min-h-[450px] lg:min-h-[550px]"
          >
            {/* Background Accent Shapes */}
            <div className="absolute inset-x-8 inset-y-0 bg-pink-500/5 rounded-[3rem] -z-10"></div>
            
            {/* Main Image */}
            <div className="absolute top-4 right-0 w-[65%] h-[55%] rounded-[2rem] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.1)] border-4 border-white group bg-gray-100">
              <Image 
                src="/images/services/pop_epi_main.png" 
                alt="Lazer Epilasyon"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Sub Image (Overlapping bottom left) */}
            <div className="absolute bottom-4 left-0 w-[55%] h-[45%] rounded-[2rem] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.15)] border-4 border-white group bg-gray-100">
              <Image 
                src="/images/services/pop_epi_sub.png" 
                alt="Epilasyon Lazer"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Floating Info Badge moved appropriately */}
            <div className="absolute bottom-12 -right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] z-20 flex items-center gap-4 border border-white/50 animate-bounce-slow">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 text-xl font-bold">4</div>
              <div>
                <span className="block text-[#1e3a5f] font-black text-sm uppercase tracking-wide">{isTr ? 'Mevsim' : 'Seasons'}</span>
                <span className="block text-gray-500 text-xs font-medium">{isTr ? 'Kesintisiz Uygulama' : 'Uninterrupted'}</span>
              </div>
            </div>
          </motion.div>
        </div>


      </div> {/* End top container */}

      {/* MIDDLE CTA BANNER - FULL WIDTH */}
      <div className="w-full bg-gradient-to-r from-[#1e3a5f] to-[#10223f] py-14 lg:py-20 my-16 lg:my-24 relative overflow-hidden border-y border-[#cca66b]/20">
        {/* Background Decorative patterns */}
        <div className="absolute -top-40 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-10 w-96 h-96 bg-[#cca66b]/10 rounded-full blur-3xl"></div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[1440px] mx-auto px-4 lg:px-8 xl:px-16 flex flex-col md:flex-row items-center justify-between gap-8 z-10 relative"
        >
          <div className="flex flex-col gap-4 text-center md:text-left max-w-2xl">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-snug">
              {isTr ? "Sağlıklı ve Doğal Bir Görünüm İçin İlk Adımı Atın." : "Take the First Step for a Healthy and Natural Look."}
            </h3>
            <p className="text-white/70 font-medium text-[15px] lg:text-[17px]">
              {isTr ? "Uzman tıbbi kadromuzla ücretsiz ön muayene ile ihtiyaçlarınıza özel tedavinizi planlayalım." : "Let's plan your personalized treatment together with a free preliminary consultation by our expert medical team."}
            </p>
          </div>
          <Link 
            href={isTr ? '/iletisim' : '/en/contact'}
            className="group relative flex items-center justify-center shrink-0 mt-4 md:mt-0"
          >
            <div className="relative bg-[#cca66b] text-white px-8 py-4 lg:px-10 lg:py-5 rounded-xl font-black tracking-widest uppercase transition-transform duration-300 shadow-[0_10px_30px_rgba(204,166,107,0.3)] hover:-translate-y-1 flex items-center gap-3">
               <FaCalendarAlt className="text-xl" /> {isTr ? "HEMEN RANDEVU AL" : "BOOK APPOINTMENT NOW"}
            </div>
          </Link>
        </motion.div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 xl:px-16 flex flex-col gap-16 lg:gap-24">


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
              <span className="text-[11px] font-black tracking-widest uppercase">{isTr ? 'SAĞLIK TURİZMİNDE GÜVEN' : 'TRUSTED HEALTH TOURISM'}</span>
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
                ? 'Megaeste Klinik farkıyla, modern yöntemlerle saç kaybı sorunlarınıza son verin. Sizi hayalinizdeki sık, yoğun ve doğal görünümlü saçlara kavuşturan yüksek teknoloji Safir ve DHI (Choi Pen) yöntemlerimizle tanışın.' 
                : 'Put an end to hair loss with modern methods by Megaeste Clinic difference. Meet our high-tech Sapphire and DHI (Choi Pen) methods that bring you the thick, dense and natural-looking hair of your dreams.'}
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
            
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3">
              <Link 
                href={isTr ? '/hizmetler/dhi-sac-ekimi' : '/en/treatments/dhi-hair-transplant'}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#1e3a5f] text-white font-bold rounded-xl shadow-[0_10px_30px_rgba(30,58,95,0.3)] hover:bg-[#142845] hover:-translate-y-1 transition-all flex items-center justify-center gap-2 text-[13px] md:text-sm"
              >
                {isTr ? 'DHI Saç Ekimi Hizmetini İncele' : 'View DHI Transplant'} <FaArrowRight className="text-xs" />
              </Link>
              <Link 
                href={isTr ? '/hizmetler/safir-sac-ekimi' : '/en/treatments/sapphire-hair-transplant'}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#cca66b] text-white font-bold rounded-xl shadow-[0_10px_30px_rgba(204,166,107,0.3)] hover:brightness-110 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 text-[13px] md:text-sm"
              >
                {isTr ? 'Safir FUE Hizmetini İncele' : 'View Sapphire FUE'} <FaArrowRight className="text-xs" />
              </Link>
              <Link 
                href={isTr ? '/hizmetler/sac-mezoterapisi' : '/en/treatments/hair-mesotherapy'}
                className="w-full sm:w-auto px-6 py-3.5 bg-white text-[#1e3a5f] border border-gray-200 font-bold rounded-xl shadow-sm hover:bg-gray-50 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 text-[13px] md:text-sm"
              >
                {isTr ? 'Saç Mezoterapisi Hizmetini İncele' : 'View Mesotherapy'} <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </motion.div>
          
          {/* Dual Image Layout for Hair Transplant */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative min-h-[450px] lg:min-h-[550px]"
          >
            {/* Background Accent Shapes */}
            <div className="absolute inset-y-10 inset-x-0 bg-[#cca66b] rounded-[3rem] opacity-10 -z-10 animate-pulse"></div>
            
            {/* Main Image */}
            <div className="absolute top-0 right-0 w-[85%] h-[80%] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group bg-gray-100">
              <Image 
                src="/images/services/pop_sac_main.png" 
                alt="Saç Ekimi"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-10 bg-[#cca66b] rounded-full"></div>
                  <div>
                    <span className="block text-white font-black text-xl tracking-wide">MAX GRAFT</span>
                    <span className="block text-white/80 font-medium text-sm">{isTr ? 'Tek Seansta Süper Yoğunluk' : 'Super Density in One Session'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub Image (Overlapping bottom left) */}
            <div className="absolute bottom-4 left-0 w-[55%] h-[45%] rounded-[2rem] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.15)] border-4 border-white group bg-gray-100">
              <Image 
                src="/images/services/pop_sac_sub.png" 
                alt="Saç Ekimi Uzman Kontrolü"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
