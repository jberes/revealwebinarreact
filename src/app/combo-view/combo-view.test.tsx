import { expect, test, vi } from 'vitest';
import { GlobalContext } from '../hooks/context-hooks';
import { render } from '@testing-library/react';
import ComboView from './combo-view';
import 'element-internals-polyfill';

const mockGlobalState: any = {};
const mockSetGlobalState = () => {};

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);


test('renders ComboView component', () => {
  const wrapper = render(
    <GlobalContext.Provider value={{ globalState: mockGlobalState, setGlobalState: mockSetGlobalState }}>
      <ComboView />
    </GlobalContext.Provider>);
  expect(wrapper).toBeTruthy();
});