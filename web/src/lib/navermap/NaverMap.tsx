import * as React from 'react';
import Script from 'next/script';
import { useIsomorphicLayoutEffect } from '@/lib/common';
import NaverMapProvider, { useNaverMap, useSetNaverMap } from './NaverMapProvider';
import BreadMarkerGlobalStyle from './BreadMarkerGlobalStyle';
import { getNavermapSDK } from './utils';

const SCRIPT_URL = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_ID}`

interface MapInitializeProps extends React.HTMLAttributes<HTMLDivElement> {
  mapOptions?: naver.maps.MapOptions;
}

const MapInitialize: React.FC<MapInitializeProps> = ({
  mapOptions,
  ...rest
}) => {
  const naverMap = useNaverMap();
  const setNaverMap = useSetNaverMap();

  const ref = React.useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (el === null) return;

    const sdk = getNavermapSDK();
    if (sdk === undefined) return;

    if (naverMap) {
      naverMap.setOptions(mapOptions);
    } else {
      setNaverMap(new sdk.Map(el, mapOptions));
    }
  }, [naverMap, setNaverMap, mapOptions]);

  return <div ref={ref} {...rest} />;
};


interface NaverMapProps extends MapInitializeProps {
  ncpClientId?: string;
}

const NaverMap: React.FC<NaverMapProps> = ({
  ncpClientId,
  children,
  mapOptions,
  ...rest
}) => {
  if (ncpClientId === undefined) return null;
  return (
    <>
      <Script
        id={'naver-maps-sdk'}
        src={SCRIPT_URL}
        strategy={'beforeInteractive'}
      />
      <NaverMapProvider>
        <MapInitialize {...rest}>
        </MapInitialize>
        {children}
      </NaverMapProvider>
      <BreadMarkerGlobalStyle />
    </>
  );
};

export default NaverMap;
