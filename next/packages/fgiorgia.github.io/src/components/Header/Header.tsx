import { classNames } from "@fgiorgia-site/utils/style/classNames"
import Stack from "../Stack/Stack"
import Avatar from "./Avatar"
import Link from "next/link"

const linkClasses = 'font-extrabold text-lg'

const HeaderLink: React.FC<{ children: string, href: string }> = ({ href, children }) => {
  return (
    <Link className='font-extrabold text-lg' href={href}>{children}</Link>
  )
}

const Header: React.FC = () => {
  return (
    <header>
      <Stack direction="row" className="w-full min-h-20 bg-gray-100 px-4">
        {/* Left side */}
        <Stack className="flex-row justify-center items-center">
          <HeaderLink href="/">Giorgia Faedda</HeaderLink>
        </Stack>
        <Stack className="flex-1 relative justify-center">
          <Avatar />
        </Stack>
        {/* Right side */}
        <Stack direction="row" className="justify-center items-center gap-2">
          <HeaderLink href="/projects">Projects</HeaderLink>
          <HeaderLink href="https://github.com/fgiorgia">GitHub</HeaderLink>
          <HeaderLink href="/about">About Me</HeaderLink>
        </Stack>
      </Stack>
    </header>
  )
}

export default Header