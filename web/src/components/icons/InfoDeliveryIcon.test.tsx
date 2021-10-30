import { render, screen } from '@testing-library/react';
import InfoDeliveryIcon from './InfoDeliveryIcon';

it('Icons/InfoDeliveryIcon', () => {
	render(<InfoDeliveryIcon />);

	const el = screen.getByTitle('Info Delivery Icon');
	
	expect(el.parentElement?.tagName).toMatch(/^svg$/i);
});
