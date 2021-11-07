import * as React from 'react';
import styled from '@emotion/styled';
import MapButton from './MapButton';
import { Flag, Bread } from '@/components/icons';
import { useAtom } from 'jotai';
import { breadMapCategorySlideAtom } from '@/store';

const SideButtons = () => {
  const [_, setSideOpen] = useAtom(breadMapCategorySlideAtom);

  return (
    <Container>
      <MapButton
        onClick={() => {
          setSideOpen(true);
        }}
      >
        <Bread />
      </MapButton>
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
