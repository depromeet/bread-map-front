import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

interface ToastPopupPros {
  message: string;
}

const Toast = ({ message }: ToastPopupPros) => {
  return <ToastMessage>{message}</ToastMessage>;
};

export default Toast;

const VisibleKeyFrame = keyframes`
  0% { transform: translate(calc(-50% + 1px), calc(-50% + 1px)) rotate(0deg); }
  10% { transform: translate(calc(-50% - 1px), calc(-50% - 2px)) rotate(-1deg); }
  20% { transform: translate(calc(-50% - 3px), calc(-50% + 0px)) rotate(1deg); }
  30% { transform: translate(calc(-50% + 3px), calc(-50% + 2px)) rotate(0deg); }
  40% { transform: translate(calc(-50% + 1px), calc(-50% - 1px)) rotate(1deg); }
  50% { transform: translate(calc(-50% - 1px), calc(-50% + 2px)) rotate(-1deg); }
  60% { transform: translate(calc(-50% - 3px), calc(-50% + 1px)) rotate(0deg); }
  70% { transform: translate(calc(-50% + 3px), calc(-50% + 1px)) rotate(-1deg); }
  80% { transform: translate(calc(-50% - 1px), calc(-50% - 1px)) rotate(1deg); }
  100% { transform: translate(-50%, -50%) rotate(0deg); }
`;

const ToastMessage = styled.div`
  position: fixed;
  text-align: center;
  white-space: nowrap;
  top: 60px;
  left: 50%;
  padding: 10px 12px;
  z-index: 10;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  border-radius: 4px;
  border: 1px solid #000;
  font-size: 0.87rem;
  animation: ${VisibleKeyFrame} 0.2s ease-out forwards;
`;
