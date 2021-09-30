import * as React from 'react';
import Script from 'next/script';

export class NaverMapService {
  constructor(private isInitialized = false) {}

  onScriptLoaded() {
    this.isInitialized = true;
  }

  getServiceNamespace() {
    if (!this.isInitialized) {
      throw new Error('Naver map service not initialized');
    }

    return window.naver.maps;
  }
}

const NaverMapContext = React.createContext<NaverMapService | null>(null);

export const NaverMapScript = ({ children }: { children: React.ReactNode }) => {
  const [instance] = React.useState<NaverMapService>(new NaverMapService());

  return (
    <NaverMapContext.Provider value={instance}>
      <Script
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_ID}`}
        onLoad={() => {
          instance.onScriptLoaded();
        }}
      />

      {children}
    </NaverMapContext.Provider>
  );
};

export const useNaverMapService = () => {
  const instance = React.useContext(NaverMapContext);
  if (instance === null) throw new Error();
  return instance;
};
