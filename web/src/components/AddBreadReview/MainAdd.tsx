import React from 'react';
import styled from '@emotion/styled';
import { CategoryInfo } from '@/constants/breadCategory';
import { useCategories } from '@/components/common/CategoryList';
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

  const editCategory = (category: CategoryInfo) => {
    setSingleReview({
      ...singleReview,
      category: category,
    });
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

  const nextProgress = () => {
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
            editScore,
            editContent,
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
            editScore,
            editContent,
          }}
        />
      )}
      {!isCategoryPage && (
        <BtnWrapper>
          <Btn bg={'#FFF1EC'} onClick={nextProgress}>
            + 다른 빵 리뷰 추가
          </Btn>
          <Btn bg={'#FF6E40'}>확인</Btn>
        </BtnWrapper>
      )}
    </>
  );
};

export default MainAdd;

const BtnWrapper = styled.div`
  width: 100%;
`;

const Btn = styled.button<{ bg: string }>`
  width: 100%;
  display: block;
  background-color: ${({ bg }) => (bg ? `${bg}` : `white`)};
  border-radius: 0.5rem;
  border: none;
  padding: 1rem 0;

  &:first-of-type {
    margin-bottom: 8px;
  }
`;
