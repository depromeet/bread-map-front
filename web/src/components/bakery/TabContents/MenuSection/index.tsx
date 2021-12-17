import React from 'react';
import styled from '@emotion/styled';
import MenuCardList from './MenuCardList';
import useGetBakeryMenu from '@/remotes/hooks/useGetBakeryMenu';
import { Button } from '@/components/common';
import { useRouter } from 'next/router';

type MenuSectionProps = {
  bakeryId: number;
};

const MenuSection = ({ bakeryId }: MenuSectionProps) => {
  const router = useRouter();
  const { data, error } = useGetBakeryMenu(bakeryId, 1, 20);

  const createMenuButtonClickHandler = React.useCallback(
    () => router.push(`/add-bread/${bakeryId}`),
    [bakeryId, router]
  );

  if (error) return <div>Error</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Container>
      <Section className={'grow'}>
        <SectionHeader>
          <Title>
            메뉴 <b>{data.numberOfElements}</b>
          </Title>
          <AddButtonStyle
            onClick={createMenuButtonClickHandler}
            styleType={'primary'}
            rounded
            size="small"
          >
            메뉴 입력
          </AddButtonStyle>
        </SectionHeader>
        <MenuCardList menus={data.content} />
      </Section>
    </Container>
  );
};

export default MenuSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.color.white};
  padding: 18px 12px;

  &.grow {
    flex-grow: 1;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  b {
    color: ${({ theme }) => theme.color.primary500};
  }
`;

const AddButtonStyle = styled(Button)`
  width: auto;
`;
