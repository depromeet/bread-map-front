import * as React from 'react';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import useGeocode from '@/remotes/hooks/useGeocode';
import { addBakeryAddress } from '@/store';
import AddBakeryInput from './AddBakeryInput/AddBakeryInput';
import Postcode from '../postcode/Postcode';
import { Button, ConfirmModal } from '../common';
import { Close } from '../icons';

const StoreAddress: React.FC = () => {
  const router = useRouter();
  const [confirmModalIsOpen, setConfirmModalIsOpen] = React.useState(false);
  const [addressDetail, setAddressDetail] = React.useState<string>('');
  const [address, setAddress] = React.useState<string>('');
  const [, setAddressInfo] = useAtom(addBakeryAddress);
  const { data } = useGeocode(address);

  const postCompliteHandler = React.useCallback(
    (addr: string) => {
      setAddress(addr);
    },
    [setAddress]
  );

  const addressDetailChangeHandler = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setAddressDetail(e.target.value);
    },
    []
  );

  const resetAddress = React.useCallback(() => {
    setAddress('');
  }, [setAddress]);

  const buttonClickHandler = React.useCallback(() => {
    if (data) {
      setAddressInfo({
        address,
        addressDetail,
        latitude: data.documents[0].y,
        longitude: data.documents[0].x,
      });
      router.push({ query: { tab: 3 } });
    } else {
      resetAddress();
    }
  }, [address, addressDetail, data, resetAddress, router, setAddressInfo]);

  const confirmModalClose = React.useCallback(() => {
    setConfirmModalIsOpen(false);
  }, []);

  const confirmModalOpen = React.useCallback(() => {
    setConfirmModalIsOpen(true);
  }, []);

  const onConfirmHandler = React.useCallback(() => {
    setConfirmModalIsOpen(false);
    resetAddress();
  }, [resetAddress]);

  return (
    <>
      <Title>
        <b>주소</b>를 입력해주세요.
      </Title>
      {!address ? (
        <PostcodeStyle compliteHandler={postCompliteHandler} />
      ) : (
        <AddressContents>
          <Address>
            <AddBakeryInput
              isRequired
              readOnly
              name={'address'}
              label={'기본주소'}
              placeholder={'주소를 입력해주세요.'}
              value={address}
              alertText={'주소를 입력해주세요.'}
            />
            <Close onClick={confirmModalOpen} />
          </Address>

          <AddBakeryInput
            name={'addressDetail'}
            label={'상세주소'}
            placeholder={'상세주소를 입력해주세요.'}
            value={addressDetail}
            onChange={addressDetailChangeHandler}
          />

          <ConfirmModal
            open={confirmModalIsOpen}
            cancelText={'취소하기'}
            confirmText={'삭제하기'}
            cancelButtonHandler={confirmModalClose}
            acceptButtonHandler={onConfirmHandler}
          >
            <ConfirmText>정말로 삭제할까요?</ConfirmText>
          </ConfirmModal>
        </AddressContents>
      )}
      <ButtonStyle
        styleType={'primary'}
        size={'large'}
        onClick={buttonClickHandler}
        disabled={address && data ? false : true}
      >
        다음
      </ButtonStyle>
    </>
  );
};

export default StoreAddress;

const Title = styled.h1`
  margin: 1rem 0 2rem;

  > b {
    color: #ff6e40;
  }
`;

const PostcodeStyle = styled(Postcode)`
  flex-grow: 1;
`;

const Address = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  > div {
    width: 100%;
  }

  svg {
    stroke: ${({ theme }) => theme.color.gray500};
  }
`;

const AddressContents = styled.div`
  flex-grow: 1;
`;

const ButtonStyle = styled(Button)`
  position: sticky;
  bottom: 16px;
  left: 0%;
  width: 100%;
`;

const ConfirmText = styled.h4`
  display: flex;
  justify-content: center;
  align-self: center;
  padding: 30px;
`;
