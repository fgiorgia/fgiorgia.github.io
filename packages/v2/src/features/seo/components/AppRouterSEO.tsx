'use client';

import { useEffect } from 'react';

/**
 * Temporary component until SEO support works fully in pages router.
 */
const AppRouterSEO: React.FC = () => {
  useEffect(() => {
    console.warn(
      'SEO needs additional updates for AppRouter, it might miss some parts',
    );
  }, []);

  return null;
};

export default AppRouterSEO;
