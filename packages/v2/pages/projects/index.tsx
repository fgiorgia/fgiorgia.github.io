// pages/projects.tsx
import { useState, useEffect } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import { FileSpreadsheet, Code, Database, BarChart2, Filter } from 'lucide-react';
import Layout from '../../components/layout/layout';
import SEO from '../../components/seo/SEO';
import ProjectCard from '../../components/ui/project_card';
import { getProjects } from '../../lib/projects';
import { Project } from '@/types';

interface ProjectsPageProps {
  projects: Project[];
}

const Projects: NextPage<ProjectsPageProps> = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  
  // Get unique categories
  const categories = ['all', ...new Set(projects.map(project => project.category.toLowerCase()))];
  
  // Filter projects when category changes
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project => project.category.toLowerCase() === activeFilter)
      );
    }
  }, [activeFilter, projects]);

  // Get icon for each category
  const getCategoryIcon = (category: string) => {
    switch(category.toLowerCase()) {
      case 'excel':
        return <FileSpreadsheet size={18} />;
      case 'python':
        return <Code size={18} />;
      case 'sql':
        return <Database size={18} />;
      case 'power bi':
        return <BarChart2 size={18} />;
      default:
        return <Filter size={18} />;
    }
  };
  
  // Get color for each category
  const getCategoryColor = (category: string) => {
    switch(category.toLowerCase()) {
      case 'excel':
        return 'bg-green-100 text-green-800 border-green-200 hover:bg-green-200';
      case 'python':
        return 'bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200';
      case 'sql':
        return 'bg-purple-100 text-purple-800 border-purple-200 hover:bg-purple-200';
      case 'power bi':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200';
    }
  };

  // Get color for active filter
  const getActiveFilterClass = (category: string) => {
    if (category === activeFilter) {
      switch(category) {
        case 'excel':
          return 'bg-green-200 text-green-800 border-green-400';
        case 'python':
          return 'bg-blue-200 text-blue-800 border-blue-400';
        case 'sql':
          return 'bg-purple-200 text-purple-800 border-purple-400';
        case 'power bi':
          return 'bg-yellow-200 text-yellow-800 border-yellow-400';
        case 'all':
          return 'bg-slate-200 text-gray-800 border-gray-400';
        default:
          return 'bg-gray-200 text-gray-800 border-gray-400';
      }
    }
    
    return getCategoryColor(category);
  };

  return (
    <Layout>
      <SEO 
        title="Projects"
        description="Explore my portfolio of data analysis and business intelligence projects, including Excel dashboards, Python analysis, SQL optimization, and Power BI visualizations."
      />
      
      {/* Page Header */}
      <div className="bg-indigo-700 text-white">
        <div className="container-wide py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-100">My Projects</h1>
          <p className="mt-4 text-lg text-indigo-100 max-w-3xl">
            A collection of my work in data analysis, visualization, and business intelligence
          </p>
        </div>
      </div>
      
      {/* Filter Section */}
      <div className="bg-white border-b">
        <div className="container-wide py-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500 hidden md:block">
              Showing {filteredProjects.length} of {projects.length} projects
            </div>
            <div className="flex overflow-x-auto py-2 space-x-2 w-full md:w-auto scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`flex items-center px-3 py-2 rounded-full text-sm font-medium border whitespace-nowrap transition-colors ${getActiveFilterClass(category)}`}
                >
                  {category !== 'all' && (
                  <span className="mr-2">{getCategoryIcon(category)}</span>
                  )}
                  {category === 'all' ? 'All Projects' : 
                  category.toLowerCase() === 'sql' ? 'SQL' :
                  category.toLowerCase() === 'power bi' ? 'Power BI' :
                  category.charAt(0).toUpperCase() + category.slice(1)
                  }
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Projects Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container-wide">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard 
                  key={project.slug} 
                  project={project} 
                  className="h-full transition-all duration-300 hover:translate-y-[-8px]"
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No projects found</h3>
              <p className="text-gray-600">No projects match the selected filter.</p>
              <button
                onClick={() => setActiveFilter('all')}
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Project Categories Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-center mb-10">Project Categories</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-green-50 border border-green-100 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <FileSpreadsheet size={24} className="text-green-700" />
                </div>
                <h3 className="text-xl font-semibold text-green-800">Excel Projects</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Advanced dashboards, data models, and automated reporting solutions built with Excel and Google Sheets.
              </p>
              <button
                onClick={() => {
                  setActiveFilter('excel');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-green-700 font-medium hover:text-green-900 flex items-center"
              >
                View Excel Projects
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
            
            <div className="bg-blue-50 border border-blue-100 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <Code size={24} className="text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-blue-800">Python Projects</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Data analysis, machine learning, and visualization projects developed with Python and its data science libraries.
              </p>
              <button
                onClick={() => {
                  setActiveFilter('python');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-blue-700 font-medium hover:text-blue-900 flex items-center"
                role="link"
              >
                View Python Projects
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
            
            <div className="bg-purple-50 border border-purple-100 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <Database size={24} className="text-purple-700" />
                </div>
                <h3 className="text-xl font-semibold text-purple-800">SQL Projects</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Database optimization, complex query development, and data extraction solutions using SQL.
              </p>
              <button
                onClick={() => {
                  setActiveFilter('sql');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-purple-700 font-medium hover:text-purple-900 flex items-center"
              >
                View SQL Projects
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-100 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-yellow-100 rounded-full mr-4">
                  <BarChart2 size={24} className="text-yellow-700" />
                </div>
                <h3 className="text-xl font-semibold text-yellow-800">Power BI Projects</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Interactive dashboards and reports created with Power BI, Tableau, and other business intelligence tools.
              </p>
              <button
                onClick={() => {
                  setActiveFilter('power bi');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-yellow-700 font-medium hover:text-yellow-900 flex items-center"
              >
                View BI Projects
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-12 bg-indigo-700 text-white">
        <div className="container-narrow text-center">
          <h2 className="text-2xl md:text-3xl text-indigo-100 font-bold mb-4">Want to Work Together?</h2>
          <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
            If you like my work and want to discuss a potential project or position, I'd love to hear from you.
          </p>
          <a 
            href="/contact"
            className="inline-block py-3 px-8 bg-white text-indigo-700 font-medium rounded-lg hover:bg-indigo-50 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = getProjects();
  
  return {
    props: {
      projects
    }
  };
};

export default Projects;