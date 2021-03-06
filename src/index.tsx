import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF6600",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FFFFFF",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/M152">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
