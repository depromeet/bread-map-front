import React, { useState } from 'react';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import * as S from './styles';
import MapButton from '../../common/mapButton/MapButton';
import useMap from '@/lib/hooks/useMap';
import { NaverMapMarker } from '@/lib/navermap';

const MapButtons = () => {
  const { goToMyPosition, getCenterLatLng } = useMap();
  const [markers, setMarkers] = useState<naver.maps.Point[]>([]);

  const getCenterClickHandler = () => {
    const center = getCenterLatLng();
    if (center) {
      setMarkers([...markers, center]);
    }
  };

  return (
    <>
      <S.MyPositionButton clickHandler={goToMyPosition}>
        <NearMeOutlinedIcon />
        <div>내 위치</div>
      </S.MyPositionButton>
      <S.SideButtons>
        <MapButton clickHandler={getCenterClickHandler}>
          <NearMeOutlinedIcon />
        </MapButton>
        <MapButton clickHandler={() => {}}>
          <NearMeOutlinedIcon />
        </MapButton>
        <>
          {markers.map((marker, idx) => {
            return (
              <NaverMapMarker
                key={idx}
                latitude={marker.y}
                longitude={marker.x}
              />
            );
          })}
        </>
      </S.SideButtons>
    </>
  );
};

export default MapButtons;
