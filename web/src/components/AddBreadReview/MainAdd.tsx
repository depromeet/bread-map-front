import React from 'react';
import styled from '@emotion/styled';
import { useToast } from '@/components/common/ToastPopup';
import EditReview from './EditReview';
import { Review } from './index';
import ReviewTab from './ReviewTab';
import { atom } from 'jotai';
import { requestUploadImage } from '@/remotes/network/image';
import { requestCreateBakeryMenuReview } from '@/remotes/network/bakery';
import ResultModal from './ResultModal';
import router from 'next/router';
import ReviewDeleteModal from './ReviewDeleteModal';
import { Button } from '../common';
import ReviewMaxLengthModal from './ReviewMaxLengthModal';
import { mutateGetBakery } from '@/remotes/hooks/useGetBakery';
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
  const [loadingState, setLoadingState] = React.useState({
    open: false,
    loading: false,
    error: false,
    done: false,
    text: '빵 리뷰을 등록 할까요?',
  });
  const [isOpenRemoveModal, setIsOpenRemoveModal] = React.useState(false);
  const [isOpenReviewMaxLengthModal, setIsOpenReviewMaxLengthModal] =
    React.useState(false);
  const [errorReviews, setErrorReviews] = React.useState(new Set<number>());
  const [breadsReview, updateBreadsReview] = React.useState([
    initialSingleReview,
  ]);
  const [currentProgress, setCurrentProgress] = React.useState(0);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const { toastStatus, openToast } = useToast();

  const singleReview = breadsReview[currentProgress];

  const initBreadReview = React.useCallback(
    () => updateBreadsReview([initialSingleReview]),
    []
  );

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

    setIsOpenRemoveModal(false);
  }, [breadsReview.length, currentProgress]);

  const addReview = React.useCallback(
    (singleReview: Review) => {
      if (breadsReview.length >= 10) {
        setIsOpenReviewMaxLengthModal(true);
        return;
      }

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
    [breadsReview.length, checkEmptySection, currentProgress, openToast]
  );

  const createImages = React.useCallback(async (reviews: Review[]) => {
    setLoadingState((prev) => ({
      ...prev,
      text: '이미지 등록 중',
      loading: true,
      error: false,
      done: false,
    }));
    const preProcessReviewsData = await Promise.all(
      reviews.map(async (review) => {
        const imageUrls =
          review.imgPathList.length > 0
            ? await requestUploadImage({
                files: review.imgPathList.map((image) => image.file),
              })
            : [];

        return {
          categoryName: review.categoryName,
          contents: review.contents,
          imgPathList: imageUrls,
          menuName: review.menuName,
          price: +review.price,
          rating: review.rating < 0 ? 0 : review.rating,
        };
      })
    );
    return preProcessReviewsData;
  }, []);

  const creatReviews = React.useCallback(
    async (bakeryId: number, reviews: Review[]) => {
      const reviewDatas = await createImages(reviews);
      setLoadingState((prev) => ({ ...prev, message: '리뷰 등록 중' }));
      const response = await requestCreateBakeryMenuReview({
        bakeryId,
        reviews: reviewDatas,
      });

      if (!response.ok) {
        setLoadingState((prev) => ({
          ...prev,
          error: true,
          text: response.message || '등록하는 과정에서\n오류가 생겼어요 !',
        }));
      } else {
        setLoadingState((prev) => ({
          ...prev,
          text:
            response.message ||
            `${breadsReview.length}개의 빵 리뷰 등록이\n완료 되었어요!`,
          loading: false,
          error: false,
          done: true,
        }));
        initBreadReview();
      }
    },
    [breadsReview.length, createImages, initBreadReview]
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

      setLoadingState((prev) => ({ ...prev, open: true }));
    },
    [checkEmptySection, currentProgress, openToast]
  );

  const modalSubmit = React.useCallback(() => {
    creatReviews(bakeryId, breadsReview);
  }, [bakeryId, breadsReview, creatReviews]);

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
            <DeleteBtn
              styleType={'none'}
              onClick={() => setIsOpenRemoveModal(true)}
            >
              삭제
            </DeleteBtn>
          </BreadHeader>
        </>
      ) : (
        <Title>
          <b>어떤 빵</b>을<br /> 먹었나요?
        </Title>
      )}
      <EditReview
        singleReview={singleReview}
        isSubmitted={isSubmitted}
        toastStatus={toastStatus}
        nextProgress={addReview}
        submitReview={submitReview}
      />

      <ResultModal
        isOpenModal={loadingState}
        bakeryId={bakeryId}
        buttonClickHandler={modalSubmit}
        modalSetHandler={setLoadingState}
      />

      <ReviewDeleteModal
        closeModal={() => setIsOpenRemoveModal(false)}
        index={currentProgress}
        isOpenModal={isOpenRemoveModal}
        deleteSingleReview={deleteSingleReview}
      />

      <ReviewMaxLengthModal
        closeModal={() => setIsOpenReviewMaxLengthModal(false)}
        isOpenModal={isOpenReviewMaxLengthModal}
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

const DeleteBtn = styled(Button)`
  padding: 10px;
  width: auto;
`;
