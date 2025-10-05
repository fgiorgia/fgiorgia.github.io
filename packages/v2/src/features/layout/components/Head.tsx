import React, { useState, useEffect } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { getAssetPath } from '@/features//common/utils';
import { Menu, X, Download } from 'lucide-react';
import { NavItem } from '@/features//common/types';
import Box from '@swiftpost/elysium/ui/base/Box';
import IconButton from '@swiftpost/elysium/ui/base/IconButton';
import Button from '@swiftpost/elysium/ui/base/Button';
import Stack from '@swiftpost/elysium/ui/base/Stack';
import Text from '@swiftpost/elysium/ui/base/Text';
import Link from '@swiftpost/elysium/ui/base/Link';
import { colors } from '@/features//common/styles/colors';
import { compat } from '@/features//common/styles/tailwindMUICompat';
import { fontWeights, unit } from '@/features//common/styles/staticTheme';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Navigation items with types
  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Skills', href: '/skills' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Box
      component="nav"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        transition: 'all 300ms',
        backgroundColor: colors.white,
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      }}
    >
      <Box sx={compat.containerWide}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ height: unit(8) }}
        >
          <Stack direction="row" alignItems="center">
            <NextLink href="/">
              <Stack direction="row" alignItems="center">
                {/* Logo Image */}
                <Stack
                  direction="row"
                  justifyContent="center"
                  sx={{ marginBottom: unit(2) }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      width: { xs: unit(4), sm: unit(4.5), md: unit(5) }, // w-8=2rem, sm:w-9=2.25rem, md:w-10=2.5rem
                      height: { xs: unit(4), sm: unit(4.5), md: unit(5) }, // same as width
                      borderRadius: '50%',
                      overflow: 'hidden',
                      mr: {
                        xs: unit(1),
                        sm: unit(1.5),
                      }, // mr-2, sm:mr-3
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={getAssetPath('/images/GF-Data-Analytics.webp')}
                      alt="GF Analytics Logo"
                      fill
                      sizes="(max-width: 640px) 32px, (max-width: 768px) 36px, 40px"
                      className="object-cover"
                      priority
                      unoptimized
                    />
                  </Box>
                  <Text
                    component="span"
                    sx={{
                      fontSize: unit(2.5),
                      fontWeight: fontWeights.bold, // font-bold
                      display: 'flex',
                      alignItems: 'center',
                      color: colors.indigo[600],
                    }}
                  >
                    GF Analytics
                  </Text>
                </Stack>
              </Stack>
            </NextLink>
          </Stack>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: unit(4),
            }}
          >
            {navItems.map((item) => (
              <Box
                key={item.href}
                component={NextLink}
                href={item.href}
                sx={{
                  fontWeight: fontWeights.medium,
                  textDecoration: 'none',
                  color:
                    item.active ?
                      isScrolled ? colors.indigo[600]
                      : colors.white
                    : colors.gray[500],
                  '&:hover': {
                    color: !item.active ? colors.indigo[600] : undefined,
                  },
                }}
              >
                {item.label}
              </Box>
            ))}
            {/* CV Button */}
            <Link
              href={getAssetPath('/CV_Data_Analyst_Giorgia_Faedda.pdf')}
              // className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              download
              sx={{
                display: 'inline-flex', // inline-flex
                alignItems: 'center', // items-center
                paddingX: unit(2), // px-4 (unit(2) => 1rem)
                paddingY: unit(1), // py-2 (unit(1) => 0.5rem)
                backgroundColor: colors.indigo[600], // bg-indigo-600
                color: 'white', // text-white
                fontWeight: 500, // font-medium
                textDecoration: 'none',
                borderRadius: unit(0.75), // rounded-md (~0.375rem; theme borderRadius(1))
                transition: (theme) =>
                  theme.transitions.create('background-color', {
                    // transition-colors
                    duration: 200, // duration-200
                  }),
                '&:hover': {
                  backgroundColor: colors.indigo[700], // hover:bg-indigo-700
                },
              }}
            >
              <Box
                component={Download}
                size={unit(2.25)}
                sx={{ marginRight: unit(1) }}
              />
              CV
            </Link>
          </Box>

          {/* Mobile menu button */}
          <Stack // flex
            direction="row"
            alignItems="center" // items-center
            sx={{
              display: { md: 'none' }, // md:hidden
            }}
          >
            <IconButton
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              sx={{
                padding: unit(1), // p-2
                color: colors.gray[500], // text-gray-500
                '&:hover': {
                  color: colors.indigo[600], // hover:text-indigo-600
                },
              }}
            >
              <span style={{ position: 'absolute', left: '-9999px' }}>
                Open main menu
              </span>
              {isMenuOpen ?
                <X size={unit(3)} />
              : <Menu size={unit(3)} />}
            </IconButton>
          </Stack>
        </Stack>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <Box
            sx={{
              display: { xs: 'block', md: 'none' }, // md:hidden
              backgroundColor: colors.white, // bg-white
              ...compat.shadowLg,
            }}
          >
            <Box
              sx={{
                paddingTop: unit(1), // pt-2
                paddingBottom: unit(1.5), // pb-3
                paddingX: unit(2), // px-4
                paddingRight: unit(4), // px-4
                '& > *:not(:last-child)': {
                  marginBottom: unit(0.5), // space-y-1
                },
              }}
            >
              {navItems.map((item) => (
                <Box
                  key={item.href}
                  component={NextLink}
                  href={item.href}
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                  sx={{
                    display: 'block', // block
                    paddingX: unit(1.5), // px-3
                    paddingY: unit(1), // py-2
                    borderRadius: unit(2), // rounded-md
                    fontSize: '1rem', // text-base
                    fontWeight: fontWeights.medium, // font-medium
                    color: item.active ? colors.white : colors.gray[500], // text-white or text-gray-500
                    backgroundColor:
                      item.active ? colors.indigo[600] : 'transparent', // bg-indigo-600
                    textDecoration: 'none',
                    '&:hover': {
                      backgroundColor:
                        !item.active ? colors.gray[100] : undefined, // hover:bg-gray-100
                    },
                  }}
                >
                  {item.label}
                </Box>
              ))}

              {/* CV Button */}
              <Button
                href={getAssetPath('/CV_Data_Analyst_Giorgia_Faedda.pdf')}
                target="_blank"
                rel="noopener noreferrer"
                download
                sx={{
                  display: 'inline-flex', // inline-flex
                  alignItems: 'center', // items-center
                  paddingX: unit(2), // px-4
                  paddingY: unit(1), // py-2
                  backgroundColor: colors.indigo[600], // bg-indigo-600
                  color: colors.white, // text-white
                  fontSize: unit(2),
                  borderRadius: unit(0.75), // rounded-md
                  textTransform: 'none', // preserve case
                  transition: 'background-color 0.2s', // transition-colors duration-200
                  '&:hover': {
                    backgroundColor: colors.indigo[700], // hover:bg-indigo-700
                  },
                }}
              >
                <Stack direction="row" spacing={unit(1)} alignItems="center">
                  <Download size={unit(2.25)} />
                  <Text fontWeight={fontWeights.medium}>CV</Text>
                </Stack>
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Header;
