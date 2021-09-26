import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    name: string;
    color: {
      textColor: string;
      reverseTextColor: string;
      body: string;
      body2: string;
      body3: string;
      footer: string;
      label: string;
      placeholder: string;
      line: string;
      background: string;
      offWhite: string;
      primary: string;
      primary2: string;
      primary3: string;
      recommand: string;
      error: string;
      borderGray: string;
      hover: string;
    };
  }
}
