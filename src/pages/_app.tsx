import GlobalStyle from "../styles/globals";
import { Home } from "./components/Home";
import Head from "next/head";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GlobalStyle />

      <Home />
      <Component {...pageProps} />
    </>
  );
}
