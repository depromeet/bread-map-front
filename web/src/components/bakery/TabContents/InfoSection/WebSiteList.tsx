import React from 'react';
import styled from '@emotion/styled';
import { TouchAreaDownIcon, TouchAreaUpIcon } from '@/components/icons';
import BlueLink from './BlueLink';

interface WebsiteListProps {
  urlList: string[];
}

const WebSiteList = ({ urlList }: WebsiteListProps) => {
  const [opened, setOpened] = React.useState(false);

  const onToggleDrop = () => {
    setOpened((prev) => !prev);
  };

  interface MatchLink {
    facebook?: string;
    instagram?: string;
    blognaver?: string;
    tistory?: string;
  }

  const matchedLinks = React.useMemo(() => {
    const links: MatchLink = {};

    urlList.map((url) => {
      if (regex.test(url)) {
        const result = url.match(regex)!;
        const name = result[2]
          ?.replaceAll('.', '')
          .toLowerCase() as keyof MatchLink;
        links[name] = convertHttpsLink(result[0]);
      }
    });

    return links;
  }, [urlList]);

  return (
    <>
      {urlList.length > 0 ? (
        <LinkSection>
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
          <BlueLinksArea>
            <BlueLink href={matchedLinks?.facebook} text={'페이스북'} />
            <BlueLink href={matchedLinks?.instagram} text={'인스타그램'} />
            <BlueLink
              href={matchedLinks?.blognaver || matchedLinks?.tistory}
              text={'블로그'}
            />
          </BlueLinksArea>
        </LinkSection>
      ) : (
        <div>제공된 정보가 없습니다.</div>
      )}
    </>
  );
};

export default WebSiteList;

const regex =
  /((?:(?:http|https):\/\/)?(?:[a-z0-9]+.)?(facebook|blog\.naver|instagram|tistory)\.com(?:\/.*)?)/i;

const convertHttpsLink = (url: string): string => {
  if (url.includes('http://') || url.includes('https://')) return url;
  return `https://${url}`;
};

const LinkSection = styled.div`
  display: flex;
  flex-direction: column;
`;

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
  cursor: pointer;
`;

const UrlLink = styled.a`
  color: ${({ theme }) => theme.color.primary500};
  text-decoration: none;
  margin-bottom: 2px;
`;

const BlueLinksArea = styled.div`
  display: block;
  margin-top: 4px;
`;
