import React from 'react';
import styled from '@emotion/styled';
import { NScript, useNaverMapService } from '@/utils/NaverMapService';

const DisplayMap: React.FC = () => {
  const naverMapInstance = useNaverMapService();
  const ref = React.useRef<HTMLDivElement | null>(null);
  const mapInstance = React.useRef<naver.maps.Map | null>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (el === null) return;

    setTimeout(() => {
      if (mapInstance.current !== null) return;
      mapInstance.current = new (naverMapInstance.getServiceNamespace().Map)(
        el,
        {
          zoom: 10,
        }
      );
    }, 600);
  }, [naverMapInstance]);

  return <MapDiv ref={ref}></MapDiv>;
};

const Map: React.FC = () => {
  return (
    <>
      <NScript>
        <DisplayMap />
      </NScript>
    </>
  );
};

export default Map;

interface MapDivProps {
  width?: number;
  height?: number;
}

const MapDiv = styled.div<MapDivProps>`
  width: ${({ width }) => (width ? `${width}px` : '500px')};
  height: ${({ height }) => (height ? `${height}px` : '500px')};
`;