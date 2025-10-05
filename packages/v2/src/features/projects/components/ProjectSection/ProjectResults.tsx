import React from 'react';
import Card from '../../common/components/Card';
import { ProjectContentProps } from '@/src/features/common/types';

const ProjectResults: React.FC<ProjectContentProps> = ({ project }) => {
  return (
    <Card className="p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Results & Business Impact
      </h2>

      <div className="mb-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Key Findings
        </h3>
        <p className="text-gray-600 mb-6">
          This project delivered valuable insights that helped the client make
          data-driven decisions. The key findings revealed patterns that weren't
          previously visible and provided actionable recommendations for
          improvement.
        </p>
      </div>

      {project.outcomes && project.outcomes.length > 0 && (
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Measurable Outcomes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.outcomes.map((outcome, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6"
              >
                <div className="text-2xl font-bold text-indigo-600 mb-2">
                  {outcome.title}
                </div>
                <p className="text-gray-600">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mb-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Client Feedback
        </h3>
        <blockquote className="border-l-4 border-indigo-600 pl-4 py-2 italic text-gray-600">
          "The insights provided were invaluable to our business strategy. The
          data analysis revealed opportunities we hadn't considered before, and
          the recommendations were both practical and effective."
        </blockquote>
        <p className="text-right text-sm text-gray-500 mt-2">
          — Client Representative
        </p>
      </div>
    </Card>
  );
};

export default ProjectResults;
