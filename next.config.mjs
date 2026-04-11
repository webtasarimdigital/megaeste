/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/en/services/:path*',
        destination: '/en/kategori/:path*',
      },
      {
        source: '/en/treatments/:path*',
        destination: '/en/hizmetler/:path*',
      },
      {
        source: '/en/doctors',
        destination: '/en/hekimlerimiz',
      },
      {
        source: '/en/contact',
        destination: '/en/iletisim',
      },
      {
        source: '/en/corporate/about-us',
        destination: '/en/kurumsal/hakkimizda',
      },
      {
        source: '/en/corporate/feedback',
        destination: '/en/kurumsal/gorus-ve-onerileriniz',
      }
    ];
  },
};

export default nextConfig;
