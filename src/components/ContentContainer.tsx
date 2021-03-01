
import React, { Fragment, useContext, useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, List, CssBaseline } from '@material-ui/core';
import ChoiceCardContainer from './ChoiceCardContainer';
import InputContainer from './InputContainer';
import DecisionContext from '../context/DecisionContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    containerWrapper: {
      maxWidth: "100%"
    },
    contentContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#4051B6",
      height: "100vh",
      margin: "50px 50px",
      borderRadius: "20px",
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

const ContentContainer = () => {
  const classes = useStyles();
  const { setWinningChoice, decision, setDecision } = useContext(DecisionContext);
  const [choice, setChoice] = useState<string>("");

  const handleChoiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChoice(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && choice !== "") {
      setDecision({ ...decision, choices: decision.choices.concat(choice) });
      setChoice("");
    }
  }

  const removeChoice = (index: number) => {
    const filteredChoices: string[] = decision.choices.filter((choice: string, i: number) => i !== index);
    setDecision({ ...decision, choices: filteredChoices });
  }

  const randomizeChoice = (e: React.MouseEvent<HTMLButtonElement>) => {
    const randomIndex: number = Math.floor(Math.random() * decision.choices.length);
    setWinningChoice(decision.choices[randomIndex]);
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