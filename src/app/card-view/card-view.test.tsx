import { expect, test, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import CardView from './card-view';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);


test('renders CardView component', () => {
  const wrapper = render(<CardView />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});