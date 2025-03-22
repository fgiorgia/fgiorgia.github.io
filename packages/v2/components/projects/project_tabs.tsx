// Components/projects/ProjectTabs.tsx
import React, { useState, useRef, useEffect } from 'react'
import { ProjectTabsProps } from '@/types'
import ProjectDetails from './project_details'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ProjectTabs: React.FC<ProjectTabsProps> = ({ project }) => {
  const [activeTab, setActiveTab] = useState<string>('overview')
  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false)
  const [showRightArrow, setShowRightArrow] = useState<boolean>(false)

  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})
  const indicatorRef = useRef<HTMLDivElement>(null)

  // Check if project has a category that matches our specialized components
  const hasSpecializedView = ['excel', 'python', 'sql', 'power bi'].includes(
    project.category.toLowerCase()
  )

  // Define tab configuration for easier management
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'approach', label: 'Approach' },
    { id: 'code', label: 'Code & Analysis' },
    { id: 'results', label: 'Results' },
    ...(hasSpecializedView ?
      [{ id: 'specialized', label: `${project.category} Showcase` }]
    : []),
  ]

  // Position the indicator under the active tab
  const updateIndicator = () => {
    if (indicatorRef.current && tabRefs.current[activeTab]) {
      const activeTabElement = tabRefs.current[activeTab]
      indicatorRef.current.style.left = `${activeTabElement.offsetLeft}px`
      indicatorRef.current.style.width = `${activeTabElement.offsetWidth}px`
    }
  }

  // Check if scroll arrows should be shown
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5) // 5px buffer
    }
  }

  // Function to handle tab selection without automatic scrolling
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
    // No automatic scrolling - just update the active tab
  }

  // Scroll handler to control arrow visibility
  const handleScroll = () => {
    checkScrollPosition()
  }

  // Scroll left/right handler
  const handleScrollButton = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = container.clientWidth * 0.5 // Scroll by half the container width

      const targetScroll =
        direction === 'left' ?
          container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount

      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      })
    }
  }

  // Update the indicator and arrow visibility when the active tab changes
  useEffect(() => {
    updateIndicator()
  }, [activeTab])

  // Set up event listeners and check for arrows (without initial scroll positioning)
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current

      // Check if arrows should be shown
      checkScrollPosition()

      // Add scroll event listener
      container.addEventListener('scroll', handleScroll)

      // Add resize listener to recheck arrows and indicator
      window.addEventListener('resize', () => {
        updateIndicator()
        checkScrollPosition()
      })

      return () => {
        container.removeEventListener('scroll', handleScroll)
        window.removeEventListener('resize', updateIndicator)
        window.removeEventListener('resize', checkScrollPosition)
      }
    }
  }, [])

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
                  tabRefs.current[tab.id] = el
                }}
                onClick={() => handleTabClick(tab.id)}
                className={`py-3 px-5 md:py-3 md:px-6 font-medium whitespace-nowrap flex-shrink-0 relative
                  ${
                    activeTab === tab.id ?
                      'text-indigo-600 font-medium'
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

            {/* Active tab indicator */}
            <div
              ref={indicatorRef}
              className="absolute bottom-0 h-1 bg-indigo-600 transition-all duration-300 ease-in-out"
            />
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
  )
}

export default ProjectTabs
