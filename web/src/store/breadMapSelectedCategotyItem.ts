import { CategoryInfo } from '@/constants/breadCategory';
import { atom } from 'jotai';

const breadMapSelectedCategotyItem = atom<CategoryInfo[]>([]);

export default breadMapSelectedCategotyItem;
