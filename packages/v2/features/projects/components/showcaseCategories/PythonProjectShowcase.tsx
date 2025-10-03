// components/projects/PythonProject.tsx
import React from 'react';
import Image from 'next/image';
import { getAssetPath } from '@/features/common/utils';
import Card from '../../../common/components/Card';
import { ProjectContentProps } from '@/features/common/types';

const PythonProjectShowcase: React.FC<ProjectContentProps> = ({ project }) => {
  // Python uses blue color scheme
  const colorScheme = {
    primary: 'text-blue-800',
    secondary: 'text-blue-700',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    accent: 'bg-blue-100',
    bullet: 'text-blue-600',
  };

  return (
    <div className="space-y-8">
      <Card className={`p-8 ${colorScheme.bg} border ${colorScheme.border}`}>
        <h2 className={`text-2xl font-bold ${colorScheme.primary} mb-6`}>
          Python Data Analysis Framework
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className={`text-xl font-semibold ${colorScheme.primary} mb-4`}>
              Libraries & Tools
            </h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>
                <span className="font-semibold">pandas</span>: Data manipulation
                and analysis
              </li>
              <li>
                <span className="font-semibold">NumPy</span>: Numerical
                computing and array operations
              </li>
              <li>
                <span className="font-semibold">scikit-learn</span>: Machine
                learning algorithms
              </li>
              <li>
                <span className="font-semibold">matplotlib/seaborn</span>: Data
                visualization
              </li>
              <li>
                <span className="font-semibold">Jupyter</span>: Interactive
                development environment
              </li>
            </ul>
          </div>

          <div>
            <h3 className={`text-xl font-semibold ${colorScheme.primary} mb-4`}>
              Data Science Workflow
            </h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <div
                  className={`${colorScheme.accent} ${colorScheme.primary} rounded-full w-6 h-6 flex items-center justify-center font-bold mr-2 mt-0.5`}
                >
                  1
                </div>
                <div>
                  <p className="font-medium">Data Collection & Cleaning</p>
                  <p className="text-sm text-gray-600">
                    Importing, cleaning, and preparing raw data
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div
                  className={`${colorScheme.accent} ${colorScheme.primary} rounded-full w-6 h-6 flex items-center justify-center font-bold mr-2 mt-0.5`}
                >
                  2
                </div>
                <div>
                  <p className="font-medium">Exploratory Data Analysis</p>
                  <p className="text-sm text-gray-600">
                    Statistical analysis and visualization
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div
                  className={`${colorScheme.accent} ${colorScheme.primary} rounded-full w-6 h-6 flex items-center justify-center font-bold mr-2 mt-0.5`}
                >
                  3
                </div>
                <div>
                  <p className="font-medium">Feature Engineering</p>
                  <p className="text-sm text-gray-600">
                    Creating meaningful features from raw data
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div
                  className={`${colorScheme.accent} ${colorScheme.primary} rounded-full w-6 h-6 flex items-center justify-center font-bold mr-2 mt-0.5`}
                >
                  4
                </div>
                <div>
                  <p className="font-medium">Model Development</p>
                  <p className="text-sm text-gray-600">
                    Training and tuning algorithms
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div
                  className={`${colorScheme.accent} ${colorScheme.primary} rounded-full w-6 h-6 flex items-center justify-center font-bold mr-2 mt-0.5`}
                >
                  5
                </div>
                <div>
                  <p className="font-medium">Evaluation & Interpretation</p>
                  <p className="text-sm text-gray-600">
                    Analyzing results and extracting insights
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className={`text-xl font-semibold ${colorScheme.primary} mb-4`}>
            Python Project Overview
          </h3>
          <div
            className={`${colorScheme.accent} border-l-4 ${colorScheme.border} p-4 rounded`}
          >
            <p className="text-gray-700">
              This project utilized Python's powerful data science ecosystem to
              analyze complex datasets and extract meaningful patterns. The
              implementation follows best practices in code organization,
              documentation, and reproducibility.
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-8">
        <h2 className={`text-2xl font-bold ${colorScheme.primary} mb-6`}>
          Data Visualization
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className={`${colorScheme.bg} h-64 flex items-center justify-center rounded-lg border ${colorScheme.border}`}
          >
            <p className="text-gray-500 italic">
              Distribution plot would be displayed here
            </p>
            {/* Uncomment when you have an actual image 
            <Image 
              src={getAssetPath("/images/projects/python-plot1.jpg")}
              alt="Data Distribution Visualization"
              fill 
              width={400} 
              height={300}
              className="rounded-lg shadow-md"
              priority
              unoptimized 
            /> */}
          </div>

          <div
            className={`${colorScheme.bg} h-64 flex items-center justify-center rounded-lg border ${colorScheme.border}`}
          >
            <p className="text-gray-500 italic">
              Correlation matrix would be displayed here
            </p>
            {/* Uncomment when you have an actual image 
            <Image 
              src={getAssetPath("/images/projects/python-plot2.jpg")}
              alt="Correlation Matrix" 
              fill
              width={400} 
              height={300}
              className="rounded-lg shadow-md"
              priority
              unoptimized 
            /> */}
          </div>
        </div>

        {project.codeSnippets && project.codeSnippets.length > 0 && (
          <div className="mt-8">
            <h3 className={`text-xl font-semibold ${colorScheme.primary} mb-4`}>
              Key Code Implementation
            </h3>
            <div
              className={`${colorScheme.bg} p-4 rounded-md font-mono text-sm overflow-x-auto`}
            >
              <pre className="text-gray-800">
                {project.codeSnippets[0].code}
              </pre>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default PythonProjectShowcase;
