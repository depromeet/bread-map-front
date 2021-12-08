import * as React from 'react';
import useSWR from 'swr';
import { useAtom } from 'jotai';
import styled from '@emotion/styled';
import { Navigation } from '@/components/icons';
import { useNaverMap, useGoToPosition } from '@/lib/navermap';
import { mutateGetBakeries } from '@/remotes/hooks/useGetBakeries';
import { currentLatLng } from '@/store/map';

const CurrentPositionButton = React.forwardRef<HTMLButtonElement | null, {}>(
  (_, ref) => {
    const naverMap = useNaverMap();
    const { goToMyPosition } = useGoToPosition();
    const [, setCurrentLatLng] = useAtom(currentLatLng);
    const { data } = useSWR('getMyPosition', goToMyPosition);

    const buttonRef = React.useRef<HTMLButtonElement | null>(null);

    React.useImperativeHandle<
      HTMLButtonElement | null,
      HTMLButtonElement | null
    >(ref, () => buttonRef.current);

    const handleClick = async () => {
      if (naverMap === undefined) return;
      if (!data) return;

      const coords = await goToMyPosition();
      if (coords) {
        setCurrentLatLng({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });

        //TODO: 클릭할 때마다 실행되므로 throttle 요청 고민
        mutateGetBakeries({
          latitude: coords.latitude,
          longitude: coords.longitude,
          // TODO 범위에 대한 로직 없음.
          range: 100000,
        });
      }
    };

    return (
      <Button onClick={handleClick} ref={buttonRef}>
        <Navigation width={16} height={16} />
        <span>{data ? '내 위치' : 'Loading'}</span>
      </Button>
    );
  }
);

CurrentPositionButton.displayName = 'CurrentPositionButton';

export default CurrentPositionButton;

const Button = styled.button`
  position: absolute;
  left: 12px;
  bottom: 36px;

  width: 80px;
  height: 32px;
  border: none;
  border-radius: 16px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  font-size: 12px;
  font-weight: 700;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.black};

  span {
    margin-left: 4px;
  }
`;
