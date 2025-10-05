import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAssetPath } from '@/features//common/utils';
import {
  ArrowRight,
  Maximize,
  FileSpreadsheet,
  Code,
  Database,
  BarChart2,
} from 'lucide-react';
import Card from '../../../common/components/Card';
import ProjectLightboxModal from './ProjectLightboxModal';
import { ProjectCardProps } from '@/features//common/types';

// Helper function to get the appropriate background color based on category
const getCategoryBackgroundColor = (category: string): string => {
  const categoryLower = category.toLowerCase();

  if (
    categoryLower.includes('excel') ||
    categoryLower.includes('spreadsheet')
  ) {
    return 'bg-green-50'; // Excel - light green
  } else if (categoryLower.includes('python')) {
    return 'bg-blue-50'; // Python - light blue
  } else if (
    categoryLower.includes('sql') ||
    categoryLower.includes('database')
  ) {
    return 'bg-purple-50'; // SQL - light purple
  } else if (
    categoryLower.includes('power bi') ||
    categoryLower.includes('tableau') ||
    categoryLower.includes('bi')
  ) {
    return 'bg-yellow-50'; // BI tools - light yellow
  }

  return 'bg-white'; // Default fallback
};

// Helper function to get dot color based on category
const getCategoryIconColor = (category: string): string => {
  const categoryLower = category.toLowerCase();

  if (
    categoryLower.includes('excel') ||
    categoryLower.includes('spreadsheet')
  ) {
    return 'text-green-800'; // Excel - green
  } else if (categoryLower.includes('python')) {
    return 'text-blue-800'; // Python - blue
  } else if (
    categoryLower.includes('sql') ||
    categoryLower.includes('database')
  ) {
    return 'text-purple-800'; // SQL - purple
  } else if (
    categoryLower.includes('power bi') ||
    categoryLower.includes('tableau') ||
    categoryLower.includes('bi')
  ) {
    return 'text-yellow-800'; // BI tools - yellow
  }

  return 'text-gray-600'; // Default fallback
};

// Helper function to get category icon
const getCategoryIcon = (category: string) => {
  const categoryLower = category.toLowerCase();

  if (
    categoryLower.includes('excel') ||
    categoryLower.includes('spreadsheet')
  ) {
    return <FileSpreadsheet size={16} />;
  } else if (categoryLower.includes('python')) {
    return <Code size={16} />;
  } else if (
    categoryLower.includes('sql') ||
    categoryLower.includes('database')
  ) {
    return <Database size={16} />;
  } else if (
    categoryLower.includes('power bi') ||
    categoryLower.includes('tableau') ||
    categoryLower.includes('bi')
  ) {
    return <BarChart2 size={16} />;
  }

  return <FileSpreadsheet size={16} />; // Default fallback
};

const ProjectsGridCard: React.FC<ProjectCardProps> = ({
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
    iconBgColor,
    isDemo,
    imageGallery = [],
  } = project;

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Handle navigation in the lightbox
  const handleNext = () => {
    if (imageGallery.length <= 1) {
      return;
    }
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % imageGallery.length);
  };

  const handlePrev = () => {
    if (imageGallery.length <= 1) {
      return;
    }
    setSelectedImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + imageGallery.length) % imageGallery.length,
    );
  };

  // Open lightbox
  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  // Browser header component
  const BrowserHeader = () => (
    <div
      className={`${getCategoryBackgroundColor(category).replace('-50', '-100')} h-7 flex items-center px-3 w-full`}
    >
      <div className={`${getCategoryIconColor(category)} p-1`}>
        {getCategoryIcon(category)}
      </div>
      <div className="flex-1 flex justify-center">
        {/* <div className="bg-white rounded-md h-4 w-1/2 max-w-xs flex items-center justify-center overflow-hidden">
          <span className="text-gray-500 text-xs truncate px-2">
            {`gfanalytics.se/projects/${slug}`}
          </span>
        </div> */}
      </div>
      {imageGallery.length > 0 && (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            openLightbox();
          }}
          className="text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="View fullscreen"
        >
          <Maximize size={14} />
        </button>
      )}
    </div>
  );

  return (
    <>
      <article className={`flex flex-col h-full ${className}`} {...props}>
        <Card className="h-full flex flex-col">
          <div
            className="h-40 sm:h-48 relative overflow-hidden rounded-t-lg"
            aria-hidden="true"
          >
            {imageGallery && imageGallery.length > 0 ?
              // Image carousel in browser-style UI
              <div
                className={`w-full h-full ${getCategoryBackgroundColor(category)} flex flex-col items-center justify-center rounded-t-lg`}
              >
                {/* Browser header */}
                <BrowserHeader />

                {/* Image container */}
                <div className="relative w-full flex-grow flex items-center justify-center overflow-hidden">
                  <div className="relative w-full h-full pb-6">
                    <Image
                      src={getAssetPath(imageGallery[selectedImageIndex])}
                      alt={`${title} - image ${selectedImageIndex + 1} of ${imageGallery.length}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      className="object-contain p-1 xs:p-2 sm:p-3"
                      priority={selectedImageIndex === 0}
                      unoptimized
                    />

                    {/* Navigation arrows - only show if there are multiple images */}
                    {imageGallery.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handlePrev();
                          }}
                          className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-1 shadow-md text-gray-700 hover:bg-white hover:text-gray-900 transition-colors z-10"
                          aria-label="Previous image"
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
                            className="lucide lucide-chevron-left"
                          >
                            <path d="m15 18-6-6 6-6"></path>
                          </svg>
                        </button>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleNext();
                          }}
                          className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-1 shadow-md text-gray-700 hover:bg-white hover:text-gray-900 transition-colors z-10"
                          aria-label="Next image"
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
                            className="lucide lucide-chevron-right"
                          >
                            <path d="m9 18 6-6-6-6"></path>
                          </svg>
                        </button>
                      </>
                    )}

                    {/* Image counter */}
                    {imageGallery.length > 1 && (
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-xs px-2 py-0.5 rounded-full z-10">
                        {selectedImageIndex + 1} / {imageGallery.length}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            : project.thumbnail ?
              // Single thumbnail image
              <div
                className={`w-full h-full ${getCategoryBackgroundColor(category)} flex items-center justify-center rounded-t-lg`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={getAssetPath(project.thumbnail)}
                    alt={`${project.title} thumbnail`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-contain p-1 xs:p-2 sm:p-3"
                    priority
                    unoptimized
                  />
                </div>
              </div>
              // Fallback to icon
            : <div
                className={`w-full h-full ${iconBgColor} flex items-center justify-center rounded-t-lg`}
              >
                {icon}
              </div>
            }
          </div>
          <div className="p-5 sm:p-6 flex flex-col flex-grow">
            {/* Demo/Example Project Warning Banner - Only shown for demo projects */}
            {isDemo && (
              <div className="mb-3 bg-amber-50 border border-amber-200 text-amber-800 px-3 py-2 rounded-md text-xs">
                <span className="font-semibold">Note:</span> This is a demo
                project. Real projects coming soon.
              </div>
            )}

            <header>
              <div className="flex items-center mb-2">
                <span
                  className={`px-2 py-1 text-xs font-semibold ${categoryColor} rounded-full`}
                >
                  {category}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
            </header>
            <p className="text-gray-600 mb-4 flex-grow">{description}</p>
            <footer className="mt-auto">
              <Link href={`/projects/${slug}`} legacyBehavior>
                <a
                  className="text-indigo-600 font-medium flex items-center hover:text-indigo-800 transition-colors"
                  aria-label={`View details about ${title} project`}
                >
                  View Project{' '}
                  <ArrowRight size={16} className="ml-1" aria-hidden="true" />
                </a>
              </Link>
            </footer>
          </div>
        </Card>
      </article>

      {/* Lightbox Modal - Rendered at the root level via portal-like approach */}
      {isLightboxOpen && imageGallery && imageGallery.length > 0 && (
        <ProjectLightboxModal
          project={project}
          images={imageGallery}
          selectedIndex={selectedImageIndex}
          onClose={() => {
            setIsLightboxOpen(false);
          }}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </>
  );
};

export default ProjectsGridCard;
