import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaInstagram, FaYoutube, FaFacebookF, FaTwitter, FaLinkedinIn, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full text-gray-700 font-sans mt-20">
      {/* Top Contact Bar */}
      <div className="w-full border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border-x-0 md:border-x border-gray-200">
          
          <div className="flex items-center justify-center py-10 px-4 group cursor-pointer hover:bg-gray-50 transition-colors">
            <FaPhoneAlt className="text-3xl text-gray-300 mr-6 group-hover:text-[#C6A87E] transition-colors" />
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
            <div className="flex flex-col mb-10">
              <div className="text-[2.5rem] font-black tracking-tighter text-gray-900 leading-none">megaeste</div>
              <div className="text-[9px] font-bold tracking-[0.2em] text-[#4B5357] mt-1.5 uppercase">Estetik ve Plastik Cerrahi</div>
            </div>

            <div className="space-y-5 mb-10">
              <div className="flex items-center text-gray-600 hover:text-[#C6A87E] cursor-pointer transition-colors">
                <FaPhoneAlt className="text-lg mr-4 text-gray-400" />
                <span className="text-[15px] font-semibold tracking-wider">0850 222 3 789</span>
              </div>
              <div className="flex items-center text-gray-600 hover:text-[#C6A87E] cursor-pointer transition-colors">
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
                <div key={i} className="flex items-center text-gray-600 hover:text-[#C6A87E] cursor-pointer transition-colors group">
                  <div className="text-[1.2rem] w-8 flex justify-start mr-1 text-gray-600 group-hover:text-[#C6A87E] transition-colors">{social.icon}</div>
                  <span className="text-[14px] font-medium">{social.name}</span>
                </div>
              ))}
            </div>

            <p className="text-[12px] text-gray-500 leading-relaxed font-light pr-4">
              Türkiye'nin plastik ve estetik cerrahi odaklı öncü sağlık kuruluşu Megaeste olarak, "Sağlıklı Güzellik" mottosuyla, yüksek tıbbi standartlarda estetik ve sağlık hizmetleri sunuyoruz.
            </p>
          </div>

          {/* Right Area (Links Grid) */}
          <div className="w-full lg:w-[75%] lg:pl-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10 xl:gap-y-12">
            
            {/* Column 1 */}
            <div className="flex flex-col space-y-7 xl:space-y-10">
              <FooterList 
                title="SAÇ EKİMİ" 
                items={["DHI Saç Ekimi", "Safir Saç Ekimi", "Unique Angle Saç Ekimi", "Kök Hücreli Saç Ekimi", "Tıraşsız Saç Ekimi", "Kaş Ekimi", "Sakal/Bıyık Ekimi"]} 
              />
              <FooterList 
                title="SAÇ TEDAVİLERİ" 
                items={["Saç Lazeri", "ACell+ PRP", "Eksozom", "Kök Hücre"]} 
              />
              <FooterList 
                title="MEME ESTETİĞİ" 
                items={["Meme Büyütme", "Meme Küçültme", "Meme Asimetrisi Düzeltme", "Meme Onarımı", "Jinekomasti"]} 
              />
              <FooterList title="BURUN ESTETİĞİ" items={[]} />
              <FooterList title="YÜZ ESTETİĞİ" items={[]} />
            </div>

            {/* Column 2 */}
            <div className="flex flex-col space-y-7 xl:space-y-10">
              <FooterList 
                title="DOLGU VE BOTOKS" 
                items={["Botoks", "Dudak Dolgusu", "Göz Altı Işık Dolgusu", "Yüz Işık Dolgusu"]} 
              />
              <FooterList 
                title="AMELİYATSIZ YÜZ GERME" 
                items={["Ultherapy", "Altın İğne", "Yüz Mezoterapi", "6D Star Askısı"]} 
              />
              <FooterList 
                title="LAZER TEDAVİLERİ" 
                items={["Fraksiyonel Lazer", "Lazer Epilasyon", "Lazer ile Dudak Dolgusu"]} 
              />
              <FooterList 
                title="CİLT GENÇLEŞTİRME" 
                items={["Somon DNA", "Karbon Peeling", "Kimyasal Peeling", "PRP", "Medikal Cilt Bakımı", "4D Cilt Gençleştirme", "Scarlet"]} 
              />
            </div>

            {/* Column 3 */}
            <div className="flex flex-col space-y-7 xl:space-y-10">
              <FooterList 
                title="GÜLÜŞ ESTETİĞİ" 
                items={["Hollywood Smile", "Pembe Estetik (Diş Estetiği)", "Diş Beyazlatma"]} 
              />
              <FooterList title="DİŞ İMPLANTI" items={[]} />
              <FooterList 
                title="DİŞ KAPLAMA" 
                items={["Zirkonyum", "Tam seramik", "Lamina Porselen", "Diş İmplantı"]} 
              />
              <FooterList title="RESTORATİF TEDAVİLER" items={[]} />
              <FooterList title="ORTODONTİK TEDAVİLER" items={[]} />
              <FooterList title="KANAL TEDAVİSİ" items={[]} />
              <FooterList title="CERRAHİ TEDAVİLER" items={[]} />
              <FooterList 
                title="SAĞLIKLI BESLENME VE ZAYIFLAMA UYGULAMALARI" 
                items={["Sağlıklı Beslenme ve Diyet", "Onda Soğuk Dalga Terapisi", "Schwarzy", "LPG (Bölgesel Zayıflama)", "Andülasyon Terapisi"]} 
              />
            </div>

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
              <a href="#" className="text-gray-500 font-light text-[13px] hover:text-[#C6A87E] hover:underline transition-all block w-full py-0.5">
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
