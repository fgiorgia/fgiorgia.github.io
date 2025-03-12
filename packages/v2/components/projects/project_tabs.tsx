// import React, { useState } from 'react';
// import { ProjectTabsProps } from '@/types';
// import ProjectOverview from './project_overview';
// import ProjectApproach from './project_approach';
// import ProjectCode from './project_code';
// import ProjectResults from './project_results';

// const ProjectTabs: React.FC<ProjectTabsProps> = ({ project }) => {
//   const [activeTab, setActiveTab] = useState<string>('overview');

//   return (
//     <div>
//       {/* Content Tabs */}
//       <div className="bg-white border-b sticky top-16 z-40">
//         <div className="container-wide">
//           <div className="flex overflow-x-auto scrollbar-hide">
//             <button 
//               onClick={() => setActiveTab('overview')}
//               className={`py-3 px-4 md:py-4 md:px-6 font-medium border-b-2 whitespace-nowrap ${activeTab === 'overview' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
//             >
//               Overview
//             </button>
//             <button 
//               onClick={() => setActiveTab('approach')}
//               className={`py-3 px-4 md:py-4 md:px-6 font-medium border-b-2 whitespace-nowrap ${activeTab === 'approach' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
//             >
//               Approach
//             </button>
//             <button 
//               onClick={() => setActiveTab('code')}
//               className={`py-3 px-4 md:py-4 md:px-6 font-medium border-b-2 whitespace-nowrap ${activeTab === 'code' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
//             >
//               Code & Analysis
//             </button>
//             <button 
//               onClick={() => setActiveTab('results')}
//               className={`py-3 px-4 md:py-4 md:px-6 font-medium border-b-2 whitespace-nowrap ${activeTab === 'results' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
//             >
//               Results
//             </button>
//           </div>
//         </div>
//       </div>
      
//       {/* Tab Content */}
//       <div className="py-8 md:py-12">
//         <div className="container-wide">
//           {activeTab === 'overview' && (
//             <ProjectOverview project={project} />
//           )}
          
//           {activeTab === 'approach' && (
//             <ProjectApproach project={project} />
//           )}
          
//           {activeTab === 'code' && (
//             <ProjectCode project={project} />
//           )}
          
//           {activeTab === 'results' && (
//             <ProjectResults project={project} />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectTabs;


// Updated components/projects/ProjectTabs.tsx
import React, { useState } from 'react';
import { ProjectTabsProps } from '@/types';
import ProjectDetails from './project_details';

const ProjectTabs: React.FC<ProjectTabsProps> = ({ project }) => {
  const [activeTab, setActiveTab] = useState<string>('overview');

  // Check if project has a category that matches our specialized components
  const hasSpecializedView = ['excel', 'python', 'sql', 'power bi'].includes(project.category.toLowerCase());

  // Define color scheme based on project category
  const getColorScheme = () => {
    const category = project.category.toLowerCase();
    switch (category) {
      case 'excel':
        return {
          active: 'border-yellow-600 text-yellow-800',
          hover: 'hover:text-yellow-700 hover:border-yellow-300'
        };
      case 'python':
        return {
          active: 'border-blue-600 text-blue-800',
          hover: 'hover:text-blue-700 hover:border-blue-300'
        };
      case 'sql':
        return {
          active: 'border-purple-600 text-purple-800',
          hover: 'hover:text-purple-700 hover:border-purple-300'
        };
      case 'power bi':
        return {
          active: 'border-green-600 text-green-800',
          hover: 'hover:text-green-700 hover:border-green-300'
        };
      default:
        return {
          active: 'border-indigo-600 text-indigo-600',
          hover: 'hover:text-gray-700 hover:border-gray-300'
        };
    }
  };

  const colorScheme = getColorScheme();

  return (
    <div>
      {/* Content Tabs */}
      <div className="bg-white border-b sticky top-16 z-40">
        <div className="container-wide">
          <div className="flex overflow-x-auto scrollbar-hide">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`py-3 px-4 md:py-4 md:px-6 font-medium border-b-2 whitespace-nowrap ${activeTab === 'overview' ? colorScheme.active : `border-transparent text-gray-500 ${colorScheme.hover}`}`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveTab('approach')}
              className={`py-3 px-4 md:py-4 md:px-6 font-medium border-b-2 whitespace-nowrap ${activeTab === 'approach' ? colorScheme.active : `border-transparent text-gray-500 ${colorScheme.hover}`}`}
            >
              Approach
            </button>
            <button 
              onClick={() => setActiveTab('code')}
              className={`py-3 px-4 md:py-4 md:px-6 font-medium border-b-2 whitespace-nowrap ${activeTab === 'code' ? colorScheme.active : `border-transparent text-gray-500 ${colorScheme.hover}`}`}
            >
              Code & Analysis
            </button>
            <button 
              onClick={() => setActiveTab('results')}
              className={`py-3 px-4 md:py-4 md:px-6 font-medium border-b-2 whitespace-nowrap ${activeTab === 'results' ? colorScheme.active : `border-transparent text-gray-500 ${colorScheme.hover}`}`}
            >
              Results
            </button>
            
            {/* Show specialized tab only for supported project types */}
            {hasSpecializedView && (
              <button 
                onClick={() => setActiveTab('specialized')}
                className={`py-3 px-4 md:py-4 md:px-6 font-medium border-b-2 whitespace-nowrap ${activeTab === 'specialized' ? colorScheme.active : `border-transparent text-gray-500 ${colorScheme.hover}`}`}
              >
                {project.category} Showcase
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* Tab Content */}
      <ProjectDetails project={project} activeTab={activeTab} />
    </div>
  );
};

export default ProjectTabs;