import * as React from 'react';
import { createContext, useContext, useState, useCallback } from 'react';
import { Global, ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import globalStyles from './globals';
import { LightMode, DarkMode } from './theme';
import type { Theme } from '@emotion/react';

type ThemeName = 'dark' | 'light';

type ThemeNameDispatch = (themeName: ThemeName) => void;

interface BreadmapThemeProviderProps {
  children: React.ReactNode;
}

export const THEME_NAME: Record<string, ThemeName> = {
  dark: 'dark',
  light: 'light',
};

const THEME: Record<ThemeName, Theme> = {
  dark: DarkMode,
  light: LightMode,
};

const ThemeNameContext = createContext<ThemeName | null>(null);
const ThemeNameDispatchContext = createContext<ThemeNameDispatch | null>(null);

export const BreadmapThemeProvider = ({
  children,
}: BreadmapThemeProviderProps) => {
  const [themeName, setThemeName] = useState<ThemeName>(THEME_NAME.light);
  const handleChangeThemeName = useCallback((name: ThemeName) => {
    setThemeName(name);
  }, []);

  return (
    <EmotionThemeProvider theme={THEME[themeName]}>
      <ThemeNameContext.Provider value={themeName}>
        <Global styles={globalStyles} />
        <ThemeNameDispatchContext.Provider value={handleChangeThemeName}>
          {children}
        </ThemeNameDispatchContext.Provider>
      </ThemeNameContext.Provider>
    </EmotionThemeProvider>
  );
};

export const useThemeName = () => {
  const context = useContext(ThemeNameContext);

  if (context === null) throw new Error();

  return context;
};

export const useThemeNameDispatch = () => {
  const dispatch = useContext(ThemeNameDispatchContext);

  if (dispatch === null) throw new Error();

  return (payload: ThemeName) => {
    dispatch(payload);
  };
};
