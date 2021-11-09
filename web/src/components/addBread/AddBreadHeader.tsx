import * as React from 'react';
import styled from '@emotion/styled';
import { useAtom } from 'jotai';
import { breadReviewsAtom } from '@/store/addBread';
import ReviewTabs from './ReviewTabs';
import StartTitle from './StartTitle';

const AddBreadHeader: React.FC = () => {
	const [breadReviews] = useAtom(breadReviewsAtom);

	return (
		<Base>
		  {breadReviews.length > 1 ? (
				<ReviewTabs />
			) : (
		    <StartTitle />
			)}
		</Base>
	);
};

export default AddBreadHeader;

const Base = styled.div`
  margin-top: 12px;
	margin-bottom: 36px;
`;
