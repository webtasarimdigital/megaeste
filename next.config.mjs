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
      }
    ];
  },
};

export default nextConfig;
