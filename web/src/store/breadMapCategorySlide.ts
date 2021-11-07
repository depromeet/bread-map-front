import { atom } from 'jotai';

type BreadMapCategorySlide = boolean;

const breadMapCategorySlideAtom = atom<BreadMapCategorySlide>(false);

export default breadMapCategorySlideAtom;
