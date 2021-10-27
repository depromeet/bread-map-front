import { useNaverMap } from '.';
import { getNavermapSDK } from './utils';

interface Position {
  latitude: number;
  longitude: number;
  zoom: number;
}

const useSetMapCenter = () => {
  const map = useNaverMap();

  return ({ latitude, longitude, zoom }: Position) => {
    if (map === undefined) return;

    const sdk = getNavermapSDK();
    if (sdk === undefined) return;

    const position = new sdk.LatLng(latitude, longitude);
    map.setCenter(position);
    map.setZoom(zoom, true);
  };
};

export default useSetMapCenter;
