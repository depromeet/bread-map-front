import React, { ChangeEvent, useRef } from 'react';
import styled from '@emotion/styled';
import { BreadCategoryItem } from '@/constants/breadCategories';
import { Toast } from '@/components/common/ToastPopup';
import { ArrowDown, GrayStar, OrangeStar, Plus } from '@/components/icons';
import { BreadsReview, Review } from '.';

interface MoreAddProps {
  breadsReview: BreadsReview;
  setIsCategoryPage: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCategory: BreadCategoryItem[];
  currentProgress: number;
  rating: number[];
  singleReview: Review;
  deleteSingleReview: (targetProgress: number) => void;
  editScore: (clickedIndex: number) => void;
  editContent: (e: ChangeEvent<HTMLInputElement>) => void;
  isSubmitted: boolean;
  toastStatus: boolean;
}

const MoreAdd = ({
  breadsReview,
  setIsCategoryPage,
  selectedCategory,
  currentProgress,
  rating,
  singleReview,
  deleteSingleReview,
  editScore,
  editContent,
  isSubmitted,
  toastStatus,
}: MoreAddProps) => {
  const currentRating = breadsReview[currentProgress]?.rating || 0;

  const fileRef = useRef<HTMLInputElement | null>(null);
  const addPhoto = () => {
    if (!fileRef.current) return;
    fileRef.current.click();
  };

  const renderStar = (stars: number[]): JSX.Element[] => {
    return stars.map((star, i) => (
      <StarBtn key={i} onClick={() => editScore(i)}>
        {star === 1 ? <OrangeStar /> : <GrayStar />}
      </StarBtn>
    ));
  };

  const renderPrice = (): number | string => {
    const price = breadsReview[currentProgress]?.price || singleReview?.price;
    if (price === 0) return '';

    return price as number;
  };

  return (
    <>
      <BreadHeader>
        <Title>{currentProgress}번째 빵</Title>
        <DeleteBtn onClick={() => deleteSingleReview(currentProgress)}>
          삭제
        </DeleteBtn>
      </BreadHeader>
      <Content>
        <Row>
          <Text isRequired>빵 종류</Text>
          <SelectArea>
            <SelectBreadBtn onClick={() => setIsCategoryPage(true)}>
              {breadsReview[currentProgress]?.categoryName || '빵 종류 선택'}
            </SelectBreadBtn>
            <ArrowDown />
          </SelectArea>
          {isSubmitted && singleReview.categoryName === null && (
            <AlertText>빵 종류를 선택해주세요.</AlertText>
          )}
        </Row>
        <Row>
          <Text isRequired>메뉴명</Text>
          <Input
            name="menuName"
            placeholder="메뉴명을 입력해주세요"
            value={
              breadsReview[currentProgress]?.menuName || singleReview?.menuName
            }
            onChange={(e) => editContent(e)}
          />
          {isSubmitted && singleReview.menuName === '' && (
            <AlertText>메뉴명을 입력해주세요.</AlertText>
          )}
        </Row>
        <Row>
          <Text isRequired>가격</Text>
          <Input
            name="price"
            type="number"
            placeholder="원"
            value={renderPrice()}
            onChange={(e) => editContent(e)}
          />
          {isSubmitted && singleReview.price === 0 && (
            <AlertText>가격을 입력해주세요.</AlertText>
          )}
        </Row>
        <Row>
          <Text>별점</Text>
          <StarArea>
            {renderStar([
              ...Array(currentRating).fill(1),
              ...Array(5 - currentRating).fill(0),
            ])}
          </StarArea>
        </Row>
        <Row>
          <Text>한줄평</Text>
          <Input
            name="contents"
            placeholder="한줄평을 적어주세요"
            value={
              breadsReview[currentProgress]?.contents ||
              singleReview?.contents ||
              ''
            }
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
      {toastStatus && <Toast message={'필수정보를 입력해주세요 💪'} />}
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
  font-weight: bold;
  margin: 0;
`;

const DeleteBtn = styled.button`
  padding: 10px;
  border: ${({ theme }) => ` 1px solid ${theme.color.gray300}`};
  border-radius: 0.5rem;
  background: none;
  font-size: 0.87rem;
  font-weight: bold;
  color: ${({ theme }) => theme.color.gray700};
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

const AlertText = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.color.primary500};
  transition: 1s;
  transition-delay: 1s;
`;
