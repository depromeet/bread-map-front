import * as React from 'react';

const NaverMapContext = React.createContext<naver.maps.Map | undefined | null>(null);

type MapUpdate = React.Dispatch<React.SetStateAction<naver.maps.Map | undefined>>;
const NaverMapUpdateContext = React.createContext<MapUpdate | null>(null);

interface MapContextProviderProps {
  children: React.ReactNode;
}

const NaverMapProvider = ({ children }: MapContextProviderProps) => {
  const [naverMap, setNaverMap] = React.useState<naver.maps.Map | undefined>(undefined);

  return (
    <NaverMapContext.Provider value={naverMap}>
      <NaverMapUpdateContext.Provider value={setNaverMap}>
        {children}
      </NaverMapUpdateContext.Provider>
    </NaverMapContext.Provider>
  );
}

export default NaverMapProvider;

export const useNaverMap = () => {
  const naverMap = React.useContext(NaverMapContext);
  if (naverMap === null) throw new Error('Context not provided!');

  return naverMap;
};

export const useSetNaverMap = () => {
  const setNaverMap = React.useContext(NaverMapUpdateContext);
  if (setNaverMap === null) throw new Error('Context not provided!');

  return setNaverMap;
}
