import { render, screen } from '@testing-library/react';
import BreadDonutIcon from './BreadDonutIcon';

it('Icons/BreadDonutIcon', () => {
	render(<BreadDonutIcon />);

	const el = screen.getByTitle('Bread Donut Icon');
	
	expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
