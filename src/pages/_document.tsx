import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="pt-br">
      <Head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/logo-page.svg"></link>
        <script defer src="http://home.edsoncosta.online:3000/script.js" data-website-id="265f5cfb-1e0e-4746-9bf5-1df0f82c304d"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
