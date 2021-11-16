import { rest } from 'msw';
import { MOCK_BAKERY, MOCK_BAKERY_MENU, MOCK_MAP_BAKERY } from './data';

const setUri = (pathname: string) => {
  if (process.env.NEXT_PUBLIC_BASE_URI === '/') {
    return pathname;
  }

  return `${process.env.NEXT_PUBLIC_BASE_URI}${pathname}`;
};

export const handlers = [
  rest.get(setUri('/bakery'), (req, res, ctx) => {
    const latitude = req.url.searchParams.get('latitude');
    const longitude = req.url.searchParams.get('longitude');
    const range = req.url.searchParams.get('range');

    return res(ctx.json(MOCK_MAP_BAKERY));
  }),

  rest.get(setUri('/bakery/1'), (req, res, ctx) => {
    return res(ctx.json(MOCK_BAKERY.MOCK_BREAD_STORE));
  }),
  rest.get(setUri('/bakery/2'), (req, res, ctx) => {
    return res(ctx.json(MOCK_BAKERY.MOCK_NO_DATA_STORE));
  }),
  rest.get(setUri('/bakery/1/menu'), (req, res, ctx) => {
    return res(ctx.json(MOCK_BAKERY_MENU));
  }),
];
