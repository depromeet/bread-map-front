import React from 'react';
import styled from '@emotion/styled';
import { TouchAreaDownIcon, TouchAreaUpIcon } from '@/components/icons';

interface WebsiteListProps {
  urlList: string[];
}

const WebSiteList = ({ urlList = [] }: WebsiteListProps) => {
  const [opened, setOpened] = React.useState(false);

  const onToggleDrop = () => {
    setOpened((prev) => !prev);
  };

  return (
    <>
      {urlList.length > 0 ? (
        <Container opened={opened}>
          <Wrapper>
            <UrlLink href={urlList[0]}>{urlList[0]}</UrlLink>
            <DropButton onClick={onToggleDrop}>
              {opened ? <TouchAreaUpIcon /> : <TouchAreaDownIcon />}
            </DropButton>
          </Wrapper>
          {opened &&
            urlList.slice(1).map((url, idx) => (
              <Wrapper key={idx}>
                <UrlLink href={url}>{url}</UrlLink>
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

const Container = styled.div<{ opened: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-height: 16px;
  height: ${({ opened }) => (opened ? 'auto' : 0)};
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

const DropButton = styled.button`
  border: none;
  background: none;
`;

const UrlLink = styled.a`
  color: ${({ theme }) => theme.color.primary500};
  text-decoration: none;
  margin-bottom: 2px;
`;
