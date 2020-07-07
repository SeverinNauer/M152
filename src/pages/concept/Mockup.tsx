import React from "react";
import ContentBox from "../../components/ContentBox";
import {
  Typography,
  makeStyles,
  createStyles,
  Link,
  Card,
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    image: {
      width: "100%",
      marginBottom: -10,
    },
    title: {
      marginBottom: theme.spacing(2),
    },
  })
);

const Mockup = () => {
  const classes = useStyles();
  return (
    <ContentBox>
      <Typography variant="h4">Mockup</Typography>
      <br />
      <Typography variant="body1">
        Das Mockup wurde mit Adobe XD erstellt:{" "}
        <Link href={`${process.env.PUBLIC_URL}/assets/mockup/M152-Mockup.xd`}>
          Download
        </Link>
      </Typography>
      <br />
      <Typography variant="h5" className={classes.title}>
        Desktop
      </Typography>
      <Card>
        <img
          className={classes.image}
          src={`${process.env.PUBLIC_URL}/assets/mockup/mockup-desktop.gif`}
          alt="desktop mockup"
        />
      </Card>
      <br />
      <br />
      <Typography variant="h5" className={classes.title}>
        Mobile
      </Typography>
      <Card>
        <img
          className={classes.image}
          src={`${process.env.PUBLIC_URL}/assets/mockup/mockup-mobile.gif`}
          alt="mobile mockup"
        />
      </Card>
    </ContentBox>
  );
};

export default Mockup;
