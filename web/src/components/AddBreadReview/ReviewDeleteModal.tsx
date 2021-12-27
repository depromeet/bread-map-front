import React from 'react';
import styled from '@emotion/styled';
import { BottomModal, Button } from '../common';

interface ResultModalProps {
  index: number;
  isOpenModal: boolean;
  deleteSingleReview: () => void;
  closeModal: () => void;
}

const ReviewDeleteModal = ({
  index,
  isOpenModal,
  deleteSingleReview,
  closeModal,
}: ResultModalProps) => (
  <BottomModal open={isOpenModal}>
    <BottomModalContent>
      <pre>
        <strong>{index + 1}번 쨰</strong> 빵 리뷰는 삭제하시겠어요?
        <br />
        <br />
        <sub>
          삭제한 리뷰는 되돌릴 수 없으니
          <br />
          신중히 생각해주세요!
        </sub>
      </pre>
    </BottomModalContent>

    <BottomModalButton>
      <Button styleType={'none'} onClick={closeModal}>
        계속쓸래요
      </Button>
      <Button onClick={deleteSingleReview}>삭제할게요</Button>
    </BottomModalButton>
  </BottomModal>
);

export default ReviewDeleteModal;

const BottomModalContent = styled.div`
  margin-top: 24px;
  display: flex;
  font-weight: bold;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 20px;

  > pre {
    font-family: inherit;
    margin: 0;

    sub {
      font-weight: 400;
      color: ${({ theme }) => theme.color.gray600};
    }
  }

  strong {
    color: ${({ theme }) => theme.color.primary500};
  }
`;

const BottomModalButton = styled.div`
  display: flex;
  gap: 10px;
  padding: 30px 20px 16px;
`;
