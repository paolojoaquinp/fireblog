import type { AppProps } from 'next/app'
import Header from '@components/Header';

import { AppContextProvider } from '@context/AppContext';
import { GlobalStyle } from "../styles/global";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppContextProvider>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </AppContextProvider>
    </>
  );
}
