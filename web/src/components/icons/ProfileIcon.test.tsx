import { render, screen } from '@testing-library/react';
import ProfileIcon from './ProfileIcon';

it('Icons/PlusIcon', () => {
	render(<ProfileIcon />);

	const el = screen.getByTitle('Profile Icon');
	
	expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
