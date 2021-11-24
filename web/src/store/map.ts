import { atom } from 'jotai';
import type { BottomSheetRef } from 'react-spring-bottom-sheet';
import type { BreadCategory } from '@/constants/breadCategories';

type BottomSheetType = 'single' | 'multiple';
export const bottomSheetTypeAtom = atom<BottomSheetType>('multiple');

export const currentBakeryIdAtom = atom<number | undefined>(undefined);

export const bottomSheetRefAtom = atom<BottomSheetRef | null>(null);

export const currentFilterAtom = atom<BreadCategory[]>([]);
