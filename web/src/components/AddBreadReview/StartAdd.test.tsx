import { CategoryInfo } from '@/constants/breadCategory';
import { render, screen } from '@/utils/testUtils';
import StartAdd from './StartAdd';

it('AddBreadReview/StartAdd', () => {
  const title = '어떤 빵을 먹었나요?';

  const fakeCategoryInfo: CategoryInfo[] = [
    {
      id: 7,
      icon: jest.fn(),
      text: '마카롱',
    },
  ];

  const fakeStars = [0, 0, 0, 0, 0];

  const fakeReview = {
    category: fakeCategoryInfo[0],
    name: '마카롱',
    price: 3000,
    text: '넘 맛있어요',
    star: 5,
  };

  const props = {
    setIsCategoryPage: jest.fn(),
    selectedCategory: fakeCategoryInfo,
    stars: fakeStars,
    singleReview: fakeReview,
    editScore: jest.fn(),
    editContent: jest.fn(),
    isSubmitted: false,
    setIsSubmitted: jest.fn(),
  };

  render(<StartAdd {...props} />);

  expect(screen.getByTestId('title').textContent).toBe(title);
});
