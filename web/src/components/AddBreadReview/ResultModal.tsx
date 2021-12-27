import React from 'react';
import styled from '@emotion/styled';
import { BottomModal, Button } from '../common';
import { OkSobbang } from '@/components/icons';
import { mutateGetBakery } from '@/remotes/hooks/useGetBakery';
import { useRouter } from 'next/router';

interface ResultModalProps {
  bakeryId: number;
  isOpenModal: {
    open: boolean;
    error: boolean;
    loading: boolean;
    done: boolean;
    text: string;
  };
  buttonClickHandler: () => void;
  modalSetHandler: React.Dispatch<
    React.SetStateAction<{
      open: boolean;
      error: boolean;
      loading: boolean;
      done: boolean;
      text: string;
    }>
  >;
}

const ResultModal = ({
  bakeryId,
  isOpenModal,
  buttonClickHandler,
  modalSetHandler,
}: ResultModalProps) => {
  const router = useRouter();
  const modalDoneHandler = () => {
    modalSetHandler({
      open: false,
      loading: false,
      error: false,
      done: false,
      text: '빵 리뷰를 등록 할까요?',
    });
  };

  const refetchBakeryInfo = () => {
    modalDoneHandler();
    mutateGetBakery(bakeryId);
    router.push(`/bakery/${bakeryId}`);
  };

  return (
    <BottomModal open={isOpenModal.open}>
      <BottomModalContent>
        <OkSobbang />
        <pre>{isOpenModal.text}</pre>
      </BottomModalContent>

      <BottomModalButton>
        {!isOpenModal.loading && !isOpenModal.done && (
          <>
            <Button styleType={'none'} onClick={modalDoneHandler}>
              취소
            </Button>
            <Button onClick={buttonClickHandler}>등록</Button>
          </>
        )}
        {!isOpenModal.loading && isOpenModal.error && (
          <Button onClick={modalDoneHandler}>확인</Button>
        )}
        {!isOpenModal.loading && isOpenModal.done && (
          <Button onClick={refetchBakeryInfo}>확인</Button>
        )}
      </BottomModalButton>
    </BottomModal>
  );
};

export default ResultModal;

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
  display: flex;
  gap: 10px;
  padding: 30px 20px 16px;
`;
