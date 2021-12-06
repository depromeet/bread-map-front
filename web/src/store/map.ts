import { atom } from 'jotai';
import type { BottomSheetRef } from 'react-spring-bottom-sheet';
import type { BreadCategory } from '@/constants/breadCategories';
import { BakeryEntity } from '@/remotes/network/bakery/requestGetBakeries';

type BottomSheetType = 'single' | 'multiple';
export const bottomSheetTypeAtom = atom<BottomSheetType>('multiple');

export const currentBakeryIdAtom = atom<number | undefined>(undefined);

export const currentRangeBakeriesAtom = atom<BakeryEntity[] | undefined>([]);

export const currentLatLng = atom<{ latitude?: number; longitude?: number }>(
  {}
);

export const bottomSheetRefAtom = atom<BottomSheetRef | null>(null);

export const mapRefAtom = atom<HTMLDivElement | null>(null);

export const bottomSheetLastSnapPoint = atom<number | null>(0);

export const currentFilterAtom = atom<BreadCategory[]>([]);
