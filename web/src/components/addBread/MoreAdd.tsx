import React, { ChangeEvent, useRef } from 'react';
import styled from '@emotion/styled';
import { GrayStar, OrangeStar, Plus } from '@/components/icons';
import { Review } from '.';

interface MoreAddProps {
  progress: number;
  stars: number[];
  singleReview: Review;
  editScore: (clickedIndex: number) => void;
  editContent: (e: ChangeEvent<HTMLInputElement>) => void;
}

const MoreAdd = ({
  progress,
  stars,
  singleReview,
  editScore,
  editContent,
}: MoreAddProps) => {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const addPhoto = () => {
    if (!fileRef.current) return;
    fileRef.current.click();
  };

  return (
    <>
      <BreadHeader>
        <Title>{progress}번째 빵</Title>
        <DeleteBtn>삭제</DeleteBtn>
      </BreadHeader>
      <Content>
        <Row>
          <Text isRequired>빵 종류</Text>
          <Input />
        </Row>
        <Row>
          <Text isRequired>메뉴명</Text>
          <Input
            name="name"
            value={singleReview['name']}
            onChange={(e) => editContent(e)}
          />
        </Row>
        <Row>
          <Text isRequired>가격</Text>
          <Input
            name="price"
            type="number"
            value={singleReview['price']}
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
            value={singleReview['text']}
            onChange={(e) => editContent(e)}
          />
        </Row>
        <Row>
          <Text>사진 업로드</Text>
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

export default MoreAdd;

const BreadHeader = styled.div`
  margin: 1.5rem 0 2.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  margin: 0;
`;

const DeleteBtn = styled.button`
  border: 1px solid #eee;
  border-radius: 0.5rem;
  background: none;
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

const StarArea = styled.div`
  display: block;
`;

const StarBtn = styled.div`
  display: inline-block;
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
  color: #757575;

  &::placeholder {
    color: #bdbdbd;
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
  min-width: 600px;
`;

const AddPhotoBtn = styled.div`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 0.5em;
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
