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

  const props = {
    setIsCategoryPage: jest.fn(),
    selectedCategory: fakeCategoryInfo,
    stars: fakeStars,
    editScore: jest.fn(),
    editContent: jest.fn(),
  };

  render(<StartAdd {...props} />);

  expect(screen.getByTestId('title').textContent).toBe(title);
});
