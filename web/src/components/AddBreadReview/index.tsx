import React from 'react';
import { atom, useAtom } from 'jotai';
import { useAtomDevtools } from 'jotai/devtools';
import { CategoryInfo } from '@/constants/breadCategory';
import MainAdd from './MainAdd';

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

export type BreadsUpdate = (update: React.SetStateAction<BreadsReview>) => void;

const initialState = {};

const breadsReviewAtom = atom<BreadsReview>(initialState);

const AddBreadReview = () => {
  const [breadsReview, updateBreadsReview] = useAtom(breadsReviewAtom);
  useAtomDevtools(breadsReviewAtom);

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
