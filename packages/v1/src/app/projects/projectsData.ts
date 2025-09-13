import customerFeedbackDashboardImage from './images/customer_feedback_dashboard.png';
import ikeaAppReviewsImage from './images/ikea-app-review-functions-v1.png';

export const projects = [
  {
    githubName: 'customer-feedback-analysis',
    title: 'Customer Feedback Analysis',
    subtitle: 'A Homework Project on Natural Beauty Product Feedback Analysis',
    thumbnailImg: ikeaAppReviewsImage,
    shareImg: '/assets/img/path.jpg',
    tags: ['Sentiment Analysis', 'MS Excel'],
    content: `
    For the first assignment in the Introduction to Data Analytics Course at the ReDI School Malmö,
    we were tasked with a fascinating project: analyze customer feedback for a fictional 
    startup in the natural beauty sector. The goal was to use data analytics to understand 
    customers' perceptions of products and services, simulating real-world business analytics practices.
    `,
  },
  {
    githubName: 'ikea-app-reviews-analysis',
    title: 'IKEA App Review Analysis',
    subtitle: 'An analysis on customer Android IKEA App reviews',
    thumbnailImg: customerFeedbackDashboardImage,
    shareImg: '/assets/img/path.jpg',
    tags: ['MS Excel', 'Correlation', 'Prediction'],
    content: `
    For the second ReDI School's Data Analytics Course project, 
    I analyzed IKEA app reviews from Google Play Store. 
    I cleaned the data, then used a correlation matrix and linear regression to explore 
    the impact of app versions on review sentiment scores. This approach not only allowed 
    for the identification of subtle but significant trends in user feedback but also exemplified 
    the application of statistical methods in deriving actionable insights from real-world data.
    `,
  },
];

export type Project = (typeof projects)[number];
