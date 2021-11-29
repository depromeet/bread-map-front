import * as React from 'react';
import styled from '@emotion/styled';
import { useAtom } from 'jotai';
import {
  bottomSheetTypeAtom,
  currentBakeryIdAtom,
  currentRangeBakeriesAtom,
} from '@/store/map';
import BakeryInfoCard from './BakeryInfoCard';

const BakeryCardList: React.FC = () => {
  const [bottomSheetType] = useAtom(bottomSheetTypeAtom);
  const [currentBakeryId] = useAtom(currentBakeryIdAtom);
  const [bakeries] = useAtom(currentRangeBakeriesAtom);

  const currentBakeryEntity = bakeries?.find(
    (el) => el.bakeryId === currentBakeryId
  );

  return (
    <Base>
      {bottomSheetType === 'single' && currentBakeryEntity && (
        <BakeryInfoCard
          bakeryId={currentBakeryEntity.bakeryId}
          title={currentBakeryEntity.bakeryName}
          wentCount={currentBakeryEntity.flagsCount}
          starCount={currentBakeryEntity.ratingCount}
          reviewCount={currentBakeryEntity.menuReviewsCount}
          reviews={currentBakeryEntity.menuReviewList.map(
            (review) => review.contents
          )}
        />
      )}
      {bottomSheetType === 'multiple' && (
        <>
          <TitleBox>
            <MultipleTitle>내 주변 빵집</MultipleTitle>
            <SortTypeText>거리순</SortTypeText>
          </TitleBox>
          {bakeries?.map((entity) => (
            <BakeryInfoCard
              bakeryId={entity.bakeryId}
              title={entity.bakeryName}
              wentCount={entity.flagsCount}
              starCount={entity.ratingCount}
              reviewCount={entity.menuReviewsCount}
              reviews={entity.menuReviewList.map((review) => review.contents)}
              key={entity.bakeryId}
            />
          ))}
        </>
      )}
    </Base>
  );
};

export default BakeryCardList;

const Base = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleBox = styled.div`
  padding: 20px 20px 0 20px;
  display: flex;
  flex-direction: column;
`;

const MultipleTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: ${({ theme }) => theme.color.black};
`;

const SortTypeText = styled.span`
  font-size: 12px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 8px;
`;
