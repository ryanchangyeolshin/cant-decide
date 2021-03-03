import React, { useContext } from 'react';
import {
  Grow,
  Typography,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import DecisionContext from '../context/DecisionContext';
import DecisionState from '../types/DecisionState';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#4051B6",
      height: "100vh",
      margin: "50px 50px",
      borderRadius: "20px",
    },
    winningChoice: {
      fontWeight: 900,
      color: "white",
      margin: "50px 50px",
      padding: "0 20px",
      overflowWrap: "break-word",
      wordWrap: "break-word",
      hyphens: "auto",
    }
  }),
);

const WinningChoiceContainer: React.FC = () => {
  const classes = useStyles();
  const { winningChoice } = useContext<DecisionState>(DecisionContext);

  return (
    <Grow in={true} timeout={1500} mountOnEnter unmountOnExit={true}>
      <Typography component="div" className={classes.contentContainer}>
        <Typography variant="h2" className={classes.winningChoice}>
          {winningChoice}
        </Typography>
      </Typography>
    </Grow>
  );
}

export default WinningChoiceContainer;