import React from 'react';
import Script from 'next/script';
import styled from '@emotion/styled';

const DisplayMap: React.FC = () => {
  const naverMapInstance = window.naver.maps;

  const ref = React.useRef<HTMLDivElement | null>(null);
  const mapInstance = React.useRef<naver.maps.Map | null>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (el === null) return;
    if (mapInstance.current !== null) return;

    mapInstance.current = new naverMapInstance.Map(el, {
      zoom: 10,
    });
  }, [naverMapInstance]);

  return <MapDiv ref={ref}></MapDiv>;
};

const Map: React.FC = () => {
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);

  return (
    <>
      <Script
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_ID}`}
        onLoad={() => {
          setIsLoaded(true);
        }}
      />
      {isLoaded ? <DisplayMap /> : 'loading'}
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
