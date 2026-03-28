'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight, FaChevronDown, FaChevronUp, FaArrowRight, FaUserMd, FaShieldAlt, FaClipboardList, FaLaptopMedical } from 'react-icons/fa';
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
      {/* Smooth Gradient Hero Section */}
      <section className="relative w-full min-h-[400px] lg:min-h-[500px] flex flex-col justify-end pb-8 lg:pb-16 overflow-hidden bg-gray-50">
        
        {/* Full-Width Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={content.title}
            fill
            className="object-cover object-center lg:object-right"
            priority
            quality={100}
          />
        </div>

        {/* Smooth Gradient Overlay (Left to Right) */}
        <div 
          className="absolute inset-0 z-10 opacity-95"
          style={{ background: `linear-gradient(to right, ${theme.colorHex} 0%, ${theme.colorHex} 30%, transparent 65%)` }}
        ></div>
        {/* Mobile Gradient (Bottom to Top) */}
        <div 
          className="absolute inset-0 z-10 opacity-95 lg:hidden"
          style={{ background: `linear-gradient(to top, ${theme.colorHex} 0%, ${theme.colorHex} 45%, transparent 80%)` }}
        ></div>

        {/* Absolute Top Left Breadcrumb */}
        <nav className="absolute top-20 md:top-28 left-4 lg:left-12 xl:left-24 z-30 flex flex-wrap items-center text-[11px] md:text-sm text-white/90 drop-shadow-md font-medium tracking-wide max-w-[90%] md:max-w-auto">
          <Link href={lang === 'tr' ? '/' : `/${lang}`} className="hover:text-white transition-colors whitespace-nowrap mb-1">
            {lang === 'tr' ? 'Ana Sayfa' : 'Home'}
          </Link>
          <FaChevronRight className="mx-1.5 md:mx-2 text-[8px] md:text-[10px] flex-shrink-0 mb-1" />
          <span className="text-white/90 whitespace-nowrap mb-1">{content.category}</span>
          <FaChevronRight className="mx-1.5 md:mx-2 text-[8px] md:text-[10px] flex-shrink-0 mb-1" />
          <span className="text-white font-bold whitespace-nowrap mb-1">{content.title}</span>
        </nav>

        {/* Content Container (Floating Box) */}
        <div className="relative z-20 w-full lg:w-1/2 px-4 md:px-6 lg:px-12 xl:px-24 mt-32 lg:mt-8 pointer-events-none">
          <div 
            className="bg-[#f9fbff]/95 backdrop-blur-sm p-6 md:p-8 lg:p-12 w-full max-w-[600px] rounded-bl-3xl rounded-tr-3xl shadow-2xl pointer-events-auto border-l-[6px] transition-colors duration-500" 
            style={{ borderColor: theme.colorHex }}
          >
            <span className={`text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase mb-2 block opacity-80 ${theme.text}`}>
              {content.category}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-[46px] font-black mb-4 uppercase tracking-wide text-[#1e3a5f] leading-tight drop-shadow-sm">
              {content.title}
            </h1>
            <p className="text-gray-600 text-sm md:text-[15px] lg:text-lg leading-relaxed font-medium">
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
              { icon: FaShieldAlt, text: lang === 'tr' ? 'Hijyenik Tesis' : 'Hygienic Facility', color: '#1e3a5f' },
              { icon: FaClipboardList, text: lang === 'tr' ? 'Kişiye Özel Yaklaşım' : 'Personalized Approach', color: '#427bdf' },
              { icon: FaLaptopMedical, text: lang === 'tr' ? 'Modern Teknoloji' : 'Modern Technology', color: '#1e3a5f' },
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
                {content.title}
              </h2>
              <div 
                className="prose prose-lg max-w-none text-gray-600 leading-loose [&>h2]:text-2xl [&>p]:mb-4"
                dangerouslySetInnerHTML={{ __html: content.longDescription }}
              />
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
                    { label: lang === 'tr' ? 'Saç Ekimi' : 'Hair Transplant', count: 3, href: lang === 'tr' ? '/hizmetler/dhi-sac-ekimi' : '/en/treatments/dhi-hair-transplant' },
                    { label: lang === 'tr' ? 'Plastik Cerrahi' : 'Plastic Surgery', count: 3, href: lang === 'tr' ? '/hizmetler/burun-estetigi' : '/en/treatments/rhinoplasty' },
                    { label: lang === 'tr' ? 'Medikal Estetik' : 'Medical Aesthetics', count: 2, href: lang === 'tr' ? '/hizmetler/medikal-cilt-bakimi' : '/en/treatments/medical-skin-care' },
                    { label: lang === 'tr' ? 'Epilasyon' : 'Epilation', count: 2, href: lang === 'tr' ? '/hizmetler/lazer-epilasyon' : '/en/treatments/laser-hair-removal' },
                  ].map((cat, i) => (
                    <Link
                      key={i}
                      href={cat.href}
                      className="flex items-center justify-between bg-white/80 rounded-lg px-4 py-3 text-sm cursor-pointer hover:bg-white hover:shadow-sm transition-all group"
                    >
                      <span className="font-semibold text-gray-700 group-hover:text-[#cca66b] transition-colors">{cat.label}</span>
                      <span className="text-[11px] font-bold bg-[#427bdf]/10 text-[#427bdf] group-hover:bg-[#cca66b]/10 group-hover:text-[#cca66b] transition-colors px-2 py-0.5 rounded-full">{cat.count}</span>
                    </Link>
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
