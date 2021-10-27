import React from 'react';
import styled from '@emotion/styled';
import { BottomSheet } from '.';

interface BottomModalProps {
  open: boolean;
  children: React.ReactNode;
  disMiss?: () => void;
  footer?: React.ReactNode;
  header?: React.ReactNode;
}

const BottomModal = ({
  open,
  children,
  disMiss,
  footer,
  header,
}: BottomModalProps) => {
  return (
    <BottomModalStyle
      open={open}
      blocking={true}
      header={header}
      footer={footer}
      onDismiss={disMiss}
    >
      {children}
    </BottomModalStyle>
  );
};

export default BottomModal;

const BottomModalStyle = styled(BottomSheet)`
  > div {
    box-shadow: none !important;
    bottom: 0 !important;
  }

  [data-rsbs-overlay],
  [data-rsbs-backdrop],
  [data-rsbs-root]:after {
    z-index: 10000;
  }
`;
