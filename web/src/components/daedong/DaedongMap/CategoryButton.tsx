import * as React from 'react';
import styled from '@emotion/styled';
import MapButton from './MapButton';
import { Flag, Bread } from '@/components/icons';
import { useAtom } from 'jotai';
import {
  breadMapCategorySlideAtom,
  breadMapSelectedCategotyItem,
} from '@/store';

const CategoryButton = () => {
  const [_, setSideOpen] = useAtom(breadMapCategorySlideAtom);
  const [mapCategories] = useAtom(breadMapSelectedCategotyItem);
  const categoryLength = mapCategories.length;

  return (
    <MapButton
      onClick={() => {
        setSideOpen(true);
      }}
      className={categoryLength > 0 ? 'black' : ''}
      data-count={categoryLength}
    >
      <Bread className={categoryLength > 0 ? 'white' : ''} />
    </MapButton>
  );
};

export default CategoryButton;
