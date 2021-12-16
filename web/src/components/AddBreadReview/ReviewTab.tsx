import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

interface ReviewTabProps {
  length: number;
  currentProgress: number;
  setCurrentProgress: React.Dispatch<React.SetStateAction<number>>;
  errorReviews: Set<number>;
}

const ReviewTab = ({
  length,
  currentProgress,
  setCurrentProgress,
  errorReviews,
}: ReviewTabProps) => {
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  const tabRef = React.useRef<HTMLLIElement | null>(null);

  return (
    <TabWrapper ref={wrapperRef}>
      <Tabs>
        {[...Array(length).fill(0)].map((_, i) => (
          <Tab ref={tabRef} key={i} onClick={() => setCurrentProgress(i)}>
            <a
              className={
                (currentProgress === i ? 'active ' : '') +
                (errorReviews.has(i) ? 'error' : '')
              }
            >
              {i + 1}번째 빵
            </a>
          </Tab>
        ))}
      </Tabs>
    </TabWrapper>
  );
};

export default ReviewTab;

const TabWrapper = styled.div`
  width: 100%;
  overflow-x: scroll;
  overscroll-behavior-x: contain;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Tabs = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

const Tab = styled.li`
  display: inline-block;
  flex-shrink: 0;

  > a {
    cursor: pointer;
    position: relative;
    display: inline-block;
    font-size: 14px;
    font-weight: bold;
    padding: 10px 2px;
    margin: 0 8px;
    color: ${({ theme }) => theme.color.gray700};

    &.active {
      color: ${({ theme }) => theme.color.black};

      &::after {
        opacity: 1;
        content: '';
        position: absolute;
        height: 3px;
        width: 100%;
        left: 0;
        bottom: 0px;
        background-color: ${({ theme }) => theme.color.primary500};
      }
    }
    &.error {
      color: #ed4337;
    }
  }
`;
