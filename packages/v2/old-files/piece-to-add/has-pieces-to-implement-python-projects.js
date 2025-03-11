import React from 'react';

const SimplePythonProject = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Project Header */}
      <div className="mb-8">
        <span className="inline-block px-3 py-1 text-sm font-semibold bg-blue-100 text-blue-800 rounded-full mb-2">Python</span>
        <h1 className="text-3xl font-bold text-gray-800 mb-3">Customer Segmentation Analysis</h1>
        <p className="text-gray-600 text-lg">
          A machine learning project to identify distinct customer segments for targeted marketing strategies.
        </p>
      </div>
      
      {/* Project Image */}
      <div className="mb-8 border rounded-lg overflow-hidden shadow-md">
        <img 
          src="/api/placeholder/800/450" 
          alt="Customer Segmentation Visualization" 
          className="w-full"
        />
      </div>
      
      {/* Project Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1">Client</h3>
          <p className="text-gray-800">E-commerce Company</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1">Completed</h3>
          <p className="text-gray-800">March 2025</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1">Tools Used</h3>
          <p className="text-gray-800">Python, pandas, scikit-learn, matplotlib</p>
        </div>
      </div>
      
      {/* Project Overview */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Overview</h2>
        <p className="text-gray-600 mb-4">
          This project involved analyzing customer purchase history, demographic information, and engagement metrics to identify natural groupings within their customer base. The client needed to understand their customer segments better to create targeted marketing campaigns.
        </p>
        <p className="text-gray-600">
          Using Python and machine learning techniques, I developed a clustering model that identified 5 distinct customer segments, each with unique characteristics and purchasing behaviors.
        </p>
      </div>
      
      {/* Approach & Methodology */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Approach & Methodology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Data Preparation</h3>
            <p className="text-gray-600">
              Collected and cleaned customer data from multiple sources, handling missing values and creating derived metrics like RFM scores.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Feature Engineering</h3>
            <p className="text-gray-600">
              Created meaningful features from raw data, including purchasing patterns, website engagement, and demographic indices.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Clustering Analysis</h3>
            <p className="text-gray-600">
              Applied K-means clustering and used silhouette scores to determine the optimal number of customer segments.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Segment Profiling</h3>
            <p className="text-gray-600">
              Created detailed profiles of each segment with actionable insights for marketing strategies.
            </p>
          </div>
        </div>
      </div>
      
      {/* Code Sample */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Code Sample</h2>
        <div className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono">
          <pre>{`import pandas as pd
import numpy as np
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import silhouette_score
import matplotlib.pyplot as plt
import seaborn as sns

# Load and prepare the data
df = pd.read_csv('customer_data.csv')

# Handle missing values
numeric_columns = df.select_dtypes(include=['float64', 'int64']).columns
df[numeric_columns] = df[numeric_columns].fillna(df[numeric_columns].median())

# Feature engineering - create RFM metrics
df['recency'] = (pd.Timestamp.now() - pd.to_datetime(df['last_purchase_date'])).dt.days
df['frequency'] = df['purchase_count']
df['monetary'] = df['total_spent']

# Scale the features
features = ['recency', 'frequency', 'monetary', 'site_visits', 'avg_session_time']
scaler = StandardScaler()
df_scaled = pd.DataFrame(scaler.fit_transform(df[features]))
df_scaled.columns = features

# Find optimal number of clusters
silhouette_scores = []
inertias = []
k_range = range(2, 11)

for k in k_range:
    kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)
    kmeans.fit(df_scaled)
    silhouette_scores.append(silhouette_score(df_scaled, kmeans.labels_))
    inertias.append(kmeans.inertia_)

# Plot results to find optimal k
plt.figure(figsize=(12, 5))
plt.subplot(1, 2, 1)
plt.plot(k_range, inertias, 'o-')
plt.xlabel('Number of Clusters')
plt.ylabel('Inertia')
plt.title('Elbow Method')

plt.subplot(1, 2, 2)
plt.plot(k_range, silhouette_scores, 'o-')
plt.xlabel('Number of Clusters')
plt.ylabel('Silhouette Score')
plt.title('Silhouette Method')
plt.tight_layout()
plt.show()

# Apply final clustering with optimal k=5
optimal_k = 5
final_kmeans = KMeans(n_clusters=optimal_k, random_state=42, n_init=10)
df['cluster'] = final_kmeans.fit_predict(df_scaled)`}</pre>
        </div>
      </div>
      
      {/* Results */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Results & Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">5</div>
            <p className="text-gray-700">Distinct customer segments identified</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">27%</div>
            <p className="text-gray-700">Increase in email campaign conversion</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">14%</div>
            <p className="text-gray-700">Improvement in average order value</p>
          </div>
        </div>
        <p className="text-gray-600 mb-4">
          The segmentation analysis revealed five distinct customer groups with unique behavior patterns:
        </p>
        <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-4">
          <li><strong>High-Value Loyalists (18%)</strong>: Frequent purchasers with high average order value</li>
          <li><strong>Potential High-Value (24%)</strong>: Moderate purchase frequency but high order value</li>
          <li><strong>Price-Sensitive Regulars (32%)</strong>: Frequent purchases with lower order values</li>
          <li><strong>One-Time Shoppers (15%)</strong>: Single purchase with no return visits</li>
          <li><strong>Dormant Customers (11%)</strong>: Previous customers with no recent activity</li>
        </ul>
        <p className="text-gray-600">
          The client implemented targeted marketing strategies for each segment, resulting in significant improvements in campaign performance and customer retention.
        </p>
      </div>
      
      {/* GitHub Link */}
      <div className="text-center">
        <a 
          href="#" 
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default SimplePythonProject;