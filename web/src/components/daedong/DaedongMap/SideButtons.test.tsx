import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { fireEvent, render } from '@/utils/testUtils';
import SideButtons from './SideButtons';
import { useAtom } from 'jotai';
import { breadMapCategorySlideAtom } from '@/store';

it('daedong/Daedong/SideButton', async () => {
  const { result } = renderHook(() => useAtom(breadMapCategorySlideAtom));

  const { getByTitle } = render(<SideButtons />);

  const element = getByTitle('Bread');

  act(() => {
    fireEvent.click(element);
  });

  expect(result.current[0]).toBe(true);
});
