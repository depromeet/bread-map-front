import React from 'react';
import styled from '@emotion/styled';
import { Toast } from '@/components/common/ToastPopup';
import { Plus } from '@/components/icons';
import { Review } from '.';
import {
  ReviewTextInput,
  CategoryInput,
  PhotoInput,
  ScoreInput,
} from './AddBreadReviewInput';

interface StartAddProps {
  singleReview: Review;
  isSubmitted: boolean;
  toastStatus: boolean;
  nextProgress: (singleReview: Review) => void;
  submitReview: (singleReview: Review) => void;
}

const StartAdd = ({
  singleReview,
  isSubmitted,
  toastStatus,
  nextProgress,
  submitReview,
}: StartAddProps) => {
  const [currentReview, setCurrentReview] =
    React.useState<Review>(singleReview);
  React.useEffect(() => setCurrentReview(singleReview), [singleReview]);

  const editContent = React.useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = target;
      setCurrentReview((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const editScore = React.useCallback((rating: number) => {
    setCurrentReview((prev) => ({ ...prev, rating }));
  }, []);

  return (
    <>
      <>
        <Content>
          <Row>
            <CategoryInput
              isSubmitted={isSubmitted}
              categoryName={currentReview.categoryName}
              setCurrentReview={setCurrentReview}
            />
          </Row>
          <Row>
            <ReviewTextInput
              name="menuName"
              required
              placeholder={'메뉴명을 입력해주세요.'}
              label={'메뉴명'}
              value={currentReview.menuName}
              isSubmit={isSubmitted}
              alertText={'메뉴명을 입력해주세요.'}
              onChange={editContent}
            />
          </Row>
          <Row>
            <ReviewTextInput
              name="price"
              type="number"
              required
              placeholder={'원'}
              label={'가격'}
              value={currentReview.price < 0 ? '' : currentReview.price}
              isSubmit={isSubmitted}
              alertText={'가격을 입력해주세요.'}
              onChange={editContent}
            />
          </Row>
          <Row>
            <ScoreInput rating={currentReview.rating} editScore={editScore} />
          </Row>
          <Row>
            <ReviewTextInput
              name="contents"
              placeholder={'한줄평을 적어주세요.'}
              label={'한줄평'}
              value={currentReview.contents}
              isSubmit={isSubmitted}
              onChange={editContent}
            />
          </Row>
          <Row>
            <PhotoInput
              photos={currentReview.imgPathList}
              setCurrentReview={setCurrentReview}
            />
          </Row>
        </Content>
        <BtnWrapper>
          <MoreAddBtn onClick={() => nextProgress(currentReview)}>
            <Plus />
            <span>다른 빵 추가하기</span>
          </MoreAddBtn>
          <SubmitBtn onClick={() => submitReview(currentReview)}>
            확인
          </SubmitBtn>
        </BtnWrapper>
      </>
      {toastStatus && <Toast message={'필수정보를 입력해주세요 💪'} />}
    </>
  );
};

export default StartAdd;

const Content = styled.div``;

const Row = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

const BtnWrapper = styled.div`
  width: 100%;
`;

const SubmitBtn = styled.button`
  width: 100%;
  display: block;
  background-color: ${({ theme }) => theme.color.primary500};
  border-radius: 0.5rem;
  border: none;
  padding: 1rem 0;
  color: ${({ theme }) => theme.color.white};
  font-size: 1rem;
`;

const MoreAddBtn = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  border: ${({ theme }) => `1px solid ${theme.color.gray400}`};
  border-radius: 0.5rem;
  padding: 0.85rem 0;
  margin-bottom: 8px;
  > span {
    color: ${({ theme }) => theme.color.gray700};
    font-weight: bold;
    font-size: 0.87rem;
    margin-left: 4px;
  }
  svg {
    width: 1rem;
    height: 1rem;
  }
  path {
    stroke: ${({ theme }) => theme.color.gray400};
  }
`;
