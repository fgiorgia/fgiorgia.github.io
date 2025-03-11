import React from 'react';

const SimpleExcelProject = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Project Header */}
      <div className="mb-8">
        <span className="inline-block px-3 py-1 text-sm font-semibold bg-green-100 text-green-800 rounded-full mb-2">Excel</span>
        <h1 className="text-3xl font-bold text-gray-800 mb-3">Sales Performance Dashboard</h1>
        <p className="text-gray-600 text-lg">
          An interactive Excel dashboard for tracking regional sales performance with dynamic filters and visualizations.
        </p>
      </div>
      
      {/* Project Image */}
      <div className="mb-8 border rounded-lg overflow-hidden shadow-md">
        <img 
          src="/api/placeholder/800/450" 
          alt="Excel Dashboard Screenshot" 
          className="w-full"
        />
      </div>
      
      {/* Project Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1">Client</h3>
          <p className="text-gray-800">Retail Corporation</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1">Completed</h3>
          <p className="text-gray-800">February 2025</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1">Tools Used</h3>
          <p className="text-gray-800">Excel, Power Query, Pivot Tables</p>
        </div>
      </div>
      
      {/* Project Overview */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Overview</h2>
        <p className="text-gray-600 mb-4">
          This Excel dashboard was created to help a retail company track their sales performance across different regions and product categories. The client needed a user-friendly solution that would allow their team to quickly identify trends and make data-driven decisions.
        </p>
        <p className="text-gray-600">
          Using advanced Excel features including pivot tables, Power Query, and dynamic formulas, I created a dashboard that automatically updates with new data and provides actionable insights through intuitive visualizations.
        </p>
      </div>
      
      {/* Key Features */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Interactive Filters</h3>
            <p className="text-gray-600">
              Custom dropdown menus and slicers allow users to filter data by region, product category, and date range.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Dynamic Charts</h3>
            <p className="text-gray-600">
              Visualizations automatically update based on user selections, showing trends and comparisons.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Automated Data Refresh</h3>
            <p className="text-gray-600">
              Power Query connections allow one-click refresh when new sales data is available.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Performance Metrics</h3>
            <p className="text-gray-600">
              KPI tracking with conditional formatting to highlight areas needing attention.
            </p>
          </div>
        </div>
      </div>
      
      {/* Excel Techniques */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Excel Techniques Used</h2>
        <ul className="list-disc pl-5 text-gray-600 space-y-2">
          <li>Pivot Tables with slicers for interactive data analysis</li>
          <li>SUMIFS and COUNTIFS for conditional calculations</li>
          <li>Power Query for data cleaning and transformation</li>
          <li>Dynamic named ranges for flexible chart references</li>
          <li>Data validation with dependent dropdowns</li>
          <li>Conditional formatting to highlight performance metrics</li>
        </ul>
      </div>
      
      {/* Results */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Results & Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">73%</div>
            <p className="text-gray-700">Reduction in reporting time</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">24%</div>
            <p className="text-gray-700">Increase in team productivity</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">15%</div>
            <p className="text-gray-700">Improvement in decision speed</p>
          </div>
        </div>
        <p className="text-gray-600">
          The dashboard significantly reduced the time required for monthly reporting and provided the sales team with actionable insights that helped them focus their efforts on high-potential regions and products.
        </p>
      </div>
      
      {/* Download Link */}
      <div className="text-center">
        <a 
          href="#" 
          className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
        >
          Download Template
        </a>
      </div>
    </div>
  );
};

export default SimpleExcelProject;