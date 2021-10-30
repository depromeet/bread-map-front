import * as React from 'react';
import styled from '@emotion/styled';
import { Navigation } from '@/components/icons';
import { useNaverMap } from '@/lib/navermap';

const DEFAULT_POSITION = {
	lat: 37.5666103,
	lng: 126.9783882,
};

const CurrentPositionButton: React.FC = () => {
	const naverMap = useNaverMap();

	const handleClick = () => {
		if (naverMap === undefined) return;

		naverMap.setCenter(DEFAULT_POSITION);
	};

	return (
		<Button onClick={handleClick}>
			<Navigation width={16} height={16} />
			<span>내 위치</span>
		</Button>
	);
};

export default CurrentPositionButton;

const Button = styled.button`
  position: absolute;
	left: 12px;
	bottom: 36px;

	width: 80px;
	height: 32px;
  border: none;
	border-radius: 16px;
  background: ${({ theme }) => theme.color.white};
	box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
	padding: 0;

	font-size: 12px;
	font-weight: 700;
	line-height: 1.4;
  color: ${({ theme }) => theme.color.black};

	span {
		margin-left: 4px;
	}
`;

