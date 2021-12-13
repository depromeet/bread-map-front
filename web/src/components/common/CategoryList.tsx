import * as React from 'react';
import styled from '@emotion/styled';
import { categoryItems } from '@/constants/breadCategories';
import type { BreadCategory } from '@/constants/breadCategories';

interface CategoryListProps {
  selectedItems: BreadCategory[];
  onChange: (item: BreadCategory) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({
  selectedItems,
  onChange,
}) => {
  const ref = React.useRef<HTMLUListElement | null>(null);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const el = ref.current;
    if (el === null) return;

    let startY: number | undefined = undefined;
    let rAF: ReturnType<typeof window.requestAnimationFrame>;

    const handleScrub = (delta: number) => {
      window.cancelAnimationFrame(rAF);

      rAF = window.requestAnimationFrame(() => {
        if (startY === undefined) return;
        const nextPosition = startY - delta;
        startY = delta;
        el.scrollTop += nextPosition;
      });
    }

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    }

    const handleTouchEnd = () => {
      startY = undefined;
    }

    const handleTouchMove = (e: TouchEvent) => {
      handleScrub(e.changedTouches[0].clientY);
    }

    const bindEvent = () => {
      el.addEventListener('touchstart', handleTouchStart);
      el.addEventListener('touchend', handleTouchEnd);
      el.addEventListener('touchmove', handleTouchMove);
    };

    const unbindEvent = () => {
      el.removeEventListener('touchstart', handleTouchStart);
      el.removeEventListener('touchend', handleTouchEnd);
      el.removeEventListener('touchmove', handleTouchMove);
    };

    bindEvent();

    return () => {
      unbindEvent();
    };
  }, []);

  return (
    <Base ref={ref}>
      {categoryItems.map(({ Icon, category, text }) => (
        <Item
          isSelected={selectedItems.find((el) => el === category) !== undefined}
          onClick={() => onChange(category)}
          key={category}
        >
          <div>
            <Icon width={48} height={48} />
            <span>{text}</span>
          </div>
        </Item>
      ))}
    </Base>
  );
};

export default CategoryList;

const Base = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  flex: 1 1 auto;
  height: 0px;
  list-style: none;
  margin: 24px auto;
  padding: 0 20px;
  max-width: 550px;
  width: 100%;
  overflow-y: scroll;
`;

const Item = styled.li<{ isSelected: boolean }>`
  position: relative;
  cursor: pointer;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.color.primary100 : theme.color.white};
  border: 1px solid
    ${({ isSelected, theme }) =>
      isSelected ? theme.color.primary500 : theme.color.gray200};
  border-radius: 10px;
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.color.primary500 : theme.color.gray400};

  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
  > div {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  span {
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    margin-top: 8px;
  }
`;
