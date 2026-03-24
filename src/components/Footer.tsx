'use client';

import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaYoutube, FaFacebookF, FaTiktok, FaLinkedinIn } from 'react-icons/fa';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export default function Footer({ dict, footerDict, lang = 'tr' }: { dict?: any, footerDict?: any, lang?: string }) {
  const nav = dict || {};
  const f = footerDict || {};

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
    { icon: FaInstagram, label: '/megaeste', href: '#' },
    { icon: FaYoutube, label: '/megaeste', href: '#' },
    { icon: FaFacebookF, label: '/megaeste', href: '#' },
    { icon: FaLinkedinIn, label: '/megaeste', href: '#' },
    { icon: FaTiktok, label: '/megaeste', href: '#' },
  ];

  const corporateLinks = f.corporateLinks || ['Ana Sayfa', 'Hakkımızda', 'Hekimlerimiz', 'Blog'];

  return (
    <footer className="w-full bg-white mt-20 relative z-10">
      {/* Top Gradient Divider - same as header */}
      <div className="w-full h-[4px]" style={{ background: 'linear-gradient(to right, #0d2244 0%, #1e3a5f 20%, #427bdf 50%, #a8ccf0 75%, #ffffff 100%)' }}></div>

      {/* Main Footer Content */}
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-24 py-14 xl:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 xl:gap-8">

          {/* Column 1: Logo + Info + Social */}
          <div className="lg:col-span-3 flex flex-col">
            <Image
              src="/images/logo.png"
              alt="Megaeste Logo"
              width={220}
              height={70}
              className="w-[180px] h-auto object-contain mb-6"
            />
            <p className="text-gray-500 text-[13px] leading-relaxed mb-6 font-medium">
              {f.description || 'Megaeste olarak, uzman kadromuz ve en son teknoloji cihazlarımızla sağlık ve medikal estetik alanlarında profesyonel hizmet sunuyoruz.'}
            </p>

            {/* Contact Info */}
            <div className="flex flex-col space-y-3 mb-6">
              <a href={`tel:${f.phone || '08502223789'}`} className="flex items-center text-[13px] text-gray-600 hover:text-[#427bdf] transition-colors group">
                <FiPhone className="mr-3 text-[#427bdf] text-lg flex-shrink-0" />
                <span className="font-semibold">{f.phone || '0850 222 3 789'}</span>
              </a>
              <a href={`mailto:${f.email || 'info@megaeste.com.tr'}`} className="flex items-center text-[13px] text-gray-600 hover:text-[#427bdf] transition-colors group">
                <FiMail className="mr-3 text-[#427bdf] text-lg flex-shrink-0" />
                <span>{f.email || 'info@megaeste.com.tr'}</span>
              </a>
            </div>

            {/* Social Media */}
            <div className="flex space-x-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#427bdf] hover:text-white transition-all duration-300"
                >
                  <social.icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Kurumsal */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-[#1e3a5f] font-extrabold text-[15px] uppercase tracking-wider mb-5 relative pb-3">
              {f.corporate || 'Kurumsal'}
              <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-[#427bdf] rounded-full"></span>
            </h4>
            <ul className="flex flex-col space-y-3">
              {corporateLinks.map((link: string, idx: number) => (
                <li key={idx}>
                  <a href="#" className="text-gray-500 text-[13.5px] font-medium hover:text-[#427bdf] hover:pl-1 transition-all duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Hizmetlerimiz (2-column layout) */}
          <div className="lg:col-span-4 flex flex-col">
            <h4 className="text-[#1e3a5f] font-extrabold text-[15px] uppercase tracking-wider mb-5 relative pb-3">
              {f.services || 'Hizmetlerimiz'}
              <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-[#427bdf] rounded-full"></span>
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              <ul className="flex flex-col space-y-3">
                {servicesCol1.map((item: string, idx: number) => (
                  <li key={idx}>
                    <a href="#" className="text-gray-500 text-[13.5px] font-medium hover:text-[#427bdf] hover:pl-1 transition-all duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col space-y-3">
                {servicesCol2.map((item: string, idx: number) => (
                  <li key={idx}>
                    <a href="#" className="text-gray-500 text-[13.5px] font-medium hover:text-[#427bdf] hover:pl-1 transition-all duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: İletişim */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-[#1e3a5f] font-extrabold text-[15px] uppercase tracking-wider mb-5 relative pb-3">
              {f.contact || 'İletişim'}
              <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-[#427bdf] rounded-full"></span>
            </h4>
            <ul className="flex flex-col space-y-4">
              <li className="flex items-start text-[13.5px] text-gray-500 font-medium">
                <FiMapPin className="mr-3 text-[#427bdf] text-lg mt-0.5 flex-shrink-0" />
                <span>{f.address || 'İstanbul, Türkiye'}</span>
              </li>
              <li className="flex items-start text-[13.5px] text-gray-500 font-medium">
                <FiPhone className="mr-3 text-[#427bdf] text-lg mt-0.5 flex-shrink-0" />
                <span>{f.phone || '0850 222 3 789'}</span>
              </li>
              <li className="flex items-start text-[13.5px] text-gray-500 font-medium">
                <FiMail className="mr-3 text-[#427bdf] text-lg mt-0.5 flex-shrink-0" />
                <span>{f.email || 'info@megaeste.com.tr'}</span>
              </li>
              <li className="flex items-start text-[13.5px] text-gray-500 font-medium">
                <FiClock className="mr-3 text-[#427bdf] text-lg mt-0.5 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="font-bold text-[#1e3a5f] mb-1">{f.workingHoursTitle || 'Çalışma Saatleri'}</span>
                  <span>{f.workingHours || 'Pazartesi - Cumartesi: 09:00 - 19:00'}</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="w-full bg-[#0d2244] py-5">
        <p className="text-center text-white/70 text-[13px] font-medium tracking-wide">
          {f.copyright || '© 2026 MegaEste Estetik ve Plastik Cerrahi. Tüm Hakları Saklıdır.'}
        </p>
      </div>
    </footer>
  );
}
