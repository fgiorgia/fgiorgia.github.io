// packages/v2/components/seo/SEO.tsx
import React from 'react';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import { getAssetPath } from '@/src/features/common/utils';
import { SEOProps } from '@/src/features/common/types';
import { siteUrl, defaultSEO } from '../seo';

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogImage,
  ogImageAlt,
  noindex = false,
  article,
}) => {
  const pageUrl = canonical || siteUrl;
  const imageUrl =
    ogImage ?
      ogImage.startsWith('http') ?
        ogImage
      : `${siteUrl}${getAssetPath(ogImage)}`
    : `${siteUrl}${getAssetPath('./images/gfanalytics-og.png')}`;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={pageUrl}
        noindex={noindex}
        titleTemplate={defaultSEO.titleTemplate} // Explicitly use the titleTemplate from defaultSEO
        openGraph={{
          url: pageUrl,
          title: title, // This will be used as-is for OpenGraph
          description: description,
          images: [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: ogImageAlt || title || 'Page image',
            },
          ],
          ...(article && {
            type: 'article',
            article: {
              publishedTime: article.publishedTime,
              modifiedTime: article.modifiedTime,
              tags: article.tags,
            },
          }),
        }}
      />
      {article && (
        <ArticleJsonLd
          type="BlogPosting"
          url={pageUrl}
          title={
            title ?
              `${title} | Giorgia Faedda - Data Analyst & BI Developer`
            : defaultSEO.defaultTitle ||
              'Giorgia Faedda - Data Analyst & BI Developer'
          } // Ensure consistent formatting
          images={[imageUrl]}
          datePublished={article.publishedTime}
          dateModified={article.modifiedTime || article.publishedTime}
          authorName="Giorgia Faedda"
          publisherName="Giorgia Faedda"
          publisherLogo={`${siteUrl}/logo.png`}
          description={description || ''}
        />
      )}
    </>
  );
};

export default SEO;
