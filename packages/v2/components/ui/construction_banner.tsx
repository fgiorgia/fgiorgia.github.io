// components/ui/construction_banner.tsx
import React, { useState, useEffect } from 'react';
import { Hammer, X } from 'lucide-react';
import Link from 'next/link';

const ConstructionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [showButton, setShowButton] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [cookieBannerVisible, setCookieBannerVisible] = useState<boolean>(true);
  
  // Check if banners have been dismissed before
  useEffect(() => {
    // We only want to check localStorage after component is mounted
    // to avoid hydration mismatch
    const bannerDismissed = localStorage.getItem('construction-banner-dismissed');
    const cookieConsentSet = localStorage.getItem('cookie-consent-status');
    
    if (bannerDismissed === 'true') {
      setIsVisible(false);
      setShowButton(true);
    } else {
      setIsVisible(true);
      setShowButton(false);
    }
    
    // Check if cookie consent has been set
    setCookieBannerVisible(!cookieConsentSet);
    
    setIsLoaded(true);
    
    // Set up observer to detect when cookie banner changes
    const observeDOM = () => {
      const observer = new MutationObserver((mutations) => {
        // Check the DOM after mutations to see if cookie banner exists
        setTimeout(() => {
          const cookieBannerExists = document.querySelector('[class*="fixed bottom-0"][class*="bg-slate-800"], [class*="fixed bottom-0"][class*="bg-gray-700"]');
          setCookieBannerVisible(!!cookieBannerExists);
        }, 100);
      });
      
      // Observe changes to the body element
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
      
      return observer;
    };
    
    // Start observing
    const observer = observeDOM();
    
    // Also add event listener for storage changes (in case cookie settings are changed in another tab)
    const handleStorageChange = () => {
      const cookieConsentSet = localStorage.getItem('cookie-consent-status');
      setCookieBannerVisible(!cookieConsentSet);
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Clean up
    return () => {
      observer.disconnect();
      window.removeEventListener('storage', handleStorageChange);
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

  // Don't render anything during SSR/first render to avoid hydration mismatch
  if (!isLoaded) {
    return null;
  }

  // Determine position based on cookie banner visibility
  const bannerPosition = cookieBannerVisible ? 'bottom-20' : 'bottom-0';
  const buttonPosition = cookieBannerVisible ? 'bottom-20' : 'bottom-18';

  return (
    <>
      {isVisible && (
        <div className={`fixed ${bannerPosition} left-0 right-0 bg-indigo-700 shadow-lg z-[1005] border border-indigo-500 transition-all duration-300`}>
          <div className="container-wide py-3 px-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="mb-3 sm:mb-0 sm:mr-4 flex items-center">
                <Hammer size={20} className="text-indigo-200 mr-3 flex-shrink-0" />
                <p className="text-white text-sm">
                  <span className="font-medium">This website is under construction!</span> Some sections and projects are still being developed. Thank you for your patience.
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

      {/* Button to restore the banner - positioned to match the banner's position but not block cookie settings */}
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