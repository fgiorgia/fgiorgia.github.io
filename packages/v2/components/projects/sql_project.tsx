// components/projects/SqlProject.tsx
import React from 'react'
import Card from '../ui/card'
import { ProjectContentProps } from '@/types'

const SqlProject: React.FC<ProjectContentProps> = ({ project }) => {
  // SQL uses purple color scheme
  const colorScheme = {
    primary: 'text-purple-800',
    secondary: 'text-purple-700',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    accent: 'bg-purple-100',
    bullet: 'text-purple-600',
  }

  return (
    <div className="space-y-8">
      <Card className={`p-8 ${colorScheme.bg} border ${colorScheme.border}`}>
        <h2 className={`text-2xl font-bold ${colorScheme.primary} mb-6`}>
          SQL Database Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className={`text-xl font-semibold ${colorScheme.primary} mb-4`}>
              SQL Skills Applied
            </h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className={`${colorScheme.bullet} mr-2`}>•</span>
                <span>
                  Complex query development with JOINs, CTEs, and window
                  functions
                </span>
              </li>
              <li className="flex items-start">
                <span className={`${colorScheme.bullet} mr-2`}>•</span>
                <span>Database design and normalization</span>
              </li>
              <li className="flex items-start">
                <span className={`${colorScheme.bullet} mr-2`}>•</span>
                <span>Performance tuning and query optimization</span>
              </li>
              <li className="flex items-start">
                <span className={`${colorScheme.bullet} mr-2`}>•</span>
                <span>Index design and management</span>
              </li>
              <li className="flex items-start">
                <span className={`${colorScheme.bullet} mr-2`}>•</span>
                <span>Data integrity and constraint implementation</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={`text-xl font-semibold ${colorScheme.primary} mb-4`}>
              Database Systems
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className={`${colorScheme.accent} p-4 rounded-lg`}>
                <h4 className={`font-medium ${colorScheme.primary} mb-2`}>
                  PostgreSQL
                </h4>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>JSON functions</li>
                  <li>Full-text search</li>
                  <li>Advanced indexing</li>
                </ul>
              </div>

              <div className={`${colorScheme.accent} p-4 rounded-lg`}>
                <h4 className={`font-medium ${colorScheme.primary} mb-2`}>
                  MS SQL Server
                </h4>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>T-SQL development</li>
                  <li>Execution plans</li>
                  <li>Stored procedures</li>
                </ul>
              </div>

              <div className={`${colorScheme.accent} p-4 rounded-lg`}>
                <h4 className={`font-medium ${colorScheme.primary} mb-2`}>
                  MySQL
                </h4>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>Replication setup</li>
                  <li>Performance schema</li>
                  <li>InnoDB optimization</li>
                </ul>
              </div>

              <div className={`${colorScheme.accent} p-4 rounded-lg`}>
                <h4 className={`font-medium ${colorScheme.primary} mb-2`}>
                  SQLite
                </h4>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>Embedded databases</li>
                  <li>Application integration</li>
                  <li>Lightweight solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className={`text-xl font-semibold ${colorScheme.primary} mb-4`}>
            SQL Project Approach
          </h3>
          <div
            className={`${colorScheme.accent} border-l-4 ${colorScheme.border} p-4 rounded`}
          >
            <p className="text-gray-700">
              This project tackled database optimization challenges by
              implementing a structured approach to query performance analysis,
              index optimization, and schema refinement. The focus was on
              balancing query performance with database maintainability.
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-8">
        <h2 className={`text-2xl font-bold ${colorScheme.primary} mb-6`}>
          Database Optimization
        </h2>

        <div className="mb-8">
          <h3 className={`text-xl font-semibold ${colorScheme.primary} mb-4`}>
            Query Optimization Example
          </h3>

          {project.codeSnippets && project.codeSnippets.length > 0 ?
            <div
              className={`${colorScheme.bg} p-4 rounded-md font-mono text-sm overflow-x-auto`}
            >
              <pre className="text-gray-800">
                {project.codeSnippets[0].code}
              </pre>
            </div>
          : <div
              className={`${colorScheme.bg} p-4 rounded-md font-mono text-sm overflow-x-auto`}
            >
              <pre className="text-gray-800">
                {`-- Original query with performance issues
SELECT o.order_id, c.customer_name, p.product_name, 
       o.order_date, od.quantity, p.price
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
JOIN order_details od ON o.order_id = od.order_id
JOIN products p ON od.product_id = p.product_id
WHERE o.order_date BETWEEN '2023-01-01' AND '2023-06-30'
ORDER BY o.order_date DESC;

-- Optimized query with improved performance
SELECT o.order_id, c.customer_name, p.product_name, 
       o.order_date, od.quantity, p.price
FROM orders o
INNER JOIN order_details od ON o.order_id = od.order_id
INNER JOIN products p ON od.product_id = p.product_id
INNER JOIN customers c ON o.customer_id = c.customer_id
WHERE o.order_date >= '2023-01-01' 
  AND o.order_date < '2023-07-01'
ORDER BY o.order_date DESC;`}
              </pre>
            </div>
          }
        </div>

        <div className="mb-8">
          <h3 className={`text-xl font-semibold ${colorScheme.primary} mb-4`}>
            Database Schema Design
          </h3>
          <div
            className={`${colorScheme.bg} p-4 rounded-lg border ${colorScheme.border} text-center`}
          >
            <p className="text-gray-500 italic">
              Entity Relationship Diagram would be displayed here
            </p>
            {/* You could add an actual ERD image here */}
          </div>
        </div>

        <div>
          <h3 className={`text-xl font-semibold ${colorScheme.primary} mb-4`}>
            Performance Improvements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div
              className={`${colorScheme.accent} p-4 rounded-lg text-center border ${colorScheme.border}`}
            >
              <div
                className={`text-3xl font-bold ${colorScheme.secondary} mb-1`}
              >
                85%
              </div>
              <p className="text-sm text-gray-700">
                Query Execution Time Reduction
              </p>
            </div>
            <div
              className={`${colorScheme.accent} p-4 rounded-lg text-center border ${colorScheme.border}`}
            >
              <div
                className={`text-3xl font-bold ${colorScheme.secondary} mb-1`}
              >
                60%
              </div>
              <p className="text-sm text-gray-700">Database Load Reduction</p>
            </div>
            <div
              className={`${colorScheme.accent} p-4 rounded-lg text-center border ${colorScheme.border}`}
            >
              <div
                className={`text-3xl font-bold ${colorScheme.secondary} mb-1`}
              >
                3x
              </div>
              <p className="text-sm text-gray-700">
                Application Response Improvement
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default SqlProject
