import { FooterHeight } from '@/styles/Media';
import styled from '@emotion/styled';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';

const BottomSheetStyle = styled(BottomSheet)`
  --rsbs-backdrop-bg: rgba(0, 0, 0, 60%);
  --rsbs-bg: ${({ theme }) => theme.color.white};
  --rsbs-handle-bg: ${({ theme }) => theme.color.gray300};
  --rsbs-max-w: auto;
  --rsbs-ml: env(safe-area-inset-left);
  --rsbs-mr: env(safe-area-inset-right);
  --rsbs-overlay-rounded: 0.6rem !important;

  > div {
    box-shadow: 0px -4px 4px ${({ theme }) => theme.color.gray300} !important;
    bottom: ${FooterHeight}px !important;
  }
`;

export default BottomSheetStyle;
