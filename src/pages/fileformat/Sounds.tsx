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
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      padding: 40,
      marginTop: 20,
      display: "flex",
    },
    tableCard: {
      marginTop: 20,
      marginBottom: 20,
      overflowX: "auto"
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
      <Typography variant="h4">Sound formate</Typography>
      <Typography variant="h5">
        Untenstehend sind beispiele von Sound formaten zu finden
      </Typography>
      <br />
      <Typography variant="h6">Verfügbare Formate</Typography>
      <Typography variant="body2">
        Im Browser sind drei Sound Formate vefügbar. OGG, MP3 und WAV
      </Typography>
      <Card className={classes.tableCard}>
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
      </Card>
      <Typography variant="body2">
        Empfehlung 2020: <b>MP3</b> (ausser die Soundqualität muss extrem gut
        sein)
      </Typography>
      <br />
      <Typography variant="h6">
        Beispiel für Einbindung einer MP3 datei
      </Typography>
      <Card className={classes.card}>
        <audio controls className={classes.audio}>
          <source
            src={`${process.env.PUBLIC_URL}/assets/fileformats/sound/mp3-demo.mp3`}
            type="audio/mpeg"
          />
        </audio>
      </Card>
    </ContentBox>
  );
};

export default Sounds;
