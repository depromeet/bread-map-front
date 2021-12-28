import styled from '@emotion/styled';
import React from 'react';

type LinkText = '페이스북' | '인스타그램' | '블로그';

interface BlueLinkProps {
  href: string | undefined;
  text: LinkText;
}

const BlueLink = ({ href, text }: BlueLinkProps) => {
  if (!href) return null;

  return (
    <Link href={href} target="_blank">
      {text}
    </Link>
  );
};

export default BlueLink;

const Link = styled.a`
  color: #4992ff;
  cursor: pointer;
  margin-right: 8px;
`;
