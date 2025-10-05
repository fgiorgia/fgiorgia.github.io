import React from 'react';
import Link from 'next/link';
import BaseLayout from '@/src/features/layout/components/BaseLayout';
import SEO from '@/src/features/seo/components/SEO';

const NotFound: React.FC = () => {
  return (
    <BaseLayout>
      <SEO
        title="Page Not Found"
        description="Sorry, the page you are looking for does not exist."
        noindex={true}
      />
      <div className="flex flex-col items-center justify-center py-24 md:py-32 px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-indigo-600">404</h1>
        <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-800">
          Page Not Found
        </h2>
        <p className="mt-4 text-lg text-center text-gray-600 max-w-md">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="bg-indigo-600 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </BaseLayout>
  );
};

export default NotFound;
