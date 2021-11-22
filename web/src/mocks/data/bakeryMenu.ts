const Menu = Array(100)
  .fill(0)
  .map((_, idx) => {
    return {
      avgRating: Math.round(Math.random() * 5),
      breadCategoryId: 1,
      breadCategoryName: '식사빵',
      imgPath: `/images/mock_bread_img_${
        Math.round(Math.random() * 2) + 1
      }.png`,
      menuId: idx,
      menuName: `빵_${idx}`,
      price: Math.round(Math.random() * 10000),
    };
  });

const MOCK_BAKERY_MENU = {
  content: Menu,
  empty: false,
  first: false,
  last: false,
  number: 100,
  numberOfElements: 100,
  pageable: {
    offset: 0,
    pageNumber: 0,
    pageSize: 0,
    paged: true,
    sort: {
      empty: true,
      sorted: true,
      unsorted: true,
    },
    unpaged: true,
  },
  size: 0,
  sort: {
    empty: true,
    sorted: true,
    unsorted: true,
  },
};

export default MOCK_BAKERY_MENU;
