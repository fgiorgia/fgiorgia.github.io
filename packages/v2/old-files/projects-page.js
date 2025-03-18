import React, { useState } from 'react';

const ProjectDetailPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="text-xl font-bold text-indigo-600">DataPortfolio</a>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="font-medium text-gray-500 hover:text-indigo-600">Home</a>
              <a href="/about" className="font-medium text-gray-500 hover:text-indigo-600">About</a>
              <a href="/skills" className="font-medium text-gray-500 hover:text-indigo-600">Skills</a>
              <a href="/projects" className="font-medium text-gray-500 hover:text-indigo-600">Projects</a>
              <a href="/contact" className="font-medium text-gray-500 hover:text-indigo-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Project Header */}
      <div className="bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <a href="/projects" className="inline-flex items-center text-indigo-200 hover:text-white mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Back to Projects
          </a>
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <span className="px-3 py-1 text-xs font-semibold bg-indigo-800 text-indigo-200 rounded-full">Python</span>
                <span className="px-3 py-1 text-xs font-semibold bg-indigo-800 text-indigo-200 rounded-full">Data Analysis</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                Customer Segmentation Analysis
              </h1>
              <p className="mt-4 text-lg text-indigo-200 max-w-3xl">
                Machine learning approach to identify key customer segments based on purchase behavior, demographics, and engagement metrics
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Project Metadata */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-y-2">
            <div className="flex items-center mr-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 mr-2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              <span className="text-sm text-gray-600">Completed: March 2025</span>
            </div>
            <div className="flex items-center mr-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 mr-2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              <span className="text-sm text-gray-600">Client: E-commerce Retailer</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 mr-2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
              <span className="text-sm text-gray-600">Python, pandas, scikit-learn, matplotlib</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-6 font-medium border-b-2 ${activeTab === 'overview' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveTab('approach')}
              className={`py-4 px-6 font-medium border-b-2 ${activeTab === 'approach' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              Approach
            </button>
            <button 
              onClick={() => setActiveTab('code')}
              className={`py-4 px-6 font-medium border-b-2 ${activeTab === 'code' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              Code & Analysis
            </button>
            <button 
              onClick={() => setActiveTab('results')}
              className={`py-4 px-6 font-medium border-b-2 ${activeTab === 'results' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              Results
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              <div className="mb-12">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Overview</h2>
                  <p className="text-gray-600 mb-4">
                    For this project, I worked with an e-commerce retailer to help them better understand their customer base and create more targeted marketing strategies. The client had accumulated substantial customer data but lacked insights on how to effectively segment their audience for personalized campaigns.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Using Python and machine learning techniques, I analyzed customer purchase history, demographic information, and engagement metrics to identify natural groupings within their customer base. This segmentation allowed the client to develop tailored marketing approaches for each customer group, resulting in a 27% increase in email campaign conversion rates and a 14% increase in average order value.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">Key Challenges</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Working with incomplete customer records and handling missing data appropriately</li>
                    <li>Determining the optimal number of customer segments that would be both statistically sound and practical for marketing purposes</li>
                    <li>Creating interpretable segments that could be easily understood and utilized by the marketing team</li>
                    <li>Developing a methodology that could be repeated as new customer data was collected</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-3">Tools & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">pandas</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">NumPy</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">scikit-learn</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">matplotlib</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">seaborn</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Jupyter Notebook</span>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Outcomes</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="text-3xl font-bold text-indigo-600 mb-2">5</div>
                      <p className="text-gray-600">Distinct customer segments identified with unique buying patterns</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="text-3xl font-bold text-indigo-600 mb-2">27%</div>
                      <p className="text-gray-600">Increase in email marketing campaign conversion rates</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="text-3xl font-bold text-indigo-600 mb-2">14%</div>
                      <p className="text-gray-600">Increase in average order value through targeted offers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Approach Tab */}
          {activeTab === 'approach' && (
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Methodology & Approach</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Data Collection & Preparation</h3>
                <p className="text-gray-600 mb-4">
                  The first step involved gathering customer data from multiple sources including the e-commerce platform, CRM system, and email marketing tools. Key data points included:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Demographic information (age, location, gender)</li>
                  <li>Purchase history (frequency, recency, monetary value)</li>
                  <li>Website behavior (pages visited, time on site)</li>
                  <li>Email engagement (open rates, click-through rates)</li>
                  <li>Customer service interactions</li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Feature Engineering</h3>
                <p className="text-gray-600 mb-4">
                  I derived several meaningful features from the raw data to enhance the segmentation analysis:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>RFM (Recency, Frequency, Monetary) metrics to quantify customer value</li>
                  <li>Customer lifetime value calculations</li>
                  <li>Product category preferences based on purchase history</li>
                  <li>Seasonal buying patterns</li>
                  <li>Response rates to previous marketing campaigns</li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Segmentation Analysis</h3>
                <p className="text-gray-600 mb-4">
                  I employed the following techniques to identify natural customer segments:
                </p>
                <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                  <li>
                    <span className="font-medium">K-means clustering</span>: Applied to group customers based on multiple dimensions
                  </li>
                  <li>
                    <span className="font-medium">Principal Component Analysis (PCA)</span>: Used for dimensionality reduction
                  </li>
                  <li>
                    <span className="font-medium">Hierarchical clustering</span>: Applied as a complementary approach
                  </li>
                </ol>
              </div>
            </div>
          )}
          
          {/* Code & Analysis Tab */}
          {activeTab === 'code' && (
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Code Samples & Technical Analysis</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Data Preprocessing</h3>
                <div className="bg-gray-50 p-4 rounded-md font-mono text-sm overflow-x-auto">
                  <pre className="text-gray-800">
{`import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.impute import SimpleImputer

# Load the customer data
df = pd.read_csv('customer_data.csv')

# Handle missing values
imputer = SimpleImputer(strategy='median')
df_numeric = pd.DataFrame(imputer.fit_transform(df.select_dtypes(include=['float64', 'int64'])))
df_numeric.columns = df.select_dtypes(include=['float64', 'int64']).columns`}
                  </pre>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">K-means Clustering Implementation</h3>
                <div className="bg-gray-50 p-4 rounded-md font-mono text-sm overflow-x-auto">
                  <pre className="text-gray-800">
{`from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score

# Find optimal number of clusters
silhouette_scores = []
inertias = []
k_range = range(2, 11)

for k in k_range:
    kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)
    kmeans.fit(df_scaled)
    silhouette_scores.append(silhouette_score(df_scaled, kmeans.labels_))
    inertias.append(kmeans.inertia_)`}
                  </pre>
                </div>
              </div>
            </div>
          )}
          
          {/* Results Tab */}
          {activeTab === 'results' && (
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Results & Business Impact</h2>
              
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Identified Customer Segments</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-indigo-600 mb-2">Segment 1: High-Value Loyalists (18%)</h4>
                    <p className="text-gray-600 mb-3">Frequent purchasers with high average order value and recent activity.</p>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1">
                      <li>Highest LTV and lowest churn risk</li>
                      <li>Responsive to loyalty programs and exclusive offers</li>
                      <li>More likely to try new product categories</li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-indigo-600 mb-2">Segment 2: Potential High-Value (24%)</h4>
                    <p className="text-gray-600 mb-3">Moderate purchase frequency but high average order value.</p>
                    <ul className="list-disc pl-6 text-gray-600 space-y-1">
                      <li>Good retention candidates with growth potential</li>
                      <li>Responsive to personalized product recommendations</li>
                      <li>Often browse without purchasing</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Marketing Strategy Implementation</h3>
                <p className="text-gray-600 mb-6">
                  Based on the segmentation analysis, the client implemented the following targeted marketing strategies:
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Segment</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Strategy</th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Results</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-700">High-Value Loyalists</td>
                        <td className="px-6 py-4 text-sm text-gray-600">VIP program with early access to new products</td>
                        <td className="px-6 py-4 text-sm text-gray-600">22% increase in repeat purchases</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-700">Potential High-Value</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Personalized product recommendations</td>
                        <td className="px-6 py-4 text-sm text-gray-600">18% conversion rate improvement</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
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
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8">
            <p className="text-sm">© 2025 Giorgia Faedda. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetailPage;
