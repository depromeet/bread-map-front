import React from 'react';
import styled from '@emotion/styled';
import { useGetUserFlagBakeries } from '@/remotes/hooks';

import BakeryInfoCard from '@/components/map/BakeryInfoCard';

const WishSection: React.FC = () => {
  const { data, error } = useGetUserFlagBakeries();

  if (error) return <div>Error</div>;
  if (!data) return <div>Loading...</div>;

  console.log(data);

  return (
    <Base>
      {data
        .filter((item) => item.flagType === 'PICKED')
        .map((item, idx) => (
          <BakeryInfoCard
            key={item.bakeryId}
            bakeryId={item.bakeryId}
            title={item.bakeryName}
            bakeryImage={process.env.NEXT_PUBLIC_S3_URI + item.imgPath}
            wentCount={item.flagsCount}
            starAvg={item.avgRating}
            reviewCount={item.menuReviewsCount}
            reviews={item.menuReviewContentList}
          />
        ))}
    </Base>
  );
};

export default WishSection;

const Base = styled.div`
  display: flex;
  flex-direction: column;
`;
