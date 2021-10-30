import { render, screen } from '@testing-library/react';
import HomeIcon from './HomeIcon';

it('Icons/HomeIcon', () => {
	render(<HomeIcon />);

	const el = screen.getByTitle('Home Icon');
	
	expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
