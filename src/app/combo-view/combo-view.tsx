import { useGlobalContext } from '../hooks/context-hooks';
import { IgrCombo, IgrComboModule } from 'igniteui-react';
import { RvRevealView } from '@revealbi/ui-react';
import { useState } from 'react';
import { RevealSdkSettings, RevealViewOptions } from '@revealbi/ui';
import { useGetDashboardNamesList } from '../hooks/reveal-webinar01-hooks';
import styles from './combo-view.module.css';
import createClassTransformer from '../style-utils';

IgrComboModule.register();

export default function ComboView() {
  const classes = createClassTransformer(styles);
  const { globalState } = useGlobalContext();
  const [dashboardName, setDashboardName] = useState<string | undefined>('Sales');
  const { revealWebinar01DashboardNames } = useGetDashboardNamesList();

  RevealSdkSettings.serverUrl = globalState.revealServer;

  const dashboardOptions: RevealViewOptions = {
    visualizations: {
      menu: {
        copy: false,
        duplicate: false
      }
    }
  };

  function singleSelectComboChange(_: IgrCombo, event: any) {
    setDashboardName(event.detail.newValue[0] as string);
  }

  return (
    <>
      <div className={classes("column-layout combo-view-container")}>
        <div className={classes("column-layout group")}>
          <IgrCombo outlined="true" data={revealWebinar01DashboardNames} valueKey="dashboardFileName" displayKey="dashboardTitle" singleSelect="true" change={(s, event) => singleSelectComboChange(s, event)} className={classes("single-select-combo")}></IgrCombo>
        </div>
        <div className={classes("column-layout group_1")}>
          <div className={classes("group_2")}>
            <RvRevealView dashboard={dashboardName} options={dashboardOptions}></RvRevealView>
          </div>
        </div>
      </div>
    </>
  );
}
