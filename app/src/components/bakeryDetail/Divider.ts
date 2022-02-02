import styled from '@emotion/native';

const Divider = styled.View`
  height: 9px;
  background-color: ${({ theme }) => theme.color.gray100};
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.color.gray200};
`;

export default Divider;
