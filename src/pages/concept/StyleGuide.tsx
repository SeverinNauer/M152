import React from "react";
import ContentBox from "../../components/ContentBox";
import {
  Typography,
  Link,
  Card,
  makeStyles,
  createStyles,
  useTheme,
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      padding: 40,
      marginTop: 20,
    },
    mainColor: {
      backgroundColor: theme.palette.primary.main,
      height: 100,
      width: 100,
      display: "flex",
    },
    text: {
      margin: "auto",
      color: theme.palette.primary.contrastText,
    },
  })
);

const StyleGuide = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <ContentBox>
      <Typography variant="h4">Style Guide</Typography>
      <br />
      <Typography variant="h5">Material UI</Typography>
      <Typography variant="body1">
        Diese Seite benutzt{" "}
        <Link href="https://material.io/develop/web">Material UI</Link> als
        Grundlage.
      </Typography>
      <br />
      <Typography variant="h6">Komponenten</Typography>
      <Typography variant="body1">
        Als <Link href="https://material-ui.com/">Komponenten Bibliothek</Link>{" "}
        wurde die React ausführung für Material UI verwendet. Sie beinhaltet die
        grundlegenden Komponenten und Styles die vom Material UI Style Guide
        definiert sind.
      </Typography>
      <br />
      <Typography variant="h5">Schrift</Typography>
      <Typography variant="body1">
        Als Schriftart wurde die{" "}
        <Link href="https://material-ui.com/components/typography/#roboto-font-cdn">
          {" "}
          Roboto Schrift
        </Link>{" "}
        von Google verwendet. Als Grössen wurden die{" "}
        <Link href="https://material-ui.com/components/typography/#component">
          {" "}
          Standardmasse{" "}
        </Link>{" "}
        von dem Material UI theme Verwendet
      </Typography>

      <Card className={classes.card} variant="outlined">
        <Typography variant="h1" component="h2" gutterBottom>
          h1. Heading
        </Typography>
        <Typography variant="h2" gutterBottom>
          h2. Heading
        </Typography>
        <Typography variant="h3" gutterBottom>
          h3. Heading
        </Typography>
        <Typography variant="h4" gutterBottom>
          h4. Heading
        </Typography>
        <Typography variant="h5" gutterBottom>
          h5. Heading
        </Typography>
        <Typography variant="h6" gutterBottom>
          h6. Heading
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="button" display="block" gutterBottom>
          button text
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          caption text
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          overline text
        </Typography>
      </Card>
      <br />
      <Typography variant="h5">Logo</Typography>
      <Typography variant="subtitle1">
        Das Logo wurde mit dem{" "}
        <Link href="https://www.tailorbrands.com/de/logo-maker">
          Tailorbrand Logo Generator
        </Link>{" "}
        erzeugt
      </Typography>
      <Card className={classes.card}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/logo/logoM152.png`}
          alt="logo"
        />
      </Card>
      <br />
      <Typography variant="h5">Farbpalette</Typography>
      <Typography variant="h6">Primärfarbe</Typography>
      <Card className={classes.card} variant="outlined">
        <Typography variant="subtitle1">Main</Typography>
        <br />
        <div className={classes.mainColor}>
          <Typography variant="body1" className={classes.text}>
            {theme.palette.primary.main}
          </Typography>
        </div>
      </Card>
    </ContentBox>
  );
};

export default StyleGuide;
