import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { ColorModeScript } from '@chakra-ui/react'
import { theme } from './_app'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          {/* <script
            async
            defer
            src="https://apis.google.com/js/api.js"
            onLoad="this.onload=function(){};handleClientLoad()"
            onreadystatechange="if (this.readyState === 'complete') this.onload()"
          ></script> */}
          <script src="https://apis.google.com/js/api.js"></script>
          <link
            href="https://fonts.googleapis.com/css2?family=Oswald:wght@600&family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://video-react.github.io/assets/video-react.css"
          />
          <link
            href="https://vjs.zencdn.net/7.17.0/video-js.css"
            rel="stylesheet"
          />
          <script
            src="https://vjs.zencdn.net/7.17.0/video.min.js"
            defer
            async
          ></script>
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
