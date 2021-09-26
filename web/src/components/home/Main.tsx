import * as React from 'react';
import styled from '@emotion/styled';

const Main: React.FC = ({ children }) => {
  return (
    <Base>
      {children}
    </Base>
  );
};

export default Main;

const Base = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
