import { colors } from './colors';
import { staticTheme } from './staticTheme';

/** Keeps compatibility with the previous tailwind theme but using MUI sx */
export const compat = {
  // .container-narrow { @apply max-w-5xl mx-auto px-4 sm:px-6 lg:px-8; }
  containerNarrow: {
    maxWidth: staticTheme.breakpoints.values.lg, // Tailwind max-w-5xl = 64rem (1024px)
    mx: 'auto',
    px: { xs: '1rem', sm: '1.5rem', lg: '2rem' },
    width: '100%',
  },

  // .container-wide { @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8; }
  containerWide: {
    maxWidth: staticTheme.breakpoints.values.lg, // Tailwind max-w-7xl = 80rem (1280px)
    mx: 'auto',
    px: { xs: '1rem', sm: '1.5rem', lg: '2rem' },
    width: '100%',
  },

  // .section-padding { @apply py-12 md:py-16 lg:py-20; }
  sectionPadding: {
    py: { xs: '3rem', md: '4rem', lg: '5rem' }, // py-12=3rem, md:py-16=4rem, lg:py-20=5rem
  },

  // .badge { @apply px-3 py-1 text-xs font-semibold rounded-full; }
  badge: {
    px: '0.75rem', // px-3
    py: '0.25rem', // py-1
    fontSize: '0.75rem', // text-xs
    fontWeight: 600, // font-semibold
    borderRadius: '9999px', // rounded-full
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // .badge-primary { @apply bg-indigo-100 text-indigo-800; }
  badgePrimary: {
    backgroundColor: colors.indigo[100], // indigo-50/100 family — adjust to your exact token
    color: colors.indigo[800], // indigo-700/800 approximation; replace with exact token if desired
  },

  // .badge-secondary { @apply bg-gray-100 text-gray-800; }
  badgeSecondary: {
    backgroundColor: colors.gray[100], // gray-100
    color: colors.gray[800], // gray-800
  },

  // .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  // .no-scrollbar::-webkit-scrollbar { display: none; }
  noScrollbar: {
    msOverflowStyle: 'none' as const,
    scrollbarWidth: 'none' as const,
    '&::-webkit-scrollbar': { display: 'none' },
  },

  shadowLg: {
    boxShadow:
      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  },
} as const;
