
import React, { Fragment, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { TextField, CssBaseline, Typography, List } from '@material-ui/core';
import ChoiceCardContainer from './ChoiceCardContainer';

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
    choiceInput: {
      width: "90%",
      margin: "40px 20px 10px 20px",
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
    list: {
      width: '90%',
      borderRadius: "4px",
      height: "78%",
      overflow: "scroll"
    },
  }),
);

export default function ContentContainer() {
  const classes = useStyles();
  const [choices, setChoices] = useState([] as string[]);
  const [choice, setChoice] = useState("");

  const handleChoiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChoice(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && choice !== "") {
      setChoices((choices as string[]).concat(choice));
      setChoice("");
    }
  }

  const removeChoice = (index: number) => {
    const filteredChoices: string[] = choices.filter((choice: string, i: number) => i !== index);
    setChoices(filteredChoices);
  }

  return (
    <Fragment>
      <CssBaseline />
      <div className={classes.containerWrapper}>
        <Typography component="div" className={classes.contentContainer}>
          <TextField
            id="standard-basic"
            className={classes.choiceInput}
            label="Choice"
            variant="outlined"
            margin="normal"
            placeholder="Please provide your choice here..."
            InputLabelProps={{
              className: classes.label
            }}
            inputProps={{
              className: classes.input
            }}
            onChange={handleChoiceChange}
            onKeyDown={handleKeyDown}
            value={choice}
          />
          <div className={classes.list}>
            <List component="nav" aria-label="main mailbox folders">
              {choices.map((newChoice: string, i: number) =>
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