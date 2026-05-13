import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Anthony Colas — AI Strategy & Operational Systems</title>
        <meta
          name="description"
          content="Anthony Colas is a Tokyo-based AI systems advisor and Pedagogy Director at 42 Tokyo. Working at the intersection of AI, operations, education, and organizational transformation."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Anthony Colas — AI Strategy & Operational Systems" />
        <meta
          property="og:description"
          content="Tokyo-based AI advisor. Enterprise workshops, operational AI systems, and strategic implementation."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
