import React from 'react';
import { BakeryBaseCategoryInfo } from '@/constants/bakeryBaseCategories';

const useCategories = (
  isMultiSelect: boolean,
  selected: BakeryBaseCategoryInfo[] = []
) => {
  const [selectedCategory, setSelectedCategory] =
    React.useState<BakeryBaseCategoryInfo[]>(selected);
  const [prevCategory, setPrevCategory] = React.useState<
    BakeryBaseCategoryInfo[]
  >([]);
  const [isOpenFirst, setIsOpenFirst] = React.useState(true);

  React.useEffect(() => {
    if (!isOpenFirst) return;
    setPrevCategory(selectedCategory);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpenFirst]);

  const multiSelectFn = (categoryInfo: BakeryBaseCategoryInfo) => {
    const isSelected = selectedCategory.some(
      (s) => s.category === categoryInfo.category
    );

    if (isSelected) {
      setSelectedCategory((prev) =>
        prev.filter((p) => p.category !== categoryInfo.category)
      );
    } else {
      setSelectedCategory([...selectedCategory, categoryInfo]);
    }
  };

  const oneSelectFn = (categoryInfo: BakeryBaseCategoryInfo) => {
    setSelectedCategory([categoryInfo]);
  };

  const onClickCategory = (categoryInfo: BakeryBaseCategoryInfo) => {
    if (isOpenFirst) setIsOpenFirst(false);
    isMultiSelect ? multiSelectFn(categoryInfo) : oneSelectFn(categoryInfo);
  };

  const onCancelCategory = () => {
    setSelectedCategory(prevCategory);
  };

  const initializeCategories = () => {
    setSelectedCategory([]);
  };

  return {
    selectedCategory,
    initializeCategories,
    onClickCategory,
    onCancelCategory,
    setIsOpenFirst,
  };
};

export default useCategories;
