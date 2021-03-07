import React, { useContext } from 'react';
import instance from '../utils/axios-instance';
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, TextField, Button } from '@material-ui/core';
import SaveDecisionModalType from '../types/SaveDecisionModalType';
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

const SaveDecisionModal = ({ open, handleClose, handleOpenSnackbar }: SaveDecisionModalType) => {
  const { decision, setDecision } = useContext(DecisionContext);
  const { user } = useAuth0();
  const classes = useStyles();

  const handleDecisionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDecision({ ...decision, name: e.target.value });
  };

  const saveDecisionHandler = async (e: React.MouseEvent<HTMLElement>) => {
    const data: DecisionDataType = {
      user: user.name,
      name: decision.name,
      choices: decision.choices
    };
    await instance.post('/decisions', data);
    handleClose(e, "save");
    handleOpenSnackbar(e);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={(e: React.MouseEvent<HTMLElement>) => handleClose(e, "save")}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      >
      <Fade in={open}>
        <div className={classes.modalScreen}>
          <TextField
            id="standard-basic"
            className={classes.decisionInput}
            label="Decision Name"
            variant="outlined"
            margin="normal"
            placeholder="Please provide the name of your decision here..."
            InputLabelProps={{
              className: classes.label
            }}
            inputProps={{
              className: classes.input
            }}
            onChange={handleDecisionChange}
            value={decision.name}
          />
          <Button
            className={classes.saveDecision}
            data-testid="save-decision-button"
            variant="contained"
            color="primary"
            disabled={decision.name.length < 1}
            onClick={saveDecisionHandler}
          >
            Save Decision
          </Button>
        </div>
        </Fade>
    </Modal>
  );
}

export default SaveDecisionModal;