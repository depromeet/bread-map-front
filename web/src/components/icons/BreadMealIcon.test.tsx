import { render, screen } from '@testing-library/react';
import BreadMealIcon from './BreadMealIcon';

it('Icons/BreadMealIcon', () => {
	render(<BreadMealIcon />);

	const el = screen.getByTitle('Bread Meal Icon');
	
	expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
