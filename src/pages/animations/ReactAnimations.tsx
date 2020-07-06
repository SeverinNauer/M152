import React, { useState } from "react";
import ContentBox from "../../components/ContentBox";
import {
  Typography,
  Link,
  makeStyles,
  createStyles,
  Card,
  Collapse,
  Switch,
} from "@material-ui/core";
import CodeExample from "../../components/CodeExample";

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      padding: 40,
      marginTop: 20,
      display: "flex",
      justifyContent: "center",
    },
    rectangle: {
      fill: theme.palette.primary.main,
    },
  })
);

const ReactAnimations = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ContentBox>
      <Typography variant="h4">React Animationen</Typography>
      <Typography variant="h5">Beispiel einer Animation mit React</Typography>
      <br />
      <Typography variant="h6">
        Für das Beispiel wurde das{" "}
        <Link href="https://material-ui.com/">Material UI</Link> React Package
        verwendet.
      </Typography>
      <Card className={classes.card}>
        <Switch
          color="primary"
          checked={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        />
        <Collapse in={isOpen}>
          <svg height={150} width={200}>
            <rect height={150} width={200} className={classes.rectangle}></rect>
          </svg>
        </Collapse>
      </Card>
      <CodeExample>{`import React, { useState } from "react";
import { makeStyles, createStyles, Card, Collapse, Switch} from "@material-ui/core";
      
const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      padding: 40,
      marginTop: 20,
      display: "flex",
      justifyContent: "center",
    },
    rectangle: {
      fill: theme.palette.primary.main,
    },
  })
);

const ReactAnimations = () => {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Card className={classes.card}>
            <Switch
              color="primary"
              checked={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
            <Collapse in={isOpen}>
                <svg height={150} width={200}>
                    <rect height={150} width={200} className={classes.rectangle}></rect>
                </svg>
            </Collapse>
        </Card>
    );
};
      `}</CodeExample>
    </ContentBox>
  );
};

export default ReactAnimations;
