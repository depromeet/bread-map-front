import { render, screen } from '@/utils/testUtils';
import StartAdd from './StartAdd';

it('addBread/StartAdd', () => {
  const title = '어떤 빵을 먹었나요?';

  const fakeStars = [0, 0, 0, 0, 0];

  const props = {
    stars: fakeStars,
    editScore: jest.fn(),
    editContent: jest.fn(),
  };

  render(<StartAdd {...props} />);

  expect(screen.getByTestId('title').textContent).toBe(title);
});
