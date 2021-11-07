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

  return (
    <MapButton
      onClick={() => {
        setSideOpen(true);
      }}
      className={mapCategories.length > 0 ? 'black' : ''}
			data-count={mapCategories.length}
    >
      {mapCategories.length > 0 ? (
        <Bread className={mapCategories.length > 0 ? 'white' : ''} />
      ) : (
        <Bread />
      )}
    </MapButton>
  );
};

export default CategoryButton;
