import {
  CategoryWhiteBread,
  CategoryVeganQuito,
  CategoryCroissant,
  CategoryBaked,
  CategoryCake,
  CategoryPieTart,
  CategoryMacaron,
  CategoryDonut,
  CategoryCookie,
  CategoryCreamBread,
  CategorySnack,
  CategoryBringsBackBread,
  CategoryEtc,
} from '@/components/icons';

export type CategoryText =
  | null
  | '식빵'
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

export interface CategoryInfo {
  id: number;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  text: CategoryText;
}

interface BreadCategory {
  [key: string]: CategoryInfo;
}

const breadCategory: BreadCategory = {
  WhiteBread: {
    id: 1,
    icon: CategoryWhiteBread,
    text: '식빵',
  },
  VeganQuito: {
    id: 2,
    icon: CategoryVeganQuito,
    text: '비건·키토',
  },
  Croissant: {
    id: 3,
    icon: CategoryCroissant,
    text: '크로와상',
  },
  Baked: {
    id: 4,
    icon: CategoryBaked,
    text: '구움과자류',
  },
  Cake: {
    id: 5,
    icon: CategoryCake,
    text: '케이크',
  },
  PieTart: {
    id: 6,
    icon: CategoryPieTart,
    text: '파이/타르트',
  },
  Macaron: {
    id: 7,
    icon: CategoryMacaron,
    text: '마카롱',
  },
  Donut: {
    id: 8,
    icon: CategoryDonut,
    text: '도넛',
  },
  Cookie: {
    id: 9,
    icon: CategoryCookie,
    text: '쿠키',
  },
  CreamBread: {
    id: 10,
    icon: CategoryCreamBread,
    text: '크림빵',
  },
  Snack: {
    id: 11,
    icon: CategorySnack,
    text: '과자류',
  },
  BringsBackBread: {
    id: 12,
    icon: CategoryBringsBackBread,
    text: '추억의 빵',
  },
  Etc: {
    id: 13,
    icon: CategoryEtc,
    text: '기타',
  },
};

export default breadCategory;
