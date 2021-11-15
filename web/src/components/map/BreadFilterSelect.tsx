import * as React from 'react';
import styled from '@emotion/styled';
import { useAtom } from 'jotai';
import { CategoryList } from '@/components/common';
import { ChevronLeftIcon, XIcon } from '@/components/icons';
import { currentFilterAtom } from '@/store/map';
import type { BreadCategory } from '@/constants/breadCategories';

const summaryText = '모든 먹부림에는\n주종목이 있죠!';

interface BreadFilterSelectProps {
  open: boolean;
  onClose: () => void;
}

const BreadFilterSelect: React.FC<BreadFilterSelectProps> = ({
  open,
  onClose,
}) => {
  const [currentFilter, setCurrentFilter] = useAtom(currentFilterAtom);

  const [selectedItems, setSelectedItems] = React.useState<BreadCategory[]>([]);

  const handleCancel = () => {
    setSelectedItems(currentFilter);
    onClose();
  };

  const handleSubmit = () => {
    setCurrentFilter(selectedItems);
    onClose();
  };

  if (!open) return null;
  return (
    <Base>
      <Header>
        <IconButton onClick={handleCancel}>
          <ChevronLeftIcon />
        </IconButton>
        <Title>빵종류 모아보기</Title>
        <IconButton onClick={handleCancel}>
          <XIcon />
        </IconButton>
      </Header>
      <Content>
        <ContentSummary>{summaryText}</ContentSummary>
        <CategoryList
          selectedItems={selectedItems}
          onChange={(item) => {
            setSelectedItems((prev) => {
              const idx = prev.indexOf(item);

              if (idx > -1) {
                return [...prev.slice(0, idx), ...prev.slice(idx + 1)];
              } else {
                return [...prev, item];
              }
            });
          }}
        />
        <ButtonGroup>
          <CancelButton onClick={handleCancel}>취소하기</CancelButton>
          <SubmitButton onClick={handleSubmit}>모아보기</SubmitButton>
        </ButtonGroup>
      </Content>
    </Base>
  );
};

export default BreadFilterSelect;

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
  justify-content: space-between;
  width: 100%;
  height: 48px;
`;

const IconButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.white};
  padding: 0;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: #000000;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  width: 100%;
  height: calc(100% - 48px);
`;

const ContentSummary = styled.span`
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  white-space: pre;
  margin-left: 20px;
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
