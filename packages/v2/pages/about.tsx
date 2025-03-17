// pages/about.tsx
import type { NextPage } from 'next'
import Image from 'next/image'
import { Linkedin, Github, Mail } from 'lucide-react'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/SEO'

const About: NextPage = () => {
  return (
    <Layout>
      <SEO
        title="About Me"
        description="Learn more about my background, education, experience, and interests in data analysis and business intelligence."
      />

      {/* Page Header */}
      <div className="bg-indigo-700 text-white">
        <div className="container-wide py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-100">
            About Me
          </h1>
          <p className="mt-4 text-lg text-indigo-200 max-w-3xl">
            Data analyst with expertise in transforming complex datasets into
            actionable insights
          </p>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="md:flex md:space-x-12 items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-2xl font-semibold mb-4">Hej, I'm Giorgia</h2>
              <p className="text-gray-600 mb-4">
                I'm a data analyst with expertise in transforming complex
                datasets into actionable insights. With a background in business
                analytics and statistics, I specialize in using data to solve
                business problems and drive strategic decisions.
              </p>
              <p className="text-gray-600 mb-4">
                My analytical journey began when I discovered my passion for
                finding patterns in data during my university studies. Since
                then, I've helped various organizations leverage their data to
                make informed decisions and achieve their business goals.
              </p>
              <p className="text-gray-600 mb-4">
                I'm passionate about data visualization, predictive analytics,
                and process automation, and I'm continuously expanding my data
                science toolkit with new technologies and methodologies.
              </p>
              <div className="flex space-x-4 mt-6">
                <a
                  href="https://www.linkedin.com/in/fgiorgia/"
                  className="text-indigo-600 hover:text-indigo-800"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/fgiorgia"
                  className="text-indigo-600 hover:text-indigo-800"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="mailto:giorgia.faedda@gfanalytics.se"
                  className="text-indigo-600 hover:text-indigo-800"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">Education</h3>
                  <p className="text-gray-500">AI Fundamentals, 2024</p>
                  <p className="text-gray-500">Data Analytics, 2023</p>
                  <p className="text-gray-600">Psychology, 2022</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">Experience</h3>
                  <p className="text-gray-600">Data Analyst, 2024-Present</p>
                  <p className="text-gray-500">Team Leader, 2024-2024</p>
                  <p className="text-gray-500">English Tutor, 2020-2022</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">Certifications</h3>
                  <p className="text-gray-600">Microsoft Azure AI-900</p>
                  <p className="text-gray-500">Google Data Analytics</p>
                  <p className="text-gray-600">English conversation practice</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">Interests</h3>
                  <p className="text-gray-600">Statistics</p>
                  <p className="text-gray-600">Data Analytics</p>
                  <p className="text-gray-600">Process Automation</p>
                  <p className="text-gray-600">Business Intelligence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-center mb-12">
            Skills & Tools
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Technical Skills */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">
                Technical Skills
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  Data Analysis & Visualization
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  Statistical Modeling
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  Database Management
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  Machine Learning
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  ETL Processes
                </li>
              </ul>
            </div>

            {/* Programming Languages */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">
                Programming
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  Python (pandas, NumPy, scikit-learn)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  SQL (MySQL, PostgreSQL)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  R (tidyverse, ggplot2)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  JavaScript (for data visualization)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  VBA (for Excel automation)
                </li>
              </ul>
            </div>

            {/* Tools & Software */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">
                Tools & Software
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  Power BI & Tableau
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  Excel & Google Sheets
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  Jupyter Notebook
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  Git & GitHub
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  Azure Data Factory & AWS
                </li>
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-indigo-600">
                Soft Skills
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  Critical Thinking & Problem Solving
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  Data Storytelling
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  Project Management
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  Cross-functional Collaboration
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  Technical Documentation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-center mb-12">
            Work Experience
          </h2>

          <div className="space-y-8">
            {/* Job 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="md:flex md:justify-between md:items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Senior Data Analyst
                  </h3>
                  <p className="text-lg text-indigo-600">Company Name</p>
                </div>
                <p className="text-gray-500 mt-1 md:mt-0">Jan 2022 - Present</p>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                <li>
                  Led the development of interactive dashboards that increased
                  executive decision-making efficiency by 40%
                </li>
                <li>
                  Implemented automated data pipelines that reduced reporting
                  time from 2 days to 2 hours
                </li>
                <li>
                  Conducted customer segmentation analysis that led to a 25%
                  increase in marketing campaign effectiveness
                </li>
                <li>
                  Collaborated with cross-functional teams to implement
                  data-driven solutions for business challenges
                </li>
              </ul>
            </div>

            {/* Job 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="md:flex md:justify-between md:items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Data Analyst
                  </h3>
                  <p className="text-lg text-indigo-600">Previous Company</p>
                </div>
                <p className="text-gray-500 mt-1 md:mt-0">
                  Mar 2020 - Dec 2021
                </p>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                <li>
                  Analyzed sales data to identify trends and opportunities,
                  resulting in a 15% revenue increase
                </li>
                <li>
                  Created automated Excel reports that saved the team 10 hours
                  per week
                </li>
                <li>
                  Designed SQL queries to extract and analyze data from various
                  database systems
                </li>
                <li>
                  Presented data insights to stakeholders through clear
                  visualizations and reports
                </li>
              </ul>
            </div>

            {/* Job 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="md:flex md:justify-between md:items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Data Analysis Intern
                  </h3>
                  <p className="text-lg text-indigo-600">Internship Company</p>
                </div>
                <p className="text-gray-500 mt-1 md:mt-0">
                  May 2019 - Aug 2019
                </p>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                <li>
                  Assisted in data cleaning and preparation for analysis
                  projects
                </li>
                <li>
                  Developed visualization dashboards using Tableau to track key
                  performance indicators
                </li>
                <li>
                  Participated in weekly meetings to present findings to the
                  analytics team
                </li>
                <li>
                  Learned and applied statistical analysis techniques to
                  real-world business problems
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About
