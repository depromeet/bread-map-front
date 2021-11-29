/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from 'next/document';

class DaeDongDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.rawgit.com/innks/NanumSquareRound/master/nanumsquareround.min.css"
          />
          {/* TODO 스크립트 헤더에서 안부르면 로그인이후 맵화면 전환시 맵이 안뜨네요..ㅠ */}
          <script
            type="text/javascript"
            src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=0ltvn9xwa9"
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
