'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FaCalendarAlt, FaInstagram, FaWhatsapp, FaTimes, FaUser, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function FloatingActionButtons({ lang = 'tr' }: { lang?: string }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setIsFormOpen(false);
      }
    }
    if (isFormOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFormOpen]);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      formType: 'Yüzen Buton Hızlı Randevu Formu',
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email') || '',
      department: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSuccess(true);
        setTimeout(() => {
            setIsFormOpen(false);
            setSuccess(false);
        }, 3000);
        (e.target as HTMLFormElement).reset();
      } else {
        const err = await res.json();
        setError(err.error || 'Bir hata oluştu.');
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Bir hata oluştu.');
    } finally {
      setLoading(false);
    }
  };

  const isTr = lang === 'tr';

  return (
    // Hidden on mobile (hidden md:flex), stick to bottom right
    <div className="fixed right-6 bottom-8 flex items-end justify-end z-[60] hidden md:flex">
      
      {/* Animated Popup Form (Left side of the buttons, aligned to bottom) */}
      <div 
        ref={formRef}
        className={`absolute right-[70px] bottom-0 bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.15)] border border-gray-100 w-[300px] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] origin-bottom-right
          ${isFormOpen ? 'opacity-100 scale-100 translate-x-0 pointer-events-auto' : 'opacity-0 scale-95 translate-x-8 pointer-events-none'}`}
      >
        <div className="bg-[#1e3a5f] p-4 flex justify-between items-center text-white">
          <h4 className="font-bold text-[15px] tracking-wide flex items-center gap-2">
            <FaCalendarAlt className="text-[#cca66b]" />
            {isTr ? 'Hızlı Randevu' : 'Quick Appointment'}
          </h4>
          <button 
            onClick={() => setIsFormOpen(false)}
            className="text-white/60 hover:text-white transition-colors p-1"
          >
            <FaTimes size={16} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-4">
          <p className="text-[13px] text-gray-500 mb-2 leading-relaxed font-medium">
            {isTr 
              ? 'Lütfen bilgilerinizi bırakın, uzman ekibimiz sizi en kısa sürede arasın.' 
              : 'Please leave your details and our expert team will call you shortly.'}
          </p>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaUser className="text-gray-400 text-xs" />
            </div>
            <input 
              type="text" 
              name="name"
              placeholder={isTr ? "Adınız Soyadınız" : "Full Name"}
              className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-[13.5px] outline-none focus:border-[#427bdf] focus:bg-white transition-all shadow-sm text-gray-800"
              required
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaPhoneAlt className="text-gray-400 text-xs" />
            </div>
            <input 
              type="tel" 
              name="phone"
              placeholder={isTr ? "Telefon Numaranız" : "Phone Number"}
              className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-[13.5px] outline-none focus:border-[#427bdf] focus:bg-white transition-all shadow-sm text-gray-800"
              required
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaEnvelope className="text-gray-400 text-xs" />
            </div>
            <input 
              type="email" 
              name="email"
              placeholder={isTr ? "E-posta Adresiniz" : "Email Address"}
              className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-[13.5px] outline-none focus:border-[#427bdf] focus:bg-white transition-all shadow-sm text-gray-800"
            />
          </div>

          <div className="relative">
            <select 
              name="subject"
              required
              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-[13.5px] outline-none focus:border-[#427bdf] focus:bg-white transition-all shadow-sm text-gray-800 cursor-pointer"
              defaultValue=""
            >
              <option value="" disabled>{isTr ? "Konu Seçiniz" : "Select Subject"}</option>
              <option value="Saç Ekimi">{isTr ? "Saç Ekimi" : "Hair Transplant"}</option>
              <option value="Plastik Cerrahi">{isTr ? "Plastik Cerrahi" : "Plastic Surgery"}</option>
              <option value="Medikal Estetik">{isTr ? "Medikal Estetik" : "Medical Aesthetics"}</option>
              <option value="Fiyat Bilgisi">{isTr ? "Fiyat Bilgisi" : "Price Info"}</option>
              <option value="Diğer">{isTr ? "Diğer" : "Other"}</option>
            </select>
          </div>

          <div className="relative">
            <textarea 
              name="message"
              required
              placeholder={isTr ? "Mesajınız / Notunuz" : "Your Message"}
              rows={2}
              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-[13.5px] outline-none focus:border-[#427bdf] focus:bg-white transition-all shadow-sm text-gray-800 resize-none"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={loading || success}
            className="w-full mt-2 bg-[#cca66b] text-white font-bold py-3 rounded-lg text-[14px] hover:bg-[#b58f53] hover:shadow-lg transition-all active:scale-[0.98] disabled:bg-gray-400 disabled:shadow-none disabled:active:scale-100"
          >
            {loading ? (isTr ? 'GÖNDERİLİYOR...' : 'SENDING...') : (success ? (isTr ? 'BAŞARILI' : 'SUCCESS') : (isTr ? 'GÖNDER' : 'SEND'))}
          </button>
          
          {success && <p className="text-green-600 font-medium text-xs text-center mt-1">{isTr ? 'Talebiniz alındı, teşekkürler.' : 'Request received, thank you.'}</p>}
          {error && <p className="text-red-600 font-medium text-xs text-center mt-1">{error}</p>}
        </form>
      </div>

      {/* Actual Floating Buttons Column */}
      <div className="flex flex-col gap-4 relative z-10">
        
        {/* Appointment Button (Black) - Overridden to open popup */}
        <button 
          onClick={() => setIsFormOpen(!isFormOpen)}
          title={isTr ? 'Randevu Al' : 'Book Appointment'}
          className={`w-[52px] h-[52px] bg-black text-white hover:scale-110 transition-all shadow-xl flex items-center justify-center rounded-full border-2 border-white/10 ${isFormOpen ? 'rotate-12 scale-110 !bg-[#1e3a5f]' : ''}`}
        >
          <FaCalendarAlt size={22} />
        </button>

        {/* Instagram Button (Gradient) */}
        <a 
          href="https://www.instagram.com/mega.estetik" 
          target="_blank" 
          rel="noopener noreferrer"
          title="Instagram"
          className="w-[52px] h-[52px] text-white hover:scale-110 transition-transform shadow-xl flex items-center justify-center rounded-full relative border-2 border-white/10"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] pointer-events-none"></div>
          <FaInstagram size={28} className="relative z-10" />
        </a>

        {/* WhatsApp Button (Green) */}
        <a 
          href={`https://wa.me/905334814098?text=${lang === 'en' ? 'Hello,%20I%20would%20like%20to%20get%20information' : 'Merhaba,%20bilgi%20almak%20istiyorum'}`}
          target="_blank" 
          rel="noopener noreferrer"
          title="WhatsApp"
          className="w-[52px] h-[52px] bg-[#25D366] text-white hover:scale-110 transition-transform shadow-xl flex items-center justify-center rounded-full border-2 border-white/10"
        >
          <FaWhatsapp size={28} />
        </a>

        {/* Location Button */}
        <a 
          href="https://maps.app.goo.gl/j5kTpopsUyhxsjqd9"
          target="_blank" 
          rel="noopener noreferrer"
          title={isTr ? 'Konum' : 'Location'}
          className="w-[52px] h-[52px] bg-[#4285F4] text-white hover:scale-110 transition-transform shadow-xl flex items-center justify-center rounded-full border-2 border-white/10"
        >
          <FaMapMarkerAlt size={24} />
        </a>

      </div>
    </div>
  );
}
