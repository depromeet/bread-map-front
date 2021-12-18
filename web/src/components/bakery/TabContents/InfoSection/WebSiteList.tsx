import React from 'react';
import styled from '@emotion/styled';
import { TouchAreaDownIcon, TouchAreaUpIcon } from '@/components/icons';

const urlHeight = 16;

interface WebsiteListProps {
  urlList: string[];
  paddingLeft: number;
}

const WebSiteList = ({ urlList, paddingLeft }: WebsiteListProps) => {
  const [opened, setOpened] = React.useState(false);
  const [height, setHight] = React.useState(urlHeight);

  const onClickUrl = (idx: number) => {
    if (idx !== 0) return;
    setOpened((prev) => !prev);
  };

  React.useEffect(() => {
    if (opened) setHight(urlList.length * urlHeight);
    else setHight(urlHeight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened]);

  return (
    <>
      {urlList.length > 0 ? (
        <Container height={height} paddingLeft={paddingLeft}>
          {urlList.map((url, idx) => (
            <Wrapper key={idx}>
              <UrlLink href={url}>{url}</UrlLink>
              {idx === 0 && !opened && (
                <TouchAreaDownIcon onClick={() => onClickUrl(idx)} />
              )}
              {idx === 0 && opened && (
                <TouchAreaUpIcon onClick={() => onClickUrl(idx)} />
              )}
            </Wrapper>
          ))}
        </Container>
      ) : (
        <div>제공된 정보가 없습니다.</div>
      )}
    </>
  );
};

export default WebSiteList;

const Container = styled.div<{ height: number; paddingLeft: number }>`
  display: flex;
  flex-direction: column;
  gap: 3px;
  height: ${({ height }) => `${height}px`};
  padding-left: ${({ paddingLeft }) => `${paddingLeft}px`};
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > svg {
    margin-left: 5px;
    cursor: pointer;
  }
`;

const UrlLink = styled.a`
  color: ${({ theme }) => theme.color.primary500};
  text-decoration: none;
  margin-bottom: 2px;
`;
