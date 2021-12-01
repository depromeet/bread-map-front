import React from 'react';
import styled from '@emotion/styled';

interface ToastPopupPros {
  message: string;
}

const Toast = ({ message }: ToastPopupPros) => {
  return <ToastMessage>{message}</ToastMessage>;
};

export default Toast;

const ToastMessage = styled.div`
  position: fixed;
  top: 40px;
  left: 50%;
  padding: 10px 12px;
  transform: translate(-50%, -50%);
  z-index: 3;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  border-radius: 4px;
  border: 1px solid #000;
  font-size: 0.87rem;
`;
