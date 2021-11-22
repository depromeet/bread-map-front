import { BreadCategoryItem } from '@/constants/breadCategories';
import { atom } from 'jotai';

const breadMapSelectedCategotyItem = atom<BreadCategoryItem[]>([]);

export default breadMapSelectedCategotyItem;
