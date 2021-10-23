import { render, screen } from '@/utils/testUtils';
import MoreAdd from './MoreAdd';

it('addBread/MoreAdd', () => {
  const title = '2번째 빵';

  const fakeReview = {
    name: '마카롱',
    price: 3000,
    text: '넘 맛있어요',
    star: 5,
  };

  const fakeStars = [0, 0, 0, 0, 0];

  const props = {
    progress: 2,
    stars: fakeStars,
    singleReview: fakeReview,
    editScore: jest.fn(),
    editContent: jest.fn(),
  };

  render(<MoreAdd {...props} />);

  expect(screen.getByText(title).tagName).toMatch(/^h1$/i);
});
