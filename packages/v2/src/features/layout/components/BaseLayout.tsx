import React from 'react';
import Header from './Head';
import Footer from './Footer';
import PersonJsonLd from '../../seo/components/PersonJsonLd';
import ConstructionBanner from '../../workInProgress/components/ConstructionBanner';
import { LayoutProps } from '@/features//common/types';
import Box from '@swiftpost/elysium/ui/base/Box';
import Stack from '@swiftpost/elysium/ui/base/Stack';
import { colors } from '@/features//common/styles/colors';

const BaseLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Stack
      direction="column"
      sx={{
        minHeight: '100vh',
        backgroundColor: colors.gray[50],
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
        {children}
      </Box>
      <Footer />
      {/* Construction banner outside the main flow to overlay properly */}
      <ConstructionBanner />
    </Stack>
  );
};

export default BaseLayout;
