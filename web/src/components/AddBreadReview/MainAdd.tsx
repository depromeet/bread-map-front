import React from 'react';
import styled from '@emotion/styled';
import { useToast } from '@/components/common/ToastPopup';
import StartAdd from './StartAdd';
import { Review } from './index';
import ReviewTab from './ReviewTab';
import { atom } from 'jotai';
interface MainAddProps {
  bakeryId: number;
}

const initialSingleReview: Review = {
  breadId: 0,
  categoryName: null,
  menuName: '',
  price: -1,
  contents: '',
  rating: -1,
  imgPathList: [],
};

export const singleReviewAtom = atom<Review>(initialSingleReview);

export const checkHasError = (review: Review) =>
  review.categoryName === null ||
  review.menuName.trim() === '' ||
  review.price < 0;

const MainAdd = ({ bakeryId }: MainAddProps) => {
  const [errorReviews, setErrorReviews] = React.useState(new Set<number>());
  const [breadsReview, updateBreadsReview] = React.useState([
    initialSingleReview,
  ]);
  const [currentProgress, setCurrentProgress] = React.useState(0);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const { toastStatus, openToast } = useToast();

  const singleReview = breadsReview[currentProgress];

  const checkEmptySection = React.useCallback(
    (singleReview: Review) => {
      const errorReviewIdx = [];
      for (const idx in breadsReview) {
        console.log(+idx, currentProgress);
        if (+idx === currentProgress) {
          checkHasError(singleReview) && errorReviewIdx.push(+idx);
          continue;
        }
        checkHasError(breadsReview[idx]) && errorReviewIdx.push(+idx);
      }
      setErrorReviews(new Set([...errorReviewIdx]));
      return errorReviewIdx;
    },
    [breadsReview, currentProgress]
  );

  const progressChangeHandler = React.useCallback(
    ({ singleReview, tabIdx }: { singleReview: Review; tabIdx: number }) => {
      updateBreadsReview((prev) => {
        const reviews = [...prev];
        reviews[currentProgress] = singleReview;
        return reviews;
      });
      setCurrentProgress(tabIdx);
    },
    [currentProgress]
  );

  const deleteSingleReview = React.useCallback(() => {
    updateBreadsReview((prev) =>
      prev.filter((_, idx) => !(idx === currentProgress))
    );
    currentProgress === breadsReview.length - 1 &&
      setCurrentProgress((prev) => prev - 1);
  }, [breadsReview.length, currentProgress]);

  const addReview = React.useCallback(
    (singleReview: Review) => {
      const errorReviewIdx = checkEmptySection(singleReview);
      updateBreadsReview((prev) => {
        const reviews = [...prev];
        reviews[currentProgress] = singleReview;
        if (errorReviewIdx.length === 0)
          reviews.push({
            ...initialSingleReview,
            breadId: currentProgress + 1,
          });
        return reviews;
      });

      window.scrollTo({ top: 0 });
      if (errorReviewIdx.length > 0) {
        setIsSubmitted(true);
        return openToast();
      }
      setCurrentProgress((prev) => prev + 1);
      setIsSubmitted(false);
    },
    [checkEmptySection, currentProgress, openToast]
  );

  const submitReview = React.useCallback(
    (singleReview: Review) => {
      const errorReviewIdx = checkEmptySection(singleReview);

      updateBreadsReview((prev) => {
        const reviews = [...prev];
        reviews[currentProgress] = singleReview;
        return reviews;
      });

      if (errorReviewIdx.length > 0) {
        setIsSubmitted(true);
        return openToast();
      }
    },
    [checkEmptySection, currentProgress, openToast]
  );

  return (
    <>
      {breadsReview.length > 1 ? (
        <>
          <ReviewTab
            length={breadsReview.length}
            currentProgress={currentProgress}
            tabClickHandler={progressChangeHandler}
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
