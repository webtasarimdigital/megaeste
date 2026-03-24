import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaInstagram, FaYoutube, FaFacebookF, FaTwitter, FaLinkedinIn, FaTiktok } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Footer({ dict }: { dict?: any }) {
  return (
    <footer className="w-full text-gray-700 font-sans mt-20">
      {/* Top Contact Bar */}
      <div className="w-full border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border-x-0 md:border-x border-gray-200">
          
          <div className="flex items-center justify-center py-10 px-4 group cursor-pointer hover:bg-gray-50 transition-colors">
            <FaPhoneAlt className="text-3xl text-gray-300 mr-6 group-hover:text-[#efc34c] transition-colors" />
            <div className="flex flex-col">
              <h4 className="text-xl font-light text-gray-600 mb-0.5">Bizimle İletişime Geçin</h4>
              <p className="text-[17px] font-bold text-gray-800 tracking-wider">0850 222 3 789</p>
            </div>
          </div>

          <div className="flex items-center justify-center py-10 px-4 group cursor-pointer hover:bg-gray-50 transition-colors">
            <FaWhatsapp className="text-4xl text-gray-300 mr-6 group-hover:text-[#25D366] transition-colors" />
            <div className="flex flex-col">
              <h4 className="text-xl font-light text-gray-600 mb-0.5">WhatsApp</h4>
              <p className="text-[13px] font-medium text-gray-400">Mesajlaşmak için tıklayın</p>
            </div>
          </div>

          <div className="flex items-center justify-center py-10 px-4 group cursor-pointer hover:bg-gray-50 transition-colors">
            <FaMapMarkerAlt className="text-4xl text-gray-300 mr-6 group-hover:text-red-500 transition-colors" />
            <div className="flex flex-col">
              <h4 className="text-xl font-light text-gray-600 mb-0.5">Bize Ulaşın</h4>
              <p className="text-[13px] font-medium text-gray-400">Konumumuz için tıklayın.</p>
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer Area */}
      <div className="w-full bg-[#f9f8f4] border-t border-gray-200 pt-16 pb-32 lg:pb-16 shadow-inner">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 xl:px-0 flex flex-col lg:flex-row">
          
          {/* Left Column (Brand & Socials) */}
          <div className="w-full lg:w-[25%] pr-8 border-b lg:border-b-0 lg:border-r border-gray-200 mb-12 lg:mb-0 pb-12 lg:pb-0 relative">
            <Link href="/" className="flex flex-col mb-10 block">
              <Image 
                src="/images/logo.png" 
                alt="Megaeste Logo" 
                width={260} 
                height={85} 
                className="w-[200px] xl:w-[240px] h-auto object-contain"
              />
            </Link>

            <div className="space-y-5 mb-10">
              <div className="flex items-center text-gray-600 hover:text-[#efc34c] cursor-pointer transition-colors">
                <FaPhoneAlt className="text-lg mr-4 text-gray-400" />
                <span className="text-[15px] font-semibold tracking-wider">0850 222 3 789</span>
              </div>
              <div className="flex items-center text-gray-600 hover:text-[#efc34c] cursor-pointer transition-colors">
                <FaEnvelope className="text-lg mr-4 text-gray-400" />
                <span className="text-[15px] font-medium tracking-wide">info@megaeste.com.tr</span>
              </div>
            </div>

            <div className="w-full border-b border-gray-200 mb-10"></div>

            <div className="space-y-4 mb-10">
              {[
                { icon: <FaInstagram />, name: '/megaeste' },
                { icon: <FaYoutube />, name: '/megaeste' },
                { icon: <FaFacebookF />, name: '/megaeste' },
                { icon: <FaTwitter />, name: '/megaeste' },
                { icon: <FaLinkedinIn />, name: '/megaeste' },
                { icon: <FaTiktok />, name: '/megaeste' }
              ].map((social, i) => (
                <div key={i} className="flex items-center text-gray-600 hover:text-[#efc34c] cursor-pointer transition-colors group">
                  <div className="text-[1.2rem] w-8 flex justify-start mr-1 text-gray-600 group-hover:text-[#efc34c] transition-colors">{social.icon}</div>
                  <span className="text-[14px] font-medium">{social.name}</span>
                </div>
              ))}
            </div>

            <p className="text-[12px] text-gray-500 leading-relaxed font-light pr-4">
              Türkiye&apos;nin plastik ve estetik cerrahi odaklı öncü sağlık kuruluşu Megaeste olarak, &quot;Sağlıklı Güzellik&quot; mottosuyla, yüksek tıbbi standartlarda estetik ve sağlık hizmetleri sunuyoruz.
            </p>
          </div>

          {/* Right Area (Links Grid) */}
          <div className="w-full lg:w-[75%] lg:pl-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 border-t lg:border-t-0 border-gray-200 pt-10 lg:pt-0">
            
            <FooterList 
              title={dict?.hairTransplant?.title?.toUpperCase() || "SAÇ EKİMİ TEDAVİLERİ"} 
              items={dict?.hairTransplant?.items || []} 
            />
            
            <FooterList 
              title={dict?.plasticSurgery?.title?.toUpperCase() || "PLASTİK CERRAHİ"} 
              items={dict?.plasticSurgery?.items || []} 
            />
            
            <FooterList 
              title={dict?.medicalAesthetics?.title?.toUpperCase() || "MEDİKAL ESTETİK"} 
              items={dict?.medicalAesthetics?.items || []} 
            />
            
            <FooterList 
              title={dict?.epilation?.title?.toUpperCase() || "EPİLASYON"} 
              items={dict?.epilation?.items || []} 
            />

          </div>

        </div>
      </div>
    </footer>
  );
}

function FooterList({ title, items }: { title: string, items: string[] }) {
  return (
    <div className="flex flex-col">
      <h3 className="text-gray-700 font-bold tracking-[0.05em] text-[13px] mb-4 2xl:mb-5">{title}</h3>
      {items.length > 0 && (
        <ul className="flex flex-col space-y-2.5">
          {items.map((item, idx) => (
            <li key={idx} className="leading-tight">
              <a href="#" className="text-gray-500 font-light text-[13px] hover:text-[#efc34c] hover:underline transition-all block w-full py-0.5">
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
