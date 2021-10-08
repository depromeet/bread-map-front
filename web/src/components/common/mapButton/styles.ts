import styled from '@emotion/styled';

export const Button = styled.button`
  background: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.textColor};
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.625rem;
  border: none;
  box-shadow: 0 3px 3px ${({ theme }) => theme.color.placeholder};
`;
