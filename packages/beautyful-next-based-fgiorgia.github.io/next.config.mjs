import nextMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {};

const nextConfigWithMDX = nextMDX()(nextConfig)

export default nextConfigWithMDX;
