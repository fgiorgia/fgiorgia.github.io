import React from 'react';
import { GetStaticProps } from 'next';
import BaseLayout from '@/features/layout/components/BaseLayout';
import SEO from '@/features/seo/components/SEO';
import HeroBanner from '@/features/common/components/HeroBanner';
import Skills from '@/features/skills/components/Skills';
import ProjectsGrid from '@/features/projects/components/ProjectsGrid/ProjectsGrid';
import ContactSection from '@/features/contact/components/ContactSection';
import { getProjects } from '@/features/projects/projectUtils';
import { getAssetPath } from '@/features/common/utils';
import { Project } from '@/features/common/types';

interface HomeProps {
  featuredProjects: Project[];
}

const Home: React.FC<HomeProps> = ({ featuredProjects }) => {
  return (
    <BaseLayout>
      <SEO
        description="Data Analyst specializing in Excel, Python, SQL, and Business Intelligence solutions. View my portfolio showcasing data analysis and visualization projects."
        ogImage={getAssetPath('./images/gfanalytics-og.png')}
      />
      <HeroBanner />
      <Skills />
      <ProjectsGrid projects={featuredProjects} />
      <ContactSection />
    </BaseLayout>
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
