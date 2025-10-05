import React from 'react';
import Card from '@/core/ui/components/Card';
import { ProjectContentProps } from '@/core/common/types';

const ProjectApproach: React.FC<ProjectContentProps> = ({ project }) => {
  return (
    <Card className="p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Methodology & Approach
      </h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Data Collection & Preparation
        </h3>
        <p className="text-gray-600 mb-4">
          The first step involved gathering data from multiple sources and
          preparing it for analysis. This included cleaning, transforming, and
          validating the data to ensure accuracy.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Analysis Techniques
        </h3>
        <p className="text-gray-600 mb-4">
          The analysis used a combination of statistical methods and data
          visualization techniques to identify patterns and insights.
        </p>
        <ol className="list-decimal pl-6 text-gray-600 space-y-2">
          <li>
            <span className="font-medium">Exploratory Data Analysis</span>:
            Initial examination of the data
          </li>
          <li>
            <span className="font-medium">Statistical Modeling</span>: Applied
            appropriate models to the data
          </li>
          <li>
            <span className="font-medium">Validation</span>: Tested findings to
            ensure reliability
          </li>
        </ol>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Implementation
        </h3>
        <p className="text-gray-600 mb-4">
          After completing the analysis, the findings were translated into
          actionable recommendations and implemented in collaboration with
          stakeholders.
        </p>
      </div>
    </Card>
  );
};

export default ProjectApproach;
