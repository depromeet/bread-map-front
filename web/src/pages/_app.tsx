import { Global, ThemeProvider } from '@emotion/react';
import globalStyles from '@/styles/globals';
import type { AppProps } from 'next/app';
import useGlobalTheme from '@/hooks/useGlobalTheme';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, toggleTheme] = useGlobalTheme();
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <button onClick={toggleTheme}>테마변경</button>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
