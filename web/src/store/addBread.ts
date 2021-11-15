import { atom } from 'jotai';
import type { BreadCategory } from '@/constants/breadCategories';

export interface BreadReview {
	category: BreadCategory;
	name: string;
	price: number;
	text: string;
	star: number;
}

const testReview: BreadReview[] = [
	{
		category: '과자류',
		name: '1',
		price: 100,
		text: '1',
		star: 4,
	},
	{
		category: '과자류',
		name: '2',
		price: 100,
		text: '2',
		star: 4,
	},
	{
		category: '과자류',
		name: '2',
		price: 100,
		text: '2',
		star: 4,
	},
	{
		category: '과자류',
		name: '2',
		price: 100,
		text: '2',
		star: 4,
	},
	{
		category: '과자류',
		name: '2',
		price: 100,
		text: '2',
		star: 4,
	},
	{
		category: '과자류',
		name: '2',
		price: 100,
		text: '2',
		star: 4,
	},
	{
		category: '과자류',
		name: '2',
		price: 100,
		text: '2',
		star: 4,
	},
	{
		category: '과자류',
		name: '2',
		price: 100,
		text: '2',
		star: 4,
	},
	{
		category: '과자류',
		name: '2',
		price: 100,
		text: '2',
		star: 4,
	},
	{
		category: '과자류',
		name: '2',
		price: 100,
		text: '2',
		star: 4,
	},
	{
		category: '과자류',
		name: '2',
		price: 100,
		text: '2',
		star: 4,
	},
	{
		category: '과자류',
		name: '2',
		price: 100,
		text: '2',
		star: 4,
	},
];

const initialBreadReview: BreadReview = {
	category: '기본',
	name: '',
	price: 0,
	text: '',
	star: 0,
};

export const breadReviewsAtom = atom<BreadReview[]>([initialBreadReview]);

export const currentBreadReviewIndexAtom = atom<number>(0);

export const currentBreadReviewAtom = atom<BreadReview, Partial<BreadReview>>(
	(get) => {
		const reviews = get(breadReviewsAtom);
		const currentIdx = get(currentBreadReviewIndexAtom);

		return reviews[currentIdx];
	},
	(get, set, arg) => {
		const reviews = get(breadReviewsAtom);
		const currentIdx = get(currentBreadReviewIndexAtom);

		const newItem = { ...reviews[currentIdx],	...arg };

		set(breadReviewsAtom, [...reviews.slice(0, currentIdx), newItem, ...reviews.slice(currentIdx + 1)]);
	},
);
