import { fireEvent, getById, render } from '@/utils/testUtils';
import React from 'react';
import CategoryCard from './CategoryCard';

it('daedong/CategoryCard', () => {
  const MOCK_CATEGORY = {
    name: '식빵',
    checked: false,
  };

  const dom = render(
    <CategoryCard name={MOCK_CATEGORY.name} checked={MOCK_CATEGORY.checked} />
  );
  const target = getById(dom.container, MOCK_CATEGORY.name);

  expect(target?.tagName).toMatch(/^div$/i);
  fireEvent(
    target!,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  );

  expect(
    getById(dom.container, MOCK_CATEGORY.name)?.firstElementChild?.tagName
  ).toMatch('svg');
});
