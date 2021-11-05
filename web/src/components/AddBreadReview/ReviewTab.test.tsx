import { render, screen } from '@/utils/testUtils';
import ReviewTab from './ReviewTab';

it('AddBreadReview/ReviewTab', () => {
  const reviewLength = 4;

  const props = {
    length: reviewLength,
    currentProgress: reviewLength,
    setCurrentProgress: jest.fn(),
  };

  render(<ReviewTab {...props} />);

  expect(screen.getAllByTestId('tab').length).toBe(reviewLength);
});
