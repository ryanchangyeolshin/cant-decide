import React from 'react';
import { makeStyles, createStyles, Theme, } from '@material-ui/core/styles';
import { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, IconButton, Badge, Grow } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

type ChoiceProps = {
  choice: string,
  index: number,
  removeChoice: Function,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItem: {
      backgroundColor: "white",
      marginBottom: "10px",
      borderRadius: "4px",
      padding: "20px",
      "&:hover": {
        backgroundColor: "yellow",
      },
      "& .MuiListItemText-root": {
        "& .MuiTypography-root.MuiListItemText-primary": {
          fontWeight: 900,
        }
      }
    }
  }),
);

export default function ChoiceCardContainer({ choice, index, removeChoice }: ChoiceProps) {
  const classes = useStyles();

  const removeChoiceHandler = (e: React.MouseEvent<SVGSVGElement>) => {
    removeChoice(index);
  } 

  return (
    <Grow in={true} timeout={1500} mountOnEnter unmountOnExit>
      <div>
        <ListItem button className={classes.listItem}>
          <ListItemIcon>
            <Badge badgeContent={index + 1} color="primary" />
          </ListItemIcon>
          <ListItemText primary={choice} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon onClick={removeChoiceHandler} />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </div>
    </Grow>
  );
}