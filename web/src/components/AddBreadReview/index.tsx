import React from 'react';
import { BreadCategory } from '@/constants/breadCategories';
import { requestCreateBakeryMenuReview } from '@/remotes/network/bakery';
import { requestUploadImage } from '@/remotes/network/image';
import MainAdd from './MainAdd';
export interface Review {
  breadId: number;
  categoryName: BreadCategory | null;
  menuName: string;
  price: number;
  contents: string;
  rating: number;
  imgPathList: { url: string; file: File }[];
}

const AddBreadReview = ({ bakeryId }: { bakeryId: number }) => {
  return <MainAdd bakeryId={bakeryId} />;
};

export default AddBreadReview;
