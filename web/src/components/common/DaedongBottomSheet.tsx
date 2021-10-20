import { FooterHeight } from '@/styles/Media';
import styled from '@emotion/styled';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';

const DaedongBottomSheet = styled(BottomSheet)`
  --rsbs-backdrop-bg: ${({ theme }) => theme.color.background}99;
  --rsbs-bg: ${({ theme }) => theme.color.background};
  --rsbs-handle-bg: ${({ theme }) => theme.color.label};
  /* hsla(0, 0%, 0%, 0.14); */
  --rsbs-max-w: auto;
  --rsbs-ml: env(safe-area-inset-left);
  --rsbs-mr: env(safe-area-inset-right);
  --rsbs-overlay-rounded: 3rem;
  z-index: 10000;
  > div {
    box-shadow: 0px -8px 10px lightgrey !important;
    bottom: ${FooterHeight}px !important;
  }
`;

export default DaedongBottomSheet;
