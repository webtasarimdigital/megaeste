'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PiArrowRightThin } from 'react-icons/pi';

interface CategoryDetailContentProps {
  categorySlug: string;
  categoryTitle: string;
  subTitle: string;
  bgImage: string;
  servicesList: any[];
  lang: 'tr' | 'en';
  dict: any;
}

export default function CategoryDetailContent({
  categoryTitle,
  subTitle,
  bgImage,
  servicesList,
  lang,
  dict,
}: CategoryDetailContentProps) {
  return (
    <div className="w-full bg-white relative">
      {/* Hero */}
      <section className="relative w-full h-[350px] lg:h-[40vh] min-h-[350px] bg-[#0d2244] flex items-center justify-center overflow-hidden pb-8">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 blur-[2px] transform scale-105"
            style={{ backgroundImage: `url(${bgImage})` }}
          ></div>
          <div className="absolute inset-0 bg-[#0d2244]/70 z-10 mix-blend-multiply"></div>
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0d2244] to-transparent z-20"></div>
        </div>

        <div className="relative z-30 flex flex-col items-center justify-center text-center px-4 pt-4 md:pt-10">
          <div className="flex items-center space-x-3 mb-3 md:mb-5">
            <div className="w-5 h-[2px] bg-[#cca66b]"></div>
            <span className="text-[#cca66b] text-[11px] md:text-xs font-black tracking-[0.3em] uppercase drop-shadow-md">
              MEGAESTE CLINIC
            </span>
            <div className="w-5 h-[2px] bg-[#cca66b]"></div>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-none mb-4 drop-shadow-xl"
          >
            {categoryTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gray-300 text-sm md:text-base font-medium max-w-xl leading-relaxed drop-shadow-sm"
          >
            {subTitle}
          </motion.p>
        </div>
      </section>

      {/* Sub-Services Section */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 md:w-16 h-[2px] bg-[#cca66b]/80 rounded-full" />
            <h2 className="text-[10px] md:text-sm font-black tracking-[0.3em] text-[#cca66b] uppercase drop-shadow-md">
              {dict?.services?.subtitle || 'SİZE ÖZEL YÖNTEMLER'}
            </h2>
            <div className="w-8 md:w-16 h-[2px] bg-[#cca66b]/80 rounded-full" />
          </div>
          <h3 className="text-2xl md:text-4xl font-extrabold text-[#1e3a5f] tracking-tight">
            {lang === 'en' ? 'Treatments in this Category' : 'Bu Kategorideki Tedaviler'}
          </h3>
        </div>

        {servicesList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {servicesList.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Link
                  href={`${lang === 'en' ? '/en/treatments' : '/hizmetler'}/${service[lang].slug}`}
                  className="group flex flex-col bg-white border border-gray-100 hover:border-gray-200 hover:shadow-2xl rounded-3xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:-translate-y-2 h-full"
                >
                  <div className="w-full h-64 overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service[lang].title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#1e3a5f]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  <div className="flex-col justify-between p-8 flex-grow relative bg-white transition-colors duration-500">
                    <div>
                      <h5 className="text-2xl font-bold mb-3 text-[#1e3a5f] transition-colors leading-tight">
                        {service[lang].title}
                      </h5>
                      <p className="text-gray-500 font-medium text-[15px] leading-relaxed line-clamp-3 mb-6">
                        {service[lang].heroDescription}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <span className="text-[#cca66b] font-bold text-sm uppercase tracking-wider">
                        {lang === 'en' ? 'Learn More' : 'İncele'}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-[#f8fafc] group-hover:bg-[#cca66b] group-hover:text-white flex items-center justify-center text-[#1e3a5f] transition-all duration-300">
                        <PiArrowRightThin className="text-xl" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-300">
            <p className="text-gray-500 font-medium text-lg">
              {lang === 'en' ? 'No treatments found in this category.' : 'Bu kategoride henüz tedavi bulunmuyor.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
