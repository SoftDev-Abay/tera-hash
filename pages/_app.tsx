import type { AppProps } from "next/app";
import Head from 'next/head';
import "../styles/global.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preload" href="/fonts/your-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/imgs/title-section/title-section-bg.png" as="image" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
