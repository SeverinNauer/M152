import React from "react";
import ContentBox from "../../components/ContentBox";
import { Typography, makeStyles, createStyles, Card } from "@material-ui/core";

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
  })
);

const CssAnimations = () => {
  const classes = useStyles();
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
    </ContentBox>
  );
};

export default CssAnimations;
