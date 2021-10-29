import React from 'react';
import styled from '@emotion/styled';

interface ReviewTabProps {
  length: number;
  currentProgress: number;
  setCurrentProgress: React.Dispatch<React.SetStateAction<number>>;
}

const ReviewTab = ({
  length,
  currentProgress,
  setCurrentProgress,
}: ReviewTabProps) => {
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  const tabRef = React.useRef<HTMLLIElement | null>(null);
  const [tabsWidth, setTabsWidth] = React.useState(0);

  React.useEffect(() => {
    if (tabRef.current === null) return;

    const itemWidth = tabRef.current.getBoundingClientRect().width!;
    setTabsWidth((prev) => prev + itemWidth);
  }, [tabRef, length]);

  React.useEffect(() => {
    if (wrapperRef.current === null) return;

    const wrapperWidth = wrapperRef.current.getBoundingClientRect().width!;
    if (wrapperWidth > tabsWidth) return;
    wrapperRef.current.scrollLeft = tabsWidth;
  }, [tabsWidth]);

  const onClickTab = (i: number) => {
    setCurrentProgress(i);
  };

  return (
    <TabWrapper ref={wrapperRef}>
      <Tabs tabsWidth={tabsWidth}>
        {[...Array(length)].map((_, i) => (
          <Tab
            ref={tabRef}
            key={i}
            onClick={() => onClickTab(i + 1)}
            active={currentProgress === i + 1}
          >
            <a data-testid="tab"> {i + 1}번째 빵</a>
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

const Tabs = styled.ul<{ tabsWidth: number }>`
  list-style: none;
  padding: 0;
  width: ${({ tabsWidth }) => (tabsWidth ? `${tabsWidth}px` : '100%')};
`;

const Tab = styled.li<{ active: boolean }>`
  display: inline-block;

  > a {
    cursor: pointer;
    position: relative;
    display: inline-block;
    font-size: 14px;
    font-weight: bold;
    padding: 10px 2px;
    margin: 0 8px;
    color: ${({ theme, active }) =>
      active ? theme.color.black : theme.color.gray700};

    &::after {
      opacity: ${({ active }) => (active ? '1' : '0')};
      content: '';
      position: absolute;
      height: 3px;
      width: 100%;
      left: 0;
      bottom: 0px;
      background-color: ${({ theme }) => theme.color.primary500};
    }
  }
`;
