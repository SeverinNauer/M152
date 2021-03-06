import { styled, Toolbar } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { drawerWidth } from "./App";
import CssAnimations from "./pages/animations/CssAnimations";
import HtmlCanvas from "./pages/animations/HtmlCanvas";
import ReactAnimations from "./pages/animations/ReactAnimations";
import ScrollActivated from "./pages/animations/SrollActivated";
import SvgAnimations from "./pages/animations/SvgAnimations";
import CarouselPage from "./pages/automate/CarouselPage";
import StyleGuide from "./pages/concept/StyleGuide";
import Timeline from "./pages/concept/Timeline";
import Impressum from "./pages/copyright/Impressum";
import License from "./pages/copyright/License";
import ImageFormat from "./pages/fileformat/ImageFormat";
import Sounds from "./pages/fileformat/Sounds";
import Video from "./pages/fileformat/Video";
import Index from "./pages/Index";
import Mockup from "./pages/concept/Mockup";
import Retrospective from "./pages/learning/Retrospective";
import Testing from "./pages/testing/Testing";
import Browser from "./pages/testing/Browser";
import PageSpeed from "./pages/testing/PageSpeed";

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
      { Name: "Mockup", Selected: false, Route: "mock", Component: Mockup },
      {
        Name: "Style Guide",
        Selected: false,
        Route: "style-guide",
        Component: StyleGuide,
      },
      {
        Name: "Zeitplan",
        Selected: false,
        Route: "timeline",
        Component: Timeline,
      },
    ],
  },
  {
    Name: "Urheberrecht",
    Selected: false,
    Route: "copyright",
    SubItems: [
      {
        Name: "Lizenzen",
        Selected: false,
        Route: "license",
        Component: License,
      },
      {
        Name: "Impressum & Copyright",
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
        Name: "Videoformate",
        Selected: false,
        Route: "video",
        Component: Video,
      },
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
      {
        Name: "React Animation",
        Selected: false,
        Route: "react",
        Component: ReactAnimations,
      },
    ],
  },
  {
    Name: "Automatisierung",
    Selected: false,
    Route: "auto",
    SubItems: [
      {
        Name: "Slideshow",
        Selected: false,
        Route: "carousel",
        Component: CarouselPage,
      },
    ],
  },
  {
    Name: "Testen",
    Selected: false,
    Route: "test",
    SubItems: [
      {
        Name: "Mobile & Desktop",
        Selected: false,
        Route: "mobile-desktop",
        Component: Testing,
      },
      {
        Name: "Browser Kompatibilität",
        Selected: false,
        Route: "compatibility",
        Component: Browser,
      },
      {
        Name: "Pagespeed",
        Selected: false,
        Route: "pagespeed",
        Component: PageSpeed,
      },
    ],
  },
  {
    Name: "Eigene Entwicklung",
    Selected: false,
    Route: "learning",
    SubItems: [
      {
        Name: "Reflexion",
        Selected: false,
        Route: "retrospective",
        Component: Retrospective,
      },
    ],
  },
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
