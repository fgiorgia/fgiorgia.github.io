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
