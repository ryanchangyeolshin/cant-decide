import React from 'react';
import { makeStyles, createStyles, Theme, } from '@material-ui/core/styles';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Badge,
  Grow
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

type ChoiceCardContainerProps = {
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
      transition: theme.transitions.create("background-color", {
        duration: 1000
      }),
      "&:hover": {
        backgroundColor: "yellow",
      },
      "& .MuiListItemText-root": {
        "& .MuiTypography-root.MuiListItemText-primary": {
          fontWeight: 900,
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverFlow: "ellipsis",
          width: "95%"
        }
      }
    }
  }),
);

const ChoiceCardContainer: React.FC<ChoiceCardContainerProps> = ({ choice, index, removeChoice }: ChoiceCardContainerProps) => {
  const classes = useStyles();

  const removeChoiceHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    removeChoice(index);
  } 

  return (
    <Grow in={true} timeout={1500} mountOnEnter unmountOnExit={true}>
      <div className="list-item-container">
        <ListItem button className={classes.listItem}>
          <ListItemIcon>
            <Badge badgeContent={index + 1} color="primary" />
          </ListItemIcon>
          <ListItemText primary={choice} />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={removeChoiceHandler}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </div>
    </Grow>
  );
}

export default ChoiceCardContainer;