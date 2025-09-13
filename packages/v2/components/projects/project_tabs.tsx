// Components/projects/ProjectTabs.tsx
import React, { useState, useRef, useEffect } from 'react';
import { ProjectTabsProps } from '@/types';
import ProjectDetails from './project_details';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectTabs: React.FC<ProjectTabsProps> = ({ project }) => {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);
  const [showRightArrow, setShowRightArrow] = useState<boolean>(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  // Check if project has a category that matches our specialized components
  const hasSpecializedView = ['excel', 'python', 'sql', 'power bi'].includes(
    project.category.toLowerCase(),
  );

  // Define tab configuration for easier management
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'approach', label: 'Approach' },
    { id: 'code', label: 'Code & Analysis' },
    { id: 'results', label: 'Results' },
    ...(hasSpecializedView ?
      [{ id: 'specialized', label: `${project.category} Showcase` }]
    : []),
  ];

  // Check if scroll arrows should be shown
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5); // 5px buffer
    }
  };

  // Function to handle tab selection and auto-scroll to make the tab visible
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);

    // Optional: Scroll the active tab into view
    if (tabRefs.current[tabId] && scrollContainerRef.current) {
      const tab = tabRefs.current[tabId];
      const container = scrollContainerRef.current;

      const tabLeft = tab.offsetLeft;
      const tabRight = tabLeft + tab.offsetWidth;
      const containerLeft = container.scrollLeft;
      const containerRight = containerLeft + container.clientWidth;

      // If tab is not fully visible in the container
      if (tabLeft < containerLeft) {
        // Tab is to the left of the visible area
        container.scrollTo({
          left: tabLeft - 16, // Add some padding
          behavior: 'smooth',
        });
      } else if (tabRight > containerRight) {
        // Tab is to the right of the visible area
        container.scrollTo({
          left: tabRight - container.clientWidth + 16, // Add some padding
          behavior: 'smooth',
        });
      }
    }
  };

  // Scroll handler to control arrow visibility
  const handleScroll = () => {
    checkScrollPosition();
  };

  // Scroll left/right handler
  const handleScrollButton = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.5; // Scroll by half the container width

      const targetScroll =
        direction === 'left' ?
          container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      });
    }
  };

  // Set up event listeners and check for arrows
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;

      // Check if arrows should be shown
      checkScrollPosition();

      // Add scroll event listener
      container.addEventListener('scroll', handleScroll);

      // Add resize listener to recheck arrows
      window.addEventListener('resize', checkScrollPosition);

      return () => {
        container.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', checkScrollPosition);
      };
    }
  }, []);

  return (
    <div>
      {/* Content Tabs with Scroll Arrows */}
      <div className="bg-white border-b sticky top-16 z-40">
        <div className="container-wide relative">
          {/* Left Scroll Arrow */}
          {showLeftArrow && (
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 rounded-full p-1 shadow-md text-indigo-600 hover:bg-indigo-50 transition-colors"
              onClick={() => handleScrollButton('left')}
              aria-label="Scroll tabs left"
            >
              <ChevronLeft size={20} />
              <span className="sr-only">Scroll left</span>
            </button>
          )}

          {/* Tab Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto no-scrollbar scroll-px-4 relative py-1"
            onScroll={handleScroll}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                ref={(el: HTMLButtonElement | null) => {
                  tabRefs.current[tab.id] = el;
                }}
                onClick={() => handleTabClick(tab.id)}
                className={`py-3 px-5 md:py-3 md:px-6 font-medium whitespace-nowrap flex-shrink-0 relative
                  ${
                    activeTab === tab.id ?
                      'text-indigo-600 font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-indigo-600 after:transition-all after:duration-300'
                    : 'text-gray-600 hover:text-gray-800'
                  }
                `}
                role="tab"
                aria-selected={activeTab === tab.id}
                tabIndex={activeTab === tab.id ? 0 : -1}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Right Scroll Arrow */}
          {showRightArrow && (
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 rounded-full p-1 shadow-md text-indigo-600 hover:bg-indigo-50 transition-colors"
              onClick={() => handleScrollButton('right')}
              aria-label="Scroll tabs right"
            >
              <ChevronRight size={20} />
              <span className="sr-only">Scroll right</span>
            </button>
          )}
        </div>
      </div>

      {/* Tab Content */}
      <ProjectDetails project={project} activeTab={activeTab} />
    </div>
  );
};

export default ProjectTabs;
