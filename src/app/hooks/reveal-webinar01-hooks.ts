import { useCallback, useEffect, useState } from 'react';
import { DashboardNames } from '../models/RevealWebinar01/dashboard-names';
import { getDashboardNamesList } from '../services/reveal-webinar01';

export const useGetDashboardNamesList = () => {
  const [dashboardNames, setDashboardNames] = useState<DashboardNames[]>([]);

  const requestDashboardNames = useCallback(() => {
    let ignore = false;
    getDashboardNamesList()
      .then((data) => {
        if (!ignore) {
          setDashboardNames(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestDashboardNames();
  }, [requestDashboardNames]);

  return { requestRevealWebinar01DashboardNames: requestDashboardNames, revealWebinar01DashboardNames: dashboardNames, setRevealWebinar01DashboardNames: setDashboardNames };
}
