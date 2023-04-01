import GlobalStyle from "../styles/globals";
import Head from "next/head";

import type { AppProps } from "next/app";
import FavoriteProvider from "./CharacterFavorite/context/FavoriteContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Rick and Morty Challenger</title>
      </Head>

      <GlobalStyle />

      <FavoriteProvider>
        <Component {...pageProps} />
      </FavoriteProvider>
    </>
  );
}
