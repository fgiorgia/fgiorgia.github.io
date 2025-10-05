import React, { useEffect } from 'react';
import Image from 'next/image';
import { getAssetPath } from '@/core/common/utils';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Project } from '@/core/common/types';

interface ProjectLightboxModalProps {
  project: Project;
  images: string[];
  selectedIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ProjectLightboxModal: React.FC<ProjectLightboxModalProps> = ({
  project,
  images,
  selectedIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  // Handle keyboard navigation and prevent body scroll when modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNext();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      }
    };

    // Add event listener and disable body scroll
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    // Clean up: remove event listener and restore body scroll
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, onNext, onPrev]);

  // Get background color based on category
  const getCategoryBackgroundColor = (category: string) => {
    const categoryLower = category.toLowerCase();

    if (
      categoryLower.includes('excel') ||
      categoryLower.includes('spreadsheet')
    ) {
      return 'bg-green-50';
    } else if (categoryLower.includes('python')) {
      return 'bg-blue-50';
    } else if (
      categoryLower.includes('sql') ||
      categoryLower.includes('database')
    ) {
      return 'bg-purple-50';
    } else if (
      categoryLower.includes('power bi') ||
      categoryLower.includes('tableau') ||
      categoryLower.includes('bi')
    ) {
      return 'bg-yellow-50';
    }

    return 'bg-white';
  };

  // Modal uses a portal to render at root level to avoid z-index issues
  return (
    // Modal backdrop with highest z-index to ensure it's on top of everything
    <div
      className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        className="absolute top-4 right-4 bg-white/30 rounded-full p-2 text-gray hover:bg-white/40 transition-colors"
        aria-label="Close fullscreen"
        onClick={onClose}
      >
        <X size={24} />
      </button>

      {/* Image container */}
      <div
        className={`relative w-[90vw] h-[80vh] ${getCategoryBackgroundColor(project.category)} rounded-lg p-4 flex items-center justify-center`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Image
          src={getAssetPath(images[selectedIndex])}
          alt={`${project.title} - image ${selectedIndex + 1} of ${images.length} (fullscreen)`}
          fill
          sizes="90vw"
          className="object-contain"
          priority
          unoptimized
        />
      </div>

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 rounded-full p-3 text-gray hover:bg-white/40 transition-colors z-[10000]"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 rounded-full p-3 text-gray hover:bg-white/40 transition-colors z-[10000]"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Image counter */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full">
        {selectedIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ProjectLightboxModal;
