import React from 'react';
import { CategoryInfo } from '@/constants/breadCategory';

export interface Review {
  category: CategoryInfo | null;
  name: string;
  price: number;
  text: string;
  star: number;
}

export interface BreadsReview {
  [key: number]: Review;
}

export type BreadsUpdate = React.Dispatch<React.SetStateAction<BreadsReview>>;

const BreadsReviewContext = React.createContext<BreadsReview | null>(null);
const BreadsReviewUpdateContext = React.createContext<BreadsUpdate | null>(
  null
);

interface BreadsProviderProps {
  children: React.ReactNode;
}

const initialBreadsReview = {};

const BreadsReviewProvider = ({ children }: BreadsProviderProps) => {
  const [breadsReview, setBreadsReview] =
    React.useState<BreadsReview>(initialBreadsReview);

  return (
    <BreadsReviewContext.Provider value={breadsReview}>
      <BreadsReviewUpdateContext.Provider value={setBreadsReview}>
        {children}
      </BreadsReviewUpdateContext.Provider>
    </BreadsReviewContext.Provider>
  );
};

export default BreadsReviewProvider;

export const useBreadsReview = () => {
  const breadsReview = React.useContext(BreadsReviewContext);
  if (breadsReview === null) throw new Error('Cannot find BreadsReview.');

  return breadsReview;
};

export const useUpdateBreadsReview = () => {
  const updatebreadsReview = React.useContext(BreadsReviewUpdateContext);
  if (updatebreadsReview === null) throw new Error('Cannot find BreadsReview.');

  return updatebreadsReview;
};
