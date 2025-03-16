/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      unoptimized: true,
      formats: ['image/avif', 'image/webp'],
    },
    // GitHub Pages
    output: 'export',
    // Set the base path if you're deploying to a repo that's not your username.github.io
    basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio' : '',

    swcMinify: true,
    // Configure headers for better security and performance
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'X-XSS-Protection',
              value: '1; mode=block',
            },
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
          ],
        },
        {
          source: '/fonts/(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
        {
          source: '/images/(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=86400',
            },
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;