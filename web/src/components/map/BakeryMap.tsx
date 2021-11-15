import dynamic from 'next/dynamic';
import * as React from 'react';
import styled from '@emotion/styled';
import { NaverMap } from '@/lib/navermap';
import CurrentPositionButton from './CurrentPositionButton';
import BreadFilterButton from './BreadFilterButton';
import FlagFilterButton from './FlagFilterButton';
import type { BakeryEntity } from '@/remotes/network/fetchBakeries';

const BakeryMarkers = dynamic(() => import('./BakeryMarkers'), { ssr: false });

interface BakeryMapProps {
  entities: BakeryEntity[] | undefined;
}

const BakeryMap: React.FC<BakeryMapProps> = ({ entities }) => {
  return (
    <Map
      ncpClientId={process.env.NEXT_PUBLIC_NAVER_ID}
      mapOptions={{
        zoom: 10,
      }}
    >
      <CurrentPositionButton />
      <BreadFilterButton />
      <FlagFilterButton />
      <BakeryMarkers entities={entities} />
    </Map>
  );
};

export default BakeryMap;

const Map = styled(NaverMap)`
  width: 100%;
  height: 100%;
  z-index: 0;
`;
