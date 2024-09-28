import path from 'path';
const __dirname = import.meta.dirname;
const isDevelopment = process.env.NODE_ENV === 'development';

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    // Allow Sass absolute import
    includePaths: [path.join(__dirname, 'src/')],
  },

  webpack: (config, { isServer }) => {
    const prefix = config.assetPrefix ?? config.basePath ?? '';
    config.module.rules.push({
      test: /\.mp4$/,
      use: [{
        loader: 'file-loader',
        options: {
          publicPath: `${prefix}/_next/static/media/`,
          outputPath: `${isDevelopment ? '' : '../'}${isServer ? '../' : ''}static/media/`,
          name: '[name].[hash:8].[ext]',
        },
      }],
    });

    return config;
  },
};

export default nextConfig;
