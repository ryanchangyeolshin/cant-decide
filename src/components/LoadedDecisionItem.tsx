import React from 'react';
import { makeStyles, createStyles, Theme, } from '@material-ui/core/styles';
import {
  ListItem,
  ListItemText,
  Grow
} from '@material-ui/core';
import LoadedDecisionItemType from '../types/LoadedDecisionItemType';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItem: {
      background: '#F4ECDA',
      color: "black",
      marginBottom: "5px",
      borderRadius: "4px",
      padding: "20px",
      transition: theme.transitions.create("background", {
        duration: 1000
      }),
      "&:focus": {
        background: "yellow",
      },
      "& .MuiListItemText-root": {
        "& .MuiTypography-root.MuiListItemText-primary": {
          fontWeight: 900,
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverFlow: "ellipsis",
          width: "95%"
        }
      },
      "& .MuiBadge-colorPrimary": {
        background: "black"
      }
    }
  }),
);

const LoadedDecisionItem: React.FC<LoadedDecisionItemType> = ({ decision, setSelectedDecisionHandler }: LoadedDecisionItemType) => {
  const classes = useStyles();

  return (
    <Grow in={true} timeout={1500} mountOnEnter unmountOnExit={true}>
      <div
        className="loaded-decision-item-container"
        onClick={(e: React.MouseEvent<HTMLElement>) => setSelectedDecisionHandler(e, decision)}
      >
        <ListItem button className={classes.listItem}>
          <ListItemText id="decision-text" primary={decision.name} />
        </ListItem>
      </div>
    </Grow>
  );
}

export default LoadedDecisionItem;