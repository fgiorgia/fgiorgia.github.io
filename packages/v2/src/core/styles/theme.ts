'use client';

import { createTheme } from '@mui/material/styles';
import { theme as baseTheme } from '@swiftpost/elysium/themes/gamut';
import { Inter } from 'next/font/google';

export const mainFont = Inter({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const theme = createTheme(baseTheme, {
  typography: {
    fontFamily:
      'var(--font-inter) var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji")',
  },
});
