# Legal Documentation for Portfolio Website

This document provides an overview of the legal and privacy components implemented in this data analyst portfolio website. These components are designed to comply with major privacy regulations including GDPR (EU) and CCPA (California).

## Components Overview

1. **Privacy Policy Page** (`/pages/privacy.tsx`)
   - Comprehensive privacy policy compliant with GDPR and CCPA
   - Explains data collection, usage, rights, and more
   - Accessible via footer link

2. **Terms of Service Page** (`/pages/terms.tsx`)
   - Outlines the terms governing website usage
   - Covers intellectual property, limitations, and user responsibilities
   - Accessible via footer link

3. **Cookie Consent Banner** (`/components/ui/cookie_consent.tsx`)
   - GDPR-compliant cookie consent mechanism
   - Allows users to choose which types of cookies they accept
   - Implemented across all pages via `_app.tsx`

4. **Sitemap Configuration** (`next-sitemap.config.js`)
   - Ensures legal pages are properly indexed
   - Included in robots.txt generation

## Implementation Details

### Privacy Policy

The privacy policy has been created with consideration for:
- Data collection methods and purposes
- User rights (access, correction, deletion, etc.)
- Data retention policies
- Cookie usage
- Third-party disclosures
- International transfers
- Security measures
- Contact information

**Important Note:** You must customize the privacy policy to accurately reflect your specific data processing activities. This template serves as a foundation but should be reviewed by a legal professional familiar with data protection laws in your jurisdiction.

### Terms of Service

The terms of service cover:
- Website usage restrictions
- Intellectual property rights
- User responsibilities
- Warranties and liability limitations
- Governing law and jurisdiction
- Modification terms

**Important Note:** As with the privacy policy, the terms should be reviewed by a legal professional to ensure they accurately reflect your business practices and comply with applicable laws.

### Cookie Consent

The cookie banner allows for:
- Accepting all cookies
- Rejecting non-essential cookies
- Selecting specific cookie categories
- Saving preferences to localStorage

**Technical Note:** The consent banner includes hooks for enabling/disabling analytics and preference cookies based on user choices. You'll need to implement the specific logic for your analytics platform (e.g., Google Analytics, Matomo) in the appropriate functions.

## Customization Guide

1. **Personal Information**
   - Replace all placeholder information such as:
     - Email address
     - Phone number
     - Physical address
     - Company/personal name
     - Website name
     - Social media links

2. **Cookie Categories**
   - Update the cookie categories and descriptions based on the actual cookies your site uses
   - Implement the logic to respect these preferences in your analytics/tracking code

3. **Legal Jurisdiction**
   - Update the governing law section to indicate your specific jurisdiction

4. **Data Collection Specifics**
   - Modify the data collection sections to precisely reflect what data you collect and how you use it
   - Update retention periods to match your actual practices

5. **Third Parties**
   - List any specific third-party services you use (analytics, hosting, etc.)

6. **Dates**
   - The last updated date is set to display the current date - ensure this is updated whenever you make significant changes

## Recommended Legal Review

While these templates provide a solid foundation for compliance with GDPR and CCPA, they are not substitutes for professional legal advice. It's strongly recommended to have these documents reviewed by a legal professional who specializes in privacy law and is familiar with the specific regulations applicable to your jurisdiction and business activities.

## Maintenance and Updates

Privacy laws continue to evolve globally. Regularly review and update your privacy policy and terms to ensure ongoing compliance. Set a reminder to review these documents at least annually or whenever:

1. You change how you collect or process personal data
2. You introduce new features or services
3. Relevant laws or regulations are updated
4. You engage new third-party service providers

## Implementation Notes

The components have been designed to match the existing design system of your portfolio website, using the same color schemes, typography, and UI patterns. They are responsive and accessible, ensuring a consistent user experience across devices.

---

This documentation was created on: March 13, 2025