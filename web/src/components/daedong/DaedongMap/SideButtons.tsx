import * as React from 'react';
import styled from '@emotion/styled';
import MapButton from './MapButton';
import { Flag } from '@/components/icons';
import CategoryButton from './CategoryButton';

const SideButtons = () => {
  return (
    <Container>
      <CategoryButton />
      <MapButton>
        <Flag />
      </MapButton>
    </Container>
  );
};

export default SideButtons;

const Container = styled.div`
  position: absolute;
  margin: 0;
  padding: 0;
  display: flex;
  z-index: 1;
  flex-direction: column;
  list-style: none;
  gap: 0.6rem;
  right: 1rem;
  top: 1rem;
`;
