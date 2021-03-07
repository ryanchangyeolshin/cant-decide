import React, { useContext } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, Button, CircularProgress } from '@material-ui/core';
import LoadDecisionModalType from '../types/LoadDecisionModalType';
import DecisionContext from '../context/DecisionContext';

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
      justifyContent: "center",
      padding: "30px",
      width: "80%"
    },
    decisionInput: {
      width: "100%",
      margin: "40px 10px 10px 0",
      color: "white",
      "& .MuiFormLabel-root.Mui-focused": {
        color: "white"
      },
      "& .MuiOutlinedInput-root": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "white"
        }
      }
    },
    input: {
      color: "white",
      outline: 1,
    },
    label: {
      color: "white",
    },
    saveDecision: {
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

const LoadDecisionModal = ({ open, handleClose, decisions, loading }: LoadDecisionModalType) => {
  const { decision, setDecision } = useContext(DecisionContext);
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={(e: React.MouseEvent<HTMLElement>) => handleClose(e, "load")}
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
            {decisions.map(savedDecision => (
              <div key={savedDecision.id}>
                {savedDecision.name}
              </div>
            ))}
            <Button
              className={classes.saveDecision}
              data-testid="save-decision-button"
              variant="contained"
              color="primary"
              disabled={decision.name.length < 1}
              // onClick={loadDecisionHandler}
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