import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://megaeste.com';

  const languages = ['tr', 'en'];
  const routes = [
    '',
    '/kurumsal',
    '/hizmetler',
    '/hekimlerimiz',
    '/blog',
    '/iletisim',
  ];

  const sitemapData: MetadataRoute.Sitemap = [];

  languages.forEach((lang) => {
    routes.forEach((route) => {
      sitemapData.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'monthly' : 'weekly',
        priority: route === '' ? 1 : 0.8,
      });
    });
  });

  return sitemapData;
}
