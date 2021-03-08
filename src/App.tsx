import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AxiosResponse } from 'axios';
import instance from './utils/axios-instance';
import { useAuth0 } from "@auth0/auth0-react";
import DecisionProvider from './context/DecisionProvider';
import NavMenuBar from './components/NavMenuBar';
import SideNavMenu from './components/SideNavMenu';
import ContentContainer from './components/ContentContainer';
import WinningChoiceContainer from './components/WinningChoiceContainer';
import LoadDecisionModal from './components/LoadDecisionModal';
import SaveDecisionModal from './components/SaveDecisionModal';
import DecisionSnackbar from './components/DecisionSnackbar';
import DecisionDataType from './types/DecisionDataType';
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
  const { user } = useAuth0();
  const classes = useStyles();
  const [loading, setLoading] = useState<boolean>(false);
  const [decisions, setDecisions] = useState<DecisionDataType[]>([]);
  const [sideMenu, setSideMenu] = useState<boolean>(false);
  const [openSaveModal, setOpenSaveModal] = useState<boolean>(false);
  const [openLoadModal, setOpenLoadModal] = useState<boolean>(false);
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

  const handleOpenModal = async (event: React.MouseEvent<HTMLElement>, modalType: string) => {
    if (modalType === "save") {
      setOpenSaveModal(true);
    } else {
      setOpenLoadModal(true);
      setLoading(true);
      const { data }: AxiosResponse<DecisionDataType[]> = await instance.get(`/decisions/${user.name}`);
      setDecisions(data);
      setLoading(false);
    }
  }
  
  const handleCloseModal = (event: React.MouseEvent<HTMLElement>, modalType: string) => {
    if (modalType === "save") {
      setOpenSaveModal(false);
    } else {
      setOpenLoadModal(false);
    }
  }

  return (
    <div className={classes.app}>
      <DecisionProvider>
        <NavMenuBar toggleDrawer={toggleDrawer} />
        <SideNavMenu sideMenu={sideMenu} toggleDrawer={toggleDrawer} handleOpenModal={handleOpenModal} />
        <LoadDecisionModal open={openLoadModal} handleClose={handleCloseModal} decisions={decisions} loading={loading} />
        <SaveDecisionModal open={openSaveModal} handleClose={handleCloseModal} handleOpenSnackbar={handleOpenSnackbar} />
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
