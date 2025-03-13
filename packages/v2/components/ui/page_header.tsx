// components/ui/page_header.tsx
import React, { ReactNode } from 'react';
import { useTheme } from '@/lib/theme';

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, children }) => {
  const { theme, colors } = useTheme();
  
  return (
    <div className={`bg-${colors.primary}-700 text-white`}>
      <div className="container-wide py-16">
        {children ? (
          children
        ) : (
          <>
            <h1 className="text-3xl md:text-4xl font-bold text-white">{title}</h1>
            {description && (
              <p className="mt-4 text-lg text-${colors.primary}-100 max-w-3xl">
                {description}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PageHeader;