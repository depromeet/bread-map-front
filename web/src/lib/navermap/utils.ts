export const getNavermapSDK = () => {
  if (window.naver && window.naver.maps) {
    return window.naver.maps;
  }

  return undefined;
};

export const getMyPosition = () => {
  return new Promise<GeolocationPosition>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      maximumAge: 30000,
    });
  });
};
