import React from 'react';
import Link from 'next/link';
import { Mail, Github, Linkedin } from 'lucide-react';

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
      href: 'https://github.com/yourusername',
      icon: <Github size={20} />,
      label: 'GitHub Profile'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/yourusername',
      icon: <Linkedin size={20} />,
      label: 'LinkedIn Profile'
    },
    {
      name: 'Email',
      href: 'mailto:your.email@example.com',
      icon: <Mail size={20} />,
      label: 'Email Me'
    }
  ];

  const footerLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container-wide">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" legacyBehavior>
              <a className="inline-block">
                <span className="text-xl font-bold text-white">GF Analytics</span>
              </a>
            </Link>
            <p className="mt-2 text-sm text-gray-400">Data Analyst | Statistics | BI Developer | Azure AI Certified</p>
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
                legacyBehavior
              >
                <a className="text-sm text-gray-400 hover:text-white transition-colors">
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;