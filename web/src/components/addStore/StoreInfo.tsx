/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import styled from '@emotion/styled';
import { Button } from '@/components/common';
import { StoreMultiInput, StoreInput, StoreCardInput } from './StoreInput';
import { CategoryInfo } from '@/constants/breadCategory';
import { useCategories } from '@/components/common/CategoryList';
import { addStoreAddress } from '@/store';
import { useAtom } from 'jotai';

export type SubmitData = {
  name?: string;
  storeTel?: string;
  homepages?: string[];
  businessHour?: string;
  baseInfo?: CategoryInfo[];
};

const StoreAddress: React.FC = () => {
  const [subMitData, setSubMitData] = React.useState<SubmitData>({});
  const [isSubmit, setIsSubmit] = React.useState<boolean>(false);
  const [addressInfo, _] = useAtom(addStoreAddress);
  const { selectedCategory, onClickCategory } = useCategories(true);

  const valueChangeHandler = (
    name: string,
    value: string | string[] | CategoryInfo[] | null
  ) => {
    setSubMitData((prev) =>
      prev ? { ...prev, [name]: value } : { [name]: value }
    );
  };

  const subMitHandler = () => {
    setIsSubmit(true);
    // 입력된 빵집 정보
    console.log({
      ...addressInfo,
      ...subMitData,
      baseInfo: selectedCategory.map((category) => category.text),
    });
  };

  return (
    <>
      <Title>
        <b>빵집 정보</b>를<br />
        알려주시겠어요?
      </Title>
      <StoreInfoWrapper>
        <StoreInput
          name="name"
          isRequired
          placeholder={'빵집 이름을 입력해 주세요.'}
          label={'빵집 이름'}
          value={subMitData.name}
          isSubmit={isSubmit}
          alertText={'빵집 이름을 입력해 주세요.'}
          changeHandler={valueChangeHandler}
        />
        <StoreInput
          name="businessHour"
          value={subMitData.businessHour}
          placeholder={'00:00-00:00 (공휴일도 알려주세요!)'}
          label={'영업시간'}
          changeHandler={valueChangeHandler}
        />
        <StoreMultiInput
          name="homepages"
          value={subMitData.homepages}
          label={'홈페이지'}
          placeholder={'URL을 입력해 주세요'}
          changeHandler={valueChangeHandler}
        />
        <StoreInput
          name="storeTel"
          value={subMitData.storeTel}
          placeholder={'000-0000-0000'}
          label={'전화번호'}
          changeHandler={valueChangeHandler}
        />
        <StoreCardInput
          name="baseInfo"
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
