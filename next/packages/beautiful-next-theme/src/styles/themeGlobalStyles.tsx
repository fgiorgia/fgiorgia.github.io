"use client"
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { getConfig } from '../config/getConfig';

// Implemented as identity, may be needed later
const relativeUrl = (url: string): string => {
  return url
}

const { site } = getConfig()

export const ThemeGlobalStyles = () => (<>
  <CssBaseline />
  <GlobalStyles styles={{
    /* General */
    html: { fontSize: "100%" },
    body: {
      fontFamily: "'Lora', 'Times New Roman', serif", fontSize: "1.125rem",
      color: site?.textColor ?? "#404040",
      backgroundColor: site?.pageColor ?? "#FFFFFF",
      ...(site?.pageImg && {
        backgroundImage: `url(${relativeUrl(site.pageImg)})`,
        backgroundAttachment: 'fixed',
      }),
      overflowWrap: "break-word",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    },
    "body>main": { flex: 1 },
    p: { lineHeight: 1.5, margin: "1.875rem 0" },
    "h1,h2,h3,h4,h5,h6": {
      fontFamily: "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      fontWeight: 800,
      lineHeight: 1.1
    },
    h1: { fontSize: "2.25rem" },
    h2: { fontSize: "1.875rem" },
    h3: { fontSize: "1.5rem" },
    h4: { fontSize: "1.125rem" },
    "h1,h2,h3,h4": { marginTop: "1.25rem" },
    a: {
      color: site?.linkColor ?? "#008AFF",
    },
    'a:hover, a:focus': {
      color: site?.hoverColor ?? "#0085A1"
    },
    blockquote: { color: "#808080", fontStyle: "italic" },
    "blockquote p:first-child": { marginTop: "0" },
    "hr.small": {
      maxWidth: "6.25rem",
      margin: "1rem auto",
      borderWidth: "0.25rem",
      borderColor: "inherit",
      borderRadius: "0.1875rem"
    },
    ":target:before": {
      content: '""',
      display: "block",
      height: "3.125rem",
      margin: "-3.125rem 0 0"
    },
    ".hideme": { display: "none" },
    "::-moz-selection": {
      color: "#fff",
      textShadow: "none",
      backgroundColor: site?.hoverColor ?? "#0085A1"
    },
    "::selection": {
      color: "#fff",
      textShadow: "none",
      backgroundColor: site?.hoverColor ?? "#0085A1"
    },
    "img::selection": { color: "#fff", background: "transparent" },
    "img::-moz-selection": { color: "#fff", background: "transparent" },
    img: { maxWidth: "100%" },
    ".linked-section": { paddingTop: "3.75rem", marginTop: "-1.5625rem" },

    /* Comments */
    ".disqus-comments": { marginTop: "1.875rem" },

    /* Navbar */
    ".navbar-custom": {
      backgroundColor: site?.navbarColor ?? "#EAEAEA",
      borderBottom: `1px solid ${site?.navbarBorderColor ?? "#DDDDDD"}`,
      fontFamily: "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      ...(site?.navbarImg && {
        backgroundImage: `url(${relativeUrl(site.navbarImg)})`,
        backgroundAttachment: 'fixed',
      }),
      ".navbar-custom": {
        WebkitTransition: "padding .5s ease-in-out",
        MozTransition: "padding .5s ease-in-out",
        transition: "padding .5s ease-in-out"
      }
    },

    ".navbar-custom,\n.navbar-custom.top-nav-short,\n.navbar-custom.top-nav-short-permanent": {
      paddingTop: "0",
      paddingBottom: "0"
    },
    ".navbar-custom .navbar-brand": {
      lineHeight: 1.5,
      paddingTop: "0.625rem",
      paddingBottom: "0.625rem",
      fontSize: "1.125rem"
    },
    ".navbar-custom .navbar-brand-logo": {
      WebkitTransition: "padding .5s ease-in-out",
      MozTransition: "padding .5s ease-in-out",
      transition: "padding .5s ease-in-out"
    },
    [(".navbar-custom .navbar-brand-logo," +
      ".navbar-custom.top-nav-short .navbar-brand-logo," +
      ".navbar-custom.top-nav-short-permanent .navbar-brand-logo")]: {
      paddingTop: "0.3125rem",
      paddingBottom: "0.3125rem"
    },
    ".navbar-custom .navbar-brand-logo img": {
      WebkitTransition: "height .5s ease-in-out",
      MozTransition: "height .5s ease-in-out",
      transition: "height .5s ease-in-out"
    },
    [(".navbar-custom .navbar-brand-logo img, " +
      ".navbar-custom.top-nav-short .navbar-brand-logo img," +
      ".navbar-custom.top-nav-short-permanent .navbar-brand-logo img")]: {
      height: "2.5rem"
    },
    ".navbar-custom .navbar-nav .nav-item": {
      textTransform: "uppercase",
      fontSize: "0.8125rem",
      letterSpacing: "0.0625rem"
    },
    ".navbar-custom .navbar-nav .nav-link": {
      lineHeight: "1.25rem",
      paddingTop: "0.9375rem",
      paddingBottom: "0.9375rem"
    },
    ".navbar-custom .navbar-brand, .navbar-custom .navbar-nav .nav-link": {
      fontWeight: 800,
      color: `${site?.navbarTextColor ?? "#404040"}`
    },
    ".navbar-toggler": { fontSize: "1rem", margin: "0.5rem 0" },
    ".navbar-custom .navbar-toggler:focus,.navbar-custom .navbar-toggler:hover": {
      backgroundColor: "initial"
    },
    '.navbar-custom .navbar-toggler[aria-expanded="true"]': {
      backgroundColor: "rgba(0, 0, 0, 0.2)"
    },
    ".dropdown-toggle::after": { borderWidth: "0.4em" },
    ".navbar-custom .nav-item.dropdown.show": { background: "rgba(0, 0, 0, 0.2)" },
    ".navbar-custom .nav-item.dropdown .dropdown-menu": {
      marginTop: "0",
      fontSize: "1em",
      border: "0",
      padding: "0",
      ...(site?.navbarVarLength ? { minWidth: '100%' } : {
        minWidth: 0,
        width: '100%',
        wordBreak: 'break-word',
      }),
    },
    ".navbar-custom .nav-item.dropdown .dropdown-menu .dropdown-item": {
      padding: "0.625rem",
      backgroundColor: `${site?.navbarColor ?? "#EAEAEA"}`,
      textDecoration: "none !important",
      fontWeight: "normal",
      color: `${site?.navbarTextColor ?? "#404040"}`,
    },
    [(".navbar-custom .navbar-brand:hover, " +
      ".navbar-custom .navbar-brand:focus, " +
      " .navbar-custom .navbar-nav .nav-link:hover, " +
      ".navbar-custom .navbar-nav .nav-link:focus, " +
      ".navbar-custom .navbar-nav .dropdown-menu .dropdown-item:hover," +
      ".navbar-custom .navbar-nav .dropdown-menu .dropdown-item:focus")]: {
      color: `${site?.hoverColor ?? "#0085A1"}`
    },
    ".navbar-custom .avatar-container": {
      position: "absolute",
      left: "50%",
      width: "3.125rem",
      bottom: "-1.5rem",
      transition: "opacity 0.5s ease-in-out",
      WebkitTransition: "opacity 0.5s ease-in-out",
      MozTransition: "opacity 0.5s ease-in-out"
    },
    ".navbar-custom.top-nav-short .avatar-container": {
      opacity: 0,
      visibility: "hidden",
      transition: "visibility linear 0.5s, opacity 0.5s ease-in-out",
      WebkitTransition: "visibility linear 0.5s, opacity 0.5s ease-in-out",
      MozTransition: "visibility linear 0.5s, opacity 0.5s ease-in-out"
    },
    ".navbar-custom .avatar-container .avatar-img-border": {
      width: "100%",
      marginLeft: "-50%",
      ...(!site?.roundAvatar != true && {
        borderRadius: "50%",
        boxShadow: "0 0 0.5rem rgba(0, 0, 0, .8)",
        WebkitBoxShadow: "0 0 0.3125rem rgba(0, 0, 0, .8)",
        MozBoxShadow: "0 0 0.5rem rgba(0, 0, 0, .8)"
      })
    },
    ".navbar-custom .avatar-container .avatar-img": {
      width: "100%",
      display: "block",
      ...(site?.roundAvatar !== true && { borderRadius: "50%" })
    },
    ".navbar-custom.top-nav-expanded .avatar-container": { display: "none" },

    /* --- Footer --- */
    footer: {
      padding: "1.875rem 0",
      borderTop: "1px #EAEAEA solid",
      marginTop: "3.125rem",
      fontSize: "0.875rem",
      backgroundColor: `${site?.footerColor ?? "#EAEAEA"}`,
      ...(site?.footerImg && {
        backgroundImage: `url(${relativeUrl(site.footerImg)})`,
        backgroundAttachment: "fixed"
      })
    },

    "footer p.text-muted": {
      color: `${site?.footerTextColor ?? "#777777"} !important`
    },
    "footer a": { color: `${site?.footerTextColor ?? "#404040"}` },
    "footer a:hover,\nfooter a:focus": {
      color: `${site?.footerHoverColor ?? "#0085A1"}`
    },
    "footer .list-inline": {
      margin: "0",
      padding: "0",
      marginBottom: "1.875rem"
    },
    "footer .copyright": {
      fontFamily: "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      textAlign: "center",
      marginBottom: "0",
      marginTop: "0"
    },
    "footer .theme-by": { textAlign: "center", margin: "0.625rem 0 0" },
    "footer .footer-custom-content": {
      textAlign: "center",
      marginBottom: "0.9375rem",
      fontFamily: "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    },
    ".posts-list": { margin: "0" },
    ".post-preview": {
      padding: "1.25rem 0",
      borderBottom: "1px solid #eee",
      overflow: "hidden"
    },
    ".post-preview:last-child": { borderBottom: "0" },
    ".post-preview a": {
      textDecoration: "none",
      fontFamily: "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      color: `${site?.textColor ?? "#404040"}`,
    },
    ".post-preview a:focus,\n.post-preview a:hover": {
      textDecoration: "none",
      color: `${site?.hoverColor ?? "#0085A1"}`
    },
    ".post-preview .post-title": { fontSize: "1.875rem", marginTop: "0" },
    ".post-preview .post-subtitle": {
      margin: "0",
      fontWeight: 300,
      marginBottom: "0.625rem"
    },
    ".post-preview .post-meta,\n.post-heading .post-meta": {
      color: "#808080",
      fontSize: "1.125rem",
      fontStyle: "italic",
      margin: "0 0 0.625rem",
      fontFamily: "'Lora', 'Times New Roman', serif"
    },
    ".post-heading .post-meta": { display: "inline-block" },
    "@media (max-width: 767px)": [
      { ".post-heading .post-meta": { display: "block", marginBottom: "0" } },
      {
        ".post-preview .post-image": { height: "9rem", width: "9rem" },
        ".post-preview .post-image-short": { marginTop: "0" }
      },
      {
        "#nav-search-input": { width: "100%" },
        "#nav-search-exit": { right: "0" }
      }
    ],
    ".post-heading .post-meta .middot": { margin: "0 0.625rem" },
    ".post-preview .post-entry": { width: "100%" },
    ".post-preview .post-image": {
      cssFloat: "right",
      marginLeft: "0.625rem",
      height: "12rem",
      width: "12rem",
      filter: "grayscale(40%)"
    },
    ".post-preview .post-image:hover": { filter: "grayscale(0%)" },
    ".post-preview .post-image img": { maxHeight: "100%", maxWidth: "100%" },
    ".post-preview .post-image-short": { marginTop: "-2.1875rem" },
    ".post-preview .post-image-small": {
      width: "100%",
      height: "100%",
      textAlign: "center",
      display: "none"
    },
    ".post-preview .post-image-small img": {
      maxWidth: "6.25rem",
      maxHeight: "6.25rem"
    },
    "@media (max-width: 500px)": [
      {
        ".post-preview .post-image": { display: "none" },
        ".post-preview .post-image-small": { display: "block" }
      },
      {
        "#header-gh-btns>iframe": { display: "block", marginBottom: "0.3125rem" }
      }
    ],
    ".post-preview .post-read-more": { fontWeight: 800 },
    ".blog-tags": {
      fontFamily: "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      fontSize: "0.9375rem",
      margin: "1.875rem 0"
    },
    ".blog-tags span": {
      color: `${site?.textColor ?? "#404040"}`,
      opacity: 0.8
    },
    ".blog-tags .list-inline-item": { marginRight: "0" },
    ".blog-tags a": {
      color: `${site?.textColor ?? "#404040"}`,
      textDecoration: "none",
      padding: "0 0.3125rem",
      opacity: 0.8,
      border: "1px solid transparent",
      borderRadius: "0.1875rem"
    },
    ".blog-tags a:hover": {
      opacity: 1,
      color: `${site?.textColor ?? "#404040"}`,
      borderColor: `${site?.textColor ?? "#404040"}`,
    },
    ".post-preview .blog-tags": { marginTop: "0.3125rem", marginBottom: "0" },
    ".tag-btn": { margin: "0.3125rem" },
    "#full-tags-list": {
      fontFamily: "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif"
    },
    "#full-tags-list .tag-entry": { margin: "0 0 0.9375rem 1.5625rem" },
    "#full-tags-list .tag-entry a": { fontSize: "1.25rem" },
    "#full-tags-list .tag-entry .entry-date": {
      color: "#808080",
      fontStyle: "italic",
      fontSize: "1rem"
    },
    ".intro-header": { margin: "5rem 0 1.25rem", position: "relative" },
    ".intro-header.big-img": {
      background: "no-repeat center center",
      WebkitBackgroundSize: "cover",
      MozBackgroundSize: "cover",
      backgroundSize: "cover",
      OBackgroundSize: "cover",
      marginTop: "3.1875rem",
      marginBottom: "2.1875rem"
    },
    "nav.top-nav-short-permanent~header>.intro-header": { marginTop: "5rem" },
    "nav.top-nav-short-permanent~header>.intro-header.big-img": {
      marginTop: "3.1875rem"
    },
    ".intro-header.big-img .big-img-transition": {
      position: "absolute",
      width: "100%",
      height: "100%",
      opacity: 0,
      background: "no-repeat center center",
      WebkitBackgroundSize: "cover",
      MozBackgroundSize: "cover",
      backgroundSize: "cover",
      OBackgroundSize: "cover",
      WebkitTransition: "opacity 1s linear",
      MozTransition: "opacity 1s linear",
      transition: "opacity 1s linear"
    },
    ".intro-header .page-heading": { textAlign: "center" },
    ".intro-header.big-img .page-heading,\n.intro-header.big-img .post-heading": {
      padding: "6.25rem 0",
      color: "#FFF",
      textShadow: "1px 1px 3px #000"
    },
    ".intro-header .page-heading h1": { marginTop: "0", fontSize: "3.125rem" },
    ".intro-header .post-heading h1": { marginTop: "0", fontSize: "2.1875rem" },
    ".intro-header .page-heading .page-subheading,\n.intro-header .post-heading .post-subheading": {
      fontSize: "1.6875rem",
      lineHeight: 1.1,
      display: "block",
      fontFamily: "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      fontWeight: 300,
      margin: "0.625rem 0 0"
    },
    ".intro-header .post-heading .post-subheading": { marginBottom: "1.25rem" },
    ".intro-header.big-img .page-heading .page-subheading,\n.intro-header.big-img .post-heading .post-subheading": {
      fontWeight: 400
    },
    ".intro-header.big-img .page-heading hr": {
      boxShadow: "1px 1px 3px #000",
      WebkitBoxShadow: "1px 1px 3px #000",
      MozBoxShadow: "1px 1px 3px #000"
    },
    ".intro-header.big-img .post-heading .post-meta": { color: "#EEE" },
    ".intro-header.big-img .img-desc": {
      background: "rgba(30, 30, 30, 0.6)",
      position: "absolute",
      padding: "0.3125rem 0.625rem",
      fontSize: "0.6875rem",
      color: "#EEE",
      fontFamily: "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      right: "0",
      bottom: "0",
      display: "none"
    },
    "#header-gh-btns": { marginBottom: "0.9375rem" },
    ".pagination": { margin: "0.625rem 0 0", justifyContent: "space-between" },
    ".pagination.blog-pager": { marginTop: "0" },
    ".pagination .page-item.next": { marginLeft: "auto" },
    ".pagination .page-item .page-link": {
      fontFamily: "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      textTransform: "uppercase",
      fontSize: "0.875rem",
      fontWeight: 800,
      letterSpacing: "1px",
      padding: ["0.625rem 0.3125rem", "0.75rem 1rem"],
      backgroundColor: "#FFF",
      borderRadius: "0",
      color: `${site?.textColor ?? "#404040"}`
    },
    ".pagination .page-item .page-link:hover,\n.pagination .page-item .page-link:focus": {
      color: "#FFF",
      border: `1px solid ${site?.hoverColor ?? "#0085A1"}`,
      backgroundColor: `1px solid ${site?.hoverColor ?? "#0085A1"}`,
    },
    table: { padding: "0" },
    "table tr": {
      borderTop: "1px solid #cccccc",
      backgroundColor: "#ffffff",
      margin: "0",
      padding: "0"
    },
    "table tr:nth-child(2n)": { backgroundColor: "#f8f8f8" },
    "table tr th": {
      fontWeight: "bold",
      border: "1px solid #cccccc",
      textAlign: "left",
      margin: "0",
      padding: "0.375rem 0.8125rem"
    },
    "table tr td": {
      border: "1px solid #cccccc",
      textAlign: "left",
      margin: "0",
      padding: "0.375rem 0.8125rem"
    },
    "table tr th :first-child,\ntable tr td :first-child": { marginTop: "0" },
    "table tr th :last-child,\ntable tr td :last-child": { marginBottom: "0" },
    code: {
      padding: "0.125rem 0.25rem",
      color: "#c7254e",
      backgroundColor: "#f9f2f4",
      borderRadius: "0.25rem"
    },
    "pre code": {
      padding: "0",
      backgroundColor: "transparent",
      borderRadius: "0"
    },
    pre: {
      fontSize: "0.875rem",
      lineHeight: "1.5em",
      borderRadius: "0.25rem",
      padding: "0.59375rem"
    },
    ".highlight pre": { border: "none", background: "none", margin: "0" },
    ".highlight>pre": {
      backgroundImage:
        "linear-gradient(rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03) 1.5em, rgba(0, 0, 0, 0.02) 1.5em, rgba(0, 0, 0, 0.02) 3em)",
      backgroundSize: "auto 3em",
      backgroundPositionY: "0.625rem",
      border: "1px solid rgba(0, 0, 0, 0.1)",
      borderLeft: "0.4375rem solid #444"
    },
    '.highlight>pre:not([class~="highlight"])': { padding: "0" },
    ".highlight table,\n.highlight tr,\n.highlight td": {
      border: "none",
      background: "none",
      padding: "0",
      margin: "0"
    },
    ".highlight pre.lineno": {
      color: "rgba(0, 0, 0, 0.3)",
      borderRadius: "0",
      borderRight: "2px solid #444"
    },
    ".lineno": {
      WebkitUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none"
    },
    ".lineno::selection,\n.lineno::-moz-selection": { background: "none" },
    ".gist,\n.gist-file table tr": { border: "unset" },
    ".gist,\n.gist-file table tr td": { border: "unset" },
    "#social-share-section": { marginBottom: "1.875rem", marginTop: "1.875rem" },
    ".box-note,\n.box-warning,\n.box-error,\n.box-success": {
      padding: "0.9375rem 0.9375rem 0.9375rem 0.625rem",
      margin: "1.25rem 1.25rem 1.25rem 0.3125rem",
      border: "1px solid #eee",
      borderLeftWidth: "0.3125rem",
      borderRadius: "0.3125rem 0.1875rem 0.1875rem 0.3125rem"
    },
    ".box-note": { backgroundColor: "#eee", borderLeftColor: "#2980b9" },
    ".box-warning": { backgroundColor: "#fdf5d4", borderLeftColor: "#f1c40f" },
    ".box-error": { backgroundColor: "#f4dddb", borderLeftColor: "#c0392b" },
    ".box-success": { backgroundColor: "#98FB98", borderLeftColor: "#3CB371" },
    ".blog-post :first-child": { marginTop: "0" },
    ".blog-post img": { maxWidth: "100%" },
    ".blog-post .caption": {
      textAlign: "center",
      fontSize: "0.875rem",
      padding: "0.625rem",
      fontStyle: "italic",
      color: "#777",
      margin: "0",
      display: "block",
      borderBottomRightRadius: "0.3125rem",
      borderBottomLeftRadius: "0.3125rem"
    },
    ".blog-post hr": {
      maxWidth: "25%",
      borderWidth: "0.25rem",
      borderRadius: "0.1875rem",
      borderColor: "#808080"
    },
    ".blog-post blockquote": {
      padding: "0.625rem 1.25rem",
      margin: "0 0 1.25rem",
      fontSize: "1.1rem",
      borderLeft: "0.3125rem solid #eee"
    },
    ".blog-post blockquote p:last-child": { marginBottom: "0" },
    ".center": { display: "block", margin: "0 auto" },
    "#beautifuljekyll-search-overlay": {
      fontFamily: "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      display: "none",
      zIndex: 999999,
      position: "fixed",
      background: "rgba(0, 0, 0, 0.9)",
      left: "0",
      right: "0",
      top: "0",
      bottom: "0",
      textAlign: "center",
      padding: "1rem"
    },
    "#nav-search-exit": {
      position: "absolute",
      top: "1.5rem",
      cursor: "pointer",
      right: "25%",
      marginRight: "2rem",
      color: "#555",
      fontSize: "2rem",
      lineHeight: "2rem",
      fontWeight: "bold"
    },
    "#nav-search-exit:hover": { color: "#000" },
    "#nav-search-input": {
      textAlign: "center",
      background: "#e7edee",
      margin: "auto",
      display: "block",
      fontSize: "2rem",
      width: "50%",
      transition: "width 300ms ease",
      color: "#222",
      borderRadius: "5rem",
      outline: "none",
      border: "none",
      padding: "0 3rem"
    },
    "#nav-search-input:focus": {
      background: "#f3f8fe",
      boxShadow: "0px 0.15rem 1rem #e7f4ff",
      outline: "none"
    },
    "#nav-search-input::placeholder": { color: "#777" },
    "#search-results-container": {
      listStyle: "none",
      paddingLeft: "unset",
      marginTop: "1.5rem",
      color: "#fff",
      fontSize: "1.5rem",
      maxHeight: "calc(100vh - 6.5rem)",
      overflowY: "auto"
    },
    "#search-results-container a": { color: "#fff", textDecoration: "none" },
    "#search-results-container a:hover": {
      color: "#fff",
      textDecoration: "underline"
    },
    "#nav-search-icon": { display: "inline-block" },
    "#nav-search-text": { display: "none" },



    /* Media query */
    "@media (min-width: 1200px)": [
      {
        ".navbar-custom": { paddingTop: "1.25rem", paddingBottom: "1.25rem" },
        ".navbar-custom .navbar-brand-logo": {
          paddingTop: "0",
          paddingBottom: "0"
        },
        ".navbar-custom .navbar-brand-logo img": { height: "3.125rem" },
        ".navbar-expand-xl .navbar-nav .nav-link": {
          paddingLeft: "0.9375rem",
          paddingRight: "0.9375rem"
        },
        ".navbar-expand-xl .navbar-nav .nav-item:not(.dropdown):last-child .nav-link": {
          paddingRight: "0"
        }
      },
      {
        ".navbar-custom .nav-item.dropdown:hover": {
          background: "rgba(0, 0, 0, 0.1)"
        }
      },
      {
        ".navbar-custom .nav-item.dropdown .dropdown-menu": {
          textAlign: "center"
        },
        ".navbar-custom .nav-item.dropdown .dropdown-menu .dropdown-item": {
          paddingLeft: "0.625rem",
          border: `1px solid ${site?.navbarBorderColor ?? "#DDDDDD"}`,
          borderWidth: "0 1px 1px"
        },
        ".navbar-custom .nav-item.dropdown .dropdown-menu .dropdown-item:first-child": {
          borderTopWidth: "1px"
        }
      }, {
        ".navbar-custom.top-nav-regular .avatar-container": {
          width: "6.25rem",
          bottom: "-1.9375rem"
        },
        ".navbar-custom.top-nav-regular .avatar-container .avatar-img-border": {
          width: "100%",
          ...(site?.roundAvatar !== true && {
            boxShadow: "1px 1px 2px rgba(0, 0, 0, .8)",
            WebkitBoxShadow: "1px 1px 2px rgba(0, 0, 0, .8)",
            MozBoxShadow: "1px 1px 2px rgba(0, 0, 0, .8)"
          })
        },
        ".navbar-custom.top-nav-regular .avatar-container .avatar-img": {
          width: "100%"
        }
      }, {
        ".intro-header": { marginTop: "8.125rem" },
        ".intro-header.big-img": { marginTop: "5.6875rem" },
        ".intro-header.big-img .page-heading,\n  .intro-header.big-img .post-heading": {
          padding: "9.375rem 0"
        },
        ".intro-header .page-heading h1": { fontSize: "5rem" },
        ".intro-header .post-heading h1": { fontSize: "3.125rem" },
        ".intro-header.big-img .img-desc": { fontSize: "0.875rem" }
      }],
    "@media (max-width: 1199px)": [{
      ".navbar-custom .navbar-collapse": {
        borderTop: `1px solid ${site?.navbarBorderColor ?? "#DDDDDD"}`,
        margin: "0 -1rem"
      },
      ".navbar-custom .navbar-nav": { padding: "0.5rem 0" },
      ".navbar-custom .navbar-nav .nav-link": {
        padding: "0.675rem 0 0.675rem 1rem"
      },
      ".navbar-custom .nav-item.dropdown.show": {
        background: "rgba(0, 0, 0, 0.2)"
      },
      ".navbar-custom .nav-item.dropdown .dropdown-menu .dropdown-item": {
        paddingLeft: "2rem"
      }
    }, {
      "#nav-search-input": { width: "75%" },
      "#nav-search-exit": { right: "12.5%" }
    },
    {
      "#nav-search-icon": { display: "none" },
      "#nav-search-text": { display: "inline-block" }
    }],
    "@media (min-width: 768px)": [
      { ".disqus-comments": { marginTop: "2.5rem" } },
      {
        footer: { padding: "3.125rem 0" },
        "footer .footer-links": { fontSize: "1.125rem" },
        "footer .copyright": { fontSize: "1rem" },
        "footer .footer-custom-content": { fontSize: "1rem" }
      },
      { ".post-preview": { padding: "2.1875rem 0" } },
      { ".post-preview .post-title": { fontSize: "2.25rem" } },
      { ".post-preview .blog-tags": { marginTop: "0.625rem" } },
      { ".pagination.blog-pager": { marginTop: "0.625rem" } },
      { ".pagination .page-item .page-link": { padding: "0.9375rem 1.5625rem" } }
    ],
  }} />
</>);