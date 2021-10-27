import React from 'react';
import styled from '@emotion/styled';
import { FooterHeight } from '@/styles/Media';
import { MapContainer } from '@/components/daedong';

const Map = () => {
  return (
    <>
      <MapContainer />
      <Footer>footer</Footer>
    </>
  );
};

export default Map;

const Footer = styled.div`
  position: fixed;
  bottom: 0%;
  width: 100%;
  z-index: 4;
  height: ${FooterHeight}px;
  border: 1px solid ${({ theme }) => theme.color.gray300};
  background: ${({ theme }) => theme.color.white};
`;
