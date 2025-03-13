// components/ui/cookie_consent.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface CookieConsentProps {
  privacyPolicyUrl?: string;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ 
  privacyPolicyUrl = '/privacy' 
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [preferences, setPreferences] = useState<{
    necessary: boolean;
    analytics: boolean;
    preferences: boolean;
  }>({
    necessary: true, // Always required
    analytics: false,
    preferences: false,
  });
  const [showPreferences, setShowPreferences] = useState<boolean>(false);

  useEffect(() => {
    // Check if user has already set cookie preferences
    const consentStatus = localStorage.getItem('cookie-consent-status');
    
    // If no consent has been saved yet, show the banner after a short delay
    if (!consentStatus) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      
      return () => clearTimeout(timer);
    }
    
    // If consent exists, parse the saved preferences
    if (consentStatus) {
      try {
        const savedPreferences = JSON.parse(consentStatus);
        setPreferences(savedPreferences);
      } catch (e) {
        console.error('Error parsing saved cookie preferences', e);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allConsent = {
      necessary: true,
      analytics: true,
      preferences: true,
    };
    
    localStorage.setItem('cookie-consent-status', JSON.stringify(allConsent));
    setPreferences(allConsent);
    setIsVisible(false);
    
    // You would typically enable your analytics and other cookies here
    // For example: enableGoogleAnalytics(), enablePreferenceCookies(), etc.
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent-status', JSON.stringify(preferences));
    setIsVisible(false);
    setShowPreferences(false);
    
    // Based on the preferences, enable or disable various cookie types
    // For example:
    // if (preferences.analytics) enableGoogleAnalytics();
    // if (preferences.preferences) enablePreferenceCookies();
  };

  const handleRejectAll = () => {
    const minimalConsent = {
      necessary: true, // Always required
      analytics: false,
      preferences: false,
    };
    
    localStorage.setItem('cookie-consent-status', JSON.stringify(minimalConsent));
    setPreferences(minimalConsent);
    setIsVisible(false);
    
    // Ensure analytics and preference cookies are disabled
    // For example: disableGoogleAnalytics(), disablePreferenceCookies(), etc.
  };

  const handlePreferenceChange = (key: keyof typeof preferences) => {
    // Don't allow changing necessary cookies
    if (key === 'necessary') return;
    
    setPreferences({
      ...preferences,
      [key]: !preferences[key],
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-700 shadow-lg z-[1000] border-t border-gray-200">
      <div className="container-wide py-3 px-2 sm:px-4 md:py-4">
        {!showPreferences ? (
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="mb-4 sm:mb-0 sm:mr-4 md:mr-8">
              <p className="text-gray-300 text-sm md:text-base">
                This website uses cookies to enhance your browsing experience and provide personalized services. 
                By continuing to use this site, you consent to our use of cookies in accordance with our{' '}
                <Link href={privacyPolicyUrl} className="text-gray-300 hover:text-gray-50 underline">
                  Privacy Policy
                </Link>.
              </p>
            </div>
            <div className="flex flex-wrap xs:flex-nowrap sm:flex-nowrap gap-2 whitespace-nowrap">
              <button
                onClick={handleRejectAll}
                className="flex-1 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              >
                Reject All
              </button>
              <button
                onClick={() => setShowPreferences(true)}
                className="flex-1 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-indigo-700 bg-indigo-100 rounded-md hover:bg-indigo-200 transition-colors"
              >
                Preferences
              </button>
              <button
                onClick={handleAcceptAll}
                className="flex-1 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-300 mb-2">Cookie Preferences</h3>
              <p className="text-sm text-gray-300">
                You can choose which categories of cookies you want to allow. Click on the category name for more information.
              </p>
            </div>
            
            <div className="mb-4 space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                <div>
                  <h4 className="font-medium text-gray-800">Necessary Cookies</h4>
                  <p className="text-xs text-gray-600">
                    These cookies are essential for the website to function properly and cannot be disabled.
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="necessary-cookies"
                    checked={preferences.necessary}
                    disabled
                    className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out cursor-not-allowed"
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                <div>
                  <h4 className="font-medium text-gray-800">Analytics Cookies</h4>
                  <p className="text-xs text-gray-600">
                    These cookies help me understand how visitors interact with the website, allowing me to improve user experience.
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="analytics-cookies"
                    checked={preferences.analytics}
                    onChange={() => handlePreferenceChange('analytics')}
                    className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out cursor-pointer"
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                <div>
                  <h4 className="font-medium text-gray-800">Preference Cookies</h4>
                  <p className="text-xs text-gray-600">
                    These cookies allow the website to remember choices you make to give you better functionality and personal features.
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="preference-cookies"
                    checked={preferences.preferences}
                    onChange={() => handlePreferenceChange('preferences')}
                    className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out cursor-pointer"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowPreferences(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;