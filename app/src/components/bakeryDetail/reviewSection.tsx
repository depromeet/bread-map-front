import React from 'react';
import styled from '@emotion/native';
import { Reviews } from '../shared/reviews';
import TabHeader from './tabHeader';
import { Devider } from '.';

interface MenuReview {
  breadCategoryId: number;
  contents: string;
  imgPathList: string[];
  lastModifiedDateTime: string;
  memberId: number;
  memberName: string;
  menuId: number;
  menuName: string;
  menuReviewId: number;
  rating: number;
}

interface ReviewSectionProps {
  reviews: MenuReview[];
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => {
  return (
    <Container>
      <Devider />
      <TabHeader title={'리뷰'} totalCount={30} addBtnText={'리뷰 작성'} />
      <Reviews reviews={reviews} />
    </Container>
  );
};

export default ReviewSection;

const Container = styled.ScrollView``;
