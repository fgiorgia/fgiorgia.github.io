'use client';
import { createTheme, type ThemeOptions } from '@mui/material/styles';
import { theme as baseTheme } from '@swiftpost/elysium/themes/gamut';

export const theme = createTheme(baseTheme as ThemeOptions, {
  fontFamily: {
    sans: [
      'Inter',
      'ui-sans-serif',
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
    ],
  },
});
