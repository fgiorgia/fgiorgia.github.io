/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://gfanalytics.se',
  generateRobotsTxt: true,
  outDir: 'out', // Specify the output directory for static export
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/404', '/construction'],
      },
    ],
    additionalSitemaps: [
      // If you have any additional sitemaps, add them here
      // `${process.env.NEXT_PUBLIC_SITE_URL || 'https://gfanalytics.se'}/project-sitemap.xml`,
    ],
  },
  // Exclude pages you don't want in the sitemap
  exclude: ['/404', '/construction', '/server-sitemap.xml'],
  // Add all project pages dynamically
  transform: async (config, path) => {
    // Customize priority based on path
    let priority = 0.7;

    if (path === '/') {
      priority = 1.0;
    } else if (path.startsWith('/projects/')) {
      priority = 0.8;
    } else if (path === '/about' || path === '/skills' || path === '/contact') {
      priority = 0.9;
    }

    // Return the sitemap entry
    return {
      loc: path, // URL path
      changefreq:
        path === '/' ? 'daily'
        : path.startsWith('/projects/') ? 'weekly'
        : 'monthly',
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};

module.exports = config;
