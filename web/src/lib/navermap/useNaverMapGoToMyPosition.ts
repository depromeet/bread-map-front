import useSetMapCenter from './useSetMapCenter';
import { getMyPosition } from './utils';

const useNaverMapGoToMyPosition = () => {
  const setMapCenter = useSetMapCenter();

  return async () => {
    const { coords } = await getMyPosition();
    if (!coords) return;

    setMapCenter({
      latitude: coords.latitude,
      longitude: coords.longitude,
      zoom: 17,
    });
  };
};

export default useNaverMapGoToMyPosition;
