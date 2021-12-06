import React from 'react';
import { useNaverMap } from '.';
import { getNavermapSDK } from './utils';

interface Size {
  width?: number;
  height: number;
}

const useSetMapSize = () => {
  const map = useNaverMap();
  return React.useCallback(
    ({ width = window.innerWidth, height }: Size) => {
      const sdk = getNavermapSDK();
      if (sdk === undefined || height === 0) return;
      const size = new sdk.Size(width, height);

      map?.setSize(size);
    },
    [map]
  );
};

export default useSetMapSize;
