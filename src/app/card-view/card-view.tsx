import { IgrCard, IgrCardActions, IgrCardHeader, IgrCardModule, IgrIconButton, IgrIconButtonModule, IgrRipple, IgrRippleModule } from 'igniteui-react';
import { useNavigate } from 'react-router-dom';
import { useGetDashboardNamesList } from '../hooks/reveal-webinar01-hooks';
import styles from './card-view.module.css';
import createClassTransformer from '../style-utils';

IgrCardModule.register();
IgrIconButtonModule.register();
IgrRippleModule.register();

export default function CardView() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const { revealWebinar01DashboardNames } = useGetDashboardNamesList();

  return (
    <>
      <div className={classes("row-layout card-view-container")}>
        {revealWebinar01DashboardNames?.map((item) => (
          <div style={{display: 'contents'}} onClick={() => navigate(`/dashboard-viewer/${item.dashboardFileName}`)} key={uuid()}>
            <IgrCard className={classes("card")}>
              <IgrCardHeader key={uuid()}>
                <h3 slot="title" key={uuid()}>
                  <span key={uuid()}>{item.dashboardTitle}</span>
                </h3>
                <h5 slot="subtitle" key={uuid()}>
                  <span key={uuid()}></span>
                </h5>
              </IgrCardHeader>
              <IgrCardActions className={classes("actions-content")} key={uuid()}>
                <div style={{display: 'contents'}} slot="end" key={uuid()}>
                  <IgrIconButton variant="flat" clicked={() => navigate(`/dashboard-viewer/${item.dashboardFileName}`)}>
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>open_in_new</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="end" key={uuid()}>
                  <IgrIconButton variant="flat">
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>bookmark</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
                <div style={{display: 'contents'}} slot="end" key={uuid()}>
                  <IgrIconButton variant="flat">
                    <span className={classes("material-icons")} key={uuid()}>
                      <span key={uuid()}>share</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrIconButton>
                </div>
              </IgrCardActions>
            </IgrCard>
          </div>
        ))}
      </div>
    </>
  );
}
