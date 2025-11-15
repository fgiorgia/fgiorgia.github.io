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

  // --- Start quick dev builds ---
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  webpack(webpackConfig) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const updatedConfig = {
      ...webpackConfig,
      optimization: {
        minimize: false,
      },
    };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return updatedConfig;
  },
  // --- End quick dev builds ---
};

export default nextConfig;
