import { render, screen } from '@/utils/testUtils';
import { CategoryInfo } from '@/constants/breadCategory';
import { BreadsReview } from '.';
import MoreAdd from './MoreAdd';

it('AddBreadReview/MoreAdd', () => {
  const title = '2번째 빵';

  const fakeCategoryInfo: CategoryInfo[] = [
    {
      id: 7,
      icon: jest.fn(),
      text: '마카롱',
    },
  ];

  const fakeReview = {
    category: fakeCategoryInfo[0],
    name: '마카롱',
    price: 3000,
    text: '넘 맛있어요',
    star: 5,
  };

  const fakeStars = [0, 0, 0, 0, 0];

  const props = {
    breadsReview: [fakeReview] as BreadsReview,
    setIsCategoryPage: jest.fn(),
    selectedCategory: fakeCategoryInfo,
    currentProgress: 2,
    stars: fakeStars,
    singleReview: fakeReview,
    deleteSingleReview: jest.fn(),
    editScore: jest.fn(),
    editContent: jest.fn(),
    isSubmitted: false,
    toastStatus: false,
  };

  render(<MoreAdd {...props} />);

  expect(screen.getByText(title).tagName).toMatch(/^h1$/i);
});
