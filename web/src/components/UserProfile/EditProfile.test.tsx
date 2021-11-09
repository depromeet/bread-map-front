import { render, screen } from '@/utils/testUtils';
import EditProfile from './EditProfile';
import { ProfileTitle } from '.';

it('UserProfile/EditProfile', () => {
  const title: ProfileTitle = '프로필 수정';
  const okBtnText = '확인';

  render(<EditProfile pageTitle={title} setPageTitle={jest.fn()} />);

  expect(screen.getByText(title).tagName).toMatch(/^h1$/i);
  expect(screen.getByText(okBtnText).tagName).toMatch(/^button$/i);
});
