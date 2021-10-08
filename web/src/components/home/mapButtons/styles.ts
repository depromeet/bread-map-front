import MapButton from '@/components/common/mapButton/MapButton';
import styled from '@emotion/styled';

export const MyPositionButton = styled(MapButton)`
  position: absolute;
  padding-right: 1rem;
  bottom: 1rem;
  left: 1rem;
  z-index: 1;
`;

export const SideButtons = styled.div`
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
