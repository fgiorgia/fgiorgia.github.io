import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Card from './card';
import { ProjectCardProps } from '@/types';

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project,
  className = '',
  ...props 
}) => {
  const { 
    slug, 
    title, 
    description, 
    category,
    categoryColor, 
    icon,
    iconBgColor
  } = project;

  return (
    <article className={`flex flex-col h-full ${className}`} {...props}>
      <Card className="h-full flex flex-col">
        <div className={`h-40 sm:h-48 ${iconBgColor} flex items-center justify-center`} aria-hidden="true">
          {icon}
        </div>
        <div className="p-5 sm:p-6 flex flex-col flex-grow">
          <header>
            <div className="flex items-center mb-2">
              <span className={`px-2 py-1 text-xs font-semibold ${categoryColor} rounded-full`}>
                {category}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
          </header>
          <p className="text-gray-600 mb-4 flex-grow">{description}</p>
          <footer className="mt-auto">
            <Link 
              href={`/projects/${slug}`}
              legacyBehavior
            >
              <a className="text-indigo-600 font-medium flex items-center hover:text-indigo-800 transition-colors"
                aria-label={`View details about ${title} project`}>
                View Project <ArrowRight size={16} className="ml-1" aria-hidden="true" />
              </a>
            </Link>
          </footer>
        </div>
      </Card>
    </article>
  );
};

export default ProjectCard;