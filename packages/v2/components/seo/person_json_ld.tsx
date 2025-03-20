// packages/v2/components/seo/person_json_ld.tsx
import React from 'react'
import Head from 'next/head'
import { siteUrl } from '@/lib/seo'
import { getAssetPath } from '@/lib/utils'

const PersonJsonLd: React.FC = () => {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Giorgia Faedda',
    jobTitle: 'Data Analyst & Business Intelligence Developer',
    url: siteUrl,
    sameAs: [
      'https://github.com/fgiorgia',
      'https://www.linkedin.com/in/fgiorgia/',
    ],
    image: `${siteUrl}${getAssetPath('/images/giorgia_faedda.webp')}`,
    description:
      'Data Analyst specializing in Excel, Python, SQL, and Business Intelligence solutions.',
    knowsAbout: [
      'Data Analysis',
      'Business Intelligence',
      'Excel',
      'Python',
      'SQL',
      'Tableau',
      'Power BI',
      'Data Visualization',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'GF Analytics',
    },
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </Head>
  )
}

export default PersonJsonLd
