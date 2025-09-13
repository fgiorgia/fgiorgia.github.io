import React from 'react';
import Header from './head';
import Footer from './footer';
import PersonJsonLd from '../seo/person_json_ld';
import ConstructionBanner from '../ui/construction_banner';
import { LayoutProps } from '@/types';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      <PersonJsonLd />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      {/* Construction banner outside the main flow to overlay properly */}
      <ConstructionBanner />
    </div>
  );
};

export default Layout;
