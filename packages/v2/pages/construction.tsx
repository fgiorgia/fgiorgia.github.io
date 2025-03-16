// pages/construction.tsx
import React from 'react';
import type { NextPage } from 'next';
import { Calendar, Code, Database, BarChart2, Clock, CheckCircle } from 'lucide-react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo/SEO';
import Link from 'next/link';

const Construction: NextPage = () => {
  // Progress indicators for different sections
  const sectionProgress = [
    { name: "Homepage", progress: 80, icon: <CheckCircle size={20} /> },
    { name: "About Page", progress: 75, icon: <CheckCircle size={20} /> },
    { name: "Excel Projects", progress: 10, icon: <Calendar size={20} /> },
    { name: "Python Projects", progress: 10, icon: <Code size={20} /> },
    { name: "SQL Projects", progress: 10, icon: <Database size={20} /> },
    { name: "BI Dashboards", progress: 10, icon: <BarChart2 size={20} /> },
    { name: "Contact Form", progress: 50, icon: <CheckCircle size={20} /> },
  ];

  return (
    <Layout>
      <SEO 
        title="Website Under Construction"
        description="This portfolio website is currently under construction. I'm adding new projects and features regularly."
        noindex={true}
      />
      
      {/* Page Header */}
      <div className="bg-indigo-700 text-white">
        <div className="container-wide py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-100">Website Under Construction</h1>
          <p className="mt-4 text-lg text-indigo-200 max-w-3xl">
            Thanks for your patience as I continue to build and improve this portfolio site.
          </p>
        </div>
      </div>
      
      {/* Construction Information */}
      <section className="py-16 bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <Clock size={64} className="text-indigo-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Work in Progress</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              I'm actively working on this portfolio website to showcase my data analysis projects.
              While you're welcome to browse the available content, please note that some sections
              are still being developed.
            </p>
          </div>
          
          {/* Progress Section */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h3 className="text-xl font-semibold mb-6">Development Progress</h3>
            <div className="space-y-5">
              {sectionProgress.map((section, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center text-gray-700">
                      <span className="mr-2">{section.icon}</span>
                      <span>{section.name}</span>
                    </div>
                    <span className="text-sm font-medium text-indigo-600">{section.progress}%</span>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                    <div 
                      style={{ width: `${section.progress}%` }}
                      className={`${
                        section.progress > 80 ? 'bg-green-500' : 
                        section.progress > 50 ? 'bg-indigo-500' : 'bg-amber-500'
                      } h-full`}>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Timeline */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Development Timeline</h3>
            <div className="relative pl-10 space-y-8 before:absolute before:left-5 before:top-2 before:h-full before:border-l-2 before:border-indigo-200">
              
              <div className="relative">
                <div className="absolute left-[-30px] top-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse"></div>
                </div>
                <h4 className="text-lg font-medium text-gray-800">Initial Setup</h4>
                <p className="text-gray-600 mb-1">Core structure and main pages</p>
                <p className="text-sm text-gray-500">In Progress</p>
              </div>
              
              <div className="relative">
                <div className="absolute left-[-30px] top-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                   {/* <div className="w-3 h-3 bg-green-400 rounded-full"></div> */}
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                </div>
                <h4 className="text-lg font-medium text-gray-800">About & Skills</h4>
                <p className="text-gray-600 mb-1">About page and skills showcase</p>
                <p className="text-sm text-gray-500">Coming Soon</p>
              </div>
              
              <div className="relative">
                <div className="absolute left-[-30px] top-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                  {/* <div className="w-3 h-3 bg-gray-400 rounded-full animate-pulse"></div> */}
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                </div>
                <h4 className="text-lg font-medium text-gray-800">Projects Development</h4>
                <p className="text-gray-600 mb-1">Adding project content and case studies</p>
                <p className="text-sm text-gray-500">Coming Soon</p>
              </div>
              
              <div className="relative">
                <div className="absolute left-[-30px] top-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                </div>
                <h4 className="text-lg font-medium text-gray-800">Final Touches</h4>
                <p className="text-gray-600 mb-1">Optimization and performance improvements</p>
                <p className="text-sm text-gray-500">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-10 bg-indigo-700 text-white">
        <div className="container-narrow text-center">
          <h2 className="text-2xl text-indigo-100 font-bold mb-4">Want to See What's Ready?</h2>
          <p className="text-indigo-100 mb-6">
            Many sections of the site are already available for viewing!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/projects"
              className="inline-block px-5 py-3 bg-white text-indigo-700 font-medium rounded-lg hover:bg-indigo-50 transition-colors"
            >
              Browse Projects
            </Link>
            <Link 
              href="/about"
              className="inline-block px-5 py-3 border border-white text-white font-medium rounded-lg hover:bg-indigo-600 transition-colors"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Construction;