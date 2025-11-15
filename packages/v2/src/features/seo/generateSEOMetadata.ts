import { getAssetPath } from '@/core/common/utils';
import type { Metadata } from 'next';
import { siteUrl, defaultSEO } from './seoData';

export interface SeoInputMetadata {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogImageAlt?: string;
  noindex?: boolean;
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    tags?: string[];
  };
}

export const generateSEOMetadata = ({
  title,
  description,
  canonical,
  ogImage,
  ogImageAlt,
  noindex,
  article,
}: SeoInputMetadata): Metadata => {
  const pageUrl = canonical ?? siteUrl;
  const imageUrl =
    ogImage ?
      ogImage.startsWith('http') ?
        ogImage
      : `${siteUrl}${getAssetPath(ogImage)}`
    : `${siteUrl}${getAssetPath('./images/gfanalytics-og.png')}`;

  return {
    title: {
      default: defaultSEO.title ?? '',
      template: defaultSEO.titleTemplate ?? '',
    },
    description,
    robots: {
      index: !noindex,
    },
    icons: {
      icon: imageUrl,
    },
    openGraph: {
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
    },
  };
};
