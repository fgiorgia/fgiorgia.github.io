import React from 'react';
import { GetStaticProps } from 'next';
import Layout from '../components/layout/layout';
import SEO from '../components/seo/SEO';
import Hero from '../components/sections/hero';
import Skills from '../components/sections/skills';
import ProjectsGrid from '../components/sections/projects_grid';
import ContactSection from '../components/sections/contact_section';
import { getProjects } from '../lib/projects';
import { getAssetPath } from '@/lib/utils';
import { Project } from '@/types';

interface HomeProps {
  featuredProjects: Project[];
}

const Home: React.FC<HomeProps> = ({ featuredProjects }) => {
  return (
    <Layout>
      <SEO
        description="Data Analyst specializing in Excel, Python, SQL, and Business Intelligence solutions. View my portfolio showcasing data analysis and visualization projects."
        ogImage={getAssetPath('./images/gfanalytics-og.png')}
      />
      <Hero />
      <Skills />
      <ProjectsGrid projects={featuredProjects} />
      <ContactSection />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allProjects = getProjects();
  const featuredProjects = allProjects.filter((project) => project.featured);

  return {
    props: {
      featuredProjects,
    },
  };
};

export default Home;
