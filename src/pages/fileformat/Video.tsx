import React from "react";
import ContentBox from "../../components/ContentBox";
import { Card, Typography, makeStyles, createStyles } from "@material-ui/core";
import CodeExample from "../../components/CodeExample";

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      padding: 0,
      marginTop: 20,
      display: "flex",
    },
    audio: {
      margin: "auto",
    },
  })
);

const Video = () => {
  const classes = useStyles();
  return (
    <ContentBox>
      <Typography variant="h4">Soundformate</Typography>
      <br />
      <Typography variant="h6">MP4 Video</Typography>
      <Card className={classes.card}>
        <video controls>
          <source
            src={`${process.env.PUBLIC_URL}/assets/fileformats/videos/Flickshot.mp4`}
            type="video/mp4"
          />
        </video>
      </Card>
      <CodeExample>{`<video controls>
    <source
        src={\`\${process.env.PUBLIC_URL}/assets/fileformats/videos/Flickshot.mp4\`}
        type="video/mp4"/>
</video>`}</CodeExample>
    </ContentBox>
  );
};

export default Video;
