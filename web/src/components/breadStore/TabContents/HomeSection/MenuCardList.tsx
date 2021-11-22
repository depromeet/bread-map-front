/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from '@emotion/styled';
import { BakeryEntity } from '@/remotes/network/bakery/requestGetBakery';

const addComma = (num: number) => {
  return num.toLocaleString('ko-kr');
};

const MenuCardList = ({
  menus,
}: {
  menus: BakeryEntity['bakeryMenuListResponseList'];
}) => {
  return (
    <>
      {menus?.length ? (
        <Container>
          {menus.map((menu, idx) => (
            <li key={idx}>
              <img
                src={menu.imgPath || '/images/default_bread.png'}
                alt={'menu'}
              />
              <MenuInfo>
                <div>
                  <MenuName>{menu.menuName}</MenuName>
                  <div>star: {menu.avgRating}</div>
                </div>
                <b>{addComma(menu.price)}원</b>
              </MenuInfo>
            </li>
          ))}
        </Container>
      ) : (
        <Container className={'nodata'}>
          <img src={'/images/sadSobbang.png'} alt={'nodata'} />
          <NoDataText>
            <div>빵순이를 위해 맛있는</div>
            <div>빵 정보를 공유해주세요.</div>
          </NoDataText>
        </Container>
      )}
    </>
  );
};

export default MenuCardList;

const Container = styled.ul`
  list-style: none;
  margin: 24px 0;
  background: ${({ theme }) => theme.color.white};
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  &.nodata {
    margin: auto 0;
  }

  li {
    width: 100%;
    display: flex;
    gap: 10px;
    img {
      min-width: 100px;
      max-width: 140px;
      width: 30%;
      border-radius: 12px;
    }
  }
`;

const MenuInfo = styled.div`
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  b {
    color: ${({ theme }) => theme.color.primary500};
  }
`;

const MenuName = styled.div`
  font-weight: 700;
`;

const NoDataText = styled.div`
  text-align: center;
  margin: 8px 0;
  line-height: 1.5;
  font-weight: 500;
  color: ${({ theme }) => theme.color.gray500};
`;
