import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['picsum.photos'],
  },
  async redirects() {
    return [
      {
        source: '/sellers',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
