import React from 'react';
import { CategoryInfo } from '@/constants/breadCategory';

const useCategories = (
  isMultiSelect: boolean,
  selected: CategoryInfo[] = []
) => {
  const [selectedCategory, setSelectedCategory] =
    React.useState<CategoryInfo[]>(selected);
  const [prevCategory, setPrevCategory] = React.useState<CategoryInfo[]>([]);
  const [isOpenFirst, setIsOpenFirst] = React.useState(true);

  React.useEffect(() => {
    if (!isOpenFirst) return;
    setPrevCategory(selectedCategory);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpenFirst]);

  const multiSelectFn = (categoryInfo: CategoryInfo) => {
    const isSelected = selectedCategory.some((s) => s.id === categoryInfo.id);

    if (isSelected) {
      setSelectedCategory((prev) =>
        prev.filter((p) => p.id !== categoryInfo.id)
      );
    } else {
      setSelectedCategory([...selectedCategory, categoryInfo]);
    }
  };

  const oneSelectFn = (categoryInfo: CategoryInfo) => {
    setSelectedCategory([categoryInfo]);
  };

  const onClickCategory = (categoryInfo: CategoryInfo) => {
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
