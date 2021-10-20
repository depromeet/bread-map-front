import * as React from 'react';
import styled from '@emotion/styled';
import { Home, User, Edit, Compass } from '@/components/icons';

const Footer: React.FC = () => {
  return (
    <Base>
      <IconBox active>
        <Home />
      </IconBox>

      <IconBox>
        <Compass />
      </IconBox>

      <IconBox>
        <Edit />
      </IconBox>

      <IconBox>
        <User />
      </IconBox>
    </Base>
  );
};

export default Footer;

const Base = styled.footer`
  width: 100%;
  height: 3rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
`;

const IconBox = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  margin-right: 2rem;

  color: ${(props) => (props.active ? 'red' : '')};
`;

// 1. props가 반영되지 않을 때
