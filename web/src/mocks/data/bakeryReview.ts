const Review = Array(100)
  .fill(0)
  .map((_, idx) => {
    return {
      breadCategoryId: 1,
      contents: '겁나 맛있습니다.',
      imgPathList: [
        `/images/mock_bread_img_${Math.round(Math.random() * 2) + 1}.png`,
        `/images/mock_bread_img_${Math.round(Math.random() * 2) + 1}.png`,
        `/images/mock_bread_img_${Math.round(Math.random() * 2) + 1}.png`,
        `/images/mock_bread_img_${Math.round(Math.random() * 2) + 1}.png`,
        `/images/mock_bread_img_${Math.round(Math.random() * 2) + 1}.png`,
      ],
      lastModifiedDateTime: '2021-11-17T05:33:27.417Z',
      memberId: Math.round(Math.random()) ? 1 : 2,
      memberName: Math.round(Math.random()) ? '소빵' : '대빵',
      menuId: idx,
      menuName: `빵_${idx}`,
      menuReviewId: idx + 100,
      rating: Math.round(Math.random() * 5),
    };
  });

const MOCK_BAKERY_REVIEW = {
  content: Review,
  empty: true,
  first: true,
  last: true,
  number: 10,
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

export default MOCK_BAKERY_REVIEW;
