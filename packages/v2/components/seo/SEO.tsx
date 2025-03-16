import React from "react";
import { NextSeo, ArticleJsonLd } from "next-seo";
import { getAssetPath } from '@/lib/utils';
import { SEOProps } from "@/types";
import { siteUrl } from "@/lib/seo";

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
  const imageUrl = ogImage
    ? ogImage.startsWith("http")
      ? ogImage
      : `${siteUrl}${getAssetPath(ogImage)}`
    : `${siteUrl}${getAssetPath("/images/og-image.png")}`;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={pageUrl}
        noindex={noindex}
        openGraph={{
          url: pageUrl,
          title: title,
          description: description,
          images: [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: ogImageAlt || title || "Page image",
            },
          ],
          ...(article && {
            type: "article",
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
          title={title || ""}
          images={[imageUrl]}
          datePublished={article.publishedTime}
          dateModified={article.modifiedTime || article.publishedTime}
          authorName="Your Name"
          publisherName="Your Name"
          publisherLogo={`${siteUrl}/logo.png`}
          description={description || ""}
        />
      )}
    </>
  );
};

export default SEO;
