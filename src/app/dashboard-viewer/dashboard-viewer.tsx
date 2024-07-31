import { useGlobalContext } from '../hooks/context-hooks';
import { IgrIconButton, IgrIconButtonModule, IgrRipple, IgrRippleModule } from 'igniteui-react';
import { RvRevealView } from '@revealbi/ui-react';
import { useNavigate, useParams } from 'react-router-dom';
import { RevealSdkSettings, RevealViewOptions } from '@revealbi/ui';
import styles from './dashboard-viewer.module.css';
import createClassTransformer from '../style-utils';

IgrIconButtonModule.register();
IgrRippleModule.register();

export default function DashboardViewer() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();

  const routeParams = useParams();
  const dashboardName2 = routeParams.dashboardName2;
  const { globalState } = useGlobalContext();

  RevealSdkSettings.serverUrl = globalState.revealServer;

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
      <div className={classes("row-layout dashboard-viewer-container")}>
        <div className={classes("group")}>
          <RvRevealView dashboard={dashboardName2!} options={dashboardOptions}></RvRevealView>
        </div>
        <IgrIconButton variant="flat" clicked={() => navigate(`/card-view`)} className={classes("icon-button")}>
          <span className={classes("material-icons icon")} key={uuid()}>
            <span key={uuid()}>reply_all</span>
          </span>
          <IgrRipple key={uuid()}></IgrRipple>
        </IgrIconButton>
      </div>
    </>
  );
}
