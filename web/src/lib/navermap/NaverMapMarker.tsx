import * as React from 'react';
import { useIsomorphicLayoutEffect } from '@/lib/common';
import { useNaverMap } from './NaverMapProvider';
import { getNavermapSDK } from './utils';

interface NaverMapMarkerProps {
  latitude: number;
  longitude: number;
}

const NaverMapMarker = React.forwardRef<
  naver.maps.Marker | null,
  NaverMapMarkerProps
>(({ latitude, longitude }, ref) => {
  const naverMap = useNaverMap();

  const markerRef = React.useRef<naver.maps.Marker | null>(null);

  React.useImperativeHandle<naver.maps.Marker | null, naver.maps.Marker | null>(
    ref,
    () => markerRef.current
  );

  useIsomorphicLayoutEffect(() => {
    if (naverMap === undefined) return;

    const sdk = getNavermapSDK();
    if (sdk === undefined) return;

    const position = new sdk.LatLng(latitude, longitude);

    markerRef.current = new sdk.Marker({
      position,
      map: naverMap,
    });

    return () => {
      markerRef.current?.setMap(null);
      markerRef.current = null;
    };
  }, [naverMap]);

  return null;
});

NaverMapMarker.displayName = 'NaverMapMarker';

export default NaverMapMarker;
