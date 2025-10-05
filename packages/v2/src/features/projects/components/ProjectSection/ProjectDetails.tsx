// components/projects/ProjectDetails.tsx
import React from 'react';
import { ProjectContentProps } from '@/core/common/types';
import ExcelProjectShowcase from '../showcaseCategories/ExcelProjectShowcase';
import PythonProjectShowcase from '../showcaseCategories/PythonProjectShowcase';
import SqlProjectShowcase from '../showcaseCategories/SqlProjectShowcase';
import BiProjectShowcase from '../showcaseCategories/BiProjectShowcase';
import ProjectOverview from './ProjectOverview';
import ProjectApproach from './ProjectApproach';
import ProjectCode from './ProjectCode';
import ProjectResults from './ProjectResults';

interface ProjectDetailsProps extends ProjectContentProps {
  activeTab: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  project,
  activeTab,
}) => {
  // Content to display based on the active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <ProjectOverview project={project} />;
      case 'approach':
        return <ProjectApproach project={project} />;
      case 'code':
        return <ProjectCode project={project} />;
      case 'results':
        return <ProjectResults project={project} />;
      case 'specialized':
        // Render specialized content based on project category
        switch (project.category.toLowerCase()) {
          case 'excel':
            return <ExcelProjectShowcase project={project} />;
          case 'python':
            return <PythonProjectShowcase project={project} />;
          case 'sql':
            return <SqlProjectShowcase project={project} />;
          case 'power bi':
            return <BiProjectShowcase project={project} />;
          default:
            return <ProjectOverview project={project} />;
        }
      default:
        return <ProjectOverview project={project} />;
    }
  };

  return (
    <div className="py-8 md:py-12">
      <div className="container-wide">{renderTabContent()}</div>
    </div>
  );
};

export default ProjectDetails;
