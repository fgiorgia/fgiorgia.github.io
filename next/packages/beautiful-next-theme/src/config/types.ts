export interface MainConfig {
  site?: SiteConfig
}

export interface Link {
  name: string
  path: string
}

// export interface NavbarLink extends Link {
//   subPaths?: {
//     linkParts?: Link[]
//   }[]
// }

type NavbarLinks = Record<string, string | Record<string, string>>

export interface SiteConfig {
  title?: string
  titleImg?: string
  language?: string
  /** Google Tag Manager */
  gtm?: string

  postSearch?: boolean
  avatar?: string

  // Style
  textColor?: string
  pageColor?: string
  pageImg?: string
  linkColor?: string
  hoverColor?: string
  navbarLinks?: NavbarLinks
  navbarColor?: string
  navbarBorderColor?: string
  navbarImg?: string
  navbarTextColor?: string
  navbarVarLength?: string,
  roundAvatar?: boolean,
  footerColor?: string,
  footerHoverColor?: string,
  footerTextColor?: string,
  footerLinkColor?: string,
  footerImg?: string,
}