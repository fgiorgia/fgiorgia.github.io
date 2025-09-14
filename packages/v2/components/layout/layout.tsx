import React from 'react';
import Header from './head';
import Footer from './footer';
import PersonJsonLd from '../seo/person_json_ld';
import ConstructionBanner from '../ui/construction_banner';
import { LayoutProps } from '@/types';
import Box from '@swiftpost/elysium/ui/base/Box';
import Stack from '@swiftpost/elysium/ui/base/Stack';
import { colors } from '@/styles/colors';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Stack
      direction="column"
      sx={{
        minHeight: '100vh',
        bgcolor: colors.gray[50],
        color: colors.gray[800],
      }}
    >
      <PersonJsonLd />
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'block',
          // ensure minHeight for layouts that rely on full-viewport
          minHeight: '0',
        }}
      >
        {/* @ts-expect-error This is just a React versions mismatch */}
        {children}
      </Box>
      <Footer />
      {/* Construction banner outside the main flow to overlay properly */}
      <ConstructionBanner />
    </Stack>
  );
};

export default Layout;
