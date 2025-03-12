// components/projects/ProjectDetails.tsx
import React from 'react';
import { ProjectContentProps } from '@/types';
import ExcelProject from './excel_project';
import PythonProject from './python_project';
import SqlProject from './sql_project';
import BiProject from './bi_project';
import ProjectOverview from './project_overview';
import ProjectApproach from './project_approach';
import ProjectCode from './project_code';
import ProjectResults from './project_results';

interface ProjectDetailsProps extends ProjectContentProps {
  activeTab: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, activeTab }) => {
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
            return <ExcelProject project={project} />;
          case 'python':
            return <PythonProject project={project} />;
          case 'sql':
            return <SqlProject project={project} />;
          case 'power bi':
            return <BiProject project={project} />;
          default:
            return <ProjectOverview project={project} />;
        }
      default:
        return <ProjectOverview project={project} />;
    }
  };

  return (
    <div className="py-8 md:py-12">
      <div className="container-wide">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ProjectDetails;