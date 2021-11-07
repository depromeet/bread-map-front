import * as React from 'react';
import styled from '@emotion/styled';
import { MapButton } from '.';
import { Flag, Bread } from '@/components/icons';
import CategorySide from './CategorySide';
import { useAtom } from 'jotai';
import categorySlideAtom from '@/store/breadMapCategory';

const SideButtons = () => {
  const [sideOpen, setSideOpen] = useAtom(categorySlideAtom);

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
      <CategorySide />
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
