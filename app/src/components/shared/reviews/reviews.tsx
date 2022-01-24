import React from 'react';
import { FlatList } from 'react-native';
import Review from './review';

// TODO: ios -> 하단 스크롤 끝까지 안됨, 확인필요
// TODO: android -> 화면 스크롤 안됨, 확인필요

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

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  return (
    <FlatList
      data={reviews}
      keyExtractor={review => review.menuReviewId.toString()}
      renderItem={({ item }) => {
        return <Review review={item} />;
      }}
    />
  );
};

export default Reviews;
