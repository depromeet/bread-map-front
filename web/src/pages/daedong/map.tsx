import * as React from 'react';
import { Footer } from '@/components/common';
import { DaedongMapContainer } from '@/components/daedongMap';

const DaedongMap: React.FC = () => {
	return (
		<>
			<DaedongMapContainer />
		  <Footer />
		</>
	);
}

export default DaedongMap;
