import { fireEvent, render, screen } from '@/utils/testUtils';
import React from 'react';
import MapButton from './MapButton';

it('home/MapButton', () => {
  const defaultChildren = 'default';
  const changeChildren = 'changed';
  const clickHandler = (e: React.MouseEvent) => {
    e.currentTarget.innerHTML = changeChildren;
  };

  render(<MapButton onClick={clickHandler}>{defaultChildren}</MapButton>);

  expect(screen.getByText(defaultChildren).tagName).toMatch(/^button$/i);

  fireEvent(
    screen.getByText('default'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  );

  expect(screen.getByText(changeChildren).tagName).toMatch(/^button$/i);
});
