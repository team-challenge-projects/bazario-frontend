import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['picsum.photos'],
  },
  crossOrigin: 'anonymous',
};

export default nextConfig;
