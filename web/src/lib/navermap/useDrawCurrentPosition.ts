import * as React from 'react';
import { useNaverMap } from '.';
import { getNavermapSDK } from './utils';

const isBrowser = typeof window !== 'undefined';
const isNavigator = typeof navigator !== 'undefined';

const centerCircle = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="7" cy="7" r="6.5" fill="#1965F0" stroke="white"/></svg>'

interface UseWatchPositionParams {
  success: PositionCallback;
  error?: PositionErrorCallback | null | undefined;
  options?: PositionOptions | undefined;
}

const useWatchPosition = ({
  success,
  error,
  options,
}: UseWatchPositionParams) => {
  React.useEffect(() => {
    if (!isBrowser) return;
    if (!isNavigator) return;

    let watchPositionId = window.navigator.geolocation.watchPosition(
      success,
      error,
      options
    );

    return () => {
      if (!isBrowser) return;
      if (!isNavigator) return;

      if (watchPositionId) {
        window.navigator.geolocation.clearWatch(watchPositionId);
      }
    };
  }, [success, error, options]);
};

const useDrawCurrentPosition = () => {
  const map = useNaverMap();

  const markerRef = React.useRef<naver.maps.Marker | null>(null);

  useWatchPosition({
    success(position) {
      if (map === undefined) return;

      const sdk = getNavermapSDK();
      if (sdk === undefined) return;

      if (markerRef.current !== null) {
        markerRef.current.setMap(null);
      }

      markerRef.current= new sdk.Marker({
        map,
        position: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
        icon: {
          content: centerCircle,
        },
      });
    },
    error(error) {
      console.error(error);
    },
    options: {
      enableHighAccuracy: true,
    },
  });
};

export default useDrawCurrentPosition;
