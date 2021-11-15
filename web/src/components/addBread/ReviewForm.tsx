import * as React from 'react';
import styled from '@emotion/styled';
import { useAtom } from 'jotai';
import { Button } from '@/components/common';
import { BreadCategorySelect } from '@/components/addBread';
import { 
	ChevronDownIcon,
	PlusIcon,
	StarTrueIcon,
	StarFalseIcon,
 } from '@/components/icons';
 import { currentBreadReviewAtom } from '@/store/addBread';

const ReviewForm: React.FC = () => {
	const ref = React.useRef<HTMLInputElement | null>(null);

  const [review, setReview] = useAtom(currentBreadReviewAtom);

	return (
		<Content>
			<BreadCategorySelect />
			<Row>
				<Text isRequired>메뉴명</Text>
				<Input
					name="name"
					placeholder="메뉴명을 입력해주세요"
          value={review.name}
          onChange={(e) => {
            setReview({ name: e.target.value });
          }}
				/>
        <AlertText>메뉴명을 입력해주세요.</AlertText>
			</Row>
			<Row>
				<Text isRequired>가격</Text>
				<Input
					name="price"
					type="number"
					placeholder="원"
          onChange={(e) => {
            setReview({ price: Number(e.target.value) });
          }}
				/>
				<AlertText>가격을 입력해주세요.</AlertText>
			</Row>
			<Row>
				<Text>별점</Text>
				<StarArea>
					{[1, 2, 3, 4, 5].map((star, i) => (
						<StarBtn
              onClick={() => setReview({ star })}
              key={i}
            >
							<StarFalseIcon />
						</StarBtn>
					))}
				</StarArea>
			</Row>
			<Row>
				<Text>한줄평</Text>
				<Input
					name="text"
					placeholder="한줄평을 적어주세요"
          onChange={(e) => {
            setReview({ text: e.target.value })
          }}
				/>
			</Row>
			<Row>
				<PhotoUploadText>사진 업로드</PhotoUploadText>
				<Scroll>
					<PhotoWrapper>
						<AddPhotoBtn>
							<PlusIcon width={36} height={36} />
							<input ref={ref} type={'file'} multiple />
						</AddPhotoBtn>
						{[...Array(5)].map((photo, i) => (
							<EmptyPhoto key={i}></EmptyPhoto>
						))}
					</PhotoWrapper>
				</Scroll>
			</Row>
      <ButtonBox>
        <Button
          styleType={'none'}
        >
          <PlusIcon />
          <span>다른 빵 추가하기</span>
        </Button>
        <Button
          styleType={'primary'}
        >
          확인
        </Button>
      </ButtonBox>
		</Content>
	);
};

export default ReviewForm;

const Content = styled.div``;

const Row = styled.div`
  margin: 0 20px 24px;
`;

const Text = styled.span<{ isRequired?: boolean }>`
  position: relative;
  display: inline-block;
  margin-bottom: 12px;
	font-size: 14px;
	font-weight: 700;
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

	svg path {
		stroke: ${({ theme }) => theme.color.primary500};
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
`;

const ButtonBox = styled.div`
  margin: 0 20px;

  button + button {
    margin-top: 8px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    svg + span {
      margin-left: 4px;
    }
  }
`;
