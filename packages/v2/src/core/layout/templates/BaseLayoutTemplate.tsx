import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PersonJsonLd from '../../../features/seo/components/PersonJsonLd';
import ConstructionBanner from '../../../features/workInProgress/components/ConstructionBanner';
import { LayoutProps } from '@/core/common/types';
import Box from '@swiftpost/elysium/ui/base/Box';
import Stack from '@swiftpost/elysium/ui/base/Stack';
import { colors } from '@/core/styles/colors';

const BaseLayoutTemplate: React.FC<LayoutProps> = ({ children }) => {
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

export default BaseLayoutTemplate;
