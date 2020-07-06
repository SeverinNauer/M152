import React from "react";
import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: "20px auto",
      [theme.breakpoints.up("xs")]: {
        width: "95%"
      },
      [theme.breakpoints.up("sm")]: {
        width: "90%"
      },
      [theme.breakpoints.up("md")]: {
        width: "80%"
      },
      [theme.breakpoints.up("lg")]: {
        width: "75%"
      },
      [theme.breakpoints.up("xl")]: {
        width: "70%"
      }
    },
  })
);

const ContentBox: React.FC = (props) => {
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>;
};

export default ContentBox;
