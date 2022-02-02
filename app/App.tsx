import React, { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import BakeryDetailScreen from '@/pages/BakeryDetailScreen';
import { ThemeProvider } from '@emotion/react';
import { theme } from './src/styles/theme';

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        {/* <Home /> */}
        <BakeryDetailScreen />
      </ThemeProvider>
    </QueryClientProvider>
  );
};
export default App;
