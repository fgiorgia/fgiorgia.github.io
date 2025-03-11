import { getServerSideSitemap, ISitemapField } from 'next-sitemap';
import { GetServerSideProps } from 'next';
import { getProjects } from '../lib/projects';
import { siteUrl } from '../lib/seo';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const projects = getProjects();
  
  const fields: ISitemapField[] = projects.map((project) => ({
    loc: `${siteUrl}/projects/${project.slug}`,
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.7,
  }));
  
  const sitemapResponse = await getServerSideSitemap(fields, ctx);
  return {
    props: {},
    notFound: false,
    redirect: undefined,
    revalidate: undefined,
  };
};

// Default export to prevent next.js errors
export default function ServerSitemap() {}