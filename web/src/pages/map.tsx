import { Footer } from '@/components/common';
import { DaedongMapContainer } from '@/components/map';
import type { NextPage } from 'next';

const Map: NextPage = () => {
	return (
		<>
		  <DaedongMapContainer />
			<Footer />
		</>
	);
};

export default Map;
