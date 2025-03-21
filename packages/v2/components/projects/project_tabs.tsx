// Components/projects/ProjectTabs.tsx
import React, { useState, useRef, useEffect } from 'react'
import { ProjectTabsProps } from '@/types'
import ProjectDetails from './project_details'

const ProjectTabs: React.FC<ProjectTabsProps> = ({ project }) => {
  const [activeTab, setActiveTab] = useState<string>('overview')
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})

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

  // Define color scheme
  const colorScheme = {
    active: 'border-indigo-600 text-indigo-600',
    hover: 'hover:text-gray-700 hover:border-gray-300',
  }

  // Function to handle tab selection and scrolling
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)

    // Scroll the selected tab into view
    if (tabRefs.current[tabId] && scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const tab = tabRefs.current[tabId]

      // Scroll the tab into view with a small offset to show it's the first item
      container.scrollTo({
        left: tab.offsetLeft - 16, // Small offset from the left edge
        behavior: 'smooth',
      })
    }
  }

  // Scroll active tab into view when component mounts
  useEffect(() => {
    if (tabRefs.current[activeTab] && scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const tab = tabRefs.current[activeTab]

      // Initial scroll without animation for first render
      container.scrollTo({
        left: tab.offsetLeft - 16,
      })
    }
  }, [])

  return (
    <div>
      {/* Content Tabs */}
      <div className="bg-white border-b sticky top-16 z-40">
        <div className="container-wide">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto no-scrollbar scroll-px-4"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[tab.id] = el
                }}
                onClick={() => handleTabClick(tab.id)}
                className={`py-3 px-4 md:py-4 md:px-6 font-medium border-b-2 whitespace-nowrap flex-shrink-0 
                  ${
                    activeTab === tab.id ?
                      colorScheme.active
                    : `border-transparent text-gray-500 ${colorScheme.hover}`
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <ProjectDetails project={project} activeTab={activeTab} />
    </div>
  )
}

export default ProjectTabs
