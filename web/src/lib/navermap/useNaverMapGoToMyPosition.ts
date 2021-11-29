import useSetMapCenter from './useSetMapCenter';
import { getMyPosition } from './utils';

const useNaverMapGoToMyPosition = () => {
  const setMapCenter = useSetMapCenter();

  const goToMyPosition = async () => {
    const { coords } = await getMyPosition();
    if (!coords) return;

    setMapCenter({
      latitude: coords.latitude,
      longitude: coords.longitude,
      zoom: 16,
    });

    return coords;
  };

  return goToMyPosition;
};

export default useNaverMapGoToMyPosition;
