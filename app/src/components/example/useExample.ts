import { useState } from 'react';

type UseExampleProps = {
  start: number;
};

export const useExample = ({ start }: UseExampleProps) => {
  const [count, setCount] = useState(start);

  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => setCount((prev) => prev + 1);

  return {
    count,
    increase,
    decrease,
  };
};
