import React from 'react';
import BreadsReviewProvider from './BreadsReviewProvider';
import MainAdd from './MainAdd';

const AddBread = () => {
  return (
    <BreadsReviewProvider>
      <MainAdd />
    </BreadsReviewProvider>
  );
};

export default AddBread;
