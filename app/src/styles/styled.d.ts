import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    name: string;
    color: {
      white: string;
      black: string;
      gray50: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
      gray600: string;
      gray700: string;
      gray800: string;
      purple: string;
      green: string;
      primary50: string;
      primary100: string;
      primary200: string;
      primary300: string;
      primary400: string;
      primary500: string;
      overLay: string;
    };
    windowSize: {
      width: number;
      height: number;
    };
    screenSize: {
      width: number;
      height: number;
    };
    height: {
      footer: number;
      bottomSheetHeader: number;
    };
  }
}
