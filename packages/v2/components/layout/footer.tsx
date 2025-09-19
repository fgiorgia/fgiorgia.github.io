import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import { unit } from '@/styles/staticTheme';

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
  label: string;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      href: 'https://github.com/fgiorgia',
      icon: <GitHubIcon sx={{ fontSize: unit(2.5) }} />,
      label: 'GitHub Profile',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/fgiorgia/',
      icon: <LinkedInIcon sx={{ fontSize: unit(2.5) }} />,
      label: 'LinkedIn Profile',
    },
    {
      name: 'Email',
      href: 'mailto:giorgia.faedda@gfanalytics.se',
      icon: <MailIcon sx={{ fontSize: unit(2.5) }} />,
      label: 'Email Me',
    },
  ];

  const footerLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ];

  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container-wide">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <div className="flex items-center">
                {/* Logo Image */}
                <div className="flex justify-center mb-4">
                  <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full overflow-hidden mr-2 sm:mr-3">
                    <Image
                      src={getAssetPath('/images/GF-Data-Analytics.webp')}
                      alt="GF Analytics Logo"
                      fill
                      sizes="(max-width: 640px) 32px, (max-width: 768px) 36px, 40px"
                      className="object-cover"
                      priority
                      unoptimized
                    />
                  </div>
                  <span className="text-xl font-bold text-white flex items-center">
                    GF Analytics
                  </span>
                </div>
              </div>
            </Link>
            <p className="mt-2 text-sm text-gray-400">
              Data Analyst | Statistics | BI Developer | Azure AI Certified
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={item.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row md:justify-between">
          <p className="text-sm text-gray-400">
            © {currentYear} Giorgia Faedda. All rights reserved.
          </p>

          <div className="mt-4 md:mt-0 flex space-x-4">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
