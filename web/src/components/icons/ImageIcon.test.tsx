import { render, screen } from '@testing-library/react';
import ImageIcon from './ImageIcon';

it('Icons/ImageIcon', () => {
	render(<ImageIcon />);

	const el = screen.getByTitle('Image Icon');
	
	expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
