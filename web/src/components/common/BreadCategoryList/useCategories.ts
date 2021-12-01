import React from 'react';
import { BreadCategoryItem } from '@/constants/breadCategories';

const useCategories = (
  isMultiSelect: boolean,
  selected: BreadCategoryItem[] = []
) => {
  const [selectedCategory, setSelectedCategory] =
    React.useState<BreadCategoryItem[]>(selected);
  const [prevCategory, setPrevCategory] = React.useState<BreadCategoryItem[]>(
    []
  );
  const [isOpenFirst, setIsOpenFirst] = React.useState(true);

  React.useEffect(() => {
    if (!isOpenFirst) return;
    setPrevCategory(selectedCategory);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpenFirst]);

  const multiSelectFn = (categoryInfo: BreadCategoryItem) => {
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

  const oneSelectFn = (categoryInfo: BreadCategoryItem) => {
    setSelectedCategory([categoryInfo]);
  };

  const onClickCategory = (categoryInfo: BreadCategoryItem) => {
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
