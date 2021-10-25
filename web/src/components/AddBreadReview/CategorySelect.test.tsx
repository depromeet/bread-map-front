import { render, screen } from '@/utils/testUtils';
import { CategoryInfo } from '@/constants/breadCategory';
import CategorySelect from './CategorySelect';

it('AddBreadReview/CategorySelect', () => {
  const cancelBtnText = '취소';
  const okBtnText = '확인';

  const fakeCategoryInfo: CategoryInfo[] = [
    {
      id: 7,
      icon: jest.fn(),
      text: '마카롱',
    },
  ];

  const props = {
    setIsCategoryPage: jest.fn(),
    selectedCategory: fakeCategoryInfo,
    onClickCategory: jest.fn(),
    onCancelCategory: jest.fn(),
    setIsOpenFirst: jest.fn(),
  };

  render(<CategorySelect {...props} />);

  expect(screen.getByText(cancelBtnText).tagName).toMatch(/^button$/i);
  expect(screen.getByText(okBtnText).tagName).toMatch(/^button$/i);
});
