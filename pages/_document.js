import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="shortcut icon" href="/icons/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/icons/favicon.ico" type="image/x-icon" />
          <title>Members | Real Dev Squad</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap"
            rel="stylesheet"
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

export default MyDocument;
