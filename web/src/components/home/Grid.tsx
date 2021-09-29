import * as React from 'react';
import styled from '@emotion/styled';

const Grid: React.FC = ({ children }) => {
  return <Base>{children}</Base>;
};

export default Grid;

const Base = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin-top: 3rem;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;
