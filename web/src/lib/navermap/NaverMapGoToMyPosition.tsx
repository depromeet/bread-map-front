import React from 'react';
import { useNaverMap } from '.';
import { getMyPosition } from './utils';

const NaverMapGoToMyPosition = () => {
  const naverMap = useNaverMap();
  const geolocation = React.useRef<GeolocationPosition | null>(null);

  const goToMyPosition = async () => {
    if (!geolocation.current) {
      geolocation.current = await getMyPosition();
    }
    if (naverMap && geolocation.current) {
      naverMap.setCenter(
        new naver.maps.LatLng(
          geolocation.current.coords.latitude,
          geolocation.current.coords.longitude
        )
      );
      naverMap.setZoom(17, true);
    }
  };

  return goToMyPosition;
};

export default NaverMapGoToMyPosition;
