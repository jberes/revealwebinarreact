import { GlobalContext, useGlobalState } from './hooks/context-hooks';
import { IgrIconButton, IgrIconButtonModule, IgrNavbar, IgrNavbarModule, IgrNavDrawer, IgrNavDrawerItem, IgrNavDrawerModule, IgrRipple, IgrRippleModule } from 'igniteui-react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import styles from './app.module.css';
import createClassTransformer from './style-utils';

IgrIconButtonModule.register();
IgrNavbarModule.register();
IgrNavDrawerModule.register();
IgrRippleModule.register();

export default function App() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const navDrawer = useRef<IgrNavDrawer>(null);
  const { globalState, setGlobalState } = useGlobalState();

  return (
    <GlobalContext.Provider value ={{ globalState, setGlobalState}}>
      <div className={classes("column-layout master-view-container")}>
        <IgrNavbar className={classes("navbar")}>
          <div style={{display: 'contents'}} slot="start" key={uuid()}>
            <IgrIconButton variant="flat" clicked={() => navDrawer?.current?.toggle()} className={classes("icon-button")}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>menu</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
          </div>
          <div className={classes("row-layout group")} key={uuid()}>
            <h6 className={classes("h6")}>
              <span>Dashboard Viewer with Reveal</span>
            </h6>
          </div>
          <div style={{display: 'contents'}} slot="end" key={uuid()}>
            <IgrIconButton variant="flat" className={classes("icon-button")}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>search</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
          </div>
          <div style={{display: 'contents'}} slot="end" key={uuid()}>
            <IgrIconButton variant="flat" className={classes("icon-button")}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>favorite</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
          </div>
          <div style={{display: 'contents'}} slot="end" key={uuid()}>
            <IgrIconButton variant="flat" className={classes("icon-button")}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>more_vert</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
          </div>
        </IgrNavbar>
        <div className={classes("row-layout group_1")}>
          <IgrNavDrawer open="true" position="relative" ref={navDrawer} className={classes("nav-drawer")}>
            <div style={{display: 'contents'}} onClick={() => navigate(`/combo-view`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>home</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>Combo View</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/list-view`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>dns</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>List View</div>
              </IgrNavDrawerItem>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/card-view`)} key={uuid()}>
              <IgrNavDrawerItem>
                <span slot="icon" key={uuid()}>
                  <span className={classes("material-icons icon_1")} key={uuid()}>
                    <span key={uuid()}>dashboard</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </span>
                <div slot="content" key={uuid()}>Card View</div>
              </IgrNavDrawerItem>
            </div>
          </IgrNavDrawer>
          <div className={classes("view-container")}>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </GlobalContext.Provider>
  );
}
