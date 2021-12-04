import * as React from 'react';
import { useNaverMap } from '.';
import { getNavermapSDK } from './utils';

const isBrowser = typeof window !== 'undefined';
const isNavigator = typeof navigator !== 'undefined';

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

  const circleRef = React.useRef<naver.maps.Circle | null>(null);

  useWatchPosition({
    success(position) {
      if (map === undefined) return;

      const sdk = getNavermapSDK();
      if (sdk === undefined) return;

      if (circleRef.current !== null) {
        circleRef.current.setMap(null);
      }

      circleRef.current = new sdk.Circle({
        map,
        center: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
        strokeColor: '#ffffff',
        strokeWeight: 2,
        fillColor: '#1965f0',
        fillOpacity: 1,
        radius: 8,
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
