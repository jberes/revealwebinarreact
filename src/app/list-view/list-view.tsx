import { useGlobalContext } from '../hooks/context-hooks';
import { IgrAvatar, IgrAvatarModule, IgrList, IgrListItem, IgrListModule } from 'igniteui-react';
import { RvRevealView } from '@revealbi/ui-react';
import { useState } from 'react';
import { RevealSdkSettings, RevealViewOptions } from '@revealbi/ui';
import { useGetDashboardNamesList } from '../hooks/reveal-webinar01-hooks';
import styles from './list-view.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrListModule.register();

RevealSdkSettings.serverUrl = 'globalState.revealServer';

export default function ListView() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const { globalState } = useGlobalContext();
  const [dashboardName1, setDashboardName1] = useState<string | undefined>();
  const { revealWebinar01DashboardNames } = useGetDashboardNamesList();

  const dashboardOptions: RevealViewOptions = {
    visualizations: {
      menu: {
        copy: false,
        duplicate: false
      }
    }
  };

  return (
    <>
      <div className={classes("row-layout list-view-container")}>
        <div className={classes("column-layout group")}>
          <IgrList className={classes("list")}>
            {revealWebinar01DashboardNames?.map((item) => (
              <div style={{display: 'contents'}} onClick={() => setDashboardName1(item.dashboardFileName)} key={uuid()}>
                <IgrListItem>
                  <div style={{display: 'contents'}} slot="start" key={uuid()}>
                    <IgrAvatar shape="circle">
                      <span className={classes("material-icons")} key={uuid()}>
                        <span key={uuid()}>person</span>
                      </span>
                    </IgrAvatar>
                  </div>
                  <div slot="title" key={uuid()}>{item.dashboardTitle}</div>
                </IgrListItem>
              </div>
            ))}
          </IgrList>
        </div>
        <div className={classes("column-layout group_1")}>
          <div className={classes("group_2")}>
            <RvRevealView dashboard="dashboardName1!" options={dashboardOptions}></RvRevealView>
          </div>
        </div>
      </div>
    </>
  );
}
