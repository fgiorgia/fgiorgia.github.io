import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Download } from 'lucide-react';
import { NavItem } from '@/types';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  
  // Navigation items with types
  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Skills', href: '/skills' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' }
  ];
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 bg-white shadow-md`}>
      <div className="container-wide">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/">
              <span className={`text-xl font-bold ${isScrolled || isMenuOpen ? 'text-indigo-600' : 'text-indigo-600'}`}>
                GF Analytics
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className={`font-medium ${
                  item.active 
                    ? (isScrolled ? 'text-indigo-600' : 'text-white')
                    : 'text-gray-500 hover:text-indigo-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* CV Button */}
            <a 
              href="/resume.pdf" 
              className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <Download size={18} className="mr-2" />
              CV
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-indigo-600`}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="pt-2 pb-3 space-y-1 px-4">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  item.active 
                    ? 'text-white bg-indigo-600' 
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            {/* CV Button */}
            <a 
              href="/resume.pdf" 
              className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <Download size={18} className="mr-2" />
              CV
            </a>
          </div>
        </div>
      )}
    </div>
    </nav>
  );
};

export default Header;