import { BreadmapThemeProvider as Theme } from '@/styles/BreadMapTheming';
import type { AppProps } from 'next/app';
import { Provider } from 'jotai';

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
