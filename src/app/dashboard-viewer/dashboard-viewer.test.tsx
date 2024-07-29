import { expect, test } from 'vitest';
import { GlobalContext } from '../hooks/context-hooks';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import DashboardViewer from './dashboard-viewer';
import 'element-internals-polyfill';

const mockGlobalState: any = {};
const mockSetGlobalState = () => {};

test('renders DashboardViewer component', () => {
  const wrapper = render(
    <GlobalContext.Provider value={{ globalState: mockGlobalState, setGlobalState: mockSetGlobalState }}>
      <DashboardViewer />
    </GlobalContext.Provider>,
    { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});