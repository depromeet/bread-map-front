import React from 'react';
import { atom, useAtom } from 'jotai';
import { useAtomDevtools } from 'jotai/devtools';
import { BreadCategory } from '@/constants/breadCategories';
import MainAdd from './MainAdd';

export interface Review {
  categoryName: BreadCategory | null;
  menuName: string;
  price: number;
  contents: string;
  rating: number;
  imgPathList: string[];
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
        bakeryId={5}
        // TODO: bakeryId={bakeryId}
        breadsReview={breadsReview}
        updateBreadsReview={updateBreadsReview}
      />
    </>
  );
};

export default AddBreadReview;
