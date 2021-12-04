/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { useAtom } from 'jotai';
import styled from '@emotion/styled';
import { BakeryBaseCategoryInfo } from '@/constants/bakeryBaseCategories';
import { useBakeryBaseCategories } from '@/components/common/BakeryBaseCategoryList';
import { requestCreateBakery } from '@/remotes/network/bakery';
import { Button } from '@/components/common';
import { addBakeryAddress } from '@/store';
import {
  AddBakeryMultiInput,
  AddBakeryInput,
  AddBakeryCardInput,
  AddBakeryTextArea,
} from './AddBakeryInput';
import { useRouter } from 'next/router';
import { CreateBakeryPayload } from '@/remotes/network/bakery/requestCreateBakery';

export type SubmitData = {
  bakeryName?: string;
  imgPathList?: string[];
  telNumber?: string;
  websiteUrlList?: string[];
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
  const [subMitData, setSubMitData] = React.useState<SubmitData>({});
  const [isSubmit, setIsSubmit] = React.useState<boolean>(false);
  const [addressInfo, _] = useAtom(addBakeryAddress);
  const { selectedCategory, onClickCategory } = useBakeryBaseCategories(true);

  if (addressInfo.address.trim() === '') {
    router.replace({ query: { tab: 1 } });
  }

  const valueChangeHandler = (
    name: string,
    value: string | string[] | BakeryBaseCategoryInfo[] | null
  ) => {
    setSubMitData((prev) =>
      prev ? { ...prev, [name]: value } : { [name]: value }
    );
  };

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

      // TOdo : 스낵바
      if (!response.ok) {
        response.message
          ? alert(response.message)
          : alert('등록하는 과정에서 오류가 생겼어요 !');
      } else {
        alert('등록이 완료되었습니다.');
        router.push('/map');
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
