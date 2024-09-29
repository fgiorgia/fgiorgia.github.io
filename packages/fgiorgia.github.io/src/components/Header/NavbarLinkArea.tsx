'use client'

import Stack from "../Stack/Stack"
import Text from "../Text/Text"
import { classNames } from "@/utils/style/classNames"
import useScreenSize from "@/utils/style/useScreenSize"
import Link from "next/link"
import { useState } from "react"

export const linkClasses = 'font-extrabold text-gray-800 hover:text-cyan-800'

const HeaderLink: React.FC<{
  children: string,
  href: string,
  openInNewTab?: boolean
  onClick?: () => void
}> = ({ href, children, openInNewTab, onClick }) => {
  return (
    <Link
      className={classNames(linkClasses, 'text-sm uppercase')}
      href={href}
      target={openInNewTab === true ? '_blank' : undefined}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

const HeaderLinkGroup: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <>
    <HeaderLink onClick={onClick} href="/projects">Projects</HeaderLink>
    <HeaderLink onClick={onClick} href="https://github.com/fgiorgia" openInNewTab>GitHub</HeaderLink>
    <HeaderLink onClick={onClick} href="/about">About Me</HeaderLink>
    {/* TODO: Add search button */}
  </>
)

const NavbarLinkArea = () => {
  const isLargeScreen = useScreenSize().width > 600;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isLargeScreen ? (
        <Stack direction="row" className="w-1/3 justify-center items-center gap-8">
          <HeaderLinkGroup />
        </Stack>
      ) : (
        <Stack direction="row" className="w-1/3 justify-end items-center gap-8">
          <Stack>
            <p
              role="button"
              // For some reason the following logic works (cyan when open)
              // TODO: investigate why
              className={linkClasses + (isOpen ? '' : 'text-cyan-800')}
              onClick={() => setIsOpen(!isOpen)}
              style={{ fontSize: '1.5rem' }}
            >
              =
            </p>
            {
              isOpen && (
                <Stack style={{ position: 'relative' }}>
                  <Stack
                    style={{
                      top: 0,
                      right: '-1.5rem',
                      position: 'absolute',
                      backgroundColor: '#F3F4F6',
                      padding: '2rem',
                      zIndex: 99999,
                      alignItems: 'flex-end',
                      gap: '0.5rem'
                    }}>
                    <HeaderLinkGroup onClick={() => setIsOpen(false)} />
                  </Stack>
                </Stack>
              )
            }
          </Stack>


        </Stack>
      )}
    </>
  )
}

export default NavbarLinkArea