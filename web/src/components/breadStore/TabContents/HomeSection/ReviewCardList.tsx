/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from '@emotion/styled';
import { BakeryEntity } from '@/remotes/network/bakery/requestGetBakery';

const ReviewCardList = ({
  reviews,
}: {
  reviews: BakeryEntity['menuReviewsResponseList'];
}) => {
  return (
    <Container>
      {reviews?.length ? (
        reviews?.map((review, idx) => (
          <li key={idx}>
            <Member>
              <img src={'/images/noProfileImg.png'} alt={'noprofile'} />
              <div>
                <b>{review.memberName}</b>
                <LastModifiedDate>
                  {review.lastModifiedDateTime}
                </LastModifiedDate>
              </div>
            </Member>
            <MenuInfo>
              <div>{review.menuName}</div>
              <div>star</div>
              <div>{review.rating}</div>
            </MenuInfo>
            <MenuImage>
              {review.imgPathList.map((img, idx) => (
                <img key={idx} src={img} alt="review" />
              ))}
            </MenuImage>
            <MenuContent>{review.contents}</MenuContent>
          </li>
        ))
      ) : (
        <NoDataContainer>
          <img src={'/images/sadSobbang.png'} alt={'nodata'} />
          <NoDataText>
            <div>빵순이를 위해 맛있는</div>
            <div>빵 정보를 공유해주세요.</div>
          </NoDataText>
        </NoDataContainer>
      )}
    </Container>
  );
};

export default ReviewCardList;

const Container = styled.ul`
  list-style: none;
  width: 100%;
  margin: 16px 0;
  background: ${({ theme }) => theme.color.white};
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 16px;

  li {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray300};
    &:last-child {
      border-bottom: none;
    }
    img {
      width: 100%;
    }
  }
`;

const NoDataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const NoDataText = styled.div`
  text-align: center;
  margin: 8px 0;
  line-height: 1.5;
  font-weight: 500;
  color: ${({ theme }) => theme.color.gray500};
`;

const Member = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
  img {
    min-width: 48px;
    width: 48px;
    max-width: 48px;
  }
`;

const LastModifiedDate = styled.div`
  color: ${({ theme }) => theme.color.gray400};
`;

const MenuInfo = styled.div`
  display: flex;
  gap: 10px;
  margin: 12px 0;
`;
const MenuImage = styled.div`
  display: flex;
  flex-basis: 140px;
  gap: 10px;
  overflow: scroll;
  img {
    border-radius: 8px;
    flex-shrink: 0;
    width: 140px;
    max-width: 140px;
  }
`;
const MenuContent = styled.div`
  margin: 12px 0;
`;
