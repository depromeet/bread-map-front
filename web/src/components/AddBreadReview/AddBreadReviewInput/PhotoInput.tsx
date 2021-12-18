import React from 'react';
import styled from '@emotion/styled';
import { Plus } from '@/components/icons';
import { Review } from '..';

interface PhotoInputProps {
  setCurrentReview: React.Dispatch<React.SetStateAction<Review>>;
  photos: Review['imgPathList'];
}

const readFileAsync = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result as unknown as string);
    reader.onerror = reject;

    reader.readAsDataURL(file);
  });

const PhotoInput = ({ photos, setCurrentReview }: PhotoInputProps) => {
  const photoChangeHandler = React.useCallback(
    async ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      const files = await Promise.all(
        [...(target.files || [])].map(async (file) => {
          const url = await readFileAsync(file);
          return { url, file };
        })
      );
      setCurrentReview((prev) => ({
        ...prev,
        imgPathList: files,
      }));
    },
    [setCurrentReview]
  );

  const photoRemoveHandler = React.useCallback(
    ({ target }) => {
      const { photoIdx } = (target as HTMLDivElement).dataset;
      photoIdx !== undefined &&
        setCurrentReview((prev) => ({
          ...prev,
          imgPathList: [
            ...prev.imgPathList.slice(0, +photoIdx),
            ...prev.imgPathList.slice(+photoIdx + 1),
          ],
        }));
    },
    [setCurrentReview]
  );

  return (
    <>
      <PhotoUploadText>사진 업로드</PhotoUploadText>
      <Scroll>
        <PhotoWrapper>
          <AddPhotoLabel htmlFor={'photo-input'}>
            <Plus />
            <input
              id={'photo-input'}
              multiple
              type="file"
              accept="image/*"
              onChange={photoChangeHandler}
            />
          </AddPhotoLabel>
          {photos.map((photo, i) => (
            <EmptyPhoto key={i} data-photo-idx={i} onClick={photoRemoveHandler}>
              <Photo src={photo.url} alt="image" />
            </EmptyPhoto>
          ))}
        </PhotoWrapper>
      </Scroll>
    </>
  );
};

export default PhotoInput;

const PhotoUploadText = styled.span`
  display: inline-block;
  margin-bottom: 0.75rem;
  font-weight: bold;
  font-size: 1rem;
  color: ${({ theme }) => theme.color.black};
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
  overflow-x: scroll;

  > * {
    flex-shrink: 0;
  }
`;

const AddPhotoLabel = styled.label`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.color.primary500};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.75rem;
  > svg {
    path {
      stroke: ${({ theme }) => theme.color.primary500};
    }
  }
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

const Photo = styled.img`
  width: 100%;
  height: 100%;
  pointer-events: none;
`;
