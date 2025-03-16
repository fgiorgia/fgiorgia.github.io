import { DefaultSeoProps } from 'next-seo';
import { getAssetPath } from './utils';


// Base URL for your site (used for canonical URLs and OG images)
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourportfoliosite.com';

// Default SEO configuration
export const defaultSEO: DefaultSeoProps = {
  titleTemplate: '%s | Your Name - Data Analyst & BI Developer',
  defaultTitle: 'Your Name - Data Analyst & Business Intelligence Developer',
  description: 'Data Analyst specializing in Excel, Python, SQL, and Business Intelligence solutions. Turning complex data into actionable insights.',
  canonical: siteUrl,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Your Name - Portfolio',
    images: [
      {
        url: `${siteUrl}${getAssetPath("/images/og-image.png")}`,
        width: 1200,
        height: 630,
        alt: 'Your Name - Data Analyst & Business Intelligence Developer',
      },
    ],
  },
  twitter: {
    handle: '@yourhandle',
    site: '@yourhandle',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'data analyst, business intelligence, excel, python, sql, power bi, tableau, data visualization',
    },
    {
      name: 'author',
      content: 'Your Name',
    },
  ],
};