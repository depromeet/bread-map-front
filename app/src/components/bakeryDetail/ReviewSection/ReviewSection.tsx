import React from 'react';
import styled from '@emotion/native';
import { Reviews } from '../../shared/Reviews';
import Devider from '../Devider';
import { TabHeader } from '../TabHeader';

type MenuReview = {
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
};

type ReviewSectionProps = {
  reviews: MenuReview[];
};

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => (
  <Container>
    <Devider />
    <TabHeader title={'리뷰'} totalCount={30} addBtnText={'리뷰 작성'} />
    <Reviews reviews={reviews} />
  </Container>
);

export { ReviewSection };

const Container = styled.ScrollView``;
