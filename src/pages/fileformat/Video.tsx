import React from "react";
import ContentBox from "../../components/ContentBox";
import {
  Card,
  Typography,
  makeStyles,
  createStyles,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import CodeExample from "../../components/CodeExample";
import TableCard from "../../components/TableCard";

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      padding: 0,
      marginTop: 20,
      display: "flex",
    },
    video: {
      height: "auto",
      width: "100%",
    },
  })
);

type VideoFormat = {
  Format: string;
  Support: string;
  MediaType: string;
};

const SoundFormats: VideoFormat[] = [
  {
    Format: "MP4",
    Support: "Sehr gut",
    MediaType: "video/mp4",
  },
  {
    Format: "WebM",
    Support: "Mässig (IE und Safari probleme)",
    MediaType: "video/webm",
  },
  {
    Format: "OGG",
    Support: "Mässig (IE und Safari probleme)",
    MediaType: "video/ogg",
  },
];

const Video = () => {
  const classes = useStyles();
  return (
    <ContentBox>
      <Typography variant="h4">Videoformate</Typography>
      <br />
      <Typography variant="h5">Gängige Video Formate</Typography>
      <TableCard>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Datei Format</TableCell>
              <TableCell>Browser Support</TableCell>
              <TableCell>Media Typ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {SoundFormats.map((format) => (
              <TableRow key={format.Format}>
                <TableCell>{format.Format}</TableCell>
                <TableCell>{format.Support}</TableCell>
                <TableCell>{format.MediaType}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableCard>
      <Typography variant="h6">Einbinden eines MP4 Videos</Typography>
      <Card className={classes.card}>
        <video controls className={classes.video}>
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
      <Typography variant="h6">Andere Formate einbinden</Typography>
      <Typography variant="body1">
        Die Anderen Formate (OGG und WebM) können auf die genau gleiche Weise
        eingebunden werden. Dabei gilt es aber die Browser Kompatibilität zu
        beachten. <br />
        Der Typ muss zusätzlich auch noch als Tag angegeben werden.
      </Typography>
      <CodeExample>
        {`<video controls>
  <source
    src={\`\${process.env.PUBLIC_URL}/assets/fileformats/sound/Flickshot.ogg\`}
    type="video/ogg"
  />
</video>
<video controls>
  <source
    src={\`\${process.env.PUBLIC_URL}/assets/fileformats/sound/Flickshot.webm\`}
    type="video/webm"
  />
</video>`}
      </CodeExample>
      <Typography variant="h6">Empfehlung</Typography>
      <Typography variant="body1">
        MP4 ist im Jahr 2020 immer noch die beste Wahl, wenn es darum geht das
        Video auf allen Browsern abzuspielen. Wem Open Source wichtig ist, würde
        ich WebM empfehlen.
      </Typography>
    </ContentBox>
  );
};

export default Video;
