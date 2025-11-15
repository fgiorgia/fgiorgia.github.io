import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { GoogleAnalytics } from '@next/third-parties/google';
// import PagesRouterCacheProvider from '@swiftpost/elysium/core/next15/PagesRouterCacheProvider';
import { defaultSEO } from '@/features/seo/seoData';
import CookieConsent from '@/features/analytics/components/CookieConsent';
import '@/core/styles/legacyGlobals.css';

import { AppCacheProvider as MUIPagesRouterCacheProvider } from '@mui/material-nextjs/v15-pagesRouter';

import ThemeProvider from '@swiftpost/elysium/core/ThemeProvider';
import { theme, mainFont } from '@/core/styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <MUIPagesRouterCacheProvider {...pageProps}>
      <DefaultSeo {...defaultSEO} />
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
      <ThemeProvider theme={theme}>
        <main className={mainFont.variable}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
      <CookieConsent />
    </MUIPagesRouterCacheProvider>
  );
};

export default MyApp;
