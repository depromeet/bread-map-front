import { BreadmapThemeProvider as Theme } from '@/styles/BreadMapTheming';
import { Provider } from 'jotai';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </Provider>
  );
}

export default MyApp;
