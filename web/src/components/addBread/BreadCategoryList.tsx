import * as React from 'react';
import styled from '@emotion/styled';
import { useAtom } from 'jotai';
import { CategoryList } from '@/components/common';
import { ChevronLeftIcon } from '@/components/icons';
import { currentBreadReviewAtom } from '@/store/addBread';
import type { BreadCategory } from '@/constants/breadCategories';

interface BreadCategoryListProps {
  open: boolean;
  onClose: () => void;
}

const BreadCategoryList: React.FC<BreadCategoryListProps> = ({
  open,
  onClose,
}) => {
  const [review, setReview] = useAtom(currentBreadReviewAtom);

  const [selectedItems, setSelectedItems] = React.useState<BreadCategory[]>([]);

  const handleCancel: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    setSelectedItems([review.category]);
    onClose();
  };

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    setReview({ category: selectedItems[0] });
    onClose();
  };

  if (!open) return null;
  return (
    <Base>
      <Header>
        <IconButton onClick={handleCancel}>
          <ChevronLeftIcon />
        </IconButton>
        <Title>빵종류</Title>
      </Header>
      <Content>
        <CategoryList
          selectedItems={selectedItems}
          onChange={(item) => setSelectedItems([item])}
        />
        <ButtonGroup>
          <CancelButton onClick={handleCancel}>취소</CancelButton>
          <SubmitButton onClick={handleSubmit}>확인</SubmitButton>
        </ButtonGroup>
      </Content>
    </Base>
  );
};

export default BreadCategoryList;

const Base = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.white};
  z-index: 5;
  top: 0;
  left: 0;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
`;

const IconButton = styled.button`
  width: 48px;
  height: 48px;
  cursor: pointer;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.white};
  padding: 0;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.span`
  margin-left: calc(50% - 72px);
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #000000;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 20px;
  width: 100%;
  height: calc(100% - 48px);
`;

const ButtonGroup = styled.div`
  margin-top: auto;
  margin-left: 20px;
  margin-right: 20px;
  height: 52px;
  display: flex;
  gap: 8px;
`;

const CancelButton = styled.button`
  flex: 1;
  border: 1px solid ${({ theme }) => theme.color.gray300};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 8px;
  color: ${({ theme }) => theme.color.gray700};
  font-weight: 700;
  line-height: 20px;
`;

const SubmitButton = styled.button`
  flex: 1;
  border: none;
  background-color: ${({ theme }) => theme.color.primary500};
  border-radius: 8px;
  color: ${({ theme }) => theme.color.white};
  font-weight: 700;
  line-height: 20px;
`;
