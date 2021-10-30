import * as React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { NaverMap, BreadMarker } from '@/lib/navermap';
import { BottomSheet } from '@/components/common';
import {
  CircleReview,
  CircleWent,
  CircleStar,
  Quote,
  Flag,
} from '@/components/icons';
import CurrentPositionButton from './CurrentPositionButton';
import BreadFilterButton from './BreadFilterButton';
import FlagFilterButton from './FlagFilterButton';
import type { BottomSheetRef } from 'react-spring-bottom-sheet';

const DEFAULT_POSITION = {
  lat: 37.5666103,
  lng: 126.9783882,
};

const MOCK_DATA = [
  {
    address: '1',
    avgRating: 0,
    bakeryId: 1,
    bakeryName: 'test1',
    breadCategoryList: ['식사빵'],
    flagsCount: 0,
    imgPath: '',
    latitude: 37.5666103,
    longitude: 126.9783882,
    menuReviewList: [],
    menuReviewsCount: 0,
    ratingCount: 0,
  },
  {
    address: '2',
    avgRating: 0,
    bakeryId: 2,
    bakeryName: 'test2',
    breadCategoryList: ['비건/키토'],
    flagsCount: 0,
    imgPath: '',
    latitude: 37.569,
    longitude: 126.979,
    menuReviewList: [],
    menuReviewsCount: 0,
    ratingCount: 0,
  },
  {
    address: '3',
    avgRating: 0,
    bakeryId: 3,
    bakeryName: 'test3',
    breadCategoryList: ['식사빵'],
    flagsCount: 0,
    imgPath: '',
    latitude: 37.565,
    longitude: 126.977,
    menuReviewList: [],
    menuReviewsCount: 0,
    ratingCount: 0,
  },
  {
    address: '4',
    avgRating: 0,
    bakeryId: 4,
    bakeryName: 'test4',
    breadCategoryList: ['크로와상'],
    flagsCount: 0,
    imgPath: '',
    latitude: 37.564,
    longitude: 126.977,
    menuReviewList: [],
    menuReviewsCount: 0,
    ratingCount: 0,
  },
  {
    address: '5',
    avgRating: 0,
    bakeryId: 5,
    bakeryName: 'test5',
    breadCategoryList: ['케이크'],
    flagsCount: 0,
    imgPath: '',
    latitude: 37.56766,
    longitude: 126.97833,
    menuReviewList: [],
    menuReviewsCount: 0,
    ratingCount: 0,
  },
  {
    address: '6',
    avgRating: 0,
    bakeryId: 6,
    bakeryName: 'test6',
    breadCategoryList: ['쿠키'],
    flagsCount: 0,
    imgPath: '',
    latitude: 37.563333,
    longitude: 126.976666,
    menuReviewList: [],
    menuReviewsCount: 0,
    ratingCount: 0,
  },
];

const DaedongMapContainer: React.FC = () => {
  const theme = useTheme();

  const bottomRef = React.useRef<BottomSheetRef | null>(null);

  return (
    <Container>
      <NaverMapBox
        ncpClientId={process.env.NEXT_PUBLIC_NAVER_ID}
        mapOptions={{
          zoom: 10,
        }}
      >
        <CurrentPositionButton />
        <BreadFilterButton />
        <FlagFilterButton />
        {MOCK_DATA.map((el) => (
          <BreadMarker
            latitude={el.latitude}
            longitude={el.longitude}
            onClick={(modifier) => {
              modifier.modifySize('large');
              bottomRef.current?.snapTo(({ snapPoints }) => snapPoints[1]);
            }}
            key={el.bakeryId}
          />
        ))}
      </NaverMapBox>
      <BottomSheet
        open
        skipInitialTransition
        blocking={false}
        defaultSnap={({ headerHeight }) => headerHeight}
        snapPoints={({ headerHeight, maxHeight }) => [
          headerHeight,
          headerHeight + 132,
          (maxHeight - theme.height.footer) / 3,
          maxHeight - theme.height.footer,
        ]}
        ref={bottomRef}
      >
        <BakeryInfoCard>
          <BakeryImageBox>
            {/*<BakeryInfoImage />*/}
            <BakeryFlagButton>
              <Flag width={16} height={16} />
            </BakeryFlagButton>
          </BakeryImageBox>
          <BakeryInfoBox>
            <BakeryInfoTitle>빵집 이름</BakeryInfoTitle>
            <BakeryInfoCountBox>
              <div>
                <CircleWent />
                <span>0</span>
              </div>
              <div>
                <CircleStar />
                <span>0</span>
              </div>
              <div>
                <CircleReview />
                <span>0</span>
              </div>
            </BakeryInfoCountBox>
            <BakeryReviewBox>
              <BakeryReviewItem>
                <Quote />
                <span>마카롱 먹으면 죽어요. 매일 2개씩 먹고있어요!</span>
              </BakeryReviewItem>
            </BakeryReviewBox>
          </BakeryInfoBox>
        </BakeryInfoCard>
      </BottomSheet>
    </Container>
  );
};

export default DaedongMapContainer;

const Container = styled.div`
  width: 100%;
  position: relative;
  height: ${({ theme }) => `calc(100vh - ${theme.height.footer}px)`};
`;

const NaverMapBox = styled(NaverMap)`
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const BakeryInfoCard = styled.div`
  padding: 12px;
  width: 100%;
  height: 132px;
  display: flex;
  align-items: center;
`;

const BakeryImageBox = styled.div`
  position: relative;
  width: 108px;
  height: 108px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.color.gray200};
`;

const BakeryInfoImage = styled.img`
  width: 108px;
  height: 108px;
  border-radius: 16px;
  background-color: transparent;
`;

const BakeryInfoBox = styled.div`
  margin-left: 12px;
  height: 108px;
  display: flex;
  flex-direction: column;
`;

const BakeryFlagButton = styled.button`
  position: absolute;
  right: 6px;
  bottom: 6px;

  width: 28px;
  height: 28px;
  border: none;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const BakeryInfoTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.black};
`;

const BakeryInfoCountBox = styled.div`
  margin-top: 4px;
  height: 20px;
  display: flex;

  div + div {
    margin-left: 12px;
  }

  div {
    display: flex;

    span {
      margin-left: 4px;
      font-size: 12px;
      font-weight: 400;
      color: ${({ theme }) => theme.color.gray600};
    }
  }
`;

const BakeryReviewBox = styled.div`
  margin-top: 16px;
  height: 50px;
`;

const BakeryReviewItem = styled.div`
  width: 196px;
  height: 50px;
  background-color: ${({ theme }) => theme.color.gray100};
  color: ${({ theme }) => theme.color.gray600};
  border-radius: 8px;
  padding: 8px;
  display: flex;

  span {
    margin-left: 2px;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.4;
  }
`;
