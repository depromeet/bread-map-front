import * as React from 'react';
import styled from '@emotion/styled';
import { BottomModal } from '@/components/common';
import Button from '@/components/common/Button';

interface ConfirmModalProps {
  open: boolean;
  children: React.ReactNode;
  cancelText: string;
  confirmText: string;
  cancelButtonHandler: () => void;
  acceptButtonHandler: () => void;
}

const ConfirmModal = ({
  open,
  children,
  cancelButtonHandler,
  acceptButtonHandler,
  cancelText,
  confirmText,
}: ConfirmModalProps) => {
  return (
    <BottomModal
      open={open}
      disMiss={cancelButtonHandler}
      footer={
        <ModalFooterButtonWrapper>
          <Button
            rounded={false}
            styleType={'none'}
            onClick={cancelButtonHandler}
          >
            {cancelText}
          </Button>
          <Button
            rounded={false}
            styleType={'primary'}
            onClick={acceptButtonHandler}
          >
            {confirmText}
          </Button>
        </ModalFooterButtonWrapper>
      }
    >
      {children}
    </BottomModal>
  );
};

export default ConfirmModal;

const ModalFooterButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
