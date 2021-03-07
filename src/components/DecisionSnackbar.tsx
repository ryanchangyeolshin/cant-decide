import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles, Theme } from '@material-ui/core/styles';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import DecisionSnackbarType from '../types/DecisionSnackbarType';

const Alert = (props: AlertProps) => (
  <MuiAlert elevation={6} variant="filled" {...props} />
);

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const DecisionSnackbar = ({ open, handleClose }: DecisionSnackbarType) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Decision has been saved!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default DecisionSnackbar;