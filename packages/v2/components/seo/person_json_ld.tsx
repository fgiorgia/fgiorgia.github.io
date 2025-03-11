import React from 'react';
import Head from 'next/head';
import { siteUrl } from '@/lib/seo';

const PersonJsonLd: React.FC = () => {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Your Name',
    jobTitle: 'Data Analyst & Business Intelligence Developer',
    url: siteUrl,
    sameAs: [
      'https://github.com/yourusername',
      'https://linkedin.com/in/yourusername',
    ],
    image: `${siteUrl}/images/profile.jpg`,
    description: 'Data Analyst specializing in Excel, Python, SQL, and Business Intelligence solutions.',
    knowsAbout: [
      'Data Analysis',
      'Business Intelligence',
      'Excel',
      'Python',
      'SQL',
      'Tableau',
      'Power BI',
      'Data Visualization'
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Your Current Company'
    }
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </Head>
  );
};

export default PersonJsonLd;