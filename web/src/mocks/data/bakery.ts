const MOCK_BREAD_STORE = {
  address: '서울시 중구 죽기 좋은 날씨',
  avgRating: 4.4,
  bakeryId: 1,
  bakeryMenuListResponseList: [
    {
      avgRating: 3.2,
      breadCategoryId: 3,
      breadCategoryName: '크로와상',
      imgPath: '/images/mock_bread_img_1.png',
      menuId: 1,
      menuName: '오리지널 크로와상',
      price: 4200,
    },
    {
      avgRating: 4,
      breadCategoryId: 6,
      breadCategoryName: '사과파이',
      imgPath: '/images/mock_bread_img_2.png',
      menuId: 2,
      menuName: '사과파이',
      price: 4900,
    },
    {
      avgRating: 1,
      breadCategoryId: 1,
      breadCategoryName: '식사빵',
      imgPath: '/images/mock_bread_img_3.png',
      menuId: 3,
      menuName: '잠봉뵈르',
      price: 9000,
    },
  ],
  bakeryName: '루엘드파리',
  basicInfoList: ['PET', 'WIFI', 'DELIVERY'],
  flagType: 'NONE',
  flagsCount: 100,
  imgPath: '/images/mock_bread_img_1.png',
  menuReviewsCount: 1,
  menuReviewsResponseList: [
    {
      breadCategoryId: 3,
      contents: '겁나 맛있습니다.',
      imgPathList: [
        '/images/mock_bread_img_1.png',
        '/images/mock_bread_img_1.png',
        '/images/mock_bread_img_1.png',
      ],
      lastModifiedDateTime: '2021-11-11',
      memberId: 1,
      memberName: '소빵',
      menuId: 1,
      menuName: '오리지널 크로아상',
      menuReviewId: 1,
      rating: 4,
    },
  ],
  personalRating: 3.2,
  ratingCount: 5920,
  telNumber: '010-0000-1234',
  websiteUrlList: [
    'https://www.instagram.com/',
    'https://www.youtube.com/',
    'https://www.facebook.com/',
    'https://www.google.com/',
  ],
};

const MOCK_NO_DATA_STORE = {
  address: '서울시 중구 죽기 좋은 날씨',
  avgRating: 0,
  bakeryId: 2,
  bakeryMenuListResponseList: null,
  bakeryName: '데이터 없는집',
  basicInfoList: [],
  flagType: 'NONE',
  flagsCount: 0,
  imgPath: null,
  menuReviewsCount: 0,
  menuReviewsResponseList: null,
  personalRating: null,
  ratingCount: 0,
  telNumber: '010-0000-1234',
  websiteUrlList: [
    'https://www.instagram.com/',
    'https://www.youtube.com/',
    'https://www.facebook.com/',
    'https://www.google.com/',
  ],
};

const datas = { MOCK_BREAD_STORE, MOCK_NO_DATA_STORE };

export default datas;
