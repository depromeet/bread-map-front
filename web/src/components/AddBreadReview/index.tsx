import React from 'react';
import { useBreadsReview, useUpdateBreadsReview } from './BreadsReviewProvider';
import MainAdd from './MainAdd';

const AddBreadReview = () => {
  const breadsReview = useBreadsReview();
  const updateBreadsReview = useUpdateBreadsReview();

  return (
    <>
      <MainAdd
        {...{
          breadsReview,
          updateBreadsReview,
        }}
      />
    </>
  );
};

export default AddBreadReview;
