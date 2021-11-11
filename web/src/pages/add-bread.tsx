import styled from '@emotion/styled';
import { ChevronLeftIcon, XIcon } from '@/components/icons';
import { AddBreadHeader, ReviewForm } from '@/components/addBread';
import type { NextPage } from 'next';

const AddBread: NextPage = () => {
  return (
    <AddBreadLayout>
      <TopHeader>
				<ChevronLeftIcon />
				<XIcon />
      </TopHeader>
      <AddBreadHeader />
      <ReviewForm />
    </AddBreadLayout>
  );
};

export default AddBread;

const AddBreadLayout = styled.section`
  position: relative;
  padding: 16px 20px;
`;

const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

