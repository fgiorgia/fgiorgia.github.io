import React from 'react';
import ProjectCard from '../ui/project_card';
import Button from '../ui/button';
import { ProjectsGridProps } from '@/types';

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return (
      <div className="py-12 md:py-16 bg-gray-50 text-center">
        <p className="text-lg text-gray-600">No projects available at the moment.</p>
      </div>
    );
  }

  return (
    <div id="projects" className="py-12 md:py-16 bg-gray-50">
      <div className="container-wide">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Featured Projects</h2>
          <p className="mt-2 text-lg text-gray-600">A selection of my recent data analysis work</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.slug} 
              project={project} 
              className="transition-all duration-300 hover:translate-y-[-8px]"
            />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button href="/projects" className="w-full sm:w-auto">
            View All Projects
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsGrid;