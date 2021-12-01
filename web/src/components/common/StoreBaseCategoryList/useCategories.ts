import React from 'react';
import { StoreBaseCategoryInfo } from '@/constants/storeBaseCategories';

const useCategories = (
  isMultiSelect: boolean,
  selected: StoreBaseCategoryInfo[] = []
) => {
  const [selectedCategory, setSelectedCategory] =
    React.useState<StoreBaseCategoryInfo[]>(selected);
  const [prevCategory, setPrevCategory] = React.useState<
    StoreBaseCategoryInfo[]
  >([]);
  const [isOpenFirst, setIsOpenFirst] = React.useState(true);

  React.useEffect(() => {
    if (!isOpenFirst) return;
    setPrevCategory(selectedCategory);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpenFirst]);

  const multiSelectFn = (categoryInfo: StoreBaseCategoryInfo) => {
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

  const oneSelectFn = (categoryInfo: StoreBaseCategoryInfo) => {
    setSelectedCategory([categoryInfo]);
  };

  const onClickCategory = (categoryInfo: StoreBaseCategoryInfo) => {
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
