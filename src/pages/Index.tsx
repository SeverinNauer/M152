import {
  Link,
  Typography,
  makeStyles,
  createStyles,
  Grid,
  Card,
  useMediaQuery,
  Theme,
} from "@material-ui/core";
import React from "react";
import ContentBox from "../components/ContentBox";

const useStyles = makeStyles((theme) =>
  createStyles({
    image: {
      margin: "auto",
      display: "block",
    },
    title: {
      display: "flex",
    },
    welcomeText: {
      margin: "auto",
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8),
    },
    card: {
      padding: theme.spacing(2),
      minHeight: 200,
    },
    root: {
      overflowX: "hidden",
    },
    bottom: {
      marginTop: theme.spacing(4),
    },
  })
);

const Index = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <ContentBox>
      <Grid
        className={classes.root}
        justify="space-between"
        container
        spacing={4}
      >
        <Grid item xs={12} md={4}>
          <img
            className={classes.image}
            src={`${process.env.PUBLIC_URL}/assets/logo/logoM152.png`}
            alt="logo"
          />
          <br />
        </Grid>
        <Grid
          item
          container
          justify="space-around"
          xs={12}
          md={8}
          direction="column"
        >
          <Typography variant="h5" align={isMobile ? "center" : "left"} className={classes.welcomeText}>
            Willkommen auf meiner Showcase Seite zum Modul 152. Auf dieser
            Website wurde das{" "}
            <Link href="https://docs.google.com/spreadsheets/d/1ThwJMPpVxhdH-PKnO9mBeibByK5aaCrvHyc6hRdd-0U/edit#gid=1190714047">
              Kompetenzraster
            </Link>{" "}
            abgearbeitet.
          </Typography>
        </Grid>
      </Grid>
      <br />
      <Grid
        container
        direction={"row"}
        justify="space-between"
        className={classes.bottom}
        spacing={2}
      >
        <Grid item xs={12} md={6}>
          <Card className={classes.card} variant="outlined">
            <Typography variant="h5">Navigation</Typography>
            <br />
            <Typography variant="body1">
              Auf der linken Seite sind sind die Punkte des Kompetenzrasters
              aufgereit. Diese verweisen auf die Seiten zu den jeweiligen
              Punkte.
              <br /> Die Seiten beinhalten Beschreibungen oder Beispiele zu den
              jeweiligen Themen.
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className={classes.card} variant="outlined">
            <Typography variant="h5">Source Code</Typography>
            <br />
            <Typography variant="body1">
              Der Source Code zu dieser Seite kann in meinem{" "}
              <Link href="https://github.com/SeverinNauer/M152">
                Github Repository
              </Link>{" "}
              angeschaut und heruntergeladen werden.
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </ContentBox>
  );
};

export default Index;
