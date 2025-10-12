'use client';

import React from 'react';
import BaseLayoutTemplate from '@/core/layout/templates/BaseLayoutTemplate';
import SEO from '@/features/seo/components/SEO';
import HeroBanner from '@/core/ui/components/HeroBanner';
import Skills from '@/features/skills/components/Skills';
import ProjectsGrid from '@/features/projects/components/ProjectsGrid/ProjectsGrid';
import ContactSection from '@/features/contact/components/ContactSection';
import { getProjects } from '@/features/projects/projectUtils';
import { getAssetPath } from '@/core/common/utils';

const Home: React.FC = () => {
  const featuredProjects = getProjects().filter((project) => project.featured);
  return (
    <BaseLayoutTemplate>
      <SEO
        description="Data Analyst specializing in Excel, Python, SQL, and Business Intelligence solutions. View my portfolio showcasing data analysis and visualization projects."
        ogImage={getAssetPath('./images/gfanalytics-og.png')}
      />
      <HeroBanner />
      <Skills />
      <ProjectsGrid projects={featuredProjects} />
      <ContactSection />
    </BaseLayoutTemplate>
  );
};

export default Home;
