// components/ui/coming_soon_card.tsx
import React from 'react';
import { Clock } from 'lucide-react';
import Card from './Card';

interface ComingSoonCardProps {
  category?: string;
  title?: string;
  className?: string;
}

const ComingSoonCard: React.FC<ComingSoonCardProps> = ({
  category = 'Coming Soon',
  title = 'Exciting New Project',
  className = '',
}) => {
  // Define color schemes based on category
  const getCategoryColor = (cat: string) => {
    const lowerCat = cat.toLowerCase();
    if (lowerCat.includes('excel')) {
      return 'bg-green-100 text-green-800';
    }
    if (lowerCat.includes('python')) {
      return 'bg-blue-100 text-blue-800';
    }
    if (lowerCat.includes('sql')) {
      return 'bg-purple-100 text-purple-800';
    }
    if (lowerCat.includes('bi') || lowerCat.includes('power')) {
      return 'bg-yellow-100 text-yellow-800';
    }
    return 'bg-gray-100 text-gray-800';
  };

  return (
    <article className={`flex flex-col h-full opacity-80 ${className}`}>
      <Card className="h-full flex flex-col border-2 border-dashed border-gray-300">
        <div className="h-40 sm:h-28 bg-gray-100 flex items-center justify-center rounded-t-lg">
          <div className="text-gray-400">
            <Clock size={48} className="mx-auto mb-2" />
            <p className="text-sm font-medium">Coming Soon</p>
          </div>
        </div>
        <div className="p-5 sm:p-6 flex flex-col flex-grow">
          <header>
            <div className="flex items-center mb-2">
              <span
                className={`px-2 py-1 text-xs font-semibold ${getCategoryColor(category)} rounded-full`}
              >
                {category}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
          </header>
          <p className="text-gray-500 mb-4 flex-grow">
            This project is currently under development. Check back soon to see
            the completed work!
          </p>
          <footer className="mt-auto">
            <div className="relative pt-4">
              <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                <div className="animate-pulse bg-indigo-500 w-1/3 h-full"></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Development in progress</span>
                <span>Coming soon</span>
              </div>
            </div>
          </footer>
        </div>
      </Card>
    </article>
  );
};

export default ComingSoonCard;
