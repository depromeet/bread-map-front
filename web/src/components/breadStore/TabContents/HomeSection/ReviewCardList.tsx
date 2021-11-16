/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from '@emotion/styled';
import { BakeryEntity } from '@/remotes/network/bakery/requestGetBakery';

const MINUTE = 60;
const HOUR = 3600;
const DAY = 3600 * 24;
const MONTH = 3600 * 24 * 30;
const YEAR = 3600 * 24 * 30 * 12;

export const dateDiff = (date: string) => {
  const modifyDate = new Date(date).getTime();
  const nowDate = new Date().getTime();
  const timeDiff = Math.round((nowDate - modifyDate) / 1000);

  if (timeDiff < MINUTE) return `${timeDiff}초 전`;
  if (timeDiff < HOUR) return `${Math.round(timeDiff / MINUTE)}분 전`;
  if (timeDiff < DAY) return `${Math.round(timeDiff / HOUR)}시간 전`;
  if (timeDiff < MONTH) return `${Math.round(timeDiff / DAY)}일 전`;
  if (timeDiff < YEAR) return `${Math.round(timeDiff / MONTH)}개월 전`;
  return `${Math.round(timeDiff / YEAR)}년 전`;
};

const ReviewCardList = ({
  reviews,
}: {
  reviews: BakeryEntity['menuReviewsResponseList'];
}) => {
  return (
    <>
      {reviews?.length ? (
        <Container>
          {reviews?.map((review, idx) => (
            <li key={idx}>
              <Member>
                <img src={'/images/noProfileImg.png'} alt={'noprofile'} />
                <div>
                  <b>{review.memberName}님</b>
                  <LastModifiedDate>
                    {dateDiff(review.lastModifiedDateTime)}
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
          ))}
        </Container>
      ) : (
        <Container className={'nodata'}>
          <img src={'/images/sadSobbang.png'} alt={'nodata'} />
          <NoDataText>
            <div>빵순이를 위해 맛있는</div>
            <div>빵 정보를 공유해주세요.</div>
          </NoDataText>
        </Container>
      )}
    </>
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

  &.nodata {
    margin: auto 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

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
  display: block;
  font-size: 12px;
  color: ${({ theme }) => theme.color.gray700};
`;

const MenuInfo = styled.div`
  display: flex;
  font-size: 13px;
  color: ${({ theme }) => theme.color.gray600};
  gap: 10px;
  margin: 12px 0;
`;
const MenuImage = styled.div`
  display: flex;
  flex-basis: 140px;
  gap: 10px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  img {
    border-radius: 8px;
    flex-shrink: 0;
    width: 140px;
    max-width: 140px;
  }
`;
const MenuContent = styled.div`
  font-size: 14px;
  margin: 12px 0;
`;
