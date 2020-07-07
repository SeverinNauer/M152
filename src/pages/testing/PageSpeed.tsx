import React from "react";
import { Typography, Card, makeStyles, createStyles } from "@material-ui/core";
import ContentBox from "../../components/ContentBox";

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

const PageSpeed = () => {
  const classes = useStyles();
  return (
    <ContentBox>
      <Typography variant="h4">Google Pagespeed</Typography>
      <br />
      <Typography variant="h5" className={classes.title}>
        Mobile
      </Typography>
      <Card>
        <img
          className={classes.image}
          src={`${process.env.PUBLIC_URL}/assets/test/page-speed-mobile.png`}
          alt="pagespeed mobile"
        />
      </Card>
      <br />
      <Typography variant="h5" className={classes.title}>
        Desktop
      </Typography>
      <Card>
        <img
          className={classes.image}
          src={`${process.env.PUBLIC_URL}/assets/test/page-speed-desktop.png`}
          alt="pagespeed desktop"
        />
      </Card>
    </ContentBox>
  );
};

export default PageSpeed;
