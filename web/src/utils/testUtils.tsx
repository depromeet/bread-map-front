import React from 'react';
import { BreadmapThemeProvider as Theme } from '@/styles/BreadMapTheming';
import {
  queryByAttribute,
  render,
  RenderOptions,
} from '@testing-library/react';

const AllTheProviders: React.FC = ({ children }) => {
  return <Theme>{children}</Theme>;
};

const getById = queryByAttribute.bind(null, 'id');

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render, getById };
