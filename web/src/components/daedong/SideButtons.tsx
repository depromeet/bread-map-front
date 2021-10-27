import * as React from 'react';
import styled from '@emotion/styled';
import { MapButton } from '.';
import { Flag, Bread } from '@/components/icons';
import CategorySide from './CategorySide';

const SideButtons = () => {
  const [sideOpen, setSideOpen] = React.useState(false);

  return (
    <>
      <Container>
        <MapButton
          onClick={() => {
            setSideOpen(!sideOpen);
          }}
        >
          <Bread />
        </MapButton>
        <MapButton>
          <Flag />
        </MapButton>
      </Container>
      <CategorySide
        isCategorySideOpen={sideOpen}
        closeCategorySide={() => {
          setSideOpen(false);
        }}
      />
    </>
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
