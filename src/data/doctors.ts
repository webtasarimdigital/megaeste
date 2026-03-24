export interface Doctor {
  id: string;
  image: string;
  tr: {
    name: string;
    slug: string;
    title: string;
    specialty: string;
    bio: string;
    education: string[];
    experience: string[];
    services: string[];
    seoTitle: string;
    seoDescription: string;
  };
  en: {
    name: string;
    slug: string;
    title: string;
    specialty: string;
    bio: string;
    education: string[];
    experience: string[];
    services: string[];
    seoTitle: string;
    seoDescription: string;
  };
}

export const doctors: Doctor[] = [
  {
    id: 'dr-mehmet-yildiz',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600',
    tr: {
      name: 'Dr. Mehmet Yıldız',
      slug: 'dr-mehmet-yildiz',
      title: 'Op. Dr.',
      specialty: 'Plastik ve Rekonstrüktif Cerrahi Uzmanı',
      bio: `Op. Dr. Mehmet Yıldız, plastik ve rekonstrüktif cerrahi alanında uzmanlaşmış deneyimli bir hekimdir. Yüz estetiği, burun estetiği ve saç ekimi konularında geniş deneyime sahiptir.

Hasta memnuniyetini ön planda tutan yaklaşımıyla, her hastasına kişiye özel tedavi planları oluşturur. Modern cerrahi teknikleri ve yenilikçi yaklaşımları ile doğal ve estetik sonuçlar hedefler.

Ulusal ve uluslararası kongrelerde sunumlar yapan Dr. Yıldız, alanındaki güncel gelişmeleri yakından takip etmektedir.`,
      education: [
        'İstanbul Tıp Fakültesi - Tıp Doktorluğu',
        'İstanbul Üniversitesi - Plastik ve Rekonstrüktif Cerrahi Uzmanlığı',
        'Avrupa Plastik Cerrahi Board Sertifikası',
      ],
      experience: [
        '15+ yıl plastik cerrahi deneyimi',
        '5000+ başarılı operasyon',
        'Uluslararası kongre katılımları ve sunumlar',
      ],
      services: ['Burun Estetiği', 'Göz Kapağı Estetiği', 'Meme Estetiği', 'Saç Ekimi'],
      seoTitle: 'Op. Dr. Mehmet Yıldız | Megaeste Plastik Cerrahi',
      seoDescription: 'Op. Dr. Mehmet Yıldız - Plastik ve Rekonstrüktif Cerrahi Uzmanı. Burun estetiği, saç ekimi ve yüz estetiği.',
    },
    en: {
      name: 'Dr. Mehmet Yildiz',
      slug: 'dr-mehmet-yildiz',
      title: 'Op. Dr.',
      specialty: 'Plastic and Reconstructive Surgery Specialist',
      bio: `Op. Dr. Mehmet Yildiz is an experienced physician specialized in plastic and reconstructive surgery. He has extensive experience in facial aesthetics, rhinoplasty and hair transplantation.

With an approach that prioritizes patient satisfaction, he creates personalized treatment plans for each patient. He targets natural and aesthetic results with modern surgical techniques and innovative approaches.

Dr. Yildiz, who presents at national and international congresses, closely follows current developments in his field.`,
      education: [
        'Istanbul Medical Faculty - Medical Doctorate',
        'Istanbul University - Plastic and Reconstructive Surgery Specialization',
        'European Board of Plastic Surgery Certificate',
      ],
      experience: [
        '15+ years of plastic surgery experience',
        '5000+ successful operations',
        'International congress participations and presentations',
      ],
      services: ['Rhinoplasty', 'Blepharoplasty', 'Breast Aesthetics', 'Hair Transplant'],
      seoTitle: 'Op. Dr. Mehmet Yildiz | Megaeste Plastic Surgery',
      seoDescription: 'Op. Dr. Mehmet Yildiz - Plastic and Reconstructive Surgery Specialist. Rhinoplasty, hair transplant and facial aesthetics.',
    },
  },
  {
    id: 'dr-ayse-kara',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600',
    tr: {
      name: 'Dr. Ayşe Kara',
      slug: 'dr-ayse-kara',
      title: 'Uzm. Dr.',
      specialty: 'Dermatoloji ve Medikal Estetik Uzmanı',
      bio: `Uzm. Dr. Ayşe Kara, dermatoloji ve medikal estetik alanında uzmanlaşmış bir hekimdir. Cilt sağlığı, anti-aging tedavileri ve lazer uygulamaları konularında derin bilgi ve deneyime sahiptir.

Hastalarına kapsamlı cilt analizi yaparak kişiye özel bakım ve tedavi protokolleri oluşturur. Medikal estetik alanındaki en son teknolojileri takip ederek hastalarına en güncel tedavi seçeneklerini sunar.

Düzenli olarak ulusal ve uluslararası eğitim programlarına katılarak bilgi ve becerilerini güncel tutmaktadır.`,
      education: [
        'Ankara Tıp Fakültesi - Tıp Doktorluğu',
        'Hacettepe Üniversitesi - Dermatoloji Uzmanlığı',
        'Medikal Estetik Sertifika Programı',
      ],
      experience: [
        '12+ yıl dermatoloji deneyimi',
        '10.000+ medikal estetik uygulama',
        'Lazer teknolojileri eğitim sertifikaları',
      ],
      services: ['Medikal Cilt Bakımı', 'Yüz Mezoterapi', 'Lazer Epilasyon', 'Saç Mezoterapisi'],
      seoTitle: 'Uzm. Dr. Ayşe Kara | Megaeste Dermatoloji',
      seoDescription: 'Uzm. Dr. Ayşe Kara - Dermatoloji ve Medikal Estetik Uzmanı. Medikal cilt bakımı, mezoterapi ve lazer uygulamaları.',
    },
    en: {
      name: 'Dr. Ayse Kara',
      slug: 'dr-ayse-kara',
      title: 'Spec. Dr.',
      specialty: 'Dermatology and Medical Aesthetics Specialist',
      bio: `Spec. Dr. Ayse Kara is a physician specialized in dermatology and medical aesthetics. She has deep knowledge and experience in skin health, anti-aging treatments and laser applications.

She creates personalized care and treatment protocols for her patients by performing comprehensive skin analysis. She offers the most up-to-date treatment options by following the latest technologies in medical aesthetics.

She keeps her knowledge and skills current by regularly participating in national and international training programs.`,
      education: [
        'Ankara Medical Faculty - Medical Doctorate',
        'Hacettepe University - Dermatology Specialization',
        'Medical Aesthetics Certificate Program',
      ],
      experience: [
        '12+ years of dermatology experience',
        '10,000+ medical aesthetic applications',
        'Laser technology training certificates',
      ],
      services: ['Medical Skin Care', 'Facial Mesotherapy', 'Laser Hair Removal', 'Hair Mesotherapy'],
      seoTitle: 'Spec. Dr. Ayse Kara | Megaeste Dermatology',
      seoDescription: 'Spec. Dr. Ayse Kara - Dermatology and Medical Aesthetics Specialist. Medical skin care, mesotherapy and laser.',
    },
  },
  {
    id: 'dr-ali-demir',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600',
    tr: {
      name: 'Dr. Ali Demir',
      slug: 'dr-ali-demir',
      title: 'Op. Dr.',
      specialty: 'Saç Ekimi ve Restorasyon Uzmanı',
      bio: `Op. Dr. Ali Demir, saç ekimi ve saç restorasyon tedavileri konusunda uzmanlaşmış bir hekimdir. DHI ve Safir FUE teknikleri konusunda ileri düzey eğitimlere ve geniş deneyime sahiptir.

Her hasta için detaylı saç analizi yaparak en uygun tedavi yöntemini belirler. Doğal görünümlü saç çizgisi tasarımı ve yüksek greft sağkalım oranları ile tanınmaktadır.

Saç ekimi alanında sürekli eğitim ve araştırma faaliyetleri yürütmektedir.`,
      education: [
        'Cerrahpaşa Tıp Fakültesi - Tıp Doktorluğu',
        'Saç Restorasyon Cerrahisi İleri Eğitim',
        'DHI ve Safir FUE Sertifika Programları',
      ],
      experience: [
        '10+ yıl saç ekimi deneyimi',
        '8000+ başarılı saç ekimi operasyonu',
        'Yüksek greft sağkalım oranları',
      ],
      services: ['DHI Saç Ekimi', 'Safir Saç Ekimi', 'Saç Mezoterapisi'],
      seoTitle: 'Op. Dr. Ali Demir | Megaeste Saç Ekimi',
      seoDescription: 'Op. Dr. Ali Demir - Saç Ekimi ve Restorasyon Uzmanı. DHI ve Safir FUE saç ekimi.',
    },
    en: {
      name: 'Dr. Ali Demir',
      slug: 'dr-ali-demir',
      title: 'Op. Dr.',
      specialty: 'Hair Transplant and Restoration Specialist',
      bio: `Op. Dr. Ali Demir is a physician specialized in hair transplant and hair restoration treatments. He has advanced training and extensive experience in DHI and Sapphire FUE techniques.

He determines the most suitable treatment method for each patient by performing detailed hair analysis. He is known for natural-looking hairline design and high graft survival rates.

He conducts continuous education and research activities in the field of hair transplantation.`,
      education: [
        'Cerrahpasa Medical Faculty - Medical Doctorate',
        'Hair Restoration Surgery Advanced Training',
        'DHI and Sapphire FUE Certificate Programs',
      ],
      experience: [
        '10+ years of hair transplant experience',
        '8000+ successful hair transplant operations',
        'High graft survival rates',
      ],
      services: ['DHI Hair Transplant', 'Sapphire Hair Transplant', 'Hair Mesotherapy'],
      seoTitle: 'Op. Dr. Ali Demir | Megaeste Hair Transplant',
      seoDescription: 'Op. Dr. Ali Demir - Hair Transplant and Restoration Specialist. DHI and Sapphire FUE hair transplant.',
    },
  },
];

export function getDoctorBySlug(slug: string, lang: 'tr' | 'en'): Doctor | undefined {
  return doctors.find(d => d[lang].slug === slug);
}
