import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Menu as MenuIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    toolBar: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }),
);

const NavMenuBar: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolBar}>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavMenuBar;