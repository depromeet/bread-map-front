import { useState } from 'react';
import { useQuery } from 'react-query';
import requestGetBakeries from '../../network/Getbakery';

type UseExampleProps = {
  start: number;
};

export const useExample = ({ start }: UseExampleProps) => {
  const { data, isLoading } = useQuery('getBakeries', requestGetBakeries);
  const [count, setCount] = useState(start);

  const increase = () => setCount(prev => prev + 1);
  const decrease = () => setCount(prev => prev - 1);

  return {
    count,
    increase,
    decrease,
    loading: isLoading,
    data,
  };
};
