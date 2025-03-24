// pages/skills.tsx
import type { NextPage } from 'next'
import {
  FileSpreadsheet,
  Code,
  Database,
  BarChart2,
  CheckCircle,
} from 'lucide-react'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/SEO'

const Skills: NextPage = () => {
  // Additional skills list
  const additionalSkills = [
    'Statistical Analysis',
    'A/B Testing',
    'Data Cleaning',
    'ETL Processes',
    'Data Modeling',
    'Forecasting',
    'Data Governance',
    'Reporting',
  ]

  // Progress skills with percentages
  const progressSkills = [
    { name: 'Excel & Google Sheets', percentage: 85 },
    { name: 'Python', percentage: 75 },
    { name: 'SQL', percentage: 65 },
    { name: 'Tableau & Power BI', percentage: 70 },
    { name: 'Data Analysis', percentage: 80 },
    { name: 'R', percentage: 40 },
  ]

  return (
    <Layout>
      <SEO
        title="Skills & Expertise"
        description="Explore my technical skills in data analysis, including Excel, Python, SQL, Business Intelligence tools, and more."
      />

      {/* Page Header */}
      <div className="bg-indigo-700 text-white">
        <div className="container-wide py-16">
          <h1 className="text-3xl md:text-4xl text-indigo-100 font-bold">
            Skills & Expertise
          </h1>
          <p className="mt-4 text-lg text-indigo-100 max-w-3xl">
            My technical toolkit for transforming data into insights and
            solutions
          </p>
        </div>
      </div>

      {/* Main Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <FileSpreadsheet size={28} className="text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold">Spreadsheets</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Advanced Excel formulas & functions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>PivotTables & PivotCharts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Google Sheets & Apps Script</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Power Query & Data Modeling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>VBA for automation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Code size={28} className="text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold">Python</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Data analysis with pandas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Data visualization (matplotlib, seaborn)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Statistical analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Machine learning with sklearn</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Reporting & Automation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Database size={28} className="text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold">SQL</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Complex queries & optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Database design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>PostgreSQL & MySQL</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Stored procedures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>ETL processes</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <BarChart2 size={28} className="text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold">BI Tools</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Dashboard creation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>DAX & M formulas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Tableau, Power BI, Looker</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Calculated Fields & Data Blending</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>ETL & data pipelines</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Skills */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-center mb-10">
            Additional Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {additionalSkills.map((skill) => (
              <div
                key={skill}
                className="bg-gray-50 px-4 py-3 rounded-md text-center shadow-sm flex items-center justify-center"
              >
                <CheckCircle size={16} className="text-indigo-500 mr-2" />
                <span className="text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Levels
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-center mb-10">
            Skill Proficiency
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {progressSkills.map((skill) => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">
                    {skill.name}
                  </span>
                  <span className="text-indigo-600 font-medium">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-indigo-600 h-2.5 rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                    aria-valuenow={skill.percentage}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Tools & Software */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-center mb-10">
            Tools & Software
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {[
              { name: 'Excel', category: 'Spreadsheet' },
              { name: 'Power BI', category: 'Visualization' },
              { name: 'Python', category: 'Programming' },
              { name: 'Azure Portal', category: 'Cloud Computing' },
              { name: 'Tableau', category: 'Visualization' },
              { name: 'Google Sheets', category: 'Spreadsheet' },
              { name: 'PostgreSQL', category: 'Database' },
              { name: 'Jupyter', category: 'Development' },
              { name: 'Git', category: 'Version Control' },
              { name: 'R', category: 'Programming' },
              { name: 'MySQL', category: 'Database' },
              { name: 'Power Query', category: 'Data Prep' },
            ].map((tool) => (
              <div
                key={tool.name}
                className="bg-gray-50 rounded-lg p-4 flex flex-col items-center hover:shadow-md transition-shadow"
              >
                <span className="text-lg font-medium text-gray-800">
                  {tool.name}
                </span>
                <span className="text-xs text-indigo-600 mt-1">
                  {tool.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-indigo-700 text-white">
        <div className="container-narrow text-center">
          <h2 className="text-2xl text-indigo-100 md:text-3xl font-bold mb-4">
            Ready to Collaborate?
          </h2>
          <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
            Whether you need help with data analysis, visualization, or building
            a complete BI solution, I have the skills to help you turn your data
            into actionable insights.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block py-3 px-8 bg-white text-indigo-700 font-medium rounded-lg hover:bg-indigo-50 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Skills
