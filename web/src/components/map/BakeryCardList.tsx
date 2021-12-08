import * as React from 'react';
import styled from '@emotion/styled';
import { useAtom } from 'jotai';
import {
  bottomSheetTypeAtom,
  currentBakeryIdAtom,
  currentFilterAtom,
  currentRangeBakeriesAtom,
} from '@/store/map';
import BakeryInfoCard from './BakeryInfoCard';
import { ArrowDown } from '../icons';

const BakeryCardList: React.FC = () => {
  const [bottomSheetType] = useAtom(bottomSheetTypeAtom);
  const [currentBakeryId] = useAtom(currentBakeryIdAtom);
  const [breadFilter] = useAtom(currentFilterAtom);
  const [bakeries] = useAtom(currentRangeBakeriesAtom);

  const currentBakeryEntity = bakeries?.find(
    (el) => el.bakeryId === currentBakeryId
  );

  const afterFilterBakeries =
    breadFilter.length > 0
      ? bakeries?.filter((bakery) => {
          for (let i = 0; i < breadFilter.length; i++) {
            if (bakery.breadCategoryList.includes(breadFilter[i])) {
              return true;
            }
          }
          return false;
        })
      : bakeries;

  return (
    <Base>
      {bottomSheetType === 'single' && currentBakeryEntity && (
        <BakeryInfoCard
          bakeryId={currentBakeryEntity.bakeryId}
          title={currentBakeryEntity.bakeryName}
          bakeryImage={
            process.env.NEXT_PUBLIC_S3_URI + currentBakeryEntity.imgPath
          }
          wentCount={currentBakeryEntity.flagsCount}
          starAvg={currentBakeryEntity.avgRating}
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
            <SortTypeText>
              거리순 <ArrowDown />
            </SortTypeText>
          </TitleBox>
          {afterFilterBakeries?.map((entity, idx) => (
            <BakeryInfoCard
              bakeryId={entity.bakeryId}
              title={entity.bakeryName}
              bakeryImage={process.env.NEXT_PUBLIC_S3_URI + entity.imgPath}
              wentCount={entity.flagsCount}
              starAvg={entity.avgRating}
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
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 8px;

  svg {
    width: 1em;
    height: 1em;
  }
`;
