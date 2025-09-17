import { staticThemeOptions } from '@swiftpost/elysium/themes/gamut/static';

const breakpoints = {
  values: {
    ...staticThemeOptions.breakpoints.values,
    xs: 340,
    sm: 600,
    md: 900,
    lg: 1280,
    xl: 1536,
  },
} as const;

export const staticTheme = {
  ...staticThemeOptions,
  breakpoints,
};

export const fontWeights = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
} as const;

export const unit = staticTheme.spacing;
