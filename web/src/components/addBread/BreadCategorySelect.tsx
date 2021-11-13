import * as React from 'react';
import styled from '@emotion/styled';
import { useAtom } from 'jotai';
import { ChevronDownIcon } from '@/components/icons';
import { BreadCategoryList } from '@/components/addBread';
import { currentBreadReviewAtom } from '@/store/addBread';
import { categoryItems } from '@/constants/breadCategories';

const BreadCategorySelect: React.FC = () => {
	const [review] = useAtom(currentBreadReviewAtom);

	const [isOpen, setIsOpen] = React.useState<boolean>(false);
	const toggleIsOpen = () => setIsOpen((prev) => !prev);

	return (
		<Base onClick={() => setIsOpen(true)}>
		  <Title>빵 종류</Title>
			<SelectButton>
				<span>
					{review.category === '기본'
					  ? '빵 종류 선택'
						: categoryItems.find((el) => el.category === review.category)?.text ?? '빵 종류 선택'}
				</span>
				<ChevronDownIcon width={16} height={16} />
			</SelectButton>
			<HelperText>
				빵 종류를 선택해주세요.
			</HelperText>
			<BreadCategoryList
				open={isOpen}
				onClose={toggleIsOpen}
			/>
		</Base>
	);
};

export default BreadCategorySelect;

const Base = styled.div`
	margin: 0 20px 32px;
`;

const Title = styled.span`
  position: relative;
  display: inline-block;
  margin-bottom: 12px;
	font-size: 14px;
	font-weight: 700;
  color: ${({ theme }) => theme.color.gray800};

  &::before {
    content: '';
    position: absolute;
    right: -6px;
    top: -2px;
    width: 4px;
    height: 4px;
    background-color: #ff6e40;
    border-radius: 50%;
  }
`;

const SelectButton = styled.button`
	border: none;
	outline: none;
	background-color: ${({ theme }) => theme.color.gray100};
	padding: 12px 16px;
	border-radius: 8px;
	width: 100%;
	height: 48px;
  display: flex;
	align-items: center;
	justify-content: space-between;

	font-size: 14px;
	line-height: 20px;
	color: ${({ theme }) => theme.color.gray500};
`;

const HelperText = styled.span`
  margin-top: 8px;
  font-size: 12px;
	color: ${({ theme }) => theme.color.primary500};
`;
