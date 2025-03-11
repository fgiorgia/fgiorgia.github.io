import React, { useState } from 'react';
import { Menu, X, Mail, ArrowRight, Database, BarChart2, FileSpreadsheet, Code } from 'lucide-react';

const PortfolioHomepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-indigo-600">DataPortfolio</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="font-medium text-indigo-600">Home</a>
              <a href="#" className="font-medium text-gray-500 hover:text-indigo-600">About</a>
              <a href="#" className="font-medium text-gray-500 hover:text-indigo-600">Skills</a>
              <a href="#" className="font-medium text-gray-500 hover:text-indigo-600">Projects</a>
              <a href="#" className="font-medium text-gray-500 hover:text-indigo-600">Contact</a>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-indigo-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1 px-4">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-600">Home</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:bg-gray-100">About</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:bg-gray-100">Skills</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:bg-gray-100">Projects</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:bg-gray-100">Contact</a>
            </div>
          </div>
        )}
      </nav>
      
      {/* Hero Section */}
      <div className="bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Turning Complex Data Into Actionable Insights
              </h1>
              <p className="mt-4 text-lg text-indigo-100">
                Data Analyst specializing in Excel, Python, SQL, and Business Intelligence solutions
              </p>
              <div className="mt-8 flex flex-col sm:flex-row sm:space-x-4">
                <a href="#projects" className="bg-white text-indigo-700 font-medium py-3 px-6 rounded-lg shadow-md hover:bg-indigo-50">
                  View My Work
                </a>
                <a href="#contact" className="mt-4 sm:mt-0 bg-transparent border border-white text-white font-medium py-3 px-6 rounded-lg hover:bg-indigo-600">
                  Contact Me
                </a>
              </div>
            </div>
            <div className="mt-8 md:mt-0 md:w-2/5">
              <div className="bg-indigo-800 rounded-lg p-6 shadow-lg">
                <div className="flex justify-center mb-4">
                  <div className="h-32 w-32 rounded-full bg-indigo-600 flex items-center justify-center">
                    <span className="text-6xl font-bold">JP</span>
                  </div>
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-bold">John Doe</h2>
                  <p className="text-indigo-200">Data Analyst & Business Intelligence Developer</p>
                  <div className="mt-4 flex justify-center space-x-4">
                    <a href="#" className="text-indigo-200 hover:text-white">
                      {/* GitHub Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-indigo-200 hover:text-white">
                      {/* LinkedIn Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a href="#" className="text-indigo-200 hover:text-white">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Skills */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">My Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-indigo-100 rounded-full">
                  <FileSpreadsheet size={32} className="text-indigo-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Excel & Google Sheets</h3>
              <p className="text-gray-600 text-center">Advanced formulas, pivot tables, data modeling, and automation</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-indigo-100 rounded-full">
                  <Code size={32} className="text-indigo-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Python</h3>
              <p className="text-gray-600 text-center">Data analysis, cleaning, and visualization with pandas, numpy, matplotlib</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-indigo-100 rounded-full">
                  <Database size={32} className="text-indigo-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">SQL</h3>
              <p className="text-gray-600 text-center">Database design, complex queries, optimization, and data extraction</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-indigo-100 rounded-full">
                  <BarChart2 size={32} className="text-indigo-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">BI Tools</h3>
              <p className="text-gray-600 text-center">Interactive dashboards and reports with Power BI and Tableau</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Projects */}
      <div id="projects" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Featured Projects</h2>
            <p className="mt-2 text-lg text-gray-600">A selection of my recent data analysis work</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-indigo-200 flex items-center justify-center">
                <FileSpreadsheet size={48} className="text-indigo-700" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="px-2 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded-full">Excel</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sales Performance Dashboard</h3>
                <p className="text-gray-600 mb-4">Created a dynamic Excel dashboard analyzing regional sales performance with YoY comparisons</p>
                <a href="#" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                  View Project <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-blue-200 flex items-center justify-center">
                <Code size={48} className="text-blue-700" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">Python</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer Segmentation Analysis</h3>
                <p className="text-gray-600 mb-4">Applied clustering algorithms to identify key customer segments based on purchase behavior</p>
                <a href="#" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                  View Project <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-green-200 flex items-center justify-center">
                <BarChart2 size={48} className="text-green-700" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">Power BI</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Executive KPI Dashboard</h3>
                <p className="text-gray-600 mb-4">Developed an interactive dashboard for tracking company-wide KPIs and performance metrics</p>
                <a href="#" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                  View Project <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <a href="#" className="inline-block bg-indigo-600 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700">
              View All Projects
            </a>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div id="contact" className="bg-indigo-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-indigo-100 mb-8">Looking for data analysis expertise? I'm currently available for freelance projects and full-time opportunities.</p>
          <a href="mailto:contact@example.com" className="inline-block bg-white text-indigo-700 font-medium py-3 px-8 rounded-lg shadow-md hover:bg-indigo-50">
            Get in Touch
          </a>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <span className="text-xl font-bold text-white">DataPortfolio</span>
              <p className="mt-2 text-sm">Data Analyst & BI Developer</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                {/* GitHub Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                {/* LinkedIn Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row md:justify-between">
            <p className="text-sm">© 2025 Your Name. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <a href="#" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioHomepage;