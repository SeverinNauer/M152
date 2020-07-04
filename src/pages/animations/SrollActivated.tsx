import {
  Card,
  createStyles,
  makeStyles,
  Slide,
  Typography,
  useScrollTrigger,
} from "@material-ui/core";
import React, { useState } from "react";
import ContentBox from "../../components/ContentBox";

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      padding: 40,
      marginTop: 20,
      height: 500,
      overflowY: "auto",
    },
    box: {
      backgroundColor: theme.palette.primary.main,
      height: 20,
      width: 20,
    },
    boxContent: {
      height: 800,
      width: "100%",
      textAlign: "center",
    },
    hello: {
      marginTop: 300,
    },
  })
);

const ScrollActivated = () => {
  const classes = useStyles();
  const [target, setTarget] = useState<any>(undefined);
  const trigger = useScrollTrigger({ target: target, threshold: 0 });
  return (
    <ContentBox>
      <Typography variant="h4">Scroll activated Animationen</Typography>
      <Typography variant="h5">
        Untenstehend sind Beispiele für Scroll activated Animationen
      </Typography>
      <br></br>
      <Typography variant="h6">Einfache Scroll activated Animation</Typography>
      <Card
        className={classes.card}
        variant="outlined"
        ref={(t) => t && setTarget(t)}
      >
        <div className={classes.boxContent}>
          <Slide direction={"left"} in={!trigger}>
            <Typography>Scroll Down</Typography>
          </Slide>
          <Slide direction={"right"} in={trigger}>
            <Typography className={classes.hello}>
              Hello fellow scroll enthusiast
            </Typography>
          </Slide>
        </div>
      </Card>
    </ContentBox>
  );
};

export default ScrollActivated;
