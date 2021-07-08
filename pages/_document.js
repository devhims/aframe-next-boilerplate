import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="./styles/video.css" />
          <script
            async
            src="//cdn.8thwall.com/web/aframe/8frame-1.1.0.min.js"
          ></script>

          <script
            async
            src="//cdn.8thwall.com/web/xrextras/xrextras.js"
          ></script>

          <script
            async
            src="//apps.8thwall.com/xrweb?appKey=mSofXbWTdanwMZsJkSv5HKia091PsOzQa2IIMudbjs7FW5uMBkUGD2gQfVKSnyISXunV1Q"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <style jsx global>{`
            /* Other global styles such as 'html, body' etc... */
            #__next {
              height: 100%;
              width: 100%;
            }
          `}</style>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
