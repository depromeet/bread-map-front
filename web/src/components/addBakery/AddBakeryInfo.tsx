import * as React from 'react';
import { useAtom } from 'jotai';
import styled from '@emotion/styled';
import { BakeryBaseCategoryInfo } from '@/constants/bakeryBaseCategories';
import { useBakeryBaseCategories } from '@/components/common/BakeryBaseCategoryList';
import { requestCreateBakery } from '@/remotes/network/bakery';
import { BottomModal, Button } from '@/components/common';
import { addBakeryAddress } from '@/store';
import {
  AddBakeryMultiInput,
  AddBakeryInput,
  AddBakeryCardInput,
  AddBakeryTextArea,
} from './AddBakeryInput';
import { useRouter } from 'next/router';
import { CreateBakeryPayload } from '@/remotes/network/bakery/requestCreateBakery';
import ResultModal from './ResultModal';
import { currentLatLng } from '@/store/map';
import { mutateGetBakeries } from '@/remotes/hooks/useGetBakeries';

export type SubmitData = {
  bakeryName?: string;
  imgPathList?: string[] | null;
  telNumber?: string;
  websiteUrlList?: string[] | null;
  businessHour?: string;
  basicInfoList?: BakeryBaseCategoryInfo[];
};

interface PostResponse {
  ok: boolean;
  message: string | null;
}

const createBakery = async ({
  imgPathList = null,
  websiteUrlList = null,
  ...params
}: CreateBakeryPayload): Promise<PostResponse> => {
  const response = await requestCreateBakery({
    ...params,
    imgPathList,
    websiteUrlList,
  });

  if (response.status >= 400 || !response.ok)
    return {
      ok: false,
      message: response.message || '등록하는 과정에서 오류가 생겼어요 !',
    };
  else
    return {
      ok: true,
      message: null,
    };
};

const StoreAddress: React.FC = () => {
  const router = useRouter();
  const [subMitData, setSubMitData] = React.useState<SubmitData>({
    bakeryName: '',
    imgPathList: null,
    telNumber: '',
    websiteUrlList: null,
    businessHour: '',
    basicInfoList: [],
  });
  const [, setCurrentLatLng] = useAtom(currentLatLng);
  const [isSubmit, setIsSubmit] = React.useState<boolean>(false);
  const [addressInfo, _] = useAtom(addBakeryAddress);
  const { selectedCategory, onClickCategory } = useBakeryBaseCategories(true);
  const [isOpenCreatedModal, setIsOpenCreatedModal] = React.useState({
    open: false,
    ok: false,
    text: '',
  });

  if (
    addressInfo.address.trim() === '' ||
    addressInfo.latitude === '' ||
    addressInfo.longitude === ''
  ) {
    router.replace({ query: { tab: 1 } });
  }

  const valueChangeHandler = React.useCallback(
    (
      name: string,
      value: string | string[] | BakeryBaseCategoryInfo[] | null
    ) => {
      setSubMitData((prev) =>
        prev ? { ...prev, [name]: value } : { [name]: value }
      );
    },
    []
  );

  const resultModalButtonClickHandler = React.useCallback(() => {
    // TODO: 로직이좀.... 맘에 안드네요..ㅠ
    if (isOpenCreatedModal.ok) {
      setCurrentLatLng({
        latitude: Number(addressInfo.latitude),
        longitude: Number(addressInfo.longitude),
      });
      mutateGetBakeries({
        latitude: Number(addressInfo.latitude),
        longitude: Number(addressInfo.longitude),
        range: 100000,
      });

      setIsOpenCreatedModal({
        open: false,
        ok: false,
        text: '',
      });

      router.push('/map');
    }
  }, [
    addressInfo.latitude,
    addressInfo.longitude,
    isOpenCreatedModal.ok,
    router,
    setCurrentLatLng,
  ]);

  const subMitHandler = async () => {
    setIsSubmit(true);
    if (subMitData.bakeryName) {
      const response = await createBakery({
        bakeryName: subMitData.bakeryName,
        imgPathList: subMitData.imgPathList,
        telNumber: subMitData.telNumber,
        websiteUrlList: subMitData.websiteUrlList,
        businessHour: subMitData.businessHour,
        basicInfoList: selectedCategory.map((category) => category.category),
        address: `${addressInfo.address} ${addressInfo.addressDetail}`.trim(),
        latitude: Number(addressInfo.latitude),
        longitude: Number(addressInfo.longitude),
      });
      if (!response.ok) {
        response.message
          ? setIsOpenCreatedModal({
              open: true,
              ok: false,
              text: response.message,
            })
          : setIsOpenCreatedModal({
              open: true,
              ok: false,
              text: '등록하는 과정에서\n오류가 생겼어요 !',
            });
      } else {
        setIsOpenCreatedModal({
          open: true,
          ok: true,
          text: '빵집 등록이\n완료되었어요.',
        });
      }
    }
  };

  return (
    <>
      <Title>
        <b>빵집 정보</b>를<br />
        알려주시겠어요?
      </Title>
      <StoreInfoWrapper>
        <AddBakeryInput
          name="bakeryName"
          isRequired
          placeholder={'빵집 이름을 입력해 주세요.'}
          label={'빵집 이름'}
          value={subMitData.bakeryName}
          isSubmit={isSubmit}
          alertText={'빵집 이름을 입력해 주세요.'}
          changeHandler={valueChangeHandler}
        />
        <AddBakeryTextArea
          name="businessHour"
          value={subMitData.businessHour}
          placeholder={'00:00-00:00 (공휴일도 알려주세요!)'}
          label={'영업시간'}
          changeHandler={valueChangeHandler}
        />
        <AddBakeryMultiInput
          name="websiteUrlList"
          value={subMitData.websiteUrlList}
          label={'홈페이지'}
          placeholder={'URL을 입력해 주세요'}
          changeHandler={valueChangeHandler}
        />
        <AddBakeryInput
          name="telNumber"
          value={subMitData.telNumber}
          placeholder={'000-0000-0000'}
          label={'전화번호'}
          changeHandler={valueChangeHandler}
        />
        <AddBakeryCardInput
          name="basicInfoList"
          value={selectedCategory}
          label={'기본정보'}
          changeHandler={onClickCategory}
        />
        <SubMitButtonWrapper>
          <Button styleType={'primary'} size={'large'} onClick={subMitHandler}>
            제출하기
          </Button>
        </SubMitButtonWrapper>
      </StoreInfoWrapper>
      <ResultModal
        isOpenModal={isOpenCreatedModal}
        buttonClickHandler={resultModalButtonClickHandler}
      ></ResultModal>
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

const StoreInfoWrapper = styled.div`
  flex-grow: 1;
  position: relative;
`;

const SubMitButtonWrapper = styled.div`
  position: sticky;
  background-clip: border-box;
  border: 2px ​solid ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.white};
  bottom: 0;
  padding: 1rem 0;
  left: 0%;
  width: 100%;
`;
