import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn1.sportngin.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn2.sportngin.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn3.sportngin.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'imagedelivery.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
