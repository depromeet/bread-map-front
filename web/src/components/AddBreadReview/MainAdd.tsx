import React from 'react';
import styled from '@emotion/styled';
import { BreadCategory } from '@/constants/breadCategories';
import { useCategories } from '@/components/common/BreadCategoryList';
import { useToast } from '@/components/common/ToastPopup';
import { Plus } from '@/components/icons';
import MoreAdd from './MoreAdd';
import StartAdd from './StartAdd';
import CategorySelect from './CategorySelect';
import { Review, BreadsReview, BreadsUpdate } from './index';
import ReviewTab from './ReviewTab';
import { requestCreateBakeryMenuReview } from '@/remotes/network/bakery';
import { CreateBakeryMenuReviewPayload } from '@/remotes/network/bakery/requestCreateBakeryMenuReview';

const initialRating = [0, 0, 0, 0, 0];

const initialSingleReview: Review = {
  categoryName: null,
  menuName: '',
  price: 0,
  contents: '',
  rating: 0,
  imgPathList: [],
};

interface MainAddProps {
  bakeryId: number;
  breadsReview: BreadsReview;
  updateBreadsReview: BreadsUpdate;
}

const MainAdd = ({
  bakeryId,
  breadsReview,
  updateBreadsReview,
}: MainAddProps) => {
  const [progress, setProgress] = React.useState(1);
  const [currentProgress, setCurrentProgress] = React.useState(1);
  const [rating, setRating] = React.useState<number[]>(initialRating);
  const [singleReview, setSingleReview] =
    React.useState<Review>(initialSingleReview);

  const isMultiSelect = false;
  const [isCategoryPage, setIsCategoryPage] = React.useState(false);
  const {
    selectedCategory,
    initializeCategories,
    onClickCategory,
    onCancelCategory,
    setIsOpenFirst,
  } = useCategories(isMultiSelect);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const { toastStatus, openToast } = useToast();
  const [isOpenCreatedModal, setIsOpenCreatedModal] = React.useState({
    open: false,
    ok: false,
    text: '',
  });

  React.useEffect(() => {
    setIsSubmitted(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentProgress]);

  React.useEffect(() => {
    setSingleReview(breadsReview[currentProgress]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentProgress]);

  const editScore = (clickedIndex: number) => {
    setRating((rating) =>
      rating.map((_, i) => {
        if (clickedIndex < i) return 0;
        return 1;
      })
    );
  };

  const editContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSingleReview({
      ...singleReview,
      [name]: value,
    });
  };

  const editCategory = (categoryName: BreadCategory) => {
    setSingleReview({
      ...singleReview,
      categoryName,
    });
  };

  const deleteSingleReview = (targetProgress: number) => {
    let updatedReview: BreadsReview = {};
    let i = 1;
    for (const [key, value] of Object.entries(breadsReview)) {
      if (targetProgress.toString() !== key) {
        updatedReview[i] = value;
        i++;
      }
    }

    updateBreadsReview(updatedReview);
    setProgress((prev) => prev - 1);
  };

  React.useEffect(() => {
    editCategory(selectedCategory[0]?.category || null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  React.useEffect(() => {
    setSingleReview({
      ...singleReview,
      rating: rating.reduce((acc, cur) => acc + cur, 0),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating]);

  React.useEffect(() => {
    updateBreadsReview({
      ...breadsReview,
      [currentProgress]: singleReview,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [singleReview]);

  const initializeSingleReview = () => {
    setRating(initialRating);
    setSingleReview(initialSingleReview);
    initializeCategories();
  };

  const checkEmptySection = (): boolean => {
    if (breadsReview[progress].categoryName === null) return true;
    else if (breadsReview[progress].menuName === '') return true;
    else if (breadsReview[progress].price === 0) return true;
    else return false;
  };

  const nextProgress = () => {
    setIsSubmitted(true);
    if (checkEmptySection()) {
      setCurrentProgress(progress);
      return openToast();
    }

    setProgress((prev) => prev + 1);
    setCurrentProgress(progress + 1);
    initializeSingleReview();
    console.log('reviews', breadsReview);
  };

  const checkSelectedCategory = (): BreadCategory[] | null => {
    const category = breadsReview[currentProgress]?.categoryName;
    if (category === null) return null;
    else return [category];
  };

  interface PostResponse {
    ok: boolean;
    message: string | null;
  }

  const createBakeryMenuReview = async ({
    bakeryId,
    reviews,
  }: CreateBakeryMenuReviewPayload): Promise<PostResponse> => {
    const response = await requestCreateBakeryMenuReview({
      bakeryId,
      reviews,
    });

    if (response.status >= 400 || !response.ok)
      return {
        ok: false,
        message: response.message || '등록하는 과정에서 오류가 생겼어요 !',
      };
    else
      return {
        ok: true,
        message: null,
      };
  };

  type ReviewType = {
    categoryName: string;
    contents: string;
    imgPathList: string[];
    menuName: string;
    price: number;
    rating: number;
  };

  const submitReview = async () => {
    const reviews: CreateBakeryMenuReviewPayload['reviews'] = Object.values(
      breadsReview
    ).map((item: Review) => {
      return { ...item, price: +item.price } as ReviewType;
    });

    const response = await createBakeryMenuReview({ bakeryId: 5, reviews });
    if (!response.ok) {
      response.message
        ? setIsOpenCreatedModal({
            open: true,
            ok: false,
            text: response.message,
          })
        : setIsOpenCreatedModal({
            open: true,
            ok: false,
            text: '등록하는 과정에서\n오류가 생겼어요 !',
          });
    } else {
      setIsOpenCreatedModal({
        open: true,
        ok: true,
        text: `${reviews.length}개의 빵 리뷰 등록이\n완료되었어요.`,
      });
    }
  };

  return (
    <>
      {isCategoryPage && (
        <CategorySelect
          setIsCategoryPage={setIsCategoryPage}
          onClickCategory={onClickCategory}
          onCancelCategory={onCancelCategory}
          setIsOpenFirst={setIsOpenFirst}
          selectedCategory={checkSelectedCategory()}
        />
      )}
      {progress >= 2 && !isCategoryPage && (
        <ReviewTab
          length={Object.keys(breadsReview).length}
          currentProgress={currentProgress}
          setCurrentProgress={setCurrentProgress}
        />
      )}
      {progress === 1 && !isCategoryPage && (
        <StartAdd
          setIsCategoryPage={setIsCategoryPage}
          selectedCategory={selectedCategory}
          rating={rating}
          singleReview={singleReview}
          editScore={editScore}
          editContent={editContent}
          isSubmitted={isSubmitted}
          toastStatus={toastStatus}
        />
      )}
      {progress >= 2 && !isCategoryPage && (
        <MoreAdd
          breadsReview={breadsReview}
          setIsCategoryPage={setIsCategoryPage}
          selectedCategory={selectedCategory}
          currentProgress={currentProgress}
          rating={rating}
          singleReview={singleReview}
          deleteSingleReview={deleteSingleReview}
          editScore={editScore}
          editContent={editContent}
          isSubmitted={isSubmitted}
          toastStatus={toastStatus}
        />
      )}
      {!isCategoryPage && (
        <BtnWrapper>
          <MoreAddBtn onClick={nextProgress}>
            <Plus />
            <span>다른 빵 추가하기</span>
          </MoreAddBtn>
          <SubmitBtn onClick={submitReview}>확인</SubmitBtn>
        </BtnWrapper>
      )}
    </>
  );
};

export default MainAdd;

const BtnWrapper = styled.div`
  width: 100%;
`;

const MoreAddBtn = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  border: ${({ theme }) => `1px solid ${theme.color.gray400}`};
  border-radius: 0.5rem;
  padding: 0.85rem 0;
  margin-bottom: 8px;
  > span {
    color: ${({ theme }) => theme.color.gray700};
    font-weight: bold;
    font-size: 0.87rem;
    margin-left: 4px;
  }
  svg {
    width: 1rem;
    height: 1rem;
  }
  path {
    stroke: ${({ theme }) => theme.color.gray400};
  }
`;

const SubmitBtn = styled.button`
  width: 100%;
  display: block;
  background-color: ${({ theme }) => theme.color.primary500};
  border-radius: 0.5rem;
  border: none;
  padding: 1rem 0;
  color: ${({ theme }) => theme.color.white};
  font-size: 1rem;
`;
