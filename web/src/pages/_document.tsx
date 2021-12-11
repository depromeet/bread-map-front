/* eslint-disable @next/next/no-title-in-document-head */
/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from 'next/document';

class DaeDongDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="description"
            content="대동빵지도에서 맛있는 빵집을 공유해보세요"
          />
          <title>대동빵지도</title>
          <meta
            name="naver-site-verification"
            content="e2908052f351a549f79ca05f9b41c61520efe6c0"
          />
          <meta name="keywords" content="대동빵지도, 빵지도, 빵집, 빵맛집" />
          <meta name="theme-color" content="#ff6e40" />
          <link rel="manifest" href="/manifest.json" />
          <link
            href="/app-images/favicon-16x16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="/app-images/favicon-32x32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link rel="apple-touch-icon" href="/app-images/apple-icon.png" />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/app-images/android-icon-192x192.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="512x512"
            href="/app-images/512x512.png"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.rawgit.com/innks/NanumSquareRound/master/nanumsquareround.min.css"
          />
          <script
            type="text/javascript"
            src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_ID}`}
          />
          <meta
            name="google-site-verification"
            content="ceD1DmtZCMS9LUBRGgF_GFYaN5PbaB7yyPX1rcGfl5A"
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

export default DaeDongDocument;
