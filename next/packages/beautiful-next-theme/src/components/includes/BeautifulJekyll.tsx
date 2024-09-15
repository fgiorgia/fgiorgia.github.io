import Script from "next/script";

const BeautifulJekyllScript = () => (
  <Script strategy="lazyOnload">
    {
      `
console.log('BeautifulJekyllScript');
    `
    }
  </Script>
)

export default BeautifulJekyllScript