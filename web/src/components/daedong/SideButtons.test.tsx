import { fireEvent, render } from '@/utils/testUtils';
import React from 'react';
import SideButtons from './SideButtons';

it('daedong/SideButton', () => {
  const dom = render(<SideButtons />);

  fireEvent(
    dom.container.querySelectorAll('svg')[0],
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  );

  expect(dom.container.querySelector('aside')?.classList.contains('open')).toBe(
    true
  );
});
