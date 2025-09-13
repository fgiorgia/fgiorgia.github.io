// import React from 'react';
// import Link from 'next/link';
// import Head from 'next/head';
// import { BreadcrumbsProps } from '@/types';
// import { siteUrl } from '@/lib/seo';

// const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
//   // Generate JSON-LD for breadcrumbs
//   const breadcrumbsJsonLd = {
//     '@context': 'https://schema.org',
//     '@type': 'BreadcrumbList',
//     'itemListElement': items.map((item, index) => ({
//       '@type': 'ListItem',
//       'position': index + 1,
//       'item': {
//         '@id': `${siteUrl}${item.href}`,
//         'name': item.label
//       }
//     }))
//   };

//   return (
//     <>
//       <Head>
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
//         />
//       </Head>
//       <nav aria-label="Breadcrumb" className="py-3">
//         <ol className="flex flex-wrap items-center space-x-2 text-sm">
//           {items.map((item, index) => (
//             <li key={item.href} className="flex items-center">
//               {index > 0 && (
//                 <span className="mx-2 text-gray-400" aria-hidden="true">
//                   /
//                 </span>
//               )}
//               {item.isCurrent ? (
//                 <span className="text-indigo-600 font-medium" aria-current="page">
//                   {item.label}
//                 </span>
//               ) : (
//                 <Link href={item.href} className="text-gray-500 hover:text-indigo-600">
//                   {item.label}
//                 </Link>
//               )}
//             </li>
//           ))}
//         </ol>
//       </nav>
//     </>
//   );
// };

// export default Breadcrumbs;

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { BreadcrumbsProps } from '@/types';

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  // Site URL for schema
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gfanalytics.se';

  // Generate JSON-LD for breadcrumbs
  const breadcrumbsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@id': `${siteUrl}${item.href}`,
        name: item.label,
      },
    })),
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbsJsonLd),
          }}
        />
      </Head>
      <nav aria-label="Breadcrumb" className="py-3">
        <ol className="flex flex-wrap items-center space-x-2 text-sm">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-gray-400" aria-hidden="true">
                  /
                </span>
              )}
              {item.isCurrent ?
                <span
                  className="text-indigo-600 font-medium"
                  aria-current="page"
                >
                  {item.label}
                </span>
              : <Link href={item.href} legacyBehavior>
                  <a className="text-gray-500 hover:text-indigo-600">
                    {item.label}
                  </a>
                </Link>
              }
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
