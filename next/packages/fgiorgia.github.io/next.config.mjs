import path from 'path';
const __dirname = import.meta.dirname;

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    // Allow Sass absolute import
    includePaths: [path.join(__dirname, 'src/')],
  },
};

export default nextConfig;
