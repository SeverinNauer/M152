import { styled, Toolbar } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { drawerWidth } from "./App";
import Index from "./pages/Index";
import CssAnimations from "./pages/animations/CssAnimations";
import SvgAnimations from "./pages/animations/SvgAnimations";
import ScrollActivated from "./pages/animations/SrollActivated";
import Impressum from "./pages/copyright/Impressum";
import HtmlCanvas from "./pages/animations/HtmlCanvas";
import Sounds from "./pages/fileformat/Sounds";
import StyleGuide from "./pages/concept/StyleGuide";
import ImageFormat from "./pages/fileformat/ImageFormat";

const ContentBox = styled("div")(({ theme }) => ({
  width: `calc(100% - ${drawerWidth}px)`,
  marginLeft: "auto",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
export type MenuItem = {
  readonly Name: string;
  readonly SubItems?: ReadonlyArray<MenuItem>;
  readonly Selected: boolean;
  readonly Expanded?: boolean;
  readonly Route?: string;
  readonly Component?: () => JSX.Element;
};
export const MenuItems: ReadonlyArray<MenuItem> = [
  {
    Name: "Konzept",
    Selected: false,
    Route: "concept",
    SubItems: [
      { Name: "Mockup", Selected: false, Route: "mock" },
      {
        Name: "Style Guide",
        Selected: false,
        Route: "style-guide",
        Component: StyleGuide,
      },
      { Name: "Zeitplan", Selected: false, Route: "timeline" },
    ],
  },
  {
    Name: "Urheberrecht",
    Selected: false,
    Route: "copyright",
    SubItems: [
      {
        Name: "Impressum",
        Selected: false,
        Route: "impressum",
        Component: Impressum,
      },
    ],
  },
  {
    Name: "Dateiformate",
    Selected: false,
    Route: "fileformat",
    SubItems: [
      {
        Name: "Bildformate",
        Selected: false,
        Route: "image",
        Component: ImageFormat,
      },
      {
        Name: "Soundformate",
        Selected: false,
        Route: "sound",
        Component: Sounds,
      },
    ],
  },
  {
    Name: "Animationen",
    Selected: false,
    Route: "animations",
    SubItems: [
      {
        Name: "CSS Animation",
        Selected: false,
        Route: "css",
        Component: CssAnimations,
      },
      {
        Name: "SVG Animation",
        Selected: false,
        Route: "svg",
        Component: SvgAnimations,
      },
      {
        Name: "Scroll Activated",
        Selected: false,
        Route: "scroll-activated",
        Component: ScrollActivated,
      },
      {
        Name: "HTML Canvas",
        Selected: false,
        Route: "canvas",
        Component: HtmlCanvas,
      },
    ],
  },
  { Name: "Automatisierung", Selected: false },
  { Name: "Testen", Selected: false },
  { Name: "Eigene Entwicklung", Selected: false },
  { Name: "Allgemeines", Selected: false },
];

const Content = () => {
  return (
    <ContentBox>
      <Toolbar />
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        {MenuItems.map((item) =>
          item.SubItems?.map((subItem) => (
            <Route
              exact
              path={`/${item.Route}/${subItem.Route}`}
              component={subItem.Component}
            />
          ))
        )}
      </Switch>
    </ContentBox>
  );
};

export default Content;
