import { Theme } from '@emotion/react';

export const LightMode: Theme = {
  name: 'light',
  color: {
    white: '#ffffff',
    black: '#222222',
    gray50: '#fafafa',
    gray100: '#f5f5f5',
    gray200: '#eeeeee',
    gray300: '#e0e0e0',
    gray400: '#bdbdbd',
    gray500: '#9e9e9e',
    gray600: '#757575',
    gray700: '#616161',
    gray800: '#424242',
    purple: '#fe5436',
    green: '#53aff',
    primary50: '#fff6f4',
    primary100: '#fff1ec',
    primary200: '#ffc5b3',
    primary300: '#ffa88c',
    primary400: '#ff8b66',
    primary500: '#ff6e40',
    overLay: 'rgba(0, 0, 0, 60%)',
  },
  height: {
    footer: 52, // 52px, 3.25rem;
    bottomSheetHeader: 48, // 48px, 3rem;
  },
};

export const DarkMode: Theme = {
  name: 'dark',
  color: {
    white: '#ffffff',
    black: '#222222',
    gray50: '#fafafa',
    gray100: '#f5f5f5',
    gray200: '#eeeeee',
    gray300: '#e0e0e0',
    gray400: '#bdbdbd',
    gray500: '#9e9e9e',
    gray600: '#757575',
    gray700: '#616161',
    gray800: '#424242',
    purple: '#fe5436',
    green: '#53aff',
    primary50: '#fff6f4',
    primary100: '#fff1ec',
    primary200: '#ffc5b3',
    primary300: '#ffa88c',
    primary400: '#ff8b66',
    primary500: '#ff6e40',
    overLay: 'rgba(0, 0, 0, 60%)',
  },
  height: {
    footer: 52, // 52px, 3.25rem
    bottomSheetHeader: 24, // 48px, 3rem;
  }
};
