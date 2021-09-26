import { useEffect, useState } from 'react';
import { LightMode, DarkMode } from '@/styles/theme';
import { Theme } from '@emotion/react';

const THEME_MODE_NAME = {
  dark: 'dark',
  light: 'light',
};

const useGlobalTheme = (): [Theme, () => void, string] => {
  const [themeName, setThemeName] = useState('');
  const themeMode = themeName === THEME_MODE_NAME.dark ? DarkMode : LightMode;

  const toggleMode = () => {
    const _theme =
      themeName === THEME_MODE_NAME.dark
        ? THEME_MODE_NAME.light
        : THEME_MODE_NAME.dark;

    setThemeName(_theme);
    console.log('theme change', _theme);
    localStorage.setItem('Theme', _theme);
  };

  useEffect(() => {
    localStorage.getItem('Theme') === THEME_MODE_NAME.dark
      ? setThemeName(THEME_MODE_NAME.dark)
      : setThemeName(THEME_MODE_NAME.light);
  }, [themeName]);

  return [themeMode, toggleMode, themeName];
};

export default useGlobalTheme;
