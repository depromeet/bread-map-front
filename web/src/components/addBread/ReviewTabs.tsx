import * as React from 'react';
import styled from '@emotion/styled';
import { useAtom } from 'jotai';
import {
	breadReviewsAtom,
	currentBreadReviewIndexAtom,
} from '@/store/addBread';

const ReviewTabs: React.FC = () => {
	const [breadReviews] = useAtom(breadReviewsAtom);
	const [currentBreadReviewIndex, setCurrentBreadReviewIndex] = useAtom(currentBreadReviewIndexAtom);

	const handleClick: React.MouseEventHandler<HTMLButtonElement> =
	  (e) => {
			const el = e.target instanceof HTMLButtonElement ? e.target : undefined;
			if (el === undefined) return;

			const { index } = el.dataset;
			if (index === undefined) return;

			setCurrentBreadReviewIndex(Number.parseInt(index));
		};

	return (
		<Tabs>
			{breadReviews.map((_, idx) => (
				<Tab
				  onClick={handleClick}
					isActive={idx === currentBreadReviewIndex}
					data-index={idx}
					key={idx}
				>
				  {idx + 1}번째 빵
				</Tab>
			))}
		</Tabs>
	);
};

export default ReviewTabs;

const Tabs = styled.div`
  width: 100%;
	white-space: nowrap;
  overflow-x: scroll;
  overscroll-behavior-x: contain;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

	button + button {
		margin-left: 16px;
	}
`;

const Tab = styled.button<{ isActive?: boolean; }>`
  border: none;
	border-bottom: ${({ theme, isActive }) => isActive
    ? `3px solid ${theme.color.primary500}`
	  : `3px solid transparent`};
	outline: none;
	background: ${({ theme }) => theme.color.white};
	padding: 12px 0;
	box-sizing: border-box;
	font-size: 14px;
	font-weight: 700;
	color: ${({ theme, isActive }) => isActive
    ? theme.color.black
    : theme.color.gray700};
	transition: color 225ms ease-in-out, border-color 225ms ease-in-out;
`;
