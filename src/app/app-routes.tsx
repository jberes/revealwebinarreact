import { redirect } from 'react-router-dom';
import ComboView from './combo-view/combo-view';
import ListView from './list-view/list-view';
import CardView from './card-view/card-view';
import DashboardViewer from './dashboard-viewer/dashboard-viewer';
export const routes = [
  { index: true, loader: () => redirect('combo-view') },
  { path: 'combo-view', element: <ComboView />, text: 'ComboView' },
  { path: 'list-view', element: <ListView />, text: 'ListView' },
  { path: 'card-view', element: <CardView />, text: 'CardView' },
  { path: 'dashboard-viewer/:dashboardName2', element: <DashboardViewer />, text: 'DashboardViewer' }
];
