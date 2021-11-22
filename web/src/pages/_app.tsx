import { BreadmapThemeProvider as Theme } from '@/styles/BreadMapTheming';
import { Provider } from 'jotai';
import type { AppProps } from 'next/app';

if (process.env.NODE_ENV === 'development') {
  require('../mocks');
}

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
