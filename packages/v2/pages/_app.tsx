import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { GoogleAnalytics } from '@next/third-parties/google';
import { AppCacheProvider } from '@mui/material-nextjs/v15-pagesRouter';
import { defaultSEO } from '../lib/seo';
import CookieConsent from '../components/ui/cookie_consent';
import '../styles/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppCacheProvider {...pageProps}>
      <DefaultSeo {...defaultSEO} />
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
      <Component {...pageProps} />
      <CookieConsent />
    </AppCacheProvider>
  );
};

export default MyApp;
