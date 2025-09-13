import React, { useState, useEffect } from 'react';
import { Hammer, X } from 'lucide-react';
import Link from 'next/link';

const ConstructionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [showButton, setShowButton] = useState<boolean>(false);
  const [initialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    // Only run this effect on client-side
    if (typeof window === 'undefined') return;

    // Initial check - run after a small delay to ensure DOM is ready
    setTimeout(checkBannerState, 300);
    setInitialized(true);

    // Function to check and update banner state
    function checkBannerState() {
      // Check if cookie consent exists
      const cookieConsentSet = !!localStorage.getItem('cookie-consent-status');

      if (!cookieConsentSet) {
        // No consent yet, hide both
        setIsVisible(false);
        setShowButton(false);
        return;
      }

      // Check if any cookie-related UI is visible
      const cookieUIVisible =
        document.querySelector(
          '[class*="fixed bottom-0"][class*="bg-gray-700"], ' + // Cookie banner
            '[class*="fixed bottom-0"][class*="bg-slate-800"], ' + // Cookie banner (alternate)
            '[class*="fixed inset-0"][class*="bg-slate-800"], ' + // Preferences modal
            '[class*="fixed inset-0"][class*="z-[1001]"]', // Any modal with high z-index
        ) !== null;

      if (cookieUIVisible) {
        // Cookie UI is visible, hide construction UI
        setIsVisible(false);
        setShowButton(false);
        return;
      }

      // Cookie consent set and no cookie UI visible - check if banner was dismissed
      const bannerDismissed =
        localStorage.getItem('construction-banner-dismissed') === 'true';

      if (bannerDismissed) {
        setIsVisible(false);
        setShowButton(true);
      } else {
        setIsVisible(true);
        setShowButton(false);
      }
    }

    // Handler for cookie consent updates
    const handleCookieUpdate = () => {
      // Use a delay to ensure DOM is updated
      setTimeout(checkBannerState, 300);
    };

    // Listen for custom event from cookie consent component
    window.addEventListener('cookieConsentUpdated', handleCookieUpdate);

    // Set up MutationObserver to watch for DOM changes
    const observer = new MutationObserver((mutations) => {
      // Only check if the DOM has changed significantly
      if (
        mutations.some(
          (m) => m.addedNodes.length > 0 || m.removedNodes.length > 0,
        )
      ) {
        // Check after a short delay to ensure DOM is settled
        setTimeout(() => {
          const cookieUIVisible =
            document.querySelector(
              '[class*="fixed bottom-0"][class*="bg-gray-700"], ' +
                '[class*="fixed bottom-0"][class*="bg-slate-800"], ' +
                '[class*="fixed inset-0"][class*="bg-slate-800"], ' +
                '[class*="fixed inset-0"][class*="z-[1001]"]',
            ) !== null;

          if (
            !cookieUIVisible &&
            localStorage.getItem('cookie-consent-status')
          ) {
            checkBannerState();
          }
        }, 150);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
    });

    // Listen for storage changes (for cross-tab consistency)
    const handleStorageChange = (e: StorageEvent) => {
      if (
        e.key === 'cookie-consent-status' ||
        e.key === 'construction-banner-dismissed'
      ) {
        setTimeout(checkBannerState, 300);
      }
    };
    window.addEventListener('storage', handleStorageChange);

    // Cleanup
    return () => {
      window.removeEventListener('cookieConsentUpdated', handleCookieUpdate);
      window.removeEventListener('storage', handleStorageChange);
      observer.disconnect();
    };
  }, []);

  const dismissBanner = () => {
    setIsVisible(false);
    setShowButton(true);
    localStorage.setItem('construction-banner-dismissed', 'true');
  };

  const showBanner = () => {
    setIsVisible(true);
    setShowButton(false);
    localStorage.setItem('construction-banner-dismissed', 'false');
  };

  // Don't render anything until initialized
  if (!initialized) {
    return null;
  }

  // Check for cookie banner at bottom to determine positioning
  const cookieBannerAtBottom =
    typeof window !== 'undefined' &&
    document.querySelector(
      '[class*="fixed bottom-0"][class*="bg-gray-700"], [class*="fixed bottom-0"][class*="bg-slate-800"]',
    ) !== null;

  const bannerPosition = cookieBannerAtBottom ? 'bottom-20' : 'bottom-0';
  const buttonPosition = cookieBannerAtBottom ? 'bottom-20' : 'bottom-18';

  return (
    <>
      {isVisible && (
        <div
          className={`fixed ${bannerPosition} left-0 right-0 bg-indigo-700 shadow-lg z-[1005] border border-indigo-200 transition-all duration-300`}
        >
          <div className="container-wide py-3 px-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="mb-3 sm:mb-0 sm:mr-4 flex items-center">
                <Hammer
                  size={20}
                  className="text-indigo-200 mr-3 flex-shrink-0"
                />
                <p className="text-white text-sm">
                  <span className="font-medium">
                    This website is under construction!
                  </span>{' '}
                  Some sections and projects are still being developed. Thank
                  you for your patience.
                </p>
              </div>
              <div className="flex items-center space-x-4 self-end sm:self-auto">
                <Link
                  href="/construction"
                  className="text-xs px-3 py-1.5 bg-indigo-600 text-white font-medium rounded hover:bg-indigo-500 transition-colors whitespace-nowrap"
                >
                  View Progress
                </Link>
                <button
                  onClick={dismissBanner}
                  className="text-indigo-200 hover:text-white transition-colors"
                  aria-label="Dismiss notification"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showButton && (
        <button
          onClick={showBanner}
          className={`fixed ${buttonPosition} right-4 p-3 bg-indigo-600 rounded-full shadow-lg z-[1005] border border-indigo-500 hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300`}
          aria-label="Show construction notice"
          title="Show construction notice"
        >
          <Hammer size={20} className="text-white" />
        </button>
      )}
    </>
  );
};

export default ConstructionBanner;
