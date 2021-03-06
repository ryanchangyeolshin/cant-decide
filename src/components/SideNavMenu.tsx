import React from 'react';
import { Drawer, List, Divider, Typography, ListItem, ListItemIcon, ListItemText, makeStyles, createStyles, Theme } from '@material-ui/core';
import { useAuth0 } from "@auth0/auth0-react";
import { Inbox as InboxIcon, Person as PersonIcon } from '@material-ui/icons';
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
      fontWeight: 900,
      margin: "7px 20px",
      letterSpacing: "2px"
    },
    listItemIcons: {
      color: "white"
    },
  }),
);


const SideNavMenu = ({ sideMenu, toggleDrawer }: SideNavMenuType) => {
  const anchor: Anchor = "left";
  const classes = useStyles();
  const { logout, isAuthenticated } = useAuth0();

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
        {isAuthenticated && (
          <ListItem button key="save">
            <ListItemIcon className={classes.listItemIcons}><InboxIcon /></ListItemIcon>
            <ListItemText primary="Save" />
          </ListItem>
        )}
        <ListItem button key="logout">
          <ListItemIcon className={classes.listItemIcons}><PersonIcon /></ListItemIcon>
          <ListItemText className="logout" primary="Logout" onClick={() => logout({ returnTo: window.location.origin })} />
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