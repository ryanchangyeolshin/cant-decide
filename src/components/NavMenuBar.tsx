import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useAuth0 } from "@auth0/auth0-react";
import { AppBar, Toolbar, Button, Icon, IconButton, Typography } from '@material-ui/core';
import { Menu as MenuIcon, Person as PersonIcon } from "@material-ui/icons";
import Typed from 'react-typed';
import NavMenuBarType from '../types/NavMenuBarType';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    toolBar: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      background: "#154A40",
      color: "white"
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    loggedIn: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    },
    username: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      fontSize: "0.8rem",
      fontWeight: 500,
    },
    personIcon: {
      marginRight: "10px"
    },
    typed: {
      fontWeight: 900,
      fontSize: "1.5rem"
    }
  }),
);

const NavMenuBar = ({ toggleDrawer }: NavMenuBarType) => {
  const classes = useStyles();
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolBar}>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <Typed
          className={classes.typed}
          strings={[
          "Let's eat McDonalds",
          "Let's eat Taco Bell",
          "Can't Decide..."
        ]}
          typeSpeed={40}
          backSpeed={50}
          smartBackspace
        />
        {
          isAuthenticated ? (
            <div className={classes.loggedIn}>
              <Icon className={classes.personIcon}><PersonIcon /></Icon>
              <Typography variant="h6" className={classes.username}>
                {user.name.substring(0, user.name.lastIndexOf("@"))}
              </Typography>
            </div>
          ) : (
            <Button className="login-button" color="inherit" onClick={() => loginWithRedirect()}>
              Login
            </Button>
          )
        }
      </Toolbar>
    </AppBar>
  );
}

export default NavMenuBar;