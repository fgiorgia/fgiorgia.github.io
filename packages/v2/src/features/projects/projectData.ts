// data/projects.ts
import React from 'react';
import { FileSpreadsheet, Code, Database, BarChart2 } from 'lucide-react';
import { Project } from '@/core/common/types';

export const projects: Project[] = [
  {
    slug: 'sales-dashboard',
    title: 'Sales Performance Dashboard',
    description:
      'Created a dynamic Excel dashboard analyzing regional sales performance with YoY comparisons',
    longDescription:
      'A comprehensive Excel dashboard that provides real-time visibility into sales performance across different regions, with year-over-year comparisons and trend analysis. The dashboard includes interactive filters, conditional formatting, and automated data refresh capabilities.',
    category: 'Excel',
    tags: ['Data Analysis', 'Dashboard', 'Sales Analytics'],
    categoryColor: 'bg-green-100 text-green-800',
    thumbnail:
      '/images/projects/thumbnail/customer_feedback-dashboardv-2023.webp',
    imageGallery: [
      '/images/projects/thumbnail/customer_feedback-dashboardv-2023.webp',
      '/images/projects/thumbnail/unnamed.png', // Add additional images
      "/images/projects/thumbnail/Infruid's_Self-Service_BI_Tool_Dashboard.jpg",
    ],
    icon: null, // React.createElement(FileSpreadsheet, { size: 48, className: "text-indigo-700" }),
    iconBgColor: 'bg-green-200',
    technologies: ['Excel', 'Power Query', 'DAX', 'VBA'],
    client: 'Retail Corporation',
    completedDate: 'January 2023',
    featured: true,
    isDemo: true, // Mark as demo project
    outcomes: [
      {
        title: '15%',
        value: 15,
        description: 'Increase in sales team productivity',
      },
      {
        title: '4hrs',
        value: 4,
        description: 'Weekly time saved on reporting',
      },
      {
        title: '100%',
        value: 100,
        description: 'Automated data refresh process',
      },
    ],
    challenges: [
      'Integrating data from multiple departmental sources',
      'Creating a user-friendly interface for non-technical users',
      'Optimizing formula performance for large datasets',
      'Implementing dynamic date ranges for flexible reporting periods',
    ],
    codeSnippets: [
      {
        title: 'VBA Code for Auto-Refresh',
        language: 'vba',
        code: `Sub RefreshAllData()
    ' Turn off screen updating to improve performance
    Application.ScreenUpdating = False
    
    ' Refresh all data connections
    ThisWorkbook.RefreshAll
    
    ' Update all pivot tables
    Dim ws As Worksheet
    Dim pt As PivotTable
    
    For Each ws In ThisWorkbook.Worksheets
        For Each pt In ws.PivotTables
            pt.RefreshTable
        Next pt
    Next ws
    
    ' Update last refresh time
    Worksheets("Dashboard").Range("LastRefresh").Value = Now()
    
    ' Turn screen updating back on
    Application.ScreenUpdating = True
    
    ' Notify user
    MsgBox "All data refreshed successfully!", vbInformation
End Sub`,
      },
    ],
  },
  {
    slug: 'customer-segmentation',
    title: 'Customer Segmentation Analysis',
    description:
      'Applied clustering algorithms to identify key customer segments based on purchase behavior',
    longDescription:
      'Machine learning approach to identify key customer segments based on purchase behavior, demographics, and engagement metrics. The project involved data preparation, feature engineering, model training, and visualization of segment characteristics.',
    category: 'Python',
    tags: ['Data Analysis', 'Machine Learning', 'Customer Analytics'],
    categoryColor: 'bg-blue-100 text-blue-800',
    imageGallery: [
      '/images/projects/thumbnail/customer_feedback-dashboardv-2023.webp',
      '/images/projects/thumbnail/unnamed.png', // Add additional images
      "/images/projects/thumbnail/Infruid's_Self-Service_BI_Tool_Dashboard.jpg",
    ],
    icon: null, // React.createElement(Code, { size: 48, className: "text-blue-700" }),
    iconBgColor: 'bg-blue-200',
    technologies: ['Python', 'pandas', 'scikit-learn', 'matplotlib', 'seaborn'],
    client: 'E-commerce Retailer',
    completedDate: 'March 2023',
    featured: true,
    isDemo: true,
    outcomes: [
      {
        title: '5',
        value: 5,
        description: 'Distinct customer segments identified',
      },
      {
        title: '27%',
        value: 27,
        description: 'Increase in email campaign conversion rates',
      },
      {
        title: '14%',
        value: 14,
        description: 'Increase in average order value',
      },
    ],
    challenges: [
      'Handling missing data in customer records',
      'Determining the optimal number of segments',
      'Creating interpretable segments for the marketing team',
      'Developing a repeatable methodology for future analysis',
    ],
    codeSnippets: [
      {
        title: 'Data Preprocessing',
        language: 'python',
        code: `import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.impute import SimpleImputer

# Load the customer data
df = pd.read_csv('customer_data.csv')

# Handle missing values
imputer = SimpleImputer(strategy='median')
df_numeric = pd.DataFrame(imputer.fit_transform(df.select_dtypes(include=['float64', 'int64'])))
df_numeric.columns = df.select_dtypes(include=['float64', 'int64']).columns

# Scale the data for clustering
scaler = StandardScaler()
df_scaled = scaler.fit_transform(df_numeric)

# Print summary statistics
print(f"Dataset shape: {df.shape}")
print(f"Number of missing values: {df.isna().sum().sum()}")
print(f"Column summary:\\n{df.describe().T}")
`,
      },
      {
        title: 'K-means Clustering Implementation',
        language: 'python',
        code: `from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score
import matplotlib.pyplot as plt

# Find optimal number of clusters
silhouette_scores = []
inertias = []
k_range = range(2, 11)

for k in k_range:
    kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)
    kmeans.fit(df_scaled)
    silhouette_scores.append(silhouette_score(df_scaled, kmeans.labels_))
    inertias.append(kmeans.inertia_)

# Plot the elbow curve
plt.figure(figsize=(10, 5))
plt.subplot(1, 2, 1)
plt.plot(k_range, inertias, 'o-')
plt.xlabel('Number of clusters')
plt.ylabel('Inertia')
plt.title('Elbow Method')

plt.subplot(1, 2, 2)
plt.plot(k_range, silhouette_scores, 'o-')
plt.xlabel('Number of clusters')
plt.ylabel('Silhouette Score')
plt.title('Silhouette Method')

plt.tight_layout()
plt.savefig('optimal_clusters.png', dpi=300)
plt.show()

# Apply final model with optimal clusters (k=5)
final_model = KMeans(n_clusters=5, random_state=42, n_init=10)
clusters = final_model.fit_predict(df_scaled)

# Add cluster labels to original dataframe
df['cluster'] = clusters
`,
      },
    ],
  },
  {
    slug: 'executive-kpi-dashboard',
    title: 'Executive KPI Dashboard',
    description:
      'Developed an interactive dashboard for tracking company-wide KPIs and performance metrics',
    longDescription:
      'An interactive Power BI dashboard providing executives with real-time visibility into key performance indicators across the organization. The dashboard features drill-down capabilities, data filtering, and automated data refresh.',
    category: 'Power BI',
    tags: ['Dashboard', 'Business Intelligence', 'KPI Tracking'],
    categoryColor: 'bg-yellow-100 text-yellow-800',
    imageGallery: [
      '/images/projects/thumbnail/customer_feedback-dashboardv-2023.webp',
      '/images/projects/thumbnail/unnamed.png', // Add additional images
      "/images/projects/thumbnail/Infruid's_Self-Service_BI_Tool_Dashboard.jpg",
    ],
    icon: null, // React.createElement(BarChart2, { size: 48, className: "text-green-700" }),
    iconBgColor: 'bg-yellow-200',
    technologies: ['Power BI', 'DAX', 'SQL', 'Power Query', 'M Language'],
    client: 'Manufacturing Company',
    completedDate: 'February 2023',
    featured: true,
    isDemo: true,
    outcomes: [
      {
        title: '12+',
        value: 12,
        description: 'Key metrics tracked in real-time',
      },
      {
        title: '60%',
        value: 60,
        description: 'Reduction in reporting time',
      },
      {
        title: '8',
        value: 8,
        description: 'Departments integrated into a single view',
      },
    ],
    challenges: [
      'Integrating data from disparate systems (ERP, CRM, HRIS)',
      'Creating intuitive visualizations for complex metrics',
      'Ensuring appropriate data security and access controls',
      'Optimizing dashboard performance for large datasets',
    ],
    codeSnippets: [
      {
        title: 'DAX Measure for Rolling Quarter Sales',
        language: 'dax',
        code: `Rolling Quarter Sales = 
VAR CurrentDate = MAX(Calendar[Date])
VAR StartDate = DATE(YEAR(CurrentDate), MONTH(CurrentDate) - 3, 1)
RETURN
CALCULATE(
    SUM(Sales[Amount]),
    FILTER(
        ALL(Calendar),
        Calendar[Date] >= StartDate && 
        Calendar[Date] <= CurrentDate
    )
)`,
      },
    ],
  },
  {
    slug: 'inventory-optimization',
    title: 'Inventory Optimization Model',
    description:
      'Built a predictive model to optimize inventory levels across multiple warehouses',
    longDescription:
      'A Python-based predictive model that uses historical sales data and machine learning to optimize inventory levels and reduce carrying costs. The model forecasts demand, identifies optimal reorder points, and suggests stock allocations across distribution centers.',
    category: 'Python',
    tags: ['Predictive Modeling', 'Supply Chain', 'Optimization'],
    categoryColor: 'bg-blue-100 text-blue-800',
    icon: null, // React.createElement(Code, { size: 48, className: "text-blue-700" }),
    iconBgColor: 'bg-blue-200',
    technologies: ['Python', 'pandas', 'scikit-learn', 'TensorFlow', 'Prophet'],
    client: 'Distribution Company',
    completedDate: 'December 2022',
    featured: false,
    isDemo: true,
    outcomes: [
      {
        title: '24%',
        value: 24,
        description: 'Reduction in inventory carrying costs',
      },
      {
        title: '18%',
        value: 18,
        description: 'Improvement in forecast accuracy',
      },
      {
        title: '$1.2M',
        value: 1200000,
        description: 'Annual savings in operational costs',
      },
    ],
  },
  {
    slug: 'database-optimization',
    title: 'Database Optimization Project',
    description:
      'Redesigned database architecture and optimized queries to improve application performance',
    longDescription:
      'Conducted a comprehensive review of existing database architecture, redesigned table structures, created appropriate indexes, and optimized critical queries to significantly improve application performance and reduce server load.',
    category: 'SQL',
    tags: ['Database Design', 'Performance Tuning', 'Query Optimization'],
    categoryColor: 'bg-purple-100 text-purple-800',
    imageGallery: [
      '/images/projects/thumbnail/customer_feedback-dashboardv-2023.webp',
      '/images/projects/thumbnail/unnamed.png', // Add additional images
      "/images/projects/thumbnail/Infruid's_Self-Service_BI_Tool_Dashboard.jpg",
    ],
    icon: null, // React.createElement(Database, { size: 48, className: "text-purple-700" }),
    iconBgColor: 'bg-purple-200',
    technologies: [
      'SQL Server',
      'Indexing',
      'Query Optimization',
      'Execution Plans',
      'Normalization',
    ],
    client: 'Financial Services Company',
    completedDate: 'November 2022',
    featured: false,
    isDemo: true,
    outcomes: [
      {
        title: '85%',
        value: 85,
        description: 'Reduction in query execution time',
      },
      {
        title: '40%',
        value: 40,
        description: 'Decrease in database server load',
      },
      {
        title: '3x',
        value: 3,
        description: 'Improvement in application response time',
      },
    ],
    codeSnippets: [
      {
        title: 'Query Optimization Example',
        language: 'sql',
        code: `-- Before optimization
SELECT c.CustomerID, c.CustomerName, c.City, c.Country,
       COUNT(o.OrderID) AS TotalOrders,
       SUM(od.Quantity * p.Price) AS TotalSpent
FROM Customers c
LEFT JOIN Orders o ON c.CustomerID = o.CustomerID
LEFT JOIN OrderDetails od ON o.OrderID = od.OrderID
LEFT JOIN Products p ON od.ProductID = p.ProductID
WHERE c.Country IN ('USA', 'Canada', 'Mexico')
GROUP BY c.CustomerID, c.CustomerName, c.City, c.Country
ORDER BY TotalSpent DESC;

-- After optimization
SELECT c.CustomerID, c.CustomerName, c.City, c.Country,
       o.TotalOrders,
       o.TotalSpent
FROM Customers c
INNER JOIN (
    SELECT o.CustomerID,
           COUNT(o.OrderID) AS TotalOrders,
           SUM(od.Quantity * p.Price) AS TotalSpent
    FROM Orders o
    INNER JOIN OrderDetails od ON o.OrderID = od.OrderID
    INNER JOIN Products p ON od.ProductID = p.ProductID
    GROUP BY o.CustomerID
) o ON c.CustomerID = o.CustomerID
WHERE c.Country IN ('USA', 'Canada', 'Mexico')
ORDER BY o.TotalSpent DESC;`,
      },
    ],
  },
  {
    slug: 'customer-churn-analysis',
    title: 'Customer Churn Analysis',
    description:
      'Created a model to predict customer churn risk and identify key retention factors',
    longDescription:
      'A predictive model that identifies customers at risk of churning and the key factors influencing retention, enabling proactive retention strategies. The analysis included data exploration, feature engineering, model development, and deployment of a monitoring dashboard.',
    category: 'Python',
    tags: [
      'Customer Analytics',
      'Predictive Modeling',
      'Business Intelligence',
    ],
    categoryColor: 'bg-blue-100 text-blue-800',
    icon: null, // React.createElement(Code, { size: 48, className: "text-blue-700" }),
    iconBgColor: 'bg-blue-200',
    technologies: ['Python', 'scikit-learn', 'XGBoost', 'Pandas', 'Matplotlib'],
    client: 'Subscription Service',
    completedDate: 'October 2022',
    featured: false,
    isDemo: true,
    outcomes: [
      {
        title: '32%',
        value: 32,
        description: 'Reduction in customer churn rate',
      },
      {
        title: '22%',
        value: 22,
        description: 'Increase in retention campaign effectiveness',
      },
      {
        title: '85%',
        value: 85,
        description: 'Accuracy in predicting high-risk customers',
      },
    ],
  },
];

// Utility functions to work with project data
export function getProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs() {
  return projects.map((project) => ({
    params: { slug: project.slug },
  }));
}
