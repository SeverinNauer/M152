import React from "react";
import ContentBox from "../../components/ContentBox";
import {
  Typography,
  Card,
  makeStyles,
  createStyles,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Link,
} from "@material-ui/core";
import TableCard from "../../components/TableCard";
import CodeExample from "../../components/CodeExample";

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      padding: 40,
      marginTop: 20,
      display: "flex",
    },
    audio: {
      margin: "auto",
    },
  })
);

type SoundFormat = {
  Type: string;
  Compression: string;
  Support: string;
  Quality: string;
  Size: string;
};
const SoundFormats: SoundFormat[] = [
  {
    Type: "MP3",
    Compression: "compressed",
    Support: "Sehr gut",
    Quality: "Hängt von Compression ab",
    Size: "Klein",
  },
  {
    Type: "OGG",
    Compression: "compressed",
    Support: "Nicht so gut",
    Quality: "Hängt von Compression ab",
    Size: "am kleinsten",
  },
  {
    Type: "WAV",
    Compression: "uncompressed",
    Support: "Gut",
    Quality: "am Besten",
    Size: "Gross",
  },
];

const Sounds = () => {
  const classes = useStyles();
  return (
    <ContentBox>
      <Typography variant="h4">Soundformate</Typography>
      <br />
      <Typography variant="h6">Verfügbare Formate</Typography>
      <Typography variant="body2">
        Im Browser sind drei Sound Formate vefügbar. OGG, MP3 und WAV
      </Typography>
      <TableCard>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Typ</TableCell>
              <TableCell>Compression</TableCell>
              <TableCell>Browser Support</TableCell>
              <TableCell>Qualität</TableCell>
              <TableCell>Grösse</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {SoundFormats.map((format) => (
              <TableRow key={format.Type}>
                <TableCell>{format.Type}</TableCell>
                <TableCell>{format.Compression}</TableCell>
                <TableCell>{format.Support}</TableCell>
                <TableCell>{format.Quality}</TableCell>
                <TableCell>{format.Size}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableCard>
      <Typography variant="body2">
        Empfehlung 2020: <b>MP3</b> (ausser die Soundqualität muss extrem gut
        sein)
      </Typography>
      <br />
      <Typography variant="h6">
        Beispiel für Einbindung einer MP3 datei
      </Typography>
      <Typography variant="body1">
        Die Benutzte MP3 Datei wurde aus{" "}
        <Link href="https://www.youtube.com/watch?v=RQ5IkSeMQbc">
          diesem Lied
        </Link>{" "}
        auf Youtube erstellt.
      </Typography>
      <Card className={classes.card}>
        <audio controls className={classes.audio}>
          <source
            src={`${process.env.PUBLIC_URL}/assets/fileformats/sound/mp3-demo.mp3`}
            type="audio/mpeg"
          />
        </audio>
      </Card>
      <CodeExample>
        {`<audio controls>
  <source
    src={\`\${process.env.PUBLIC_URL}/assets/fileformats/sound/mp3-demo.mp3\`}
    type="audio/mpeg"
  />
</audio>`}
      </CodeExample>
      <Typography variant="h6">Andere Formate einbinden</Typography>
      <Typography variant="body1">
        Die Anderen Formate (OGG und WAV) können auf die genau gleiche Weise
        eingebunden werden. Dabei gilt es aber die Browser Kompatibilität zu
        beachten. <br />
        Der Typ muss zusätzlich auch noch als Tag angegeben werden.
      </Typography>
      <CodeExample>
        {`<audio controls>
  <source
    src={\`\${process.env.PUBLIC_URL}/assets/fileformats/sound/OGG-demo.ogg\`}
    type="audio/ogg"
  />
</audio>
<audio controls>
  <source
    src={\`\${process.env.PUBLIC_URL}/assets/fileformats/sound/Wav-demo.wav\`}
    type="audio/wav"
  />
</audio>`}
      </CodeExample>
    </ContentBox>
  );
};

export default Sounds;
