import React from "react";
import ContentBox from "../../components/ContentBox";
import { Typography, Card, makeStyles, createStyles } from "@material-ui/core";
import CodeExample from "../../components/CodeExample";
const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      padding: 40,
      marginTop: 20,
    },
    svgContent: {
      height: 30,
      width: "100%",
    },
    rectangle: {
      fill: theme.palette.primary.main,
      transformOrigin: "center",
      transformBox: "fill-box",
    },
  })
);

const SvgAnimations = () => {
  const classes = useStyles();
  return (
    <ContentBox>
      <Typography variant="h4">SVG Animation</Typography>
      <Typography variant="h5">
        Untenstehend sind Beispiele für SVG Animationen zu finden
      </Typography>
      <br />
      <Typography variant="h6">Einfache SVG Animation</Typography>
      <Card className={classes.card} variant="outlined">
        <svg className={classes.svgContent}>
          <rect
            y={5}
            className={classes.rectangle}
            width={20}
            height={20}
            origin="center"
            viewBox="fill-content"
            rotate="20"
          >
            <animate
              attributeName="x"
              from="0"
              to="0"
              dur="5s"
              values="0;100%;0"
              keyTimes="0;0.5;1"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0"
              to="0"
              dur="5s"
              values="0;1080;0"
              keyTimes="0;0.5;1"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </Card>
      <CodeExample>
        {`import React from "react";
import { Card, createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      padding: 40,
      marginTop: 20,
    },
    svgContent: {
      height: 30,
      width: "100%",
    },
    rectangle: {
      fill: theme.palette.primary.main,
      transformOrigin: "center",
      transformBox: "fill-box",
    },
  })
);
        
const SvgAnimations = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card} variant="outlined">
      <svg className={classes.svgContent}>
        <rect
          y={5}
          className={classes.rectangle}
          width={20}
          height={20}
          origin="center"
          viewBox="fill-content"
          rotate="20"
        >
          <animate
            attributeName="x"
            from="0"
            to="0"
            dur="5s"
            values="0;100%;0"
            keyTimes="0;0.5;1"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0"
            to="0"
            dur="5s"
            values="0;1080;0"
            keyTimes="0;0.5;1"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </Card>
  );
};`}
      </CodeExample>
    </ContentBox>
  );
};

export default SvgAnimations;
