import React, { ReactElement } from "react";
import Document, { Html, Head, Main, NextScript, DocumentInitialProps, DocumentContext } from 'next/document';
import { ServerStyleSheet } from "styled-components";
import Script from "next/script";

// NEXT.JS CUSTOM DOCUMENT
// https://nextjs.org/docs/advanced-features/custom-document

export default class MyDocument extends Document {
  
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
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
        ) as any,
      };
    } finally {
      sheet.seal();
    }

  }

  render(): ReactElement {
    return(
      <Html lang="en">
        <Head>
          {/* SOME HEAD ELEMENTS */}
          <Script src="/first-input-delay.js" ></Script>
        </Head>
        <body>
          <Main />
          <NextScript />
          </body>
      </Html>
    );
  }
}