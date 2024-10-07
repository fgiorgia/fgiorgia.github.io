// @ts-check

import path from 'path';
const __dirname = import.meta.dirname;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  sassOptions: {
    // Allow Sass absolute import
    includePaths: [path.join(__dirname, 'src/')],
  },

  webpack: (config, { dev, isServer }) => {
    // Add support for video imports
    // From: https://stackoverflow.com/a/73729543
    const prefix = config.assetPrefix ?? config.basePath ?? '';
    config.module.rules.push({
      test: /\.mp4$/,
      use: [{
        loader: 'file-loader',
        options: {
          publicPath: `${prefix}/_next/static/media/`,
          outputPath: `${dev ? '' : '../'}${isServer ? '../' : ''}static/media/`,
          name: '[name].[hash:8].[ext]',
        },
      }],
    });

    return config;
  },
};

export default nextConfig;
