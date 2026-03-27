'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight, FaChevronDown, FaChevronUp, FaArrowRight, FaRegClock, FaUserMd, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';
import { Service, ServiceContent } from '../data/services';

interface Props {
  service: Service;
  content: ServiceContent;
  relatedServices: Service[];
  lang: 'tr' | 'en';
}

export default function ServiceDetailContent({ service, content, relatedServices, lang }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const serviceLink = (slug: string) => lang === 'tr' ? `/hizmetler/${slug}` : `/${lang}/hizmetler/${slug}`;

  // Map Category Slug to Theme Color Hexes and Classes
  const getCategoryTheme = (slug: string) => {
    switch (slug) {
      case 'hair-transplant':
      case 'sac-ekimi':
        return { colorHex: '#4f6f8f', bg: 'bg-[#4f6f8f]', text: 'text-[#4f6f8f]', border: 'border-[#4f6f8f]' };
      case 'plastic-surgery':
      case 'plastik-cerrahi':
        return { colorHex: '#729788', bg: 'bg-[#729788]', text: 'text-[#729788]', border: 'border-[#729788]' };
      case 'medical-aesthetics':
      case 'medikal-estetik':
        return { colorHex: '#ad6778', bg: 'bg-[#ad6778]', text: 'text-[#ad6778]', border: 'border-[#ad6778]' };
      case 'epilation':
      case 'epilasyon':
        return { colorHex: '#9f8eab', bg: 'bg-[#9f8eab]', text: 'text-[#9f8eab]', border: 'border-[#9f8eab]' };
      default:
        return { colorHex: '#427bdf', bg: 'bg-[#427bdf]', text: 'text-[#427bdf]', border: 'border-[#427bdf]' };
    }
  };

  const theme = getCategoryTheme(content.categorySlug);

  return (
    <>
      {/* Split Hero Banner Reference Aesthetic */}
      <section className="relative w-full min-h-[500px] lg:min-h-[550px] flex flex-col lg:flex-row overflow-hidden bg-gray-50">
        
        {/* Left Solid Color Area */}
        <div className={`w-full lg:w-[45%] ${theme.bg} pt-24 pb-48 lg:py-32 px-6 lg:px-12 xl:px-24 flex flex-col justify-start relative z-10 transition-colors duration-500`}>
          {/* Breadcrumb offset to the top left */}
          <nav className="flex items-center text-xs md:text-sm text-white/80 mb-2 font-medium tracking-wide">
            <Link href={lang === 'tr' ? '/' : `/${lang}`} className="hover:text-white transition-colors">
              {lang === 'tr' ? 'Ana Sayfa' : 'Home'}
            </Link>
            <FaChevronRight className="mx-2 text-[10px]" />
            <span className="text-white/90">{content.category}</span>
            <FaChevronRight className="mx-2 text-[10px]" />
            <span className="text-white font-bold">{content.title}</span>
          </nav>
          
          {/* Subtle Decorative Backdrop Pattern */}
          <div className="absolute top-1/4 right-0 lg:-right-32 opacity-15 pointer-events-none opacity-20 overflow-hidden mix-blend-overlay">
            <svg width="400" height="400" viewBox="0 0 100 100" fill="none" className="transform rotate-45 scale-150">
              <path d="M 50 10 C 20 10 10 40 10 50 C 10 60 20 90 50 90 C 80 90 90 60 90 50 C 90 40 80 10 50 10 Z" stroke="white" strokeWidth="0.5"/>
              <path d="M 50 20 C 30 20 20 40 20 50 C 20 60 30 80 50 80 C 70 80 80 60 80 50 C 80 40 70 20 50 20 Z" stroke="white" strokeWidth="0.5"/>
            </svg>
          </div>
        </div>

        {/* Right Feature Image */}
        <div className="w-full lg:w-[55%] h-[400px] lg:h-auto relative">
          <Image
            src={service.image}
            alt={content.title}
            fill
            className="object-cover object-center"
            priority
          />
          {/* Subtle Gradient for Overlapping Text Box Readability */}
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/40 via-transparent to-transparent mix-blend-multiply" />
        </div>

        {/* Floating Text Overlay Box - Bridging Left and Right */}
        <div className="absolute top-1/2 left-0 w-full transform -translate-y-[20%] lg:-translate-y-1/2 mt-10 md:mt-20 z-20 px-6 lg:px-12 xl:px-24 pointer-events-none">
          <div 
            className="bg-[#f2f6f5] p-8 md:p-12 w-full max-w-[600px] rounded-bl-3xl rounded-tr-3xl shadow-[0_15px_40px_rgba(0,0,0,0.15)] pointer-events-auto border-l-[6px] transition-colors duration-500" 
            style={{ borderColor: theme.colorHex }}
          >
            <span className={`text-[11px] font-bold tracking-[0.3em] uppercase mb-4 block opacity-80 transition-colors ${theme.text}`}>
              {content.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-black mb-5 uppercase tracking-wide text-[#1e3a5f] leading-tight">
              {content.title}
            </h1>
            <p className="text-gray-700 text-[15px] md:text-[16px] leading-relaxed font-medium line-clamp-4">
              {content.heroDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="w-full bg-gradient-to-r from-[#f0f5fb] to-[#e8f0fb] border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-24 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: FaUserMd, text: lang === 'tr' ? 'Uzman Kadro' : 'Expert Team', color: '#427bdf' },
              { icon: FaShieldAlt, text: lang === 'tr' ? 'Güvenli Ortam' : 'Safe Environment', color: '#1e3a5f' },
              { icon: FaRegClock, text: lang === 'tr' ? 'Hızlı İyileşme' : 'Fast Recovery', color: '#427bdf' },
              { icon: FaCheckCircle, text: lang === 'tr' ? 'Doğal Sonuç' : 'Natural Results', color: '#1e3a5f' },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/70 backdrop-blur rounded-xl px-4 py-3 shadow-sm">
                <badge.icon className="text-xl flex-shrink-0" style={{ color: badge.color }} />
                <span className="text-sm font-bold text-gray-700">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content + Sidebar */}
      <section className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-24 py-14 xl:py-20">
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-14">
          
          {/* Left: Main Content */}
          <div className="flex-1 min-w-0">
            
            {/* Long Description */}
            <div className="mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-6">
                {content.title} {lang === 'tr' ? 'Hakkında' : 'About'}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 leading-loose">
                {content.longDescription.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="mb-4 text-[15px] md:text-[16px] leading-[1.8]">{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Feature Image */}
            <div className="relative w-full h-[280px] md:h-[380px] rounded-2xl overflow-hidden mb-14 shadow-xl">
              <Image
                src={service.image}
                alt={content.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0d2244]/60 to-transparent" />
            </div>

            {/* Process Steps */}
            <div className="mb-14">
              <h2 className="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-8">
                {lang === 'tr' ? 'Tedavi Süreci' : 'Treatment Process'}
              </h2>
              <div className="relative">
                {/* Vertical Timeline Line */}
                <div className="absolute left-[22px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#427bdf] via-[#427bdf]/40 to-transparent hidden md:block" />
                
                <div className="space-y-6">
                  {content.process.map((step, i) => (
                    <div
                      key={i}
                      className="group relative flex gap-5 md:gap-6"
                    >
                      {/* Step Number Circle */}
                      <div className="flex-shrink-0 w-[46px] h-[46px] rounded-full bg-gradient-to-br from-[#427bdf] to-[#2b5ebf] flex items-center justify-center shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-black text-sm">{step.step}</span>
                      </div>
                      
                      {/* Step Content */}
                      <div className="flex-1 bg-gradient-to-br from-[#f7faff] to-[#eef4fc] rounded-xl p-5 md:p-6 border border-[#d6e4f7]/50 shadow-sm group-hover:shadow-md group-hover:-translate-y-0.5 transition-all duration-300">
                        <h3 className="text-[16px] md:text-[17px] font-bold text-[#1e3a5f] mb-2">{step.title}</h3>
                        <p className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-[#1e3a5f] mb-8">
                {lang === 'tr' ? 'Sıkça Sorulan Sorular' : 'Frequently Asked Questions'}
              </h2>
              <div className="space-y-3">
                {content.faq.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-[#f7faff] transition-colors text-left"
                    >
                      <span className="font-bold text-[15px] text-[#1e3a5f] pr-4">{item.q}</span>
                      {openFaq === i ? (
                        <FaChevronUp className="text-sm flex-shrink-0 transition-colors" style={{ color: theme.colorHex }} />
                      ) : (
                        <FaChevronDown className="text-gray-400 text-sm flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-5 bg-[#f9fbfe] border-t border-gray-50">
                        <p className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed pt-4">{item.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar - Reordered: Related Services First, CTA Sticky Underneath */}
          <aside className="w-full lg:w-[340px] xl:w-[380px] flex-shrink-0">
            <div className="sticky top-8 space-y-6">
              
              {/* Related Services */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_5px_20px_rgba(0,0,0,0.03)] overflow-hidden">
                <div 
                  className="px-6 py-5 border-b border-gray-100/50"
                  style={{ backgroundColor: `${theme.colorHex}15` }} // Light tint of category color
                >
                  <h3 className="text-lg font-black" style={{ color: theme.colorHex }}>
                    {lang === 'tr' ? 'Benzer Hizmetler' : 'Related Services'}
                  </h3>
                </div>
                <div className="divide-y divide-gray-50">
                  {relatedServices.map((rel) => {
                    const relContent = rel[lang];
                    return (
                      <Link
                        key={rel.id}
                        href={serviceLink(relContent.slug)}
                        className="group flex items-center gap-4 px-6 py-4 hover:bg-gray-50/80 transition-colors"
                      >
                        <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 shadow-sm border border-gray-100">
                          <Image
                            src={rel.image}
                            alt={relContent.title}
                            width={56}
                            height={56}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-[14px] text-gray-800 transition-colors truncate" style={{ '--tw-text-opacity': '1' } as React.CSSProperties}>
                            {relContent.title}
                          </h4>
                          <span className="text-[11.5px] font-semibold opacity-70" style={{ color: theme.colorHex }}>{relContent.category}</span>
                        </div>
                        <FaArrowRight className="text-xs text-gray-300 group-hover:-rotate-45 transition-transform flex-shrink-0" style={{ color: theme.colorHex }} />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Conversion CTA Card - Prominently Triggering Appointments */}
              <div className="bg-[#1e2a38] rounded-2xl p-7 md:p-8 text-white shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#cca66b] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                <h3 className="text-xl font-black mb-3">
                  {lang === 'tr' ? 'Sizi Bekliyor Olacağız' : 'Free Consultation'}
                </h3>
                <p className="text-white/70 text-[14.5px] leading-relaxed mb-6 font-light">
                  {lang === 'tr' 
                    ? 'Uzman ekibimizle görüşmek, detaylı analiz ve ücretsiz randevu için hemen bize ulaşın.' 
                    : 'Contact us now to meet with our expert team and schedule a comprehensive appointment.'}
                </p>
                <Link 
                  href={lang === 'en' ? '/en/contact' : '/iletisim'}
                  className="flex items-center justify-between w-full px-6 py-4 bg-[#cca66b] hover:bg-[#b8955d] rounded-xl font-bold text-[15px] transition-colors shadow-lg group-hover:shadow-[0_4px_20px_rgba(204,166,107,0.4)]"
                >
                  <span className="uppercase tracking-widest">{lang === 'tr' ? 'Randevu Al' : 'Book Appointment'}</span>
                  <FaArrowRight className="text-sm transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* All Services Card */}
              <div className="bg-gradient-to-br from-[#f0f5fb] to-[#e3ecf7] rounded-2xl p-6 border border-[#d6e4f7]/50">
                <h3 className="text-base font-black text-[#1e3a5f] mb-4">
                  {lang === 'tr' ? 'Tüm Hizmetlerimiz' : 'All Our Services'}
                </h3>
                <div className="space-y-2">
                  {[
                    { label: lang === 'tr' ? 'Saç Ekimi Tedavileri' : 'Hair Transplant', count: 3 },
                    { label: lang === 'tr' ? 'Plastik Cerrahi' : 'Plastic Surgery', count: 3 },
                    { label: lang === 'tr' ? 'Medikal Estetik' : 'Medical Aesthetics', count: 2 },
                    { label: lang === 'tr' ? 'Epilasyon' : 'Epilation', count: 2 },
                  ].map((cat, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between bg-white/80 rounded-lg px-4 py-3 text-sm cursor-pointer hover:bg-white hover:shadow-sm transition-all"
                    >
                      <span className="font-semibold text-gray-700">{cat.label}</span>
                      <span className="text-[11px] font-bold bg-[#427bdf]/10 text-[#427bdf] px-2 py-0.5 rounded-full">{cat.count}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
