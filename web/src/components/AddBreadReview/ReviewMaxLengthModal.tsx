import React from 'react';
import styled from '@emotion/styled';
import { BottomModal, Button } from '../common';

interface ResultModalProps {
  isOpenModal: boolean;
  closeModal: () => void;
}

const ReviewMaxLengthModal = ({
  isOpenModal,
  closeModal,
}: ResultModalProps) => (
  <BottomModal open={isOpenModal}>
    <BottomModalContent>
      <pre>
        앗, 빵 리뷰는 한번에 <br /> 10개까지만 가능해요!
        <br />
        <sub>아직 빵 리뷰는 10개까지 입력 가능해요!</sub>
      </pre>
    </BottomModalContent>

    <BottomModalButton>
      <Button onClick={closeModal}>확인</Button>
    </BottomModalButton>
  </BottomModal>
);

export default ReviewMaxLengthModal;

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
