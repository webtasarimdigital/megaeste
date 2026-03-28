'use client';

import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export default function Footer({ dict, footerDict, lang = 'tr' }: { dict?: any, footerDict?: any, lang?: string }) {
  // Gracefully handle different dictionary structures passed from different layouts
  const nav = dict?.header?.nav || dict?.nav || dict || {};
  const f = dict?.footer || footerDict || {};

  // Gather ALL service sub-items for 2-column layout
  const allServices: string[] = [
    ...(nav.hairTransplant?.items || []),
    ...(nav.plasticSurgery?.items || []),
    ...(nav.medicalAesthetics?.items || []),
    ...(nav.epilation?.items || []),
  ];
  const half = Math.ceil(allServices.length / 2);
  const servicesCol1 = allServices.slice(0, half);
  const servicesCol2 = allServices.slice(half);

  const socialLinks = [
    { icon: FaInstagram, label: '@mega.estetik', href: 'https://www.instagram.com/mega.estetik' },
    { icon: FiPhone, label: '0533 481 40 98', href: 'tel:+905334814098' },
    { icon: FiMapPin, label: 'Konum', href: 'https://maps.app.goo.gl/j5kTpopsUyhxsjqd9' },
    { icon: FaWhatsapp, label: 'WhatsApp', href: `https://wa.me/905334814098?text=${lang === 'en' ? 'Hello,%20I%20would%20like%20to%20get%20information' : 'Merhaba,%20bilgi%20almak%20istiyorum'}` },
  ];

  const corporateLinks = f.corporateLinks || ['Ana Sayfa', 'Hakkımızda', 'Hekimlerimiz', 'Görüş ve Önerileriniz', 'Blog'];

  return (
    <footer className="w-full relative z-10 flex flex-col">
      
      {/* Pre-Footer Quick Contact Bar (White) */}
      <div className="w-full bg-white border-y border-gray-100 shadow-sm relative z-20">
        <div className="max-w-[1440px] mx-auto flex items-stretch justify-between divide-x divide-gray-100">
          
          {/* Item 1: Phone */}
          <a href="tel:+905334814098" className="flex-1 flex flex-col md:flex-row items-center justify-center py-4 md:py-8 px-2 group hover:bg-gray-50 transition-colors">
            <FiPhone className="text-[20px] md:text-[28px] text-[#3d4450] mb-1.5 md:mb-0 md:mr-4 group-hover:text-[#cca66b] transition-colors" />
            <div className="flex flex-col text-center md:text-left">
              <span className="text-[10.5px] md:text-[15px] font-bold text-[#1e3a5f] tracking-wide">{lang === 'tr' ? 'Bizimle İletişime Geçin' : 'Contact Us'}</span>
              <span className="text-[9px] md:text-[13px] text-gray-500 font-medium mt-0.5 md:mt-1">0533 481 40 98</span>
            </div>
          </a>

          {/* Item 2: WhatsApp */}
          <a href={`https://wa.me/905334814098?text=${lang === 'en' ? 'Hello,%20I%20would%20like%20to%20get%20information' : 'Merhaba,%20bilgi%20almak%20istiyorum'}`} target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col md:flex-row items-center justify-center py-4 md:py-8 px-2 group hover:bg-gray-50 transition-colors">
            <FaWhatsapp className="text-[22px] md:text-[30px] text-[#3d4450] mb-1.5 md:mb-0 md:mr-4 group-hover:text-[#cca66b] transition-colors" />
            <div className="flex flex-col text-center md:text-left">
              <span className="text-[10.5px] md:text-[15px] font-bold text-[#1e3a5f] tracking-wide">WhatsApp</span>
              <span className="text-[9px] md:text-[13px] text-gray-500 font-medium mt-0.5 md:mt-1">{lang === 'tr' ? 'Mesajlaşmak için tıklayın' : 'Click to message'}</span>
            </div>
          </a>

          {/* Item 3: Map */}
          <a href="https://maps.app.goo.gl/j5kTpopsUyhxsjqd9" target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col md:flex-row items-center justify-center py-4 md:py-8 px-2 group hover:bg-gray-50 transition-colors">
            <FiMapPin className="text-[20px] md:text-[28px] text-[#3d4450] mb-1.5 md:mb-0 md:mr-4 group-hover:text-[#cca66b] transition-colors" />
            <div className="flex flex-col text-center md:text-left">
              <span className="text-[10.5px] md:text-[15px] font-bold text-[#1e3a5f] tracking-wide">{lang === 'tr' ? 'Bize Ulaşın' : 'Reach Us'}</span>
              <span className="text-[9px] md:text-[13px] text-gray-500 font-medium mt-0.5 md:mt-1">{lang === 'tr' ? 'Konumumuz için tıklayın' : 'Click for location'}</span>
            </div>
          </a>

        </div>
      </div>

      {/* Main Dark Footer Container */}
      <div className="w-full bg-[#0d2244] relative z-10">
        {/* Top Gradient Divider */}
        <div className="w-full h-[4px]" style={{ background: 'linear-gradient(to right, #0d2244 0%, #1e3a5f 20%, #427bdf 50%, #cca66b 75%, #ffffff 100%)' }}></div>

      {/* Main Footer Content */}
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-24 py-14 xl:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 xl:gap-8">

          {/* Column 1: Logo + Info + Social */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <a href={lang === 'tr' ? '/' : '/en'} className="bg-white/95 p-3 px-5 rounded-2xl shadow-lg mb-6 hover:shadow-xl transition-shadow border border-white/20">
              <Image
                src="/images/megaeste-logo-png.png"
                alt="Megaeste Logo"
                width={220}
                height={70}
                className="w-[160px] md:w-[180px] h-auto object-contain"
              />
            </a>
            <p className="text-white/60 text-[13px] leading-relaxed mb-6 font-medium">
              {f.description || 'Megaeste olarak, uzman kadromuz ve en son teknoloji cihazlarımızla sağlık ve medikal estetik alanlarında profesyonel hizmet sunuyoruz.'}
            </p>

            {/* Contact Info */}
            <div className="flex flex-col space-y-3 mb-6">
              <a href={`tel:+905334814098`} className="flex items-center text-[13px] text-white/70 hover:text-[#cca66b] transition-colors group">
                <FiPhone className="mr-3 text-[#cca66b] text-lg flex-shrink-0" />
                <span className="font-semibold">{f.phone || '0533 481 40 98'}</span>
              </a>
              <a href={`mailto:${f.email || 'info@megaeste.com'}`} className="flex items-center text-[13px] text-white/70 hover:text-[#cca66b] transition-colors group">
                <FiMail className="mr-3 text-[#cca66b] text-lg flex-shrink-0" />
                <span>{f.email || 'info@megaeste.com'}</span>
              </a>
            </div>

            {/* Social Media */}
            <div className="flex space-x-3 mt-6">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  {...(social.href.startsWith('http') ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#cca66b] hover:text-[#0d2244] hover:border-[#cca66b] transition-all duration-300"
                >
                  <social.icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Kurumsal */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-white font-extrabold text-[15px] uppercase tracking-wider mb-5 relative pb-3">
              {f.corporate || 'Kurumsal'}
              <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-[#cca66b] rounded-full"></span>
            </h4>
            <ul className="flex flex-col space-y-3">
              {corporateLinks.map((link: string, idx: number) => (
                <li key={idx}>
                  <a href="#" className="text-white/60 text-[13.5px] font-medium hover:text-[#cca66b] hover:pl-1 transition-all duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Hizmetlerimiz (2-column layout) */}
          <div className="lg:col-span-4 flex flex-col">
            <h4 className="text-white font-extrabold text-[15px] uppercase tracking-wider mb-5 relative pb-3">
              {f.services || 'Hizmetlerimiz'}
              <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-[#cca66b] rounded-full"></span>
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              <ul className="flex flex-col space-y-3">
                {servicesCol1.map((item: string, idx: number) => (
                  <li key={idx}>
                    <a href="#" className="text-white/60 text-[13.5px] font-medium hover:text-[#cca66b] hover:pl-1 transition-all duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col space-y-3">
                {servicesCol2.map((item: string, idx: number) => (
                  <li key={idx}>
                    <a href="#" className="text-white/60 text-[13.5px] font-medium hover:text-[#cca66b] hover:pl-1 transition-all duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: İletişim */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-white font-extrabold text-[15px] uppercase tracking-wider mb-5 relative pb-3">
              {f.contact || 'İletişim'}
              <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-[#cca66b] rounded-full"></span>
            </h4>
            <ul className="flex flex-col space-y-4">
              <li className="flex items-start text-[13.5px] text-white/60 font-medium">
                <FiMapPin className="mr-3 text-[#cca66b] text-lg mt-0.5 flex-shrink-0" />
                <span>{f.address || 'İstiklal Mah. Gamsız Sk. No:3 Ümraniye/İstanbul'}</span>
              </li>
              <li className="flex items-start text-[13.5px] text-white/60 font-medium">
                <FiPhone className="mr-3 text-[#cca66b] text-lg mt-0.5 flex-shrink-0" />
                <span>{f.phone || '0533 481 40 98'}</span>
              </li>
              <li className="flex items-start text-[13.5px] text-white/60 font-medium">
                <FiMail className="mr-3 text-[#cca66b] text-lg mt-0.5 flex-shrink-0" />
                <span>{f.email || 'info@megaeste.com'}</span>
              </li>
              <li className="flex items-start text-[13.5px] text-white/60 font-medium">
                <FiClock className="mr-3 text-[#cca66b] text-lg mt-0.5 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="font-bold text-[#cca66b] mb-1">{f.workingHoursTitle || 'Çalışma Saatleri'}</span>
                  <span>{f.workingHours || 'Pazartesi - Cumartesi: 09:00 - 19:00'}</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="w-full bg-transparent py-5 border-t border-white/10">
        <p className="text-center text-white text-[13px] font-medium tracking-wide">
          {f.copyright || '© 2026 MegaEste Estetik ve Plastik Cerrahi. Tüm Hakları Saklıdır.'}
        </p>
      </div>
      </div>
    </footer>
  );
}
