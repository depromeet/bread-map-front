import * as React from 'react';
import styled from '@emotion/styled';
import {
  CircleReviewIcon,
  CircleStarIcon,
  CircleWentIcon,
  FlagIcon,
  PencilEdit,
  QuoteIcon,
} from '@/components/icons';
import { useRouter } from 'next/router';
import { BakeryImage } from '../common/Images';
import { addComma } from '@/utils/numberUtils';

interface BakeryInfoCardProps {
  bakeryId: number;
  bakeryImage?: string;
  title: string;
  wentCount: number;
  starAvg: number;
  reviewCount: number;
  reviews: string[];
}

const BakeryInfoCard: React.FC<BakeryInfoCardProps> = ({
  bakeryId,
  bakeryImage,
  title,
  wentCount,
  starAvg,
  reviewCount,
  reviews,
}) => {
  const router = useRouter();
  const cardClickHandler = React.useCallback(() => {
    router.push(`bakery/${bakeryId}`);
  }, [bakeryId, router]);

  return (
    <Card onClick={cardClickHandler}>
      <ImageBox>
        <BakeryImage src={bakeryImage || ''} />
        <FlagButton>
          <FlagIcon width={16} height={16} />
        </FlagButton>
      </ImageBox>
      <InfoBox>
        <InfoTitle>{title}</InfoTitle>
        <InfoCountBox>
          <div>
            <CircleWentIcon />
            <span>{addComma(wentCount)}</span>
          </div>
          <div>
            <CircleStarIcon />
            <span>{starAvg.toFixed(1)}</span>
          </div>
          <div>
            <CircleReviewIcon />
            <span>{addComma(reviewCount)}</span>
          </div>
        </InfoCountBox>
        <ReviewBox onClick={(e) => e.stopPropagation()}>
          {reviews.length ? (
            reviews.map((review) => (
              <ReviewItem key={review}>
                <QuoteIcon />
                <ReviewText>{review}</ReviewText>
              </ReviewItem>
            ))
          ) : (
            <NoReviewData>
              <PencilEdit />
              <ReviewText>
                <b>이 빵집</b> 맛있었나요?
                <br />첫 리뷰를 작성해주세요
              </ReviewText>
            </NoReviewData>
          )}
        </ReviewBox>
      </InfoBox>
    </Card>
  );
};

export default BakeryInfoCard;

const Card = styled.div`
  padding: 20px;
  cursor: pointer;
  width: 100%;
  overflow: hidden;
  height: 148px;
  display: flex;
  align-items: center;
`;

const ImageBox = styled.div`
  position: relative;
  width: 108px;
  min-width: 108px;
  height: 108px;
  border-radius: 16px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.gray200};

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const InfoBox = styled.div`
  margin-left: 12px;
  flex: 1;
  overflow: hidden;
  height: 108px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const FlagButton = styled.button`
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

const InfoTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.black};
`;

const InfoCountBox = styled.div`
  height: 20px;
  display: flex;
  gap: 8px;

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

const ReviewBox = styled.div`
  display: flex;
  overflow: scroll;
  gap: 10px;
  height: 50px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ReviewItem = styled.div`
  width: 196px;
  height: 100%;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.color.gray100};
  color: ${({ theme }) => theme.color.gray600};
  border-radius: 8px;
  padding: 8px;
  display: flex;
`;

const ReviewText = styled.span`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  margin-left: 2px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
`;

const NoReviewData = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 8px;
  padding: 6px 8px;
  border: 1px solid ${({ theme }) => theme.color.gray200};
  color: ${({ theme }) => theme.color.gray600};
  svg {
    fill: ${({ theme }) => theme.color.gray400};
  }

  ${ReviewText} {
    margin-left: 4px;
  }
`;
