// pages/terms.tsx
import React from 'react';
import type { NextPage } from 'next';
import BaseLayout from '@/features/layout/components/BaseLayout';
import SEO from '@/features/seo/components/SEO';
import Breadcrumbs from '@/features/seo/components/Breadcrumbs';
import Link from 'next/link';

const Terms: NextPage = () => {
  // Get the current date to display when the terms were last updated
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <BaseLayout>
      <SEO
        title="Terms of Service"
        description="The terms and conditions governing your use of this website and the services provided."
        canonical="/terms"
      />

      {/* Page Header */}
      <div className="bg-indigo-700 text-white">
        <div className="container-wide py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-100">
            Terms of Service
          </h1>
          <p className="mt-4 text-lg text-indigo-200 max-w-3xl">
            Please read these terms carefully before using this website.
          </p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="container-wide">
        <Breadcrumbs
          items={[
            { href: '/', label: 'Home' },
            { href: '/terms', label: 'Terms of Service', isCurrent: true },
          ]}
        />
      </div>

      {/* Terms Content */}
      <section className="py-12 bg-white">
        <div className="container-narrow">
          <div className="prose max-w-none">
            <div className="bg-gray-50 p-4 rounded-lg mb-8">
              <p className="text-sm text-gray-600">
                <strong>Last Updated:</strong> {lastUpdated}
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-700 mb-4">
              Welcome to my portfolio website. These Terms of Service ("Terms")
              govern your use of this website, including all content,
              functionality, and services offered on or through the website.
            </p>
            <p className="text-gray-700 mb-4">
              By using this website, you accept and agree to be bound by these
              Terms of Service. If you do not agree to these Terms, you must not
              access or use this website.
            </p>
            <p className="text-gray-700 mb-8">
              I may revise and update these Terms from time to time at my sole
              discretion. All changes are effective immediately when posted.
              Your continued use of this website following the posting of
              revised Terms means that you accept and agree to the changes.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              2. Accessing the Website
            </h2>
            <p className="text-gray-700 mb-4">
              I reserve the right to withdraw or amend this website, and any
              service or material provided on the website, in my sole discretion
              without notice. I will not be liable if, for any reason, all or
              any part of the website is unavailable at any time or for any
              period.
            </p>
            <p className="text-gray-700 mb-8">
              From time to time, I may restrict access to some parts of the
              website, or the entire website, to users.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              3. Intellectual Property Rights
            </h2>
            <p className="text-gray-700 mb-4">
              This website and its entire contents, features, and functionality
              (including but not limited to all information, software, text,
              displays, images, video, and audio, and the design, selection, and
              arrangement thereof) are owned by me or my licensors and are
              protected by copyright, trademark, patent, trade secret, and other
              intellectual property or proprietary rights laws.
            </p>
            <p className="text-gray-700 mb-8">
              These Terms permit you to use the website for your personal,
              non-commercial use only. You must not reproduce, distribute,
              modify, create derivative works of, publicly display, publicly
              perform, republish, download, store, or transmit any of the
              material on this website, except as follows:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-8">
              <li>
                Your computer may temporarily store copies of such materials in
                RAM incidental to your accessing and viewing those materials.
              </li>
              <li>
                You may store files that are automatically cached by your Web
                browser for display enhancement purposes.
              </li>
              <li>
                You may print or download one copy of a reasonable number of
                pages of the website for your own personal, non-commercial use
                and not for further reproduction, publication, or distribution.
              </li>
              <li>
                If I provide social media features with certain content, you may
                take such actions as are enabled by such features.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              4. Prohibited Uses
            </h2>
            <p className="text-gray-700 mb-4">
              You may use the website only for lawful purposes and in accordance
              with these Terms. You agree not to use the website:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>
                In any way that violates any applicable federal, state, local,
                or international law or regulation.
              </li>
              <li>
                To transmit, or procure the sending of, any advertising or
                promotional material, including any "junk mail," "chain letter,"
                "spam," or any other similar solicitation.
              </li>
              <li>
                To impersonate or attempt to impersonate me, another user, or
                any other person or entity.
              </li>
              <li>
                To engage in any other conduct that restricts or inhibits
                anyone's use or enjoyment of the website, or which may harm me
                or users of the website or expose them to liability.
              </li>
            </ul>
            <p className="text-gray-700 mb-8">
              Additionally, you agree not to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-8">
              <li>
                Use the website in any manner that could disable, overburden,
                damage, or impair the site or interfere with any other party's
                use of the website.
              </li>
              <li>
                Use any robot, spider, or other automatic device, process, or
                means to access the website for any purpose, including
                monitoring or copying any of the material on the website.
              </li>
              <li>
                Use any manual process to monitor or copy any of the material on
                the website or for any other unauthorized purpose without my
                prior written consent.
              </li>
              <li>
                Use any device, software, or routine that interferes with the
                proper working of the website.
              </li>
              <li>
                Introduce any viruses, Trojan horses, worms, logic bombs, or
                other material that is malicious or technologically harmful.
              </li>
              <li>
                Attempt to gain unauthorized access to, interfere with, damage,
                or disrupt any parts of the website, the server on which the
                website is stored, or any server, computer, or database
                connected to the website.
              </li>
              <li>
                Attack the website via a denial-of-service attack or a
                distributed denial-of-service attack.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              5. Reliance on Information Posted
            </h2>
            <p className="text-gray-700 mb-8">
              The information presented on or through the website is made
              available solely for general information purposes. I do not
              warrant the accuracy, completeness, or usefulness of this
              information. Any reliance you place on such information is
              strictly at your own risk. I disclaim all liability and
              responsibility arising from any reliance placed on such materials
              by you or any other visitor to the website, or by anyone who may
              be informed of any of its contents.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              6. Third-Party Links
            </h2>
            <p className="text-gray-700 mb-8">
              This website may contain links to third-party websites or services
              that are not owned or controlled by me. I have no control over,
              and assume no responsibility for, the content, privacy policies,
              or practices of any third-party websites or services. You further
              acknowledge and agree that I shall not be responsible or liable,
              directly or indirectly, for any damage or loss caused or alleged
              to be caused by or in connection with the use of or reliance on
              any such content, goods, or services available on or through any
              such websites or services.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              7. Disclaimer of Warranties
            </h2>
            <p className="text-gray-700 mb-4">
              You understand that I cannot and do not guarantee or warrant that
              files available for downloading from the internet or the website
              will be free of viruses or other destructive code. You are
              responsible for implementing sufficient procedures and checkpoints
              to satisfy your particular requirements for anti-virus protection
              and accuracy of data input and output, and for maintaining a means
              external to this website for any reconstruction of any lost data.
            </p>
            <p className="text-gray-700 mb-4">
              TO THE FULLEST EXTENT PROVIDED BY LAW, I WILL NOT BE LIABLE FOR
              ANY LOSS OR DAMAGE CAUSED BY A DISTRIBUTED DENIAL-OF-SERVICE
              ATTACK, VIRUSES, OR OTHER TECHNOLOGICALLY HARMFUL MATERIAL THAT
              MAY INFECT YOUR COMPUTER EQUIPMENT, COMPUTER PROGRAMS, DATA, OR
              OTHER PROPRIETARY MATERIAL DUE TO YOUR USE OF THE WEBSITE OR ANY
              SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE OR TO YOUR
              DOWNLOADING OF ANY MATERIAL POSTED ON IT, OR ON ANY WEBSITE LINKED
              TO IT.
            </p>
            <p className="text-gray-700 mb-8">
              YOUR USE OF THE WEBSITE, ITS CONTENT, AND ANY SERVICES OR ITEMS
              OBTAINED THROUGH THE WEBSITE IS AT YOUR OWN RISK. THE WEBSITE, ITS
              CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE
              ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY
              WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              8. Limitation of Liability
            </h2>
            <p className="text-gray-700 mb-8">
              TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL I BE
              LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING
              OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE
              WEBSITE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE WEBSITE OR
              SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL,
              INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT
              LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL
              DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR
              ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA,
              AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF
              CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              9. Indemnification
            </h2>
            <p className="text-gray-700 mb-8">
              You agree to defend, indemnify, and hold me harmless from and
              against any claims, liabilities, damages, judgments, awards,
              losses, costs, expenses, or fees (including reasonable attorneys'
              fees) arising out of or relating to your violation of these Terms
              or your use of the website, including, but not limited to, any use
              of the website's content, services, and products other than as
              expressly authorized in these Terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              10. Governing Law and Jurisdiction
            </h2>
            <p className="text-gray-700 mb-8">
              All matters relating to the website and these Terms, and any
              dispute or claim arising therefrom or related thereto, shall be
              governed by and construed in accordance with the internal laws of
              [Your State/Country] without giving effect to any choice or
              conflict of law provision or rule.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              11. Waiver and Severability
            </h2>
            <p className="text-gray-700 mb-4">
              No waiver by me of any term or condition set out in these Terms
              shall be deemed a further or continuing waiver of such term or
              condition or a waiver of any other term or condition, and any
              failure by me to assert a right or provision under these Terms
              shall not constitute a waiver of such right or provision.
            </p>
            <p className="text-gray-700 mb-8">
              If any provision of these Terms is held by a court or other
              tribunal of competent jurisdiction to be invalid, illegal, or
              unenforceable for any reason, such provision shall be eliminated
              or limited to the minimum extent such that the remaining
              provisions of the Terms will continue in full force and effect.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              12. Entire Agreement
            </h2>
            <p className="text-gray-700 mb-8">
              These Terms constitute the sole and entire agreement between you
              and me regarding the website and supersede all prior and
              contemporaneous understandings, agreements, representations, and
              warranties, both written and oral, regarding the website.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              13. Contact Information
            </h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please
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

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              14. Your Acceptance of These Terms
            </h2>
            <p className="text-gray-700 mb-4">
              By using this website, you acknowledge that you have read and
              understand these Terms of Service and agree to be bound by them.
              If you do not agree to these terms, please do not use this
              website.
            </p>
            <p className="text-gray-700 mb-8">
              These Terms of Service were last updated on the date indicated at
              the top of this page.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              15. Changes to Terms of Service
            </h2>
            <p className="text-gray-700 mb-4">
              I reserve the right, at my sole discretion, to modify or replace
              these Terms at any time. If a revision is material, I will try to
              provide at least 30 days' notice prior to any new terms taking
              effect. What constitutes a material change will be determined at
              my sole discretion.
            </p>
            <p className="text-gray-700 mb-4">
              By continuing to access or use this website after those revisions
              become effective, you agree to be bound by the revised terms. If
              you do not agree to the new terms, please stop using the website.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/privacy"
              className="inline-block px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors"
            >
              View Privacy Policy
            </Link>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default Terms;
