import React from 'react';

export const useContainerWidth = (initialState = 0) => {
  const [containerWidth, setContainerWidth] = React.useState(initialState);

  return { containerWidth, setContainerWidth };
};
