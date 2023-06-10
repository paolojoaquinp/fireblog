import type { AppProps } from 'next/app'
import Header from '@components/Header';

/* import { ThemeContextProvider } from '../context/ThemeContext'; */
import { GlobalStyle } from "../styles/global";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <ThemeContextProvider> */}
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      {/* </ThemeContextProvider> */}
    </>
  );
}
