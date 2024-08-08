import type { AppProps } from "next/app";
import Head from "next/head";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import "../styles/global.scss";
import { pageDescription, pageTitle } from "@/app/assets/Meta";

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Head>
        <link
          rel="preload"
          href="/fonts/your-font.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/imgs/title-section/title-section-bg.png"
          as="image"
        />
        <link rel="dns-prefetch" href="https://tera-hash.vercel.app" />
        <link rel="icon" href="/imgs/title-section/gold-coin.png" sizes="any" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#000000" />

        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tera-hash.vercel.app/" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="/favicon.ico" />

        {/* Twitter */}

        <meta property="twitter:url" content="https://tera-hash.vercel.app/" />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content="/favicon.ico" />
        


      </Head>
      <Suspense fallback={<div>Loading...</div>}>
        <Component {...pageProps} />
      </Suspense>
    </ErrorBoundary>
  );
}
