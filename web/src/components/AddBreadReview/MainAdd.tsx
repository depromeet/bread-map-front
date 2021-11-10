import React from 'react';
import styled from '@emotion/styled';
import { BreadCategoeryInfo } from '@/constants/breadCategories';
import { useCategories } from '@/components/common/BreadCategoryList';
import { useToast } from '@/components/common/ToastPopup';
import { Plus } from '@/components/icons';
import MoreAdd from './MoreAdd';
import StartAdd from './StartAdd';
import CategorySelect from './CategorySelect';
import { Review, BreadsReview, BreadsUpdate } from './index';
import ReviewTab from './ReviewTab';

const initialStar = [0, 0, 0, 0, 0];

const initialSingleReview: Review = {
  category: null,
  name: '',
  price: 0,
  text: '',
  star: 0,
};

interface MainAddProps {
  breadsReview: BreadsReview;
  updateBreadsReview: BreadsUpdate;
}

const MainAdd = ({ breadsReview, updateBreadsReview }: MainAddProps) => {
  const [progress, setProgress] = React.useState(1);
  const [currentProgress, setCurrentProgress] = React.useState(1);
  const [stars, setStars] = React.useState<number[]>(initialStar);
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

  React.useEffect(() => {
    setIsSubmitted(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentProgress]);

  React.useEffect(() => {
    setSingleReview(breadsReview[currentProgress]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentProgress]);

  const editScore = (clickedIndex: number) => {
    setStars((stars) =>
      stars.map((_, i) => {
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

  const editCategory = (category: BreadCategoeryInfo) => {
    setSingleReview({
      ...singleReview,
      category: category,
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
    setSingleReview(initialSingleReview);
    setProgress((prev) => prev - 1);
  };

  React.useEffect(() => {
    editCategory(selectedCategory[0] || null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  React.useEffect(() => {
    setSingleReview({
      ...singleReview,
      star: stars.reduce((acc, cur) => acc + cur, 0),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stars]);

  React.useEffect(() => {
    updateBreadsReview({
      ...breadsReview,
      [currentProgress]: singleReview,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [singleReview]);

  const initializeSingleReview = () => {
    setStars(initialStar);
    setSingleReview(initialSingleReview);
    initializeCategories();
  };

  const checkEmptySection = (): boolean => {
    if (breadsReview[progress].category === null) return true;
    else if (breadsReview[progress].name === '') return true;
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

  const checkSelected = () => {
    const category = breadsReview[currentProgress]?.category;
    if (category === null) return null;
    else return [category];
  };

  return (
    <>
      {isCategoryPage && (
        <CategorySelect
          {...{
            setIsCategoryPage,
            onClickCategory,
            onCancelCategory,
            setIsOpenFirst,
          }}
          selectedCategory={checkSelected()}
        />
      )}
      {progress >= 2 && !isCategoryPage && (
        <ReviewTab
          length={Object.keys(breadsReview).length}
          {...{ currentProgress, setCurrentProgress }}
        />
      )}
      {progress === 1 && !isCategoryPage && (
        <StartAdd
          {...{
            setIsCategoryPage,
            selectedCategory,
            stars,
            singleReview,
            editScore,
            editContent,
            isSubmitted,
            toastStatus,
          }}
        />
      )}
      {progress >= 2 && !isCategoryPage && (
        <MoreAdd
          {...{
            breadsReview,
            setIsCategoryPage,
            selectedCategory,
            currentProgress,
            stars,
            singleReview,
            deleteSingleReview,
            editScore,
            editContent,
            isSubmitted,
            toastStatus,
          }}
        />
      )}
      {!isCategoryPage && (
        <BtnWrapper>
          <MoreAddBtn onClick={nextProgress}>
            <Plus />
            <span>다른 빵 추가하기</span>
          </MoreAddBtn>
          <SubmitBtn>확인</SubmitBtn>
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
