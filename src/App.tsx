import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import DecisionProvider from './context/DecisionProvider';
import NavMenuBar from './components/NavMenuBar';
import SideNavMenu from './components/SideNavMenu';
import ContentContainer from './components/ContentContainer';
import WinningChoiceContainer from './components/WinningChoiceContainer';
import SaveDecisionModal from './components/SaveDecisionModal';
import DecisionSnackbar from './components/DecisionSnackbar';
import './App.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    app: {
      background: 'linear-gradient(45deg, #F4ECDA 30%, #FDFBF7 90%)',
      height: "100%"
    }
  }),
);

const App: React.FC = () => {
  const classes = useStyles();
  const [sideMenu, setSideMenu] = useState<boolean>(false);
  const [openModal, setOpenModel] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setSideMenu(open);
  };

  const handleOpenSnackbar = (event?: React.SyntheticEvent, reason?: string) => {
    setOpenSnackbar(true);
  };
  
  const handleCloseSnackbar = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleOpenModal: React.MouseEventHandler<HTMLElement>
    = (event: React.MouseEvent<HTMLElement>) => setOpenModel(true);
  
  const handleCloseModal: React.MouseEventHandler<HTMLElement> = (event: React.MouseEvent<HTMLElement>) => {
    setOpenModel(false);
    handleOpenSnackbar();
  }

  return (
    <div className={classes.app}>
      <DecisionProvider>
        <NavMenuBar toggleDrawer={toggleDrawer} />
        <SideNavMenu sideMenu={sideMenu} toggleDrawer={toggleDrawer} handleOpenModal={handleOpenModal} />
        <SaveDecisionModal open={openModal} handleClose={handleCloseModal} />
        <Router>
          <Switch>
            <Route path="/decision">
              <WinningChoiceContainer />
            </Route>
            <Route path="/">
              <ContentContainer />
            </Route>
          </Switch>
        </Router>
      </DecisionProvider>
      <DecisionSnackbar open={openSnackbar} handleClose={handleCloseSnackbar} />
    </div>
  );
}

export default App;
