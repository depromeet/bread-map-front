import * as React from 'react';
import styled from '@emotion/styled';

const Container: React.FC = ({ children }) => {
  return (
    <Base>
      {children}
    </Base>
  );
};

export default Container;

const Base = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
