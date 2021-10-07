export const getNavermapSDK = () => {
  if (window.naver && window.naver.maps) {
    return window.naver.maps;
  }

  return undefined;
};
