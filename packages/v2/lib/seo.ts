// packages/v2/lib/seo.ts
import { DefaultSeoProps } from 'next-seo';
import { getAssetPath } from './utils';

// Base URL for your site (used for canonical URLs and OG images)
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://gfanalytics.se';

// Default SEO configuration
export const defaultSEO: DefaultSeoProps = {
  titleTemplate: '%s | Giorgia Faedda - Data Analyst & BI Developer',
  defaultTitle:
    'Giorgia Faedda - Data Analyst & Business Intelligence Developer',
  description:
    'Data Analyst specializing in Excel, Python, SQL, and Business Intelligence solutions. Turning complex data into actionable insights.',
  canonical: siteUrl,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Giorgia Faedda - Portfolio',
    title: 'Giorgia Faedda - Data Analyst & Business Intelligence Developer',
    description:
      'Data Analyst specializing in Excel, Python, SQL, and Business Intelligence solutions. Turning complex data into actionable insights.',
    images: [
      {
        url: `${siteUrl}${getAssetPath('./images/gfanalytics-og.png')}`,
        width: 1200,
        height: 630,
        alt: 'Giorgia Faedda - Data Analyst & Business Intelligence Developer',
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content:
        'data analyst, business intelligence, excel, python, sql, power bi, tableau, data visualization',
    },
    {
      name: 'author',
      content: 'Giorgia Faedda',
    },
  ],
};
