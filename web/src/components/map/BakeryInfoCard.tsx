import * as React from 'react';
import styled from '@emotion/styled';
import {
  CircleReviewIcon,
  CircleStarIcon,
  CircleWentIcon,
  FlagIcon,
  QuoteIcon,
} from '@/components/icons';
import { useRouter } from 'next/router';
import { BakeryImage } from '../common/Images';

interface BakeryInfoCardProps {
  bakeryId: number;
  bakeryImage?: string;
  title: string;
  wentCount: number;
  starCount: number;
  reviewCount: number;
  reviews: string[];
}

const BakeryInfoCard: React.FC<BakeryInfoCardProps> = ({
  bakeryId,
  bakeryImage,
  title,
  wentCount,
  starCount,
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
            <span>{wentCount}</span>
          </div>
          <div>
            <CircleStarIcon />
            <span>{starCount}</span>
          </div>
          <div>
            <CircleReviewIcon />
            <span>{reviewCount}</span>
          </div>
        </InfoCountBox>
        <ReviewBox>
          {reviews.map((review) => (
            <ReviewItem key={review}>
              <QuoteIcon />
              <ReviewText>{review}</ReviewText>
            </ReviewItem>
          ))}
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
  height: 108px;
  display: flex;
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

const ReviewBox = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 10px;
  margin-top: 16px;
  height: 50px;
`;

const ReviewItem = styled.div`
  width: 196px;
  height: 100%;
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

const ReviewText = styled.span`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 1.5;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;
