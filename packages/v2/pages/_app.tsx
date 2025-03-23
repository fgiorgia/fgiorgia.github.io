import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { GoogleAnalytics } from '@next/third-parties/google'
import { defaultSEO } from '../lib/seo'
import CookieConsent from '../components/ui/cookie_consent'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...defaultSEO} />
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
      <Component {...pageProps} />
      <CookieConsent />
    </>
  )
}

export default MyApp
