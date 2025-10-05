import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import BaseLayout from '@/features/layout/components/BaseLayout';
import SEO from '@/features/seo/components/SEO';
import Breadcrumbs from '@/features/seo/components/Breadcrumbs';
import ProjectTabs from '@/features/projects/components/ProjectSection/ProjectTabs';
import {
  getAllProjectSlugs,
  getProjects,
} from '@/features/projects/projectUtils';
import { getAssetPath } from '@/features/common/utils';
import { Project } from '@/features/common/types';

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  if (!project) {
    return (
      <BaseLayout>
        <SEO
          title="Project Not Found"
          description="The project you're looking for doesn't exist or has been removed."
          noindex={true}
        />
        <div className="container-wide py-16 text-center">
          <h1 className="text-3xl font-bold">Project not found</h1>
          <p className="mt-4">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Link
            href="/projects"
            className="mt-8 inline-block text-indigo-600 hover:text-indigo-800"
          >
            View all projects
          </Link>
        </div>
      </BaseLayout>
    );
  }

  // Prepare the publishedTime for SEO
  const completedParts = project.completedDate.split(' ');
  const month =
    new Date(Date.parse(completedParts[0] + ' 1, 2000')).getMonth() + 1;
  const publishedTime = `${completedParts[1]}-${month.toString().padStart(2, '0')}-01T00:00:00Z`;

  return (
    <BaseLayout>
      <SEO
        title={project.title}
        description={project.description}
        ogImage={
          project.mainImageUrl ||
          getAssetPath(`/images/projects/${project.slug}.png`)
        }
        ogImageAlt={`${project.title} - ${project.category}`}
        article={{
          publishedTime,
          tags: [...project.tags, project.category, ...project.technologies],
        }}
      />

      {/* Project Header */}
      <div className="bg-indigo-700 text-white">
        <div className="container-wide py-16">
          <Link
            href="/projects"
            className="inline-flex items-center text-indigo-200 hover:text-white mb-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Projects
          </Link>

          {/* Demo Project Warning - Only shown for demo projects */}
          {project.isDemo && (
            <div className="mb-6 bg-amber-100 border-2 border-amber-300 p-3 rounded-lg shadow-sm">
              <p className="font-medium text-amber-800">⚠️ Demo Project</p>
              <p className="text-amber-800">
                This is a placeholder project showcasing my portfolio design.
                I'm currently updating with real work samples.
              </p>
            </div>
          )}

          <div className="md:flex md:items-center md:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 text-xs font-semibold bg-indigo-800 text-indigo-200 rounded-full">
                  {project.category}
                </span>
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-semibold bg-indigo-800 text-indigo-200 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl text-indigo-100 font-bold leading-tight">
                {project.title}
              </h1>
              <p className="mt-4 text-lg text-indigo-100 max-w-3xl">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="container-wide">
        <Breadcrumbs
          items={[
            { href: '/', label: 'Home' },
            { href: '/projects', label: 'Projects' },
            {
              href: `/projects/${project.slug}`,
              label: project.title,
              isCurrent: true,
            },
          ]}
        />
      </div>

      {/* Project Metadata */}
      <div className="bg-white border-b">
        <div className="container-wide py-4">
          <div className="flex flex-wrap gap-y-2">
            <div className="flex items-center mr-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500 mr-2"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span className="text-sm text-gray-600">
                Completed: {project.completedDate}
              </span>
            </div>
            <div className="flex items-center mr-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500 mr-2"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span className="text-sm text-gray-600">
                Client: {project.client}
              </span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500 mr-2"
              >
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                <line x1="7" y1="7" x2="7.01" y2="7"></line>
              </svg>
              <span className="text-sm text-gray-600">
                {project.technologies.join(', ')}
              </span>
            </div>
          </div>
        </div>
      </div>

      <ProjectTabs project={project} />
    </BaseLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProjectSlugs();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const project = getProjects().find((project) => project.slug === slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
};

export default ProjectDetail;
