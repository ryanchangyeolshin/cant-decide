
import React, { Fragment, useContext, useState } from 'react'
import { useHistory } from "react-router-dom";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, List, CssBaseline } from '@material-ui/core';
import ChoiceCardContainer from './ChoiceCardContainer';
import InputContainer from './InputContainer';
import DecisionContext from '../context/DecisionContext';
import DecisionState from '../types/DecisionState';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    containerWrapper: {
      maxWidth: "100%",
      height: "100vh"
    },
    contentContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#4051B6",
      height: "100vh",
      margin: "50px 50px",
      borderRadius: "20px",
      background: "#154A40 !important",
      color: "white",
      boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"
    },
    list: {
      width: '100%',
      borderRadius: "4px",
      height: "78%",
      overflow: "scroll",
      paddingLeft: "20px",
      paddingRight: "20px"
    },
  }),
);

const ContentContainer: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const { setWinningChoice, decision, setDecision } = useContext<DecisionState>(DecisionContext);
  const [choice, setChoice] = useState<string>("");

  const handleChoiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChoice(e.target.value);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && choice !== "") {
      setDecision({ ...decision, choices: decision.choices.concat(choice) });
      setChoice("");
    }
  }

  const removeChoice = (index: number) => {
    const filteredChoices: string[] = decision.choices.filter((choice: string, i: number) => i !== index);
    setDecision({ ...decision, choices: filteredChoices });
  }

  const randomizeChoice: React.MouseEventHandler<HTMLButtonElement> = (e: React.MouseEvent<HTMLButtonElement>) => {
    const randomIndex: number = Math.floor(Math.random() * decision.choices.length);
    setWinningChoice(decision.choices[randomIndex]);
    history.push("/decision");
    setDecision({ ...decision, choices: [] });
  }

  return (
    <Fragment>
      <div className={classes.containerWrapper}>
        <CssBaseline />
        <Typography component="div" className={classes.contentContainer}>
          <InputContainer
            choice={choice}
            handleKeyDown={handleKeyDown}
            handleChoiceChange={handleChoiceChange}
            randomizeChoice={randomizeChoice}
          />
          <div className={classes.list}>
            <List component="nav" aria-label="main mailbox folders">
              {decision.choices.map((newChoice: string, i: number) =>
                <ChoiceCardContainer
                  key={i}
                  choice={newChoice}
                  index={i}
                  removeChoice={removeChoice}
                />
              )}
            </List>
          </div>
        </Typography>
      </div>
    </Fragment>
  );
};

export default ContentContainer;