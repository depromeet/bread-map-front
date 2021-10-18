import * as React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

const BottomSheetHeader: React.FC = () => {
  const onClick = (e) => {
    console.log(e);
  };

  return (
    <>
      <Base onClick={onClick}>
        <Grip />
      </Base>
    </>
  );
};

export default BottomSheetHeader;

const Base = styled.footer`
  width: 100%;
  height: 2rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 23.5rem; // 하드코딩 - Props로 height 전달 받을 예정
`;

const Grip = styled.div`
  height: 0.25rem;
  width: 4rem;
  border-radius: 1rem;
  background-color: #979797;
`;
