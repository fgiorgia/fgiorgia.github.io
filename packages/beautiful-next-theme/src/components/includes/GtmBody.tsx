import { getConfig } from "../../config/getConfig"

const GtmBody = () => {
  const mainConfig = getConfig()
  const { site } = mainConfig
  if (!site?.gtm) {
    return null
  }

  return (
    // Google Tag Manager (noscript) -->
    <noscript>
      <iframe src={`https://www.googletagmanager.com/ns.html?id=${site.gtm}`} height="0" width="0"
        style={{ display: 'none', visibility: 'hidden' }}>
      </iframe>
    </noscript>
  )
}

export default GtmBody