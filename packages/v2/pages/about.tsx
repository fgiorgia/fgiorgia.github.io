// pages/about.tsx
import type { NextPage } from 'next';
import Image from 'next/image';
import { Linkedin, Github, Mail } from 'lucide-react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo/SEO';

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
                I’m a data analyst dedicated to converting complex datasets into
                actionable insights. With a background in analytics, psychology
                and statistics, I help organizations make informed decisions.
              </p>
              <p className="text-gray-600 mb-4">
                I’m passionate about data visualization, predictive analytics,
                and process automation, and I’m always exploring new
                technologies to refine my data toolkit.
              </p>
              <p className="text-gray-600 mb-4">
                Ready to leverage data for real impact? <br />
                <strong>Let's connect!</strong>
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
                  <p className="text-gray-600">Cambly</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">Interests</h3>
                  <p className="text-gray-600">Travel & Food</p>
                  <p className="text-gray-600">Statistics & Data Analytics</p>
                  <p className="text-gray-600">Science & Psychology</p>
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
                  Data & Statistical Modeling
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  Data Collection, Preparation & Automation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  Data Visualization & Storytelling
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  Data Analytics
                </li>
                {/* <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  ETL Processes
                </li> */}
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
                  SQL (PostgreSQL, MySQL, BigQuery)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  R (tidyverse, ggplot2)
                </li>
                {/* <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  JavaScript (for data visualization)
                </li> */}
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
                  Excel & Google Sheets
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  Tableau & Power BI
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  VS Code & Jupyter Notebook
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  Git & GitHub
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  Azure Portal
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
                  Adaptability & Curiosity
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  Collaboration & Teamwork
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  Attention to Detail
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
                    Data Analyst & Engineer Intern
                  </h3>
                  <p className="text-lg text-indigo-600">ReFab Lab</p>
                </div>
                <p className="text-gray-500 mt-1 md:mt-0">Jan 2024 - Present</p>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                <li>
                  Developing and maintaining ETL pipelines to streamline data
                  collection from multiple retail data sources.
                </li>
                <li>
                  Conducting hypothesis-driven analyses using advanced
                  statistical methods (<strong>Linear Models</strong>,{' '}
                  <strong>T-tests</strong>,{' '}
                  <strong>Time Series Analysis</strong>) to understand user
                  engagement patterns.
                </li>
                <li>
                  Creating interactive dashboards in Tableau and Looker,
                  enabling stakeholders to track improvements, and make informed
                  decisions.
                </li>
                <li>
                  <strong>Achievement:</strong> Provided data-driven insights
                  that shaped marketing strategies, reporting improved sales and
                  conversion rates by respectively 23% and 26% (last 6 months vs
                  previous 6 months).
                </li>
              </ul>
            </div>

            {/* Job 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="md:flex md:justify-between md:items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Team Leader
                  </h3>
                  <p className="text-lg text-indigo-600"> Øredev Conference</p>
                </div>
                <p className="text-gray-500 mt-1 md:mt-0">
                  Oct 2024 - Nov 2024
                </p>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                <li>
                  Led a team at one of Scandinavia's largest developer
                  conferences, focusing on attendee data collection, environment
                  setup, speakers coordination to ensure seamless session
                  operations, and authoring summaries of sessions for social
                  media posts.
                </li>
                <li>
                  Fostered team cohesion by promoting open communication, trust,
                  and shared ownership of deliverables.
                </li>
                {/* <li>
                  Designed SQL queries to extract and analyze data from various
                  database systems
                </li>
                <li>
                  Presented data insights to stakeholders through clear
                  visualizations and reports
                </li> */}
              </ul>
            </div>

            {/* Job 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="md:flex md:justify-between md:items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Private English Tutor
                  </h3>
                  <p className="text-lg text-indigo-600">Self-employed</p>
                </div>
                <p className="text-gray-500 mt-1 md:mt-0">
                  Nov 2020 - Feb 2022
                </p>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
                <li>
                  Led university students from scratch to pass the B1 exam.
                </li>
                {/* <li>
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
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
