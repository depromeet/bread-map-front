import React from 'react';
import styled from '@emotion/styled';
import { useAtom } from 'jotai';
import { currentBakeryIdAtom, currentRangeBakeriesAtom } from '@/store/map';

import BakeryInfoCard from '@/components/map/BakeryInfoCard';

const WishSection: React.FC = () => {
  const [currentBakeryId] = useAtom(currentBakeryIdAtom);
  const [bakeries] = useAtom(currentRangeBakeriesAtom);

  const currentBakeryEntity = bakeries?.find(
    (el) => el.bakeryId === currentBakeryId
  );

  return (
    <Base>
      <h1>가보고 싶어요 컨텐츠</h1>
      {currentBakeryEntity && (
        <BakeryInfoCard
          bakeryId={currentBakeryEntity.bakeryId}
          title={currentBakeryEntity.bakeryName}
          wentCount={currentBakeryEntity.flagsCount}
          starAvg={currentBakeryEntity.avgRating}
          reviewCount={currentBakeryEntity.menuReviewsCount}
          reviews={currentBakeryEntity.menuReviewList.map(
            (review) => review.contents
          )}
        />
      )}
    </Base>
  );
};

export default WishSection;

const Base = styled.div`
  display: flex;
  flex-direction: column;
`;
