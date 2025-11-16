import React from 'react';
import BaseLayoutTemplate from '@/core/layout/templates/BaseLayoutTemplate';
import HeroBanner from '@/core/ui/components/HeroBanner';
import Skills from '@/features/skills/components/Skills';
import ProjectsGrid from '@/features/projects/components/ProjectsGrid/ProjectsGrid';
import ContactSection from '@/features/contact/components/ContactSection';
import { getProjects } from '@/features/projects/projectUtils';

const Home: React.FC = () => {
  const featuredProjects = getProjects().filter((project) => project.featured);
  return (
    <BaseLayoutTemplate>
      {/* TODO: SEO doesn't work in AppRouter, replace as appropriate */}
      <HeroBanner />
      <Skills />
      <ProjectsGrid projects={featuredProjects} />
      <ContactSection />
    </BaseLayoutTemplate>
  );
};

export default Home;
