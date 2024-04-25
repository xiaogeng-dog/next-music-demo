import React from "react";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
import Document, { Html, Head, Main, NextScript } from "next/document";
import type { DocumentContext } from "next/document";

const MyDocument = () => {
  return (
    <Html lang="en">
      <title>云音乐商城 - 音乐购有趣</title>
      <Head>
        <meta
          name="keywords"
          content="数码影音，beats耳机，击音耳机，漫步者，akg，潮牌，T恤，音乐生活，食品，服饰配件，礼品，礼物，礼盒，鲜花，ip周边，云音乐，商城，云贝"
        />
        <meta
          name="description"
          content="云音乐商城是专注于音乐场景打造的音乐购物平台，包含音乐人周边、3c影音数码、音乐市集等，和我们一起让音乐购有趣，给生活加点料"
        />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const cache = createCache();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) =>
        (
          <StyleProvider cache={cache}>
            <App {...props} />
          </StyleProvider>
        ),
    });

  const initialProps = await Document.getInitialProps(ctx);
  const style = extractStyle(cache, true);
  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        <style dangerouslySetInnerHTML={{ __html: style }} />
      </>
    ),
  };
};
export default MyDocument;
