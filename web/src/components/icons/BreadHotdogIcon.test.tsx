import { render, screen } from '@testing-library/react';
import BreadHotdogIcon from './BreadHotdogIcon';

it('Icons/BreadHotdogIcon', () => {
	render(<BreadHotdogIcon />);

	const el = screen.getByTitle('Bread Hotdog Icon');
	
	expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
