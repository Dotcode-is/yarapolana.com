import { ServerStyleSheet } from 'styled-components';
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
const { PUBLIC_URL } = process.env;

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang='en'>
        <Head>
          <meta charset='utf-8' />

          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />
          <meta name='theme-color' content='#2E3235' />
          <link rel='manifest' href='%PUBLIC_URL%/images/manifest.json' />

          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='%PUBLIC_URL%/images/favicon-16x16.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='24x24'
            href='%PUBLIC_URL%/images/favicon-24x24.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='%PUBLIC_URL%/images/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='64x64'
            href='%PUBLIC_URL%/images/favicon-64x64.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='96x96'
            href='%PUBLIC_URL%/images/favicon-96x96.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='57x57'
            href='%PUBLIC_URL%/images/apple-touch-icon-57x57.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='60x60'
            href='%PUBLIC_URL%/images/apple-touch-icon-60x60.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='72x72'
            href='%PUBLIC_URL%/images/apple-touch-icon-72x72.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='76x76'
            href='%PUBLIC_URL%/images/apple-touch-icon-76x76.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='114x114'
            href='%PUBLIC_URL%/images/apple-touch-icon-114x114.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='120x120'
            href='%PUBLIC_URL%/images/apple-touch-icon-120x120.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='144x144'
            href='%PUBLIC_URL%/images/apple-touch-icon-144x144.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='152x152'
            href='%PUBLIC_URL%/images/apple-touch-icon-152x152.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='%PUBLIC_URL%/images/apple-touch-icon-180x180.png'
          />
          <link rel='shortcut icon' href='%PUBLIC_URL%/images/favicon.ico' />
          <meta name='msapplication-TileColor' content='#EB524C' />
          <meta
            name='msapplication-TileImage'
            content='%PUBLIC_URL%/images/mstile-144x144.png'
          />
          <link rel='shortcut icon' href='%PUBLIC_URL%/images/favicon.ico' />

          <link rel='stylesheet' href='https://use.typekit.net/fyb4gsi.css' />
          <title>Yara Polana</title>

          <meta property='og:image:height' content='390' />
          <meta property='og:image:width' content='745' />
          <meta
            property='og:description'
            content='Head UI/UX Designer and Lead Developer with over 13 Years of experience in Fintech, Marketing, Entertainment and Mobile Solutions.'
          />
          <meta property='og:title' content='Yara Polana - Portfolio' />
          <meta property='og:url' content='https://yarapolana.com' />
          <meta
            property='og:image'
            content='https://yarapolana.com/images/seo/yara-seo.jpg'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
