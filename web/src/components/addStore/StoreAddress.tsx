import * as React from 'react';
import styled from '@emotion/styled';
import { Button, ConfirmModal } from '../common';
import Postcode from '../postcode/Postcode';
import { useRouter } from 'next/router';
import StoreInput from './StoreInput/StoreInput';
import { Close } from '../icons';
import { useAtom } from 'jotai';
import { addStoreAddress } from '@/store';

const StoreAddress: React.FC = () => {
  const router = useRouter();
  const [confirmModalIsOpen, setConfirmModalIsOpen] = React.useState(false);
  const [address, setAddress] = useAtom(addStoreAddress);

  const postCompliteHandler = React.useCallback(
    (addr: string) => {
      setAddress({ address: addr });
    },
    [setAddress]
  );

  const addressDetailChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAddress((prev) => prev && { ...prev, detailAddress: e.target.value });
  };

  const resetAddress = React.useCallback(() => {
    setAddress({ address: '', addressDetail: '' });
  }, [setAddress]);

  const buttonClickHandler = React.useCallback(() => {
    router.push({ query: { tab: 3 } });
  }, [router]);

  const confirmModalClose = React.useCallback(() => {
    setConfirmModalIsOpen(false);
  }, []);

  const confirmModalOpen = React.useCallback(() => {
    setConfirmModalIsOpen(true);
  }, []);

  const onConfirmHandler = React.useCallback(() => {
    resetAddress();
  }, [resetAddress]);

  return (
    <>
      <Title>
        <b>주소</b>를 입력해주세요.
      </Title>
      {!address?.address ? (
        <PostcodeStyle compliteHandler={postCompliteHandler} />
      ) : (
        <AddressContents>
          <Address>
            <StoreInput
              isRequired
              readOnly
              name={'address'}
              label={'기본주소'}
              placeholder={'주소를 입력해주세요.'}
              value={address?.address}
              alertText={'주소를 입력해주세요.'}
            />
            <Close onClick={confirmModalOpen} />
          </Address>

          <StoreInput
            name={'addressDetail'}
            label={'상세주소'}
            placeholder={'상세주소를 입력해주세요.'}
            value={address?.addressDetail}
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
        disabled={address?.address === '' ? true : false}
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
