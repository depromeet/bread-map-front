import * as React from 'react';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

const NoSSR: React.FC = ({ children }) => {
	const [canRender, setCanRender] = React.useState<boolean>(false);

	useIsomorphicLayoutEffect(() => {
		setCanRender(true);
	}, []);

	return canRender
	  ? <>{children}</>
		: null;
};

export default NoSSR;
