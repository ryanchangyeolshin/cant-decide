import React, { useContext } from 'react';
import { makeStyles, createStyles, Theme, } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import DecisionContext from '../context/DecisionContext';
import DecisionState from '../types/DecisionState';
import InputContainerProps from '../types/InputContainerProps';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      paddingLeft: "20px",
      paddingRight: "20px",
    },
    choiceInput: {
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
    randomize: {
      backgroundColor: "white",
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

const InputContainer: React.FC<InputContainerProps> = ({ choice, handleKeyDown, handleChoiceChange, randomizeChoice }: InputContainerProps) => {
  const { decision } = useContext<DecisionState>(DecisionContext);
  const classes = useStyles();

  return (
    <div className={classes.inputContainer}>
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
      <Button
        className={classes.randomize}
        data-testid="randomize-button"
        variant="contained"
        color="primary"
        disabled={decision.choices.length < 2}
        onClick={randomizeChoice}
      >
        Randomize
      </Button>
    </div>
  )
}

export default InputContainer;