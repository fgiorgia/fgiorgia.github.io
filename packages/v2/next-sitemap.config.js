/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourportfoliosite.com',
    generateRobotsTxt: true,
    robotsTxtOptions: {
      additionalSitemaps: [
        `${process.env.NEXT_PUBLIC_SITE_URL || 'https://yourportfoliosite.com'}/server-sitemap.xml`,
      ],
    },
    exclude: ['/404'],
  };