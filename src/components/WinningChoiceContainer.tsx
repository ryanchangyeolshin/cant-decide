import React, { useContext } from 'react';
import {
  Grow,
  Typography,
  Button
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import DecisionContext from '../context/DecisionContext';
import DecisionState from '../types/DecisionState';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      height: "100vh",
      margin: "50px 50px",
      borderRadius: "20px",
      backgroundColor: "#154A40",
      color: "white",
    },
    winningChoice: {
      fontWeight: 900,
      color: "white",
      margin: "50px 50px",
      padding: "0 20px",
      width: "100%",
      wordWrap: "break-word",
      display: "flex",
      justifyContent: "center",
    },
    returnHomeButton: {
      backgroundColor: "#F4ECDA",
      color: "black",
      marginTop: "20px",
      marginBottom: "20px",
      "&:hover": {
        backgroundColor: "yellow"
      },
      "& .MuiButton-label": {
        fontWeight: 900
      }
    }
  }),
);

const WinningChoiceContainer: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();
  const { winningChoice } = useContext<DecisionState>(DecisionContext);

  const returnHomeHandler: React.MouseEventHandler<HTMLButtonElement> = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    history.push("/");
  }

  return (
    <Grow in={true} timeout={1500} mountOnEnter unmountOnExit={true}>
      <Typography component="div" className={classes.contentContainer}>
        <Typography variant="h2" className={classes.winningChoice}>
          {winningChoice}
        </Typography>
        <iframe
          title="shia-labeouf-giphy"
          src="https://giphy.com/embed/GcSqyYa2aF8dy"
          width="480"
          height="358"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen>
        </iframe>
        <Button
          className={classes.returnHomeButton}
          data-testid="randomize-button"
          variant="contained"
          color="primary"
          onClick={returnHomeHandler}
        >
          Return Home
        </Button>
      </Typography>
    </Grow>
  );
}

export default WinningChoiceContainer;