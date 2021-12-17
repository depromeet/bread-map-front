import { BreadCategory } from '@/constants/breadCategories';
export { default as AddBreadReview } from './MainAdd';
export interface Review {
  breadId: number;
  categoryName: BreadCategory | null;
  menuName: string;
  price: number;
  contents: string;
  rating: number;
  imgPathList: { url: string; file: File }[];
}
