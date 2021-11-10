import React from 'react';
import { BreadCategoeryInfo } from '@/constants/breadCategories';

const useCategories = (
  isMultiSelect: boolean,
  selected: BreadCategoeryInfo[] = []
) => {
  const [selectedCategory, setSelectedCategory] =
    React.useState<BreadCategoeryInfo[]>(selected);
  const [prevCategory, setPrevCategory] = React.useState<BreadCategoeryInfo[]>(
    []
  );
  const [isOpenFirst, setIsOpenFirst] = React.useState(true);

  React.useEffect(() => {
    if (!isOpenFirst) return;
    setPrevCategory(selectedCategory);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpenFirst]);

  const multiSelectFn = (categoryInfo: BreadCategoeryInfo) => {
    const isSelected = selectedCategory.some((s) => s.id === categoryInfo.id);

    if (isSelected) {
      setSelectedCategory((prev) =>
        prev.filter((p) => p.id !== categoryInfo.id)
      );
    } else {
      setSelectedCategory([...selectedCategory, categoryInfo]);
    }
  };

  const oneSelectFn = (categoryInfo: BreadCategoeryInfo) => {
    setSelectedCategory([categoryInfo]);
  };

  const onClickCategory = (categoryInfo: BreadCategoeryInfo) => {
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
