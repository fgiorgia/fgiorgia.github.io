// packages/v2/pages/_app.tsx
import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { GoogleAnalytics } from '@next/third-parties/google'
import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react'
import { defaultSEO } from '../lib/seo'
import CookieConsent from '../components/ui/cookie_consent'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [isNavigating, setIsNavigating] = useState(false)
  const [showTransitionOverlay, setShowTransitionOverlay] = useState(false)

  // Use a ref to track if we're handling a popstate (back/forward) navigation
  const isPopStateNav = useRef(false)

  // Disable browser's built-in scroll restoration and handle it manually
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Disable the browser's automatic scroll restoration
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual'
      }

      // Force scroll to top on initial load
      window.scrollTo(0, 0)

      // Add global styles for transition overlay at the document level
      const style = document.createElement('style')
      style.innerHTML = `
        .page-transition-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #fff;
          z-index: 9999;
          opacity: 0;
          pointer-events: none;
          transition: opacity 50ms ease;
        }
        .page-transition-overlay.visible {
          opacity: 1;
          pointer-events: all;
        }
      `
      document.head.appendChild(style)

      // Create overlay element
      const overlay = document.createElement('div')
      overlay.className = 'page-transition-overlay'
      document.body.appendChild(overlay)

      // Function to toggle overlay visibility
      const toggleOverlay = (visible: boolean) => {
        if (visible) {
          overlay.classList.add('visible')
        } else {
          overlay.classList.remove('visible')
        }
      }

      // Update when our state changes
      const unsubscribe = watchEffect(() => {
        toggleOverlay(showTransitionOverlay)
      })

      // Cleanup
      return () => {
        if (style.parentNode) {
          document.head.removeChild(style)
        }
        if (overlay.parentNode) {
          document.body.removeChild(overlay)
        }
        unsubscribe()
      }
    }
  }, [])

  // Simple implementation of a reactive effect (like in Vue or React)
  function watchEffect(effect: () => void): () => void {
    effect()
    return () => {} // Return empty cleanup function
  }

  // Handle scroll restoration on route change
  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsNavigating(true)

      // Show transition overlay immediately
      setShowTransitionOverlay(true)

      // Freeze the page - this will prevent any visible scrolling
      document.body.style.overflow = 'hidden'
    }

    const handleRouteChangeComplete = () => {
      // Scroll to top immediately before showing the new page
      window.scrollTo(0, 0)

      // Small delay before removing overlay to ensure smooth transition
      setTimeout(() => {
        // Unfreeze the page
        document.body.style.overflow = ''

        // Hide the overlay
        setShowTransitionOverlay(false)
        setIsNavigating(false)

        // Reset the popstate flag
        isPopStateNav.current = false
      }, 50) // Very short delay - just enough to mask the transition
    }

    const handleRouteChangeError = () => {
      // Unfreeze the page
      document.body.style.overflow = ''

      // Hide the overlay
      setShowTransitionOverlay(false)
      setIsNavigating(false)

      // Reset the popstate flag
      isPopStateNav.current = false
    }

    // Handle back/forward button navigation
    const handlePopState = () => {
      // Mark that we're handling a popstate navigation
      isPopStateNav.current = true

      // Show overlay immediately
      setShowTransitionOverlay(true)

      // Freeze the page
      document.body.style.overflow = 'hidden'
    }

    // Add event listeners
    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)
    router.events.on('routeChangeError', handleRouteChangeError)
    window.addEventListener('popstate', handlePopState)

    // Clean up event listeners
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
      router.events.off('routeChangeError', handleRouteChangeError)
      window.removeEventListener('popstate', handlePopState)
    }
  }, [router])

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
