import React from 'react';
import { FlatList } from 'react-native';
import Review from './Review';

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

interface ReviewsProps {
  reviews: MenuReview[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => (
  <FlatList
    data={reviews}
    keyExtractor={review => review.menuReviewId.toString()}
    renderItem={({ item }) => <Review review={item} />}
  />
);

export default Reviews;
