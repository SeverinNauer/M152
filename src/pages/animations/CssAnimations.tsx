import { Card, createStyles, makeStyles, Typography } from "@material-ui/core";
import Prism from "prismjs";
import React, { useEffect } from "react";
import CodeExample from "../../components/CodeExample";
import ContentBox from "../../components/ContentBox";

const useStyles = makeStyles((theme) =>
  createStyles({
    "@keyframes spinning": {
      "0%": { marginLeft: "0" },
      "50%": { marginLeft: "100%", transform: "rotate(1080deg)" },
      "100%": { marginLeft: "0" },
    },
    card: {
      padding: 40,
      marginTop: 20,
    },
    box: {
      backgroundColor: theme.palette.primary.main,
      height: 20,
      width: 20,
      animation: "$spinning 5s linear infinite",
    },
    codeIcon: {
      marginLeft: "auto",
    },
    code: {
      display: "flex",
      flexDirection: "column",
    },
  })
);

const CssAnimations = () => {
  const classes = useStyles();

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <ContentBox>
      <Typography variant="h4">CSS Animation</Typography>
      <Typography variant="h5">
        Untenstehend sind Beispiele für CSS Animationen zu finden
      </Typography>
      <br></br>
      <Typography variant="h6">Einfache CSS Animation</Typography>
      <Card className={classes.card} variant="outlined">
        <div className={classes.box}></div>
      </Card>
      <CodeExample>
        {`const useStyles = makeStyles((theme) =>
  createStyles({
    "@keyframes spinning": {
      "0%": { marginLeft: "0" },
      "50%": { marginLeft: "100%", transform: "rotate(1080deg)" },
      "100%": { marginLeft: "0" },
    },
    card: {
      padding: 40,
      marginTop: 20,
    },
    box: {
      backgroundColor: theme.palette.primary.main,
      height: 20,
      width: 20,
      animation: "$spinning 5s linear infinite",
    },
  })
);`}{" "}
      </CodeExample>
    </ContentBox>
  );
};

export default CssAnimations;
