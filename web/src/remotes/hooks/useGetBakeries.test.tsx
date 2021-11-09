import * as React from 'react';
import * as SWR from 'swr';
import { render } from '@testing-library/react';
import useGetBakeries from './useGetBakeries';

interface TestComponentProps {
  latitude: number;
  longitude: number;
  range: number;
}

it('lib/hooks/useGetBakeries', async () => {
  const TestComponent: React.FC<TestComponentProps> = (props) => {
    const { data } = useGetBakeries(props);

    return (
      <ul>
        {data?.map((entity) => (
          <li key={entity.bakeryId}>
            <span>{entity.bakeryId}</span>
            <span>{entity.bakeryName}</span>
            <span>{entity.flagsCount}</span>
            <span>{entity.latitude}</span>
            <span>{entity.address}</span>
          </li>
        ))}
      </ul>
    );
  };

  const spy = jest.spyOn(SWR, 'default');
  render(<TestComponent latitude={0} longitude={1} range={2} />);

  expect(spy).toHaveBeenCalledWith(['/bakery', 0, 1, 2], expect.any(Function));
});
