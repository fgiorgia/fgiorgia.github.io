import React from 'react';
import Card from '../ui/card';
import { ProjectContentProps } from '@/types';

const ProjectOverview: React.FC<ProjectContentProps> = ({ project }) => {
  return (
    <div>
      <div className="mb-12">
        <Card className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Overview</h2>
          <p className="text-gray-600 mb-4">
            {project.longDescription || project.description}
          </p>
          
          {project.challenges && project.challenges.length > 0 && (
            <>
              <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">Key Challenges</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </>
          )}
          
          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </Card>
      </div>
      
      {project.outcomes && project.outcomes.length > 0 && (
        <div>
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Outcomes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.outcomes.map((outcome, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">{outcome.title}</div>
                  <p className="text-gray-600">{outcome.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ProjectOverview;