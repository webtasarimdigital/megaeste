/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
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
