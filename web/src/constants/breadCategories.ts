import {
  BreadBeganKitoIcon,
  BreadCakeIcon,
  BreadCaneleIcon,
  BreadCookieIcon,
  BreadCreamIcon,
  BreadCroissantIcon,
  BreadDonutIcon,
  BreadHotdogIcon,
  BreadMacaronIcon,
  BreadMealIcon,
  BreadMemoryIcon,
  BreadPieTartIcon,
  BreadPretzelIcon,
} from '@/components/icons';

export type BreadCategory =
  | '기본'
  | '식사빵'
  | '구움과자류'
  | '마카롱'
  | '케이크'
  | '크림빵'
  | '도넛'
  | '추억의 빵'
  | '과자류'
  | '크로와상'
  | '쿠키'
  | '파이/타르트'
  | '비건/키토'
  | '기타';

export type BreadCategoryText =
  | '식사빵'
  | '비건·키토'
  | '크로와상'
  | '구움과자류'
  | '케이크'
  | '파이/타르트'
  | '마카롱'
  | '도넛'
  | '쿠키'
  | '크림빵'
  | '과자류'
  | '추억의 빵'
  | '기타';

export interface BreadCategoryItem {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  category: BreadCategory;
  text: BreadCategoryText;
}

export const categoryItems: BreadCategoryItem[] = [
  {
    Icon: BreadMealIcon,
    category: '식사빵',
    text: '식사빵',
  },
  {
    Icon: BreadBeganKitoIcon,
    category: '비건/키토',
    text: '비건·키토',
  },
  {
    Icon: BreadCroissantIcon,
    category: '크로와상',
    text: '크로와상'
  },
  {
    Icon: BreadCaneleIcon,
    category: '구움과자류',
    text: '구움과자류',
  },
  {
    Icon: BreadCakeIcon,
    category: '케이크',
    text: '케이크'
  },
  {
    Icon: BreadPieTartIcon,
    category: '파이/타르트',
    text: '파이/타르트',
  },
  {
    Icon: BreadMacaronIcon,
    category: '마카롱',
    text: '마카롱',
  },
  {
    Icon: BreadDonutIcon,
    category: '도넛',
    text: '도넛',
  },
  {
    Icon: BreadCookieIcon,
    category: '쿠키',
    text: '쿠키',
  },
  {
    Icon: BreadCreamIcon,
    category: '크림빵',
    text: '크림빵',
  },
  {
    Icon: BreadPretzelIcon,
    category: '과자류',
    text: '과자류',
  },
  {
    Icon: BreadMemoryIcon,
    category: '추억의 빵',
    text: '추억의 빵',
  },
  {
    Icon: BreadHotdogIcon,
    category: '기타',
    text: '기타',
  },
];
