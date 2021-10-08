import { useNaverMap } from '@/lib/navermap';
import { useRef } from 'react';

export const getMyPosition = () => {
  return new Promise<GeolocationPosition>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      maximumAge: 30000,
    });
  });
};

const useMap = () => {
  const geolocation = useRef<GeolocationPosition | null>(null);
  const mapInstance = useNaverMap();

  const goToMyPosition = async () => {
    if (!geolocation.current) {
      geolocation.current = await getMyPosition();
    }
    if (mapInstance && geolocation.current) {
      mapInstance.setCenter(
        new naver.maps.LatLng(
          geolocation.current.coords.latitude,
          geolocation.current.coords.longitude
        )
      );
      mapInstance.setZoom(17, true);
    }
  };
  const getCenterLatLng = () => {
    if (mapInstance) {
      return mapInstance.getCenter();
    }
    return null
  };

  return { goToMyPosition, getCenterLatLng };
};

export default useMap;
