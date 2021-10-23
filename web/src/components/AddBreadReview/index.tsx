import React from 'react';
import BreadsReviewProvider from './BreadsReviewProvider';
import MainAdd from './MainAdd';

const AddBreadReview = () => {
  return (
    <BreadsReviewProvider>
      <MainAdd />
    </BreadsReviewProvider>
  );
};

export default AddBreadReview;
