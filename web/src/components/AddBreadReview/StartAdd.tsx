import React from 'react';
import styled from '@emotion/styled';
import { CategoryInfo } from '@/constants/breadCategory';
import { ArrowDown, GrayStar, OrangeStar, Plus } from '@/components/icons';

interface StartAddProps {
  setIsCategoryPage: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCategory: CategoryInfo[];
  stars: number[];
  editScore: (clickedIndex: number) => void;
  editContent: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StartAdd = ({
  setIsCategoryPage,
  selectedCategory,
  stars,
  editScore,
  editContent,
}: StartAddProps) => {
  const fileRef = React.useRef<HTMLInputElement | null>(null);
  const addPhoto = () => {
    if (!fileRef.current) return;
    fileRef.current.click();
  };

  return (
    <>
      <Title data-testid="title">
        <b>어떤 빵</b>을<br /> 먹었나요?
      </Title>
      <Content>
        <Row>
          <Text isRequired>빵 종류</Text>
          <SelectArea>
            <SelectBreadBtn onClick={() => setIsCategoryPage(true)}>
              {selectedCategory.length < 1
                ? '빵 종류 선택'
                : selectedCategory[0]?.text}
            </SelectBreadBtn>
            <ArrowDown />
          </SelectArea>
        </Row>
        <Row>
          <Text isRequired>메뉴명</Text>
          <Input
            name="name"
            placeholder="메뉴명을 입력해주세요"
            onChange={(e) => editContent(e)}
          />
        </Row>
        <Row>
          <Text isRequired>가격</Text>
          <Input
            name="price"
            type="number"
            placeholder="원"
            onChange={(e) => editContent(e)}
          />
        </Row>
        <Row>
          <Text>별점</Text>
          <StarArea>
            {stars.map((star, i) => (
              <StarBtn key={i} onClick={() => editScore(i)}>
                {star === 1 ? <OrangeStar /> : <GrayStar />}
              </StarBtn>
            ))}
          </StarArea>
        </Row>
        <Row>
          <Text>한줄평</Text>
          <Input
            name="text"
            placeholder="한줄평을 적어주세요"
            onChange={(e) => editContent(e)}
          />
        </Row>
        <Row>
          <PhotoUploadText>사진 업로드</PhotoUploadText>
          <Scroll>
            <PhotoWrapper>
              <AddPhotoBtn onClick={addPhoto}>
                <Plus />
                <input ref={fileRef} type="file" />
              </AddPhotoBtn>
              {[...Array(5)].map((photo, i) => (
                <EmptyPhoto key={i}></EmptyPhoto>
              ))}
            </PhotoWrapper>
          </Scroll>
        </Row>
      </Content>
    </>
  );
};

export default StartAdd;

const Title = styled.h1`
  margin: 0.75rem 0 2.25rem;

  > b {
    color: #ff6e40;
  }
`;

const Content = styled.div``;

const Row = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 4.5rem;
  }
`;

const Text = styled.span<{ isRequired?: boolean }>`
  position: relative;
  display: inline-block;
  margin-bottom: 0.75rem;
  font-weight: bold;
  font-size: 0.87rem;
  color: ${({ theme }) => theme.color.gray800};

  &::before {
    content: '';
    position: absolute;
    right: -6px;
    top: -2px;
    width: 4px;
    height: 4px;
    background-color: #ff6e40;
    border-radius: 50%;
    opacity: ${({ isRequired }) => (isRequired ? 1 : 0)};
  }
`;

const PhotoUploadText = styled.span`
  display: inline-block;
  margin-bottom: 0.75rem;
  font-weight: bold;
  font-size: 1rem;
  color: ${({ theme }) => theme.color.black};
`;

const StarArea = styled.div`
  display: block;
`;

const StarBtn = styled.div`
  display: inline-block;
`;

const SelectArea = styled.div`
  position: relative;

  > svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
  }
`;

const SelectBreadBtn = styled.button`
  border: 1px solid #f5f5f5;
  width: 100%;
  border-radius: 8px;
  color: #9e9e9e;
  text-align: left;
  padding: 0.875rem;
`;

const Input = styled.input`
  display: block;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border-radius: 0;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border: none;
  padding: 0;
  color: ${({ theme }) => theme.color.gray600};

  &::placeholder {
    color: ${({ theme }) => theme.color.gray400};
  }
`;

const Scroll = styled.div`
  width: 100%;
  overflow-x: scroll;
  -ms-overflow-style: none;
  touch-action: pan-x;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const PhotoWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  min-width: 600px;
`;

const AddPhotoBtn = styled.div`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 0.5rem;
  border: 1px solid #ff6e40;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.75rem;

  > input {
    display: none;
  }
`;

const EmptyPhoto = styled.div`
  display: inline-block;
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 0.5rem;
  background: #eeeeee;
  margin-right: 0.75rem;
`;
