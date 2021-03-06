import React from 'react';
import { Drawer, List, Divider, Typography, ListItem, ListItemIcon, ListItemText, makeStyles, createStyles, Theme } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SideNavMenuType from '../types/SideNavMenuType';

type Anchor = "left" | "right" | "top" | "bottom" | undefined

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      background: "#154A40",
      color: "white",
      height: "100%",
    },
    header: {
      color: "white",
      fontFamily: 'Brush Script MT, cursive',
      fontWeight: 900,
      margin: "7px 20px",
      letterSpacing: "4px"
    }
  }),
);


const SideNavMenu = ({ sideMenu, toggleDrawer }: SideNavMenuType) => {
  const anchor: Anchor = "left";
  const classes = useStyles();

  const list = (anchor: Anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <Typography variant="h4" gutterBottom className={classes.header}>
          Can't Decide
        </Typography>
        <Divider />
        <ListItem button key="save">
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary="Save" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key={anchor}>
        <Drawer anchor={anchor} open={sideMenu} onClose={toggleDrawer(false)}>
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    </div>
  )
};

export default SideNavMenu;