import React from 'react';
import Box from '@swiftpost/elysium/ui/base/Box';
import { colors } from '@/styles/colors';
import { unit, type UnitValue } from '@/styles/staticTheme';
import { compat } from '@/styles/legacyTheme';

export interface CardProps {
  children: React.ReactNode;
  /** @deprecated Only kept for compatibility */
  className?: string;
  padding?: UnitValue;
  backgroundColor?: string;
  borderWidthPx?: number;
  borderColor?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding,
  backgroundColor,
  borderWidthPx,
  borderColor,
}) => {
  return (
    <Box
      className={className}
      sx={[
        {
          backgroundColor: colors.white, // bg-white
          borderRadius: unit(1), // rounded-lg
          overflow: 'hidden', // overflow-hidden
          ...compat.shadowMd, // shadow-md
        },
        {
          padding,
          backgroundColor,
          borderWidth: borderWidthPx,
          borderColor,
        },
      ]}
    >
      {children}
    </Box>
  );
};

export default Card;
