import { rest } from 'msw';

const setUri = (pathname: string) => {
  if (process.env.NEXT_PUBLIC_BASE_URI === '/') {
    return pathname;
  }

  return `${process.env.NEXT_PUBLIC_BASE_URI}${pathname}`;
};

const MOCK_DATA = [
  {
    address: '1',
    avgRating: 0,
    bakeryId: 1,
    bakeryName: 'test1',
    breadCategoryList: ['식사빵'],
    flagsCount: 0,
    imgPath: '',
    latitude: 37.5666103,
    longitude: 126.9783882,
    menuReviewList: [],
    menuReviewsCount: 0,
    ratingCount: 0,
  },
  {
    address: '2',
    avgRating: 0,
    bakeryId: 2,
    bakeryName: 'test2',
    breadCategoryList: ['비건/키토'],
    flagsCount: 0,
    imgPath: '',
    latitude: 37.569,
    longitude: 126.979,
    menuReviewList: [],
    menuReviewsCount: 0,
    ratingCount: 0,
  },
  {
    address: '3',
    avgRating: 0,
    bakeryId: 3,
    bakeryName: 'test3',
    breadCategoryList: ['식사빵'],
    flagsCount: 0,
    imgPath: '',
    latitude: 37.565,
    longitude: 126.977,
    menuReviewList: [],
    menuReviewsCount: 0,
    ratingCount: 0,
  },
  {
    address: '4',
    avgRating: 0,
    bakeryId: 4,
    bakeryName: 'test4',
    breadCategoryList: ['크로와상'],
    flagsCount: 0,
    imgPath: '',
    latitude: 37.564,
    longitude: 126.977,
    menuReviewList: [],
    menuReviewsCount: 0,
    ratingCount: 0,
  },
  {
    address: '5',
    avgRating: 0,
    bakeryId: 5,
    bakeryName: 'test5',
    breadCategoryList: ['케이크'],
    flagsCount: 0,
    imgPath: '',
    latitude: 37.56766,
    longitude: 126.97833,
    menuReviewList: [],
    menuReviewsCount: 0,
    ratingCount: 0,
  },
  {
    address: '6',
    avgRating: 0,
    bakeryId: 6,
    bakeryName: 'test6',
    breadCategoryList: ['쿠키'],
    flagsCount: 0,
    imgPath: '',
    latitude: 37.563333,
    longitude: 126.976666,
    menuReviewList: [],
    menuReviewsCount: 0,
    ratingCount: 0,
  },
];

export const handlers = [
  rest.get(setUri('/bakery'), (req, res, ctx) => {
    const latitude = req.url.searchParams.get('latitude');
    const longitude = req.url.searchParams.get('longitude');
    const range = req.url.searchParams.get('range');

    return res(ctx.json(MOCK_DATA));
  }),
];
