import { render, screen } from '@testing-library/react';
import BreadPieTartIcon from './BreadPieTartIcon';

it('Icons/BreadPieTartIcon', () => {
	render(<BreadPieTartIcon />);

	const el = screen.getByTitle('Bread Pie Tart Icon');
	
	expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
