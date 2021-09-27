import * as React from 'react';
import { createContext, useContext, useState, useCallback } from 'react';
import { Global, ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import globalStyles from './globals';
import { LightMode, DarkMode } from './theme';
import type { Theme } from '@emotion/react';

type ThemeName = 'dark' | 'light';

type ThemeToggle = () => void;

interface BreadmapThemeProviderProps {
  children: React.ReactNode;
}

const THEME: Record<ThemeName, Theme> = {
  dark: DarkMode,
  light: LightMode,
};

const ThemeToggleContext = createContext<ThemeToggle | null>(null);

export const BreadmapThemeProvider = ({
  children,
}: BreadmapThemeProviderProps) => {
  const [themeName, setThemeName] = useState<Theme>(THEME.light);

  const handleToggleTheme = useCallback(() => {
    themeName == THEME.light
      ? setThemeName(THEME.dark)
      : setThemeName(THEME.light);
  }, [themeName]);

  return (
    <EmotionThemeProvider theme={themeName}>
      <Global styles={globalStyles} />
      <ThemeToggleContext.Provider value={handleToggleTheme}>
        {children}
      </ThemeToggleContext.Provider>
    </EmotionThemeProvider>
  );
};

export const useThemeToggle = () => {
  const dispatch = useContext(ThemeToggleContext);

  if (dispatch === null) throw new Error();

  return () => {
    dispatch();
  };
};
