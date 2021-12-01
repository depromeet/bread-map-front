import React, { ReactHTMLElement } from 'react';
import styled from '@emotion/styled';

const DEFAULT_IMG_SRC = {
  BREAD_1: '/images/default_bread.png',
  BREAD_2: '/images/default_bread2.png',
  NO_PROFILE: '/images/noProfileImg.png',
};

type ImageProps = React.HTMLAttributes<HTMLImageElement> & { src: string };

const UserImage = ({ ...props }: ImageProps) => {
  const imgErrorHandler = React.useCallback(
    (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      const target = e.target as HTMLImageElement;

      target.src = DEFAULT_IMG_SRC.NO_PROFILE;
    },
    []
  );

  return <Image onError={imgErrorHandler} {...props} alt={'userAvatar'} />;
};

const MenuImage = ({ ...props }: ImageProps) => {
  const imgErrorHandler = React.useCallback(
    (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      const target = e.target as HTMLImageElement;

      target.src = DEFAULT_IMG_SRC.BREAD_2;
    },
    []
  );

  return <Image onError={imgErrorHandler} {...props} alt={'menu'} />;
};

const BakeryImage = ({ ...props }: ImageProps) => {
  const imgErrorHandler = React.useCallback(
    (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      const target = e.target as HTMLImageElement;

      target.src = DEFAULT_IMG_SRC.BREAD_2;
    },
    []
  );

  return <Image onError={imgErrorHandler} {...props} alt={'bakery'} />;
};

const ReviewImage = ({ ...props }: ImageProps) => {
  const imgErrorHandler = React.useCallback(
    (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      const target = e.target as HTMLImageElement;

      target.src = DEFAULT_IMG_SRC.BREAD_2;
    },
    []
  );

  return <Image onError={imgErrorHandler} {...props} alt={'review'} />;
};

export { UserImage, MenuImage, BakeryImage, ReviewImage };

const Image = styled.img``;
