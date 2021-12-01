import { Footer } from '@/components/common';
import { DaedongMapContainer } from '@/components/map';
import useGetUser from '@/remotes/hooks/useUser';
import type { NextPage } from 'next';

const Map: NextPage = () => {
  const { data } = useGetUser();

  if (!data) return null;

  return (
    <>
      <DaedongMapContainer />
      <Footer />
    </>
  );
};

export default Map;
