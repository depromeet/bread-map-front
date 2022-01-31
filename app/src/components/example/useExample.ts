import { useState } from 'react';
import { useGetBakeries } from '../../network';

type UseExampleProps = {
  start: number;
};

export const useExample = ({ start }: UseExampleProps) => {
  const data = { latitude: 37.6799006, longitude: 127.0549781, range: 100000 };
  const { bakeries, loading } = useGetBakeries(data);
  const [count, setCount] = useState(start);

  const increase = () => setCount(prev => prev + 1);
  const decrease = () => setCount(prev => prev - 1);

  return {
    count,
    increase,
    decrease,
    loading,
    bakeries,
  };
};
