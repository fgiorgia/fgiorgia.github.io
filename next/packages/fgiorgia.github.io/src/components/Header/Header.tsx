import { classNames } from "@/utils/style/classNames"
import Stack from "../Stack/Stack"
import Avatar from "./Avatar"
import Link from "next/link"

const linkClasses = 'font-extrabold text-gray-800 hover:text-cyan-800'

const HeaderLink: React.FC<{ children: string, href: string, openInNewTab?: boolean }> = ({ href, children, openInNewTab }) => {
  return (
    <Link
      className={classNames(linkClasses, 'text-sm uppercase')}
      href={href}
      target={openInNewTab === true ? '_blank' : undefined}
    >
      {children}
    </Link>
  )
}

const Header: React.FC = () => {
  return (
    <header>
      <Stack direction="row" className="w-full min-h-20 bg-gray-100 px-4">
        {/* Left side */}
        <Stack direction="row" className="w-1/3 justify-start items-center">
          <Link className={classNames(linkClasses, 'text-lg')} href="/">{'Giorgia Faedda'}</Link>
        </Stack>
        <Stack direction="row" className="w-1/3 relative justify-center">
          <Avatar />
        </Stack>
        {/* Right side */}
        <Stack direction="row" className="w-1/3 justify-center items-center gap-8">
          <HeaderLink href="/projects">Projects</HeaderLink>
          <HeaderLink href="https://github.com/fgiorgia" openInNewTab>GitHub</HeaderLink>
          <HeaderLink href="/about">About Me</HeaderLink>
          {/* TODO: Add search button */}
        </Stack>
      </Stack>
    </header>
  )
}

export default Header