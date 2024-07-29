import { DashboardNames } from '../models/RevealWebinar01/dashboard-names';
import { FetchApi } from './fetch-api';

const API_ENDPOINT = 'https://localhost:7218';

export async function getDashboardNamesList(): Promise<DashboardNames[]> {
  return await FetchApi.fetchApiResponse<DashboardNames[]>(`${API_ENDPOINT}/dashboards/names`, []);
}
