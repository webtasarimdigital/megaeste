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

export const doctors: Doctor[] = [];

export function getDoctorBySlug(slug: string, lang: 'tr' | 'en'): Doctor | undefined {
  return doctors.find(d => d[lang].slug === slug);
}
