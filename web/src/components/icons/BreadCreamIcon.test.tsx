import { render, screen } from '@testing-library/react';
import BreadCreamIcon from './BreadCreamIcon';

it('Icons/BreadCreamIcon', () => {
	render(<BreadCreamIcon />);

	const el = screen.getByTitle('Bread Cream Icon');
	
	expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
