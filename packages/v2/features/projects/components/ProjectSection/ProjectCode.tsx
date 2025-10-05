import React from 'react';
import Card from '../../common/components/Card';
import { ProjectContentProps } from '@/features/common/types';

const ProjectCode: React.FC<ProjectContentProps> = ({ project }) => {
  return (
    <Card className="p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Code Samples & Technical Analysis
      </h2>

      {project.codeSnippets && project.codeSnippets.length > 0 ?
        project.codeSnippets.map((snippet, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {snippet.title}
            </h3>
            <div className="bg-gray-50 p-4 rounded-md font-mono text-sm overflow-x-auto">
              <pre className="text-gray-800">{snippet.code}</pre>
            </div>
          </div>
        ))
      : <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Sample Code
          </h3>
          <div className="bg-gray-50 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <pre className="text-gray-800">
              {`# This is a placeholder for project code
# Actual code would be specific to the project

def analyze_data(data):
    # Data analysis steps
    results = process_data(data)
    visualize_results(results)
    return results

def process_data(data):
    # Data processing logic
    return processed_data

def visualize_results(results):
    # Visualization code
    pass`}
            </pre>
          </div>
        </div>
      }

      <div className="mt-6">
        <p className="text-gray-600">
          This code demonstrates the core analysis techniques used in the
          project. For the complete codebase or more detailed examples, please
          contact me directly.
        </p>
      </div>
    </Card>
  );
};

export default ProjectCode;
