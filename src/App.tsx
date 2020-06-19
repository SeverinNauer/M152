import {
  AppBar,
  createStyles,
  fade,
  Hidden,
  IconButton as MuiIconButton,
  makeStyles,
  styled,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import GitHubIcon from "@material-ui/icons/GitHub";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import SearchInput from "./components/SearchInput";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const Root = styled("div")({
  height: "100%",
  width: "100%",
});

const IconButton = styled(MuiIconButton)(({ theme }) => ({
  margin: theme.spacing(0, 1),
}));

const Box = styled("div")({
  display: "flex",
});

const drawerWidth = 240;
const useStyles = makeStyles((theme) =>
  createStyles({
    search: {
      display: "flex",
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.25),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.35),
      },
      margin: theme.spacing("auto", 2),
      width: "100%",
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    inputInput: {
      color: theme.palette.primary.contrastText,
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    },
    title: {
      margin: "auto 0",
    },
    menuButton: {
      marginLeft: 0,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: "auto",
    },
    appbar: {
      zIndex: theme.zIndex.drawer + 1,
    },
  })
);

const App = () => {
  const classes = useStyles();
  return (
    <Root>
      <AppBar className={classes.appbar} position="fixed" color="primary">
        <Toolbar className={classes.toolbar}>
          <Box>
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                aria-label="Menu"
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Typography className={classes.title} variant="h6">
              Modul 152 Showcase
            </Typography>
          </Box>
          <Box>
            <Hidden smDown>
              <SearchInput />
            </Hidden>
            <Hidden smDown>
              <IconButton aria-label="Set Dark Mode" color="inherit">
                <Brightness4Icon />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              <IconButton aria-label="Github Page" color="inherit">
                <GitHubIcon />
              </IconButton>
            </Hidden>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </Root>
  );
};

export default App;
