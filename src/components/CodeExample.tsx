import {
  Card,
  Collapse,
  createStyles,
  IconButton,
  makeStyles,
  Tooltip,
} from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import Prism from "prismjs";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    codeIcon: {
      marginLeft: "auto",
    },
    code: {
      display: "flex",
      flexDirection: "column",
    },
  })
);

const CodeExample: React.FC = (props) => {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    console.log(Prism.languages);
    Prism.highlightAll();
  }, []);

  return (
    <div className={classes.code}>
      <Tooltip
        title="Quellcode anzeigen"
        aria-label="show source"
        placement="top"
      >
        <IconButton
          className={classes.codeIcon}
          onClick={() => setIsOpen(!isOpen)}
        >
          <CodeIcon />
        </IconButton>
      </Tooltip>
      <Collapse in={isOpen}>
        <Card>
          <pre>
            <code className="language-tsx">{props.children}</code>
          </pre>
        </Card>
      </Collapse>
    </div>
  );
};

export default CodeExample;
