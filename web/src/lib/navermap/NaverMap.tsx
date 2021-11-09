import * as React from 'react';
import Script from 'next/script';
import { NoSSR, useIsomorphicLayoutEffect } from '@/lib/common';
import NaverMapProvider, {
  useNaverMap,
  useSetNaverMap,
} from './NaverMapProvider';
import BreadMarkerGlobalStyle from './BreadMarkerGlobalStyle';
import { getNavermapSDK } from './utils';

const SCRIPT_URL = `https://openapi.map.naver.com/openapi/v3/maps.js`;

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
      const map = new sdk.Map(el, mapOptions);
      setNaverMap(map);

      map.addListenerOnce('init_stylemap', () => {
        map.setOptions('logoControlOptions', {
          position: sdk.Position.BOTTOM_LEFT,
        });
        map.setOptions('mapDataControlOptions', {
          position: sdk.Position.BOTTOM_RIGHT,
        });
        map.setOptions('scaleControlOptions', {
          position: sdk.Position.BOTTOM_RIGHT,
        });

        map.setOptions('zoomControl', false);
        map.setOptions('mapTypeControl', false);


        const scaleControl = map.get('scaleControl') as naver.maps.ScaleControl;
        const mapDataControl = map.get('mapDataControl') as naver.maps.MapDataControl;

        const scaleControlEl = scaleControl.getElement();
        const mapDataControlEl = mapDataControl.getElement();

        const yMov = 16;

        scaleControlEl.style.transform = `translateY(-${yMov}px)`;
        scaleControlEl.style.margin = '0 6px 0 0';
        mapDataControlEl.style.padding = '0';
        mapDataControlEl.style.margin = '0 12px 0 0';
        mapDataControlEl.style.transform = `translateY(-${yMov + 2}px)`;
      });
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
        src={`${SCRIPT_URL}?ncpClientId=${ncpClientId}`}
        strategy={'beforeInteractive'}
      />
      <NoSSR>
        <NaverMapProvider>
          <MapInitialize {...rest}></MapInitialize>
          {children}
        </NaverMapProvider>
      </NoSSR>
      <BreadMarkerGlobalStyle />
    </>
  );
};

export default NaverMap;
