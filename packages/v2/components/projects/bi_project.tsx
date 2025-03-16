// components/projects/BiProject.tsx
import React from 'react';
import Image from 'next/image';
import { getAssetPath } from "@/lib/utils";
import Card from '../ui/card';
import { ProjectContentProps } from '@/types';

const BiProject: React.FC<ProjectContentProps> = ({ project }) => {
  // BI uses green color scheme
  const colorScheme = {
    primary: 'text-green-800',
    secondary: 'text-green-700',
    bg: 'bg-green-50',
    border: 'border-green-200',
    accent: 'bg-green-100',
    bullet: 'text-green-600'
  };

  return (
    <div className="space-y-8">
      <Card className={`p-8 ${colorScheme.bg} border ${colorScheme.border}`}>
        <h2 className={`text-2xl font-bold ${colorScheme.primary} mb-6`}>Business Intelligence Dashboard</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className={`text-xl font-semibold ${colorScheme.primary} mb-4`}>BI Tools Expertise</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className={`${colorScheme.bullet} mr-2`}>•</span>
                <span><span className="font-semibold">Power BI</span>: DAX formulas, calculated measures, custom visuals</span>
              </li>
              <li className="flex items-start">
                <span className={`${colorScheme.bullet} mr-2`}>•</span>
                <span><span className="font-semibold">Tableau</span>: Interactive dashboards, calculated fields, parameters</span>
              </li>
              <li className="flex items-start">
                <span className={`${colorScheme.bullet} mr-2`}>•</span>
                <span><span className="font-semibold">Looker</span>: LookML modeling, data exploration</span>
              </li>
              <li className="flex items-start">
                <span className={`${colorScheme.bullet} mr-2`}>•</span>
                <span><span className="font-semibold">Data Modeling</span>: Star schema design, relationships</span>
              </li>
              <li className="flex items-start">
                <span className={`${colorScheme.bullet} mr-2`}>•</span>
                <span><span className="font-semibold">ETL Processes</span>: Data transformation and preparation</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className={`text-xl font-semibold ${colorScheme.primary} mb-4`}>Dashboard Development Process</h3>
            <div className={`relative pl-8 space-y-6 before:absolute before:left-3 before:top-0 before:h-full before:border-l-2 before:${colorScheme.border}`}>
              <div className="relative">
                <div className={`absolute left-[-32px] top-0 w-6 h-6 ${colorScheme.bg} rounded-full flex items-center justify-center`}>
                  <div className={`w-3 h-3 ${colorScheme.accent} rounded-full`}></div>
                </div>
                <h4 className="text-lg font-medium text-gray-800">Requirements Gathering</h4>
                <p className="text-gray-600 text-sm mt-1">Understanding KPIs and business questions</p>
              </div>
              
              <div className="relative">
                <div className={`absolute left-[-32px] top-0 w-6 h-6 ${colorScheme.bg} rounded-full flex items-center justify-center`}>
                  <div className={`w-3 h-3 ${colorScheme.accent} rounded-full`}></div>
                </div>
                <h4 className="text-lg font-medium text-gray-800">Data Modeling</h4>
                <p className="text-gray-600 text-sm mt-1">Designing the data architecture</p>
              </div>
              
              <div className="relative">
                <div className={`absolute left-[-32px] top-0 w-6 h-6 ${colorScheme.bg} rounded-full flex items-center justify-center`}>
                  <div className={`w-3 h-3 ${colorScheme.accent} rounded-full`}></div>
                </div>
                <h4 className="text-lg font-medium text-gray-800">Measure Development</h4>
                <p className="text-gray-600 text-sm mt-1">Creating calculated metrics and KPIs</p>
              </div>
              
              <div className="relative">
                <div className={`absolute left-[-32px] top-0 w-6 h-6 ${colorScheme.bg} rounded-full flex items-center justify-center`}>
                  <div className={`w-3 h-3 ${colorScheme.accent} rounded-full`}></div>
                </div>
                <h4 className="text-lg font-medium text-gray-800">Visualization Design</h4>
                <p className="text-gray-600 text-sm mt-1">Creating intuitive and informative visuals</p>
              </div>
              
              <div className="relative">
                <div className={`absolute left-[-32px] top-0 w-6 h-6 ${colorScheme.bg} rounded-full flex items-center justify-center`}>
                  <div className={`w-3 h-3 ${colorScheme.accent} rounded-full`}></div>
                </div>
                <h4 className="text-lg font-medium text-gray-800">Deployment & User Training</h4>
                <p className="text-gray-600 text-sm mt-1">Publishing and onboarding stakeholders</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className={`text-xl font-semibold ${colorScheme.primary} mb-4`}>BI Project Approach</h3>
          <div className={`${colorScheme.accent} border-l-4 ${colorScheme.border} p-4 rounded`}>
            <p className="text-gray-700">
              This business intelligence project focused on transforming disparate data sources into a cohesive,
              interactive dashboard that provides executives with real-time insights into key performance indicators.
              The solution prioritizes intuitive design, performance, and actionable insights.
            </p>
          </div>
        </div>
      </Card>
      
      <Card className="p-8">
        <h2 className={`text-2xl font-bold ${colorScheme.primary} mb-6`}>Dashboard Showcase</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className={`${colorScheme.bg} h-64 flex items-center justify-center rounded-lg border ${colorScheme.border}`}>
            <p className="text-gray-500 italic">KPI Summary would be displayed here</p>
            {/* Uncomment when you have an actual image 
            <Image 
              src={getAssetPath("/images/projects/bi-dashboard1.jpg")}
              alt="KPI Summary Dashboard" 
              fill
              width={400} 
              height={300}
              className="rounded-lg shadow-md"
              priority
              unoptimized
            /> */}
          </div>
          
          <div className={`${colorScheme.bg} h-64 flex items-center justify-center rounded-lg border ${colorScheme.border}`}>
            <p className="text-gray-500 italic">Sales Analysis would be displayed here</p>
            {/* Uncomment when you have an actual image 
            <Image 
              src={getAssetPath("/images/projects/bi-dashboard2.jpg")}
              alt="Sales Analysis Dashboard" 
              fill
              width={400} 
              height={300}
              className="rounded-lg shadow-md"
              priority
              unoptimized
            /> */}
          </div>
        </div>
        
        <div>
          <h3 className={`text-xl font-semibold ${colorScheme.primary} mb-4`}>DAX Formula Examples</h3>
          
          {project.codeSnippets && project.codeSnippets.length > 0 ? (
            <div className={`${colorScheme.bg} p-4 rounded-md font-mono text-sm overflow-x-auto`}>
              <pre className="text-gray-800">
                {project.codeSnippets[0].code}
              </pre>
            </div>
          ) : (
            <div className={`${colorScheme.bg} p-4 rounded-md font-mono text-sm overflow-x-auto`}>
              <pre className="text-gray-800">
{`// Year-over-Year Growth Percentage
YoY Growth % = 
VAR CurrentYearSales = CALCULATE(
    SUM(Sales[Amount]),
    FILTER(
        ALL(Calendar),
        Calendar[Year] = MAX(Calendar[Year])
    )
)
VAR PreviousYearSales = CALCULATE(
    SUM(Sales[Amount]),
    FILTER(
        ALL(Calendar),
        Calendar[Year] = MAX(Calendar[Year]) - 1
    )
)
RETURN
    IF(
        PreviousYearSales <> 0,
        DIVIDE(CurrentYearSales - PreviousYearSales, PreviousYearSales),
        BLANK()
    )`}
              </pre>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default BiProject;