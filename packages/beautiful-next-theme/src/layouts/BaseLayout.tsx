import React from "react"
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme';
import { ThemeGlobalStyles } from "../styles/themeGlobalStyles";

import "../assets/css/bootstrap-social.css"
import "../assets/css/beautifuljekyll-minimal.css"
import "../assets/css/pygment_highlights.css"
import "../assets/css/index.css"
import GtmBody from "../components/includes/GtmBody";
import Nav from "../components/includes/Nav";
import { PageConfig } from "../../types";
import { MainConfig } from "../config/types";
import BeautifulJekyllScript from "../components/includes/BeautifulJekyll";

interface Props {
  config: MainConfig
  page: PageConfig
}

const BaseLayout: React.FC<React.PropsWithChildren<Props>> = ({ children, config, page }) => {
  const { site } = config
  return (
    <html lang={page.language ?? site?.language ?? 'en'}>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" security="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800" />

        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" security="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs=" />
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" security="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" />
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" security="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" />
        <BeautifulJekyllScript />
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <ThemeGlobalStyles />
            <GtmBody />
            <Nav {...{ config, page }} />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html >
  )
}


// TODO: check how to load external fonts and scripts
const frontMatter = {
  "common-js": [
    "/assets/js/beautifuljekyll.js"
  ]
}

export default BaseLayout