import React from "react";
import ContentBox from "../../components/ContentBox";
import { Typography, Card, makeStyles, createStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) =>
  createStyles({
    image: {
      width: "100%",
      marginBottom: -10,
    },
    title: {
      marginBottom: theme.spacing(1),
    },
  })
);

const Browser = () => {
  const classes = useStyles();
  return (
    <ContentBox>
      <Typography variant="h4">Browser Kompatibilität</Typography>
      <Typography variant="subtitle1">
        Auf dieser Seite wird nachgewiesen dass die Seite in den neusten
        Versionen vom Chrome, Firefox und Edge läuft
      </Typography>
      <br />
      <Typography variant="h5" className={classes.title}>
        Chrome
      </Typography>
      <Card>
        <img
          className={classes.image}
          src={`${process.env.PUBLIC_URL}/assets/test/ss-chrome.png`}
          alt="chrome screenshot"
        />
      </Card>
      <br />
      <Typography variant="h5" className={classes.title}>Firefox</Typography>
      <Card>
        <img
          className={classes.image}
          src={`${process.env.PUBLIC_URL}/assets/test/ss-firefox.png`}
          alt="firefox screenshot"
        />
      </Card>
      <br />
      <Typography variant="h5" className={classes.title}>Edge</Typography>
      <Card>
        <img
          className={classes.image}
          src={`${process.env.PUBLIC_URL}/assets/test/ss-edge.png`}
          alt="edge screenshot"
        />
      </Card>
    </ContentBox>
  );
};

export default Browser;
