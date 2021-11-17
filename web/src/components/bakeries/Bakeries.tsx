import React from 'react';
import styled from '@emotion/styled';
import { useGetBakeries } from '@/remotes/hooks';

const Bakery = () => {
  return (
    <BakeryItem>
      <Image src="https://via.placeholder.com/170" alt="image" />
      <Info></Info>
    </BakeryItem>
  );
};

const Bakeries = () => {
  const { data: bakeries, error: err } = useGetBakeries({
    latitude: 37.5657037,
    longitude: 126.9746676,
    range: 10,
  });

  const error = null;

  return (
    <>
      <Title>내 주변 빵집</Title>
      {error && <div>error</div>}
      {!bakeries && <div>loading...</div>}
      {bakeries && (
        <BakeryList>
          {bakeries.map((item) => (
            <Bakery key={item.bakeryId} />
          ))}
        </BakeryList>
      )}
    </>
  );
};

export default Bakeries;

const BakeryItem = styled.li`
  list-style: none;
  display: flex;
  margin-bottom: 8px;
`;

const Image = styled.img`
  border-radius: 8px;
`;

const Info = styled.div`
  flex: 1;
`;

const Title = styled.h1``;

const BakeryList = styled.ul`
  padding: 0;
`;
