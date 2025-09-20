import React from 'react';
import Box from '@swiftpost/elysium/ui/base/Box';
import { colors } from '@/styles/colors';
import { unit } from '@/styles/staticTheme';
import { compat } from '@/styles/legacyTheme';

export interface CardProps {
  children: React.ReactNode;
  /** @deprecated Only kept for compatibility */
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <Box
      className={className}
      sx={{
        bgcolor: colors.white, // bg-white
        borderRadius: unit(1), // rounded-lg
        overflow: 'hidden', // overflow-hidden
        ...compat.shadowMd, // shadow-md
      }}
    >
      {children}
    </Box>
  );
};

export default Card;
