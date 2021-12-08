import React from 'react';
import useSetMapCenter from './useSetMapCenter';
import { getMyPosition } from './utils';

const useGoToPosition = () => {
  const setMapCenter = useSetMapCenter();

  const goToMyPosition = React.useCallback(async () => {
    const { coords } = await getMyPosition();
    if (!coords) return;

    setMapCenter({
      latitude: coords.latitude,
      longitude: coords.longitude,
      zoom: 16,
    });

    return coords;
  }, [setMapCenter]);

  const goToPosition = React.useCallback(
    ({ latitude, longitude }) => {
      setMapCenter({
        latitude: latitude,
        longitude: longitude,
        zoom: 16,
      });
    },
    [setMapCenter]
  );

  return { goToMyPosition, goToPosition };
};

export default useGoToPosition;
