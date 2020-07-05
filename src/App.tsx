import {
  AppBar,
  createStyles,
  Drawer,
  fade,
  Hidden,
  IconButton as MuiIconButton,
  makeStyles,
  styled,
  Theme,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import GitHubIcon from "@material-ui/icons/GitHub";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DrawerContent from "./components/DrawerContent";
import SearchInput from "./components/SearchInput";
import Content from "./Content";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "../src/prism-material-dark.css";

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

export const drawerWidth = 240;
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
      boxShadow: `5px 5px 5px ${theme.palette.divider}`,
      border: "none",
    },
    appbar: {
      zIndex: theme.zIndex.drawer + 1,
      [theme.breakpoints.down("sm")]: {
        zIndex: theme.zIndex.modal + 1,
      },
    },
    link: {
      textDecoration: "none",
      color: theme.palette.primary.contrastText,
      display: "inherit",
    },
  })
);

const App = () => {
  const classes = useStyles();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
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
                onClick={() => setMenuIsOpen(!menuIsOpen)}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Link to="/" className={classes.link}>
              <Typography className={classes.title} variant="h6">
                Modul 152 Showcase
              </Typography>
            </Link>
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
              <a
                className={classes.link}
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/SeverinNauer/M152"
              >
                <IconButton aria-label="Github Page" color="inherit">
                  <GitHubIcon />
                </IconButton>
              </a>
            </Hidden>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant={smDown ? "temporary" : "persistent"}
        classes={{ paper: classes.drawerPaper }}
        open={menuIsOpen || !smDown}
        onBackdropClick={() => setMenuIsOpen(false)}
      >
        <Toolbar />
        <DrawerContent />
      </Drawer>
      <Content />
    </Root>
  );
};

export default App;
