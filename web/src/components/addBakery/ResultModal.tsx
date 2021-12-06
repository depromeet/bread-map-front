import React from 'react';
import styled from '@emotion/styled';
import { BottomModal, Button } from '../common';

interface ResultModalProps {
  isOpenModal: {
    open: boolean;
    ok: boolean;
    text: string;
  };
  buttonClickHandler: () => void;
}

const ResultModal = ({ isOpenModal, buttonClickHandler }: ResultModalProps) => {
  return (
    <BottomModal open={isOpenModal.open}>
      <BottomModalContent>
        <OkImage
          src={
            isOpenModal.ok ? 'images/ok_sobbang.svg' : 'images/sadSobbang.svg'
          }
          alt={'result_img'}
        />
        <pre>{isOpenModal.text}</pre>
      </BottomModalContent>
      <BottomModalButton>
        <Button onClick={buttonClickHandler}>확인</Button>
      </BottomModalButton>
    </BottomModal>
  );
};

export default ResultModal;

const OkImage = styled.img`
  width: 92px;
  height: 60px;
`;

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
  }
`;

const BottomModalButton = styled.div`
  padding: 30px 20px 16px;
`;
