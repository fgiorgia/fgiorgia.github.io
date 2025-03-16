// components/projects/ExcelProject.tsx
import React from 'react';
import Image from 'next/image';
import { getAssetPath } from "@/lib/utils";
import Card from '../ui/card';
import { ProjectContentProps } from '@/types';

const ExcelProject: React.FC<ProjectContentProps> = ({ project }) => {
  // Excel uses yellow color scheme
  const colorScheme = {
    primary: 'text-yellow-800',
    secondary: 'text-yellow-700',
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    accent: 'bg-yellow-100',
    bullet: 'text-yellow-600'
  };

  return (
    <div className="space-y-8">
      <Card className={`p-8 ${colorScheme.bg} border ${colorScheme.border}`}>
        <h2 className={`text-2xl font-bold ${colorScheme.primary} mb-6`}>Excel Expertise Showcase</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className={`text-xl font-semibold ${colorScheme.primary} mb-4`}>Excel Skills Applied</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Advanced formulas and functions (XLOOKUP, INDEX/MATCH, SUMIFS)</li>
              <li>Dynamic dashboards with interactive elements</li>
              <li>Data modeling and pivot table analysis</li>
              <li>Macros and VBA automation</li>
              <li>Data validation and error handling</li>
            </ul>
          </div>
          
          <div>
            <h3 className={`text-xl font-semibold ${colorScheme.primary} mb-4`}>Excel Best Practices</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Structured table references for maintainability</li>
              <li>Modular design with dedicated data, calculation, and display sheets</li>
              <li>Optimized formulas for performance with large datasets</li>
              <li>Consistent formatting and styling for usability</li>
              <li>Version control and documentation</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className={`text-xl font-semibold ${colorScheme.primary} mb-4`}>Excel Project Highlights</h3>
          <div className={`${colorScheme.accent} border-l-4 ${colorScheme.border} p-4 rounded`}>
            <p className="text-gray-700">
              This project leveraged advanced Excel techniques to transform raw data into actionable insights.
              The dashboard integrates data from multiple sources and provides real-time analysis through
              dynamic charts, slicers, and conditional formatting.
            </p>
          </div>
        </div>
      </Card>
      
      <Card className="p-8">
        <h2 className={`text-2xl font-bold ${colorScheme.primary} mb-6`}>Formula Techniques</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`${colorScheme.bg} p-4 rounded-md`}>
            <h3 className={`text-lg font-semibold ${colorScheme.secondary} mb-3`}>Dynamic Range References</h3>
            <pre className="bg-white p-3 rounded text-sm overflow-x-auto">
              <code>
{`=SUMIFS(Sales[Amount],
  Sales[Region], [@Region],
  Sales[Date], ">="&[@StartDate],
  Sales[Date], "<="&[@EndDate])`}
              </code>
            </pre>
          </div>
          
          <div className={`${colorScheme.bg} p-4 rounded-md`}>
            <h3 className={`text-lg font-semibold ${colorScheme.secondary} mb-3`}>Conditional Calculations</h3>
            <pre className="bg-white p-3 rounded text-sm overflow-x-auto">
              <code>
{`=IF(ISBLANK([Total Sales]),0,
  IF([Total Sales]>[Target],
    "Exceeded Target",
    "Below Target"))`}
              </code>
            </pre>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className={`text-xl font-semibold ${colorScheme.primary} mb-4`}>Dashboard Example</h3>
          <div className={`${colorScheme.bg} h-64 flex items-center justify-center rounded-lg border ${colorScheme.border}`}>
            <p className="text-gray-500 italic">Excel dashboard visualization would be displayed here</p>
            {/* Uncomment when you have an actual image 
            <Image 
              src={getAssetPath("/images/projects/excel-dashboard-example.jpg")}
              alt="Excel Dashboard Example" 
              fill
              width={800} 
              height={450}
              className="rounded-lg shadow-md"
              priority
              unoptimized
            /> */}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ExcelProject;
