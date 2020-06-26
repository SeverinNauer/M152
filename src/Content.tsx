import { styled, Toolbar } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { drawerWidth } from "./App";
import Index from "./pages/Index";
import CssAnimations from "./pages/animations/CssAnimations";
import SvgAnimations from "./pages/animations/SvgAnimations";

const ContentBox = styled("div")(({ theme }) => ({
  width: `calc(100% - ${drawerWidth}px)`,
  marginLeft: "auto",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const Content = () => {
  return (
    <ContentBox>
      <Toolbar />
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route exact path="/Animationen/CSS Animation">
          <CssAnimations />
        </Route>
        <Route exact path="/Animationen/SVG Animation">
          <SvgAnimations />
        </Route>
      </Switch>
    </ContentBox>
  );
};

export default Content;
