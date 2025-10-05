import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { GoogleAnalytics } from '@next/third-parties/google';
import { AppCacheProvider } from '@mui/material-nextjs/v15-pagesRouter';
import { defaultSEO } from '@/features/seo/seo';
import CookieConsent from '@/features/analytics/components/CookieConsent';
import '@/core/styles/globals.css';

import ThemeProvider from '@swiftpost/elysium/core/ThemeProvider';
import { theme, mainFont } from '@/core/styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppCacheProvider {...pageProps}>
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
    </AppCacheProvider>
  );
};

export default MyApp;
