import React, { useContext, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, Button, CircularProgress, List } from '@material-ui/core';
import LoadedDecisionItem from './LoadedDecisionItem';
import LoadDecisionModalType from '../types/LoadDecisionModalType';
import DecisionContext from '../context/DecisionContext';
import DecisionDataType from '../types/DecisionDataType';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    modalScreen: {
      background: "#154A40",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "30px",
      width: "80%",
      height: "80%",
      "& .MuiList-root": {
        height: "100%",
        overflow: "scroll",
      }
    },
    loadDecision: {
      backgroundColor: "#F4ECDA",
      color: "black",
      marginTop: "40px",
      marginBottom: "10px",
      "&:hover": {
        backgroundColor: "yellow"
      },
      "& .MuiButton-label": {
        fontWeight: 900
      }
    }
  }),
);

const LoadDecisionModal: React.FC<LoadDecisionModalType> = ({ open, handleClose, decisions, loading }: LoadDecisionModalType) => {
  const { setDecision } = useContext(DecisionContext);
  const [selectedDecision, setSelectedDecision] = useState<DecisionDataType>({ _id: "", user: "", name: "", choices: [] });
  const classes = useStyles();

  const handleCloseModalHandler = (e: React.MouseEvent<HTMLElement>) => {
    setSelectedDecision({ _id: "", user: "", name: "", choices: [] });
    handleClose(e, "load");
  }

  const setSelectedDecisionHandler = (e: React.MouseEvent<HTMLElement>, decision: DecisionDataType) => {
    setSelectedDecision(decision);
  };

  const loadDecisionHandler: React.MouseEventHandler<HTMLButtonElement> = (e: React.MouseEvent<HTMLButtonElement>) => {
    setDecision(selectedDecision);
    handleCloseModalHandler(e);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleCloseModalHandler}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      {
        loading ? (
          <CircularProgress />
        ) : (
        <Fade in={open}>
          <div className={classes.modalScreen}>
            <List>
              {decisions.map(savedDecision => (
                <LoadedDecisionItem
                  key={savedDecision._id}
                  decision={savedDecision}
                  setSelectedDecisionHandler={setSelectedDecisionHandler}
                />
              ))}
            </List>
            <Button
              id="load-decision-button"
              className={classes.loadDecision}
              variant="contained"
              color="primary"
              disabled={selectedDecision._id === ""}
              onClick={loadDecisionHandler}
            >
              Load Decision
            </Button>
          </div>
        </Fade>
        )
      }
    </Modal>
  );
}

export default LoadDecisionModal;