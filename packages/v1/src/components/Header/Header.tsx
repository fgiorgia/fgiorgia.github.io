import { classNames } from '@/utils/style/classNames';
import Stack from '../Stack/Stack';
import Avatar from './Avatar';
import Link from 'next/link';
import NavbarLinkArea, { linkClasses } from './NavbarLinkArea';

const Header: React.FC = () => {
  return (
    <header>
      <Stack direction="row" className="w-full min-h-20 bg-gray-100 px-4">
        {/* Left side */}
        <Stack direction="row" className="w-1/3 justify-start items-center">
          <Link className={classNames(linkClasses, 'text-lg')} href="/">
            {'Giorgia Faedda'}
          </Link>
        </Stack>
        <Stack direction="row" className="w-1/3 relative justify-center">
          <Avatar />
        </Stack>
        {/* Right side */}
        <NavbarLinkArea />
      </Stack>
    </header>
  );
};

export default Header;
