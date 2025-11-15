// pages/privacy.tsx
import type { NextPage } from 'next';
import BaseLayoutTemplate from '@/core/layout/templates/BaseLayoutTemplate';
import CompatSEO from '@/features/seo/components/CompatSEO';
import Breadcrumbs from '@/features/seo/components/Breadcrumbs';
import Link from 'next/link';
import { SeoInputMetadata } from '@/features/seo/generateSEOMetadata';

const seoMetadata: SeoInputMetadata = {
  title: 'Privacy Policy',
  description:
    'Learn how we collect, use, and protect your personal information in compliance with GDPR and CCPA regulations.',
  canonical: '/privacy',
};

const Privacy: NextPage = () => {
  // Get the current date to display when the policy was last updated
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <BaseLayoutTemplate>
      <CompatSEO {...seoMetadata} />

      {/* Page Header */}
      <div className="bg-indigo-700 text-white">
        <div className="container-wide py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-100">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-indigo-200 max-w-3xl">
            This policy outlines how I collect, use, and protect your
            information.
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="container-wide">
        <Breadcrumbs
          items={[
            { href: '/', label: 'Home' },
            { href: '/privacy', label: 'Privacy Policy', isCurrent: true },
          ]}
        />
      </div>

      {/* Privacy Content */}
      <section className="py-12 bg-white">
        <div className="container-narrow">
          <div className="prose max-w-none">
            <div className="bg-gray-50 p-4 rounded-lg mb-8">
              <p className="text-sm text-gray-600">
                <strong>Last Updated:</strong> {lastUpdated}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                This Privacy Policy complies with the General Data Protection
                Regulation (GDPR) and the California Consumer Privacy Act
                (CCPA).
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-700 mb-4">
              This Privacy Policy describes how I collect, use, process, and
              disclose your information, including personal information, in
              conjunction with your access to and use of this portfolio website.
            </p>
            <p className="text-gray-700 mb-8">
              By accessing or using the website, you are consenting to the
              collection, use, and disclosure of your information as described
              in this Privacy Policy. If you do not agree with anything in this
              Privacy Policy, you should not use the website.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              2. Information I Collect
            </h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              2.1 Information You Provide
            </h3>
            <p className="text-gray-700 mb-4">
              I collect information you directly provide to me, such as when
              you:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Fill out the contact form</li>
              <li>Send an email through the provided contact details</li>
              {/* <li>Subscribe to newsletters (if applicable)</li>
              <li>Apply for opportunities listed on this website</li> */}
            </ul>
            <p className="text-gray-700 mb-4">This information may include:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Your Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company or organization</li>
              <li>Message content or inquiries</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              2.2 Information Collected Automatically
            </h3>
            <p className="text-gray-700 mb-4">
              When you visit this website, certain information is collected
              automatically, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-8">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring website</li>
              <li>Pages visited and time spent on pages</li>
              <li>Date and time of your visit</li>
              <li>Language preferences</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              3. How I Use Your Information
            </h2>
            <p className="text-gray-700 mb-4">
              I use the information I collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-8">
              <li>To respond to your inquiries and contact requests</li>
              <li>
                To communicate with you about potential collaboration or
                employment opportunities
              </li>
              <li>
                To improve the website's content, functionality, and user
                experience
              </li>
              <li>To monitor and analyze website usage and trends</li>
              <li>To detect, prevent, and address technical issues</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              4. Cookies and Similar Technologies
            </h2>
            <p className="text-gray-700 mb-4">
              This website uses cookies and similar tracking technologies to
              track activity on the website and hold certain information to
              enhance your experience.
            </p>
            <p className="text-gray-700 mb-4">
              Cookies are files with small amounts of data which may include an
              anonymous unique identifier. They are sent to your browser from a
              website and stored on your device.
            </p>
            <p className="text-gray-700 mb-4">
              The types of cookies used on this website include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>
                <strong>Essential cookies:</strong> Required for the website to
                function properly
              </li>
              <li>
                <strong>Analytics cookies:</strong> Help understand how visitors
                interact with the website by collecting and reporting
                information anonymously
              </li>
              <li>
                <strong>Performance cookies:</strong> Used to enhance the
                performance and functionality of the website
              </li>
            </ul>
            <p className="text-gray-700 mb-8">
              You can instruct your browser to refuse all cookies or to indicate
              when a cookie is being sent. However, if you do not accept
              cookies, you may not be able to use some portions of this website.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              5. Data Sharing and Disclosure
            </h2>
            <p className="text-gray-700 mb-4">
              I do not sell, trade, or otherwise transfer your personal
              information to outside parties. However, I may share your
              information with trusted third parties who assist in operating
              this website or servicing you, so long as those parties agree to
              keep this information confidential.
            </p>
            <p className="text-gray-700 mb-4">
              These third parties may include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Website hosting providers</li>
              <li>Analytics providers (such as Google Analytics)</li>
              <li>Email service providers</li>
              <li>Form processing services</li>
            </ul>
            <p className="text-gray-700 mb-8">
              I may also release your information when I believe release is
              appropriate to comply with the law, enforce my site policies, or
              protect my or others' rights, property, or safety.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              6. Data Retention
            </h2>
            <p className="text-gray-700 mb-8">
              I will retain your personal information only for as long as is
              necessary for the purposes set out in this Privacy Policy. I will
              retain and use your information to the extent necessary to comply
              with legal obligations, resolve disputes, and enforce agreements.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              7. Your Data Protection Rights
            </h2>
            <p className="text-gray-700 mb-4">
              Depending on your location, you may have the following data
              protection rights:
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              7.1 Under GDPR (For EU Residents)
            </h3>
            <p className="text-gray-700 mb-4">
              If you are a resident of the European Economic Area (EEA), you
              have certain data protection rights, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>
                <strong>Right to access:</strong> You have the right to request
                copies of your personal data.
              </li>
              <li>
                <strong>Right to rectification:</strong> You have the right to
                request that I correct any information you believe is inaccurate
                or complete information you believe is incomplete.
              </li>
              <li>
                <strong>Right to erasure:</strong> You have the right to request
                that I erase your personal data, under certain conditions.
              </li>
              <li>
                <strong>Right to restrict processing:</strong> You have the
                right to request that I restrict the processing of your personal
                data, under certain conditions.
              </li>
              <li>
                <strong>Right to object to processing:</strong> You have the
                right to object to the processing of your personal data, under
                certain conditions.
              </li>
              <li>
                <strong>Right to data portability:</strong> You have the right
                to request that I transfer the data I have collected to another
                organization, or directly to you, under certain conditions.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              7.2 Under CCPA (For California Residents)
            </h3>
            <p className="text-gray-700 mb-4">
              If you are a resident of California, you have the following rights
              under the California Consumer Privacy Act (CCPA):
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>
                <strong>Right to know:</strong> You have the right to request
                that I disclose information about the personal information
                collected, used, disclosed, and sold.
              </li>
              <li>
                <strong>Right to delete:</strong> You have the right to request
                the deletion of your personal information collected or
                maintained by me.
              </li>
              <li>
                <strong>Right to opt-out of sale:</strong> You have the right to
                opt-out of the sale of your personal information. However, I do
                not sell personal information.
              </li>
              <li>
                <strong>Right to non-discrimination:</strong> You have the right
                not to be discriminated against for exercising any of your CCPA
                rights.
              </li>
            </ul>

            <p className="text-gray-700 mb-8">
              To exercise any of these rights, please contact me using the
              information provided in the "Contact Information" section below.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              8. Security of Your Information
            </h2>
            <p className="text-gray-700 mb-8">
              I am committed to ensuring the security of your personal
              information. I use commercially reasonable physical, technical,
              and administrative safeguards to protect your information from
              unauthorized access, use, or disclosure. However, please be aware
              that no method of transmission over the internet or method of
              electronic storage is 100% secure and I cannot guarantee the
              absolute security of your data.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              9. International Data Transfers
            </h2>
            <p className="text-gray-700 mb-8">
              Your information may be transferred to and maintained on computers
              located outside of your state, province, country, or other
              governmental jurisdiction where the data protection laws may
              differ from those in your jurisdiction. If you are located outside
              the United States and choose to provide information to me, please
              note that I transfer the data to the United States and process it
              there. Your consent to this Privacy Policy followed by your
              submission of such information represents your agreement to that
              transfer.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              10. Children's Privacy
            </h2>
            <p className="text-gray-700 mb-8">
              This website is not intended for individuals under the age of 16.
              I do not knowingly collect personally identifiable information
              from children under 16. If you are a parent or guardian and you
              are aware that your child has provided me with personal
              information, please contact me so that I can take necessary
              actions.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              11. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 mb-8">
              I may update this Privacy Policy from time to time. I will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "Last Updated" date at the top of this page. You
              are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              12. Contact Information
            </h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, or if you
              would like to exercise any of your data protection rights, please
              contact me at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> giorgia.faedda@gfanalytics.se
              </p>
              {/* <p className="text-gray-700">
                <strong>Address:</strong> Malmö, Sweden
              </p> */}
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </section>
    </BaseLayoutTemplate>
  );
};

export default Privacy;
