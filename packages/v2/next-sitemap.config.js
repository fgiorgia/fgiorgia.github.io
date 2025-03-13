/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourportfoliosite.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  // Additional pages to include in sitemap
  additionalPaths: async (config) => {
    return [
      { loc: '/privacy', lastmod: new Date().toISOString() },
      { loc: '/terms', lastmod: new Date().toISOString() },
    ];
  },
  // Static pages that don't need to be in sitemap (404, etc.)
  exclude: ['/404'],
};

module.exports = config;