// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@swiftpost/elysium'],
  reactStrictMode: true,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
  // GitHub Pages
  output: 'export',
};

export default nextConfig;
