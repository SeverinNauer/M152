import React from "react";
import { makeStyles, createStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
  })
);
const Index = () => {
  const classes = useStyles();
  return <div className={classes.root}>Welcome</div>;
};

export default Index;
