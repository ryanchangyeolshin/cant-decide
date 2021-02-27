
import React, { Fragment, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { TextField, CssBaseline, Typography, Container } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    containerWrapper: {
      maxWidth: "100%"
    },
    contentContainer: {
      backgroundColor: "#4051B6",
      height: "100vh",
      margin: "50px 0",
      borderRadius: "20px",
    },
    choiceInput: {
      width: "90%",
      margin: "40px 20px",
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
  }),
);

export default function ContentContainer() {
  const classes = useStyles();
  const [choice, setChoice] = useState("");

  const handleChoiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChoice(choice);
  };

  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.containerWrapper}>
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
          />
        </Typography>
      </Container>
    </Fragment>
  );
};