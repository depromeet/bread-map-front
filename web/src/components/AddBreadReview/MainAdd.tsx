import React from 'react';
import styled from '@emotion/styled';
import { useToast } from '@/components/common/ToastPopup';
import StartAdd from './StartAdd';
import { Review } from './index';
import ReviewTab from './ReviewTab';
interface MainAddProps {
  bakeryId: number;
}

const initialSingleReview: Review = {
  categoryName: null,
  menuName: '',
  price: -1,
  contents: '',
  rating: -1,
  imgPathList: [],
};

export const checkEmptySection = (review: Review) => {
  return (
    review.categoryName === null ||
    review.menuName.trim() === '' ||
    review.price < 0
  );
};

const MainAdd = ({ bakeryId }: MainAddProps) => {
  const [errorReviews, setErrorReviews] = React.useState<Set<number>>(
    new Set<number>()
  );
  const [breadsReview, updateBreadsReview] = React.useState<Review[]>([
    initialSingleReview,
  ]);

  const [currentProgress, setCurrentProgress] = React.useState(0);
  const singleReview = breadsReview[currentProgress];

  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const { toastStatus, openToast } = useToast();

  const deleteSingleReview = () => {
    updateBreadsReview((prev) =>
      prev.filter((_, idx) => !(idx === currentProgress))
    );

    if (currentProgress === breadsReview.length - 1)
      setCurrentProgress((prev) => prev - 1);
  };

  const addReview = (singleReview: Review) => {
    if (checkEmptySection(singleReview)) {
      setIsSubmitted(true);
      return openToast();
    }

    updateBreadsReview((prev) => {
      const reviews = [...prev];
      reviews[currentProgress] = singleReview;
      reviews.push(initialSingleReview);
      return reviews;
    });

    setCurrentProgress((prev) => prev + 1);

    window.scrollTo({ top: 0 });
  };

  const submitReview = (singleReview: Review) => {
    const errorReviews = [];
    for (const idx in breadsReview) {
      if (
        (+idx === currentProgress && checkEmptySection(singleReview)) ||
        checkEmptySection(breadsReview[idx])
      )
        errorReviews.push(+idx);
    }

    updateBreadsReview((prev) => {
      const reviews = [...prev];
      reviews[currentProgress] = singleReview;
      return reviews;
    });

    setErrorReviews(new Set([...errorReviews]));
    if (errorReviews.length > 0) openToast();
  };

  return (
    <>
      {breadsReview.length > 1 ? (
        <>
          <ReviewTab
            length={breadsReview.length}
            currentProgress={currentProgress}
            setCurrentProgress={setCurrentProgress}
            errorReviews={errorReviews}
          />
          <BreadHeader>
            <Title>{currentProgress + 1}번째 빵</Title>
            <DeleteBtn onClick={deleteSingleReview}>삭제</DeleteBtn>
          </BreadHeader>
        </>
      ) : (
        <Title>
          <b>어떤 빵</b>을<br /> 먹었나요?
        </Title>
      )}
      <StartAdd
        singleReview={singleReview}
        isSubmitted={isSubmitted}
        toastStatus={toastStatus}
        nextProgress={addReview}
        submitReview={submitReview}
      />
    </>
  );
};

export default MainAdd;

const BreadHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  margin: 0.75rem 0 2.25rem;
  > b {
    color: ${({ theme }) => theme.color.primary500};
  }
`;

const DeleteBtn = styled.button`
  padding: 10px;
  border: ${({ theme }) => ` 1px solid ${theme.color.gray300}`};
  border-radius: 0.5rem;
  background: none;
  font-size: 0.87rem;
  font-weight: bold;
  color: ${({ theme }) => theme.color.gray700};
`;
