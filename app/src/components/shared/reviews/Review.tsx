import React from 'react';
import { FlatList } from 'react-native';
import styled from '@emotion/native';
import { Rating } from '../Rating';

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

type ReviewProps = {
  review: MenuReview;
};

const imgs = [
  { id: 1, src: require('../images/bread.png') },
  { id: 2, src: require('../images/bread2.png') },
  { id: 3, src: require('../images/bread.png') },
  { id: 4, src: require('../images/bread2.png') },
];

const Review: React.FC<ReviewProps> = ({ review }) => (
  <Container>
    <ReviewContent>
      <Reviewer>
        <ProfileImg source={{ uri: 'https://via.placeholder.com/100' }} />
        <Info>
          <Nickname>{review?.memberName}</Nickname>
          <UpdatedAt>{review?.lastModifiedDateTime}</UpdatedAt>
        </Info>
      </Reviewer>
      <ReviewRating>
        <Name>{review?.menuName}</Name>
        <Rating rating={review?.rating} textPosition={'right'} />
      </ReviewRating>
      <ReviewText>{review?.contents}</ReviewText>
    </ReviewContent>
    <FlatList
      // eslint-disable-next-line react-native/no-inline-styles
      style={{ flexDirection: 'row', position: 'absolute', left: 0, top: 100 }}
      data={imgs}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 20 }}
      keyExtractor={img => img.id.toString()}
      renderItem={({ item }) => <ReviewImg source={item.src} />}
    />
  </Container>
);

export default Review;

const Container = styled.View`
  position: relative;
`;

const ReviewContent = styled.View`
  margin: 20px;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.color.gray300};
  // TODO: 마지막 리뷰는 border 제거
`;

const Reviewer = styled.View`
  flex-direction: row;
`;

const ProfileImg = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 12px;
`;

const Info = styled.View`
  margin-left: 8px;
  justify-content: center;
`;

const Nickname = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;

const UpdatedAt = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.color.gray600};
  margin-top: 2px;
`;

const ReviewRating = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 16px 0 160px;
`;

const Name = styled.Text`
  font-weight: bold;
  font-size: 12px;
  color: ${({ theme }) => theme.color.gray600};
  margin-right: 8px;
`;

const ReviewImg = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 8px;
  margin-right: 8px;
`;

const ReviewText = styled.Text`
  color: ${({ theme }) => theme.color.gray700};
  font-size: 14px;
`;
