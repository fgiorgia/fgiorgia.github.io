// components/ui/cookie_consent.tsx
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X, ChevronRight } from "lucide-react";

interface CookieConsentProps {
  privacyPolicyUrl?: string;
}

const CookieConsent: React.FC<CookieConsentProps> = ({
  privacyPolicyUrl = "/privacy",
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [showPreferences, setShowPreferences] = useState<boolean>(false);
  const [showSettingsButton, setShowSettingsButton] = useState<boolean>(false);
  const [expandedSections, setExpandedSections] = useState<{
    necessary: boolean;
    analytics: boolean;
    preferences: boolean;
  }>({
    necessary: true,
    analytics: false,
    preferences: false,
  });
  const [preferences, setPreferences] = useState<{
    necessary: boolean;
    analytics: boolean;
    preferences: boolean;
  }>({
    necessary: true, // Always required
    analytics: false,
    preferences: false,
  });

  useEffect(() => {
    // Check if user has already set cookie preferences
    const consentStatus = localStorage.getItem("cookie-consent-status");

    // If no consent has been saved yet, show the banner after a short delay
    if (!consentStatus) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);

      return () => clearTimeout(timer);
    } else {
      // If consent exists, show the settings button and parse the saved preferences
      setShowSettingsButton(true);
      try {
        const savedPreferences = JSON.parse(consentStatus);
        setPreferences(savedPreferences);
      } catch (e) {
        console.error("Error parsing saved cookie preferences", e);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allConsent = {
      necessary: true,
      analytics: true,
      preferences: true,
    };

    localStorage.setItem("cookie-consent-status", JSON.stringify(allConsent));
    setPreferences(allConsent);
    setIsVisible(false);
    setShowPreferences(false);
    setShowSettingsButton(true);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent-status", JSON.stringify(preferences));
    setIsVisible(false);
    setShowPreferences(false);
    setShowSettingsButton(true);
  };

  const handleRejectAll = () => {
    const minimalConsent = {
      necessary: true, // Always required
      analytics: false,
      preferences: false,
    };

    localStorage.setItem(
      "cookie-consent-status",
      JSON.stringify(minimalConsent)
    );
    setPreferences(minimalConsent);
    setIsVisible(false);
    setShowPreferences(false);
    setShowSettingsButton(true);
  };

  const handlePreferenceChange = (key: keyof typeof preferences) => {
    // Don't allow changing necessary cookies
    if (key === "necessary") return;

    setPreferences({
      ...preferences,
      [key]: !preferences[key],
    });
  };

  const toggleSection = (key: keyof typeof expandedSections) => {
    setExpandedSections({
      ...expandedSections,
      [key]: !expandedSections[key],
    });
  };

  const openPreferences = () => {
    setShowPreferences(true);
  };

  const reopenCookieSettings = () => {
    setIsVisible(true);
    setShowPreferences(true);
  };

  const handlePreferenceClose = () => {
    setShowPreferences(false);
    // If initial view, go back to banner, otherwise close completely
    if (!localStorage.getItem("cookie-consent-status")) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  if (!isVisible && !showSettingsButton) return null;

  return (
    <>
      {/* Main Cookie Consent Banner (Bottom) */}
      {isVisible && !showPreferences && (
        <div className="fixed bottom-0 left-0 w-full bg-gray-700 shadow-lg z-[1000] border-t border-gray-400">
          <div className="container-wide py-3 px-2 sm:px-4 md:py-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="mb-4 sm:mb-0 sm:mr-4 md:mr-8">
                <p className="text-gray-300 text-sm md:text-base">
                  This website uses cookies to enhance your browsing experience
                  and provide personalized services. By continuing to use this
                  site, you consent to our use of cookies in accordance with our{" "}
                  <Link
                    href={privacyPolicyUrl}
                    className="text-gray-300 hover:text-gray-50 underline"
                  >
                    Privacy Policy
                  </Link>
                  .
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
                  onClick={openPreferences}
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
          </div>
        </div>
      )}

      {/* Preferences Modal (centered with transparent background) */}
      {(showPreferences || (isVisible && showPreferences)) && (
        <div
          className="fixed inset-0 z-[1001] overflow-y-auto bg-slate-800/70 flex items-center justify-center"
          onClick={(e) => {
            console.log('backdrop click')
            handlePreferenceClose()
          }}
        >
          <div 
            className="relative max-w-lg w-full mx-4 bg-white rounded-lg shadow-lg"
            onClick={(e) => {
              e.stopPropagation(); // Prevent clicks inside the modal from closing it
            }}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800">
                Customize Consent Preferences
              </h2>
              <button
                onClick={handlePreferenceClose}
                className="text-gray-400 hover:text-gray-500"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="px-6 py-4">
              <p className="text-gray-600 text-sm mb-4">
                We use cookies to help you navigate efficiently and perform
                certain functions. You will find detailed information about all
                cookies under each consent category below.
              </p>

              {/* Cookie Categories */}
              <div className="space-y-3">
                {/* Necessary Cookies */}
                <div className="border border-gray-200 rounded-md overflow-hidden">
                  <div
                    className="bg-gray-50 px-4 py-3 flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSection("necessary")}
                  >
                    <div className="flex items-center space-x-2">
                      <ChevronRight
                        size={18}
                        className={`text-gray-400 transition-transform ${
                          expandedSections.necessary ? "rotate-90" : ""
                        }`}
                      />
                      <span className="font-medium">Necessary</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-600 text-sm mr-3">
                        Always Active
                      </span>
                      <input
                        type="checkbox"
                        checked={preferences.necessary}
                        disabled
                        className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded cursor-not-allowed"
                      />
                    </div>
                  </div>

                  {expandedSections.necessary && (
                    <div className="px-4 py-3 border-t border-gray-200">
                      <p className="text-sm text-gray-600">
                        Necessary cookies are required to enable the basic
                        features of this site, such as providing secure log-in
                        or adjusting your consent preferences. These cookies do
                        not store any personally identifiable data.
                      </p>
                    </div>
                  )}
                </div>

                {/* Analytics Cookies */}
                <div className="border border-gray-200 rounded-md overflow-hidden">
                  <div
                    className="bg-gray-50 px-4 py-3 flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSection("analytics")}
                  >
                    <div className="flex items-center space-x-2">
                      <ChevronRight
                        size={18}
                        className={`text-gray-400 transition-transform ${
                          expandedSections.analytics ? "rotate-90" : ""
                        }`}
                      />
                      <span className="font-medium">Analytics</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={() => handlePreferenceChange("analytics")}
                      className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded"
                    />
                  </div>

                  {expandedSections.analytics && (
                    <div className="px-4 py-3 border-t border-gray-200">
                      <p className="text-sm text-gray-600">
                        Analytics cookies help website owners understand how
                        visitors interact with websites by collecting and
                        reporting information anonymously. These cookies help
                        measure how users interact with web page content.
                      </p>
                    </div>
                  )}
                </div>

                {/* Functional Cookies */}
                <div className="border border-gray-200 rounded-md overflow-hidden">
                  <div
                    className="bg-gray-50 px-4 py-3 flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSection("preferences")}
                  >
                    <div className="flex items-center space-x-2">
                      <ChevronRight
                        size={18}
                        className={`text-gray-400 transition-transform ${
                          expandedSections.preferences ? "rotate-90" : ""
                        }`}
                      />
                      <span className="font-medium">Functional</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.preferences}
                      onChange={() => handlePreferenceChange("preferences")}
                      className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded"
                    />
                  </div>

                  {expandedSections.preferences && (
                    <div className="px-4 py-3 border-t border-gray-200">
                      <p className="text-sm text-gray-600">
                        Functional cookies help perform certain functionalities
                        like sharing the content of the website on social media
                        platforms, collecting feedback, and other third-party
                        features.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-gray-50 flex flex-col sm:flex-row justify-between items-center border-t border-gray-200">
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
              >
                Reject All
              </button>

              <div className="space-x-2">
                <button
                  onClick={handleSavePreferences}
                  className="px-4 py-2 text-xs sm:text-sm font-medium text-indigo-700 bg-indigo-100 rounded-md hover:bg-indigo-200 transition-colors"
                >
                  Save My Preferences
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-4 py-2 text-xs sm:text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Settings Button (visible after consent is given) */}
      {!isVisible && showSettingsButton && !showPreferences && (
        <button
          onClick={reopenCookieSettings}
          className="fixed bottom-4 right-4 p-3 bg-white rounded-full shadow-lg z-[1000] border border-gray-200 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Cookie Settings"
          title="Change Cookie Settings"
        >
          <Cookie size={20} className="text-blue-600" />
        </button>
      )}
    </>
  );
};

export default CookieConsent;
