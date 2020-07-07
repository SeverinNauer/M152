import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Card,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import React from "react";
import ContentBox from "../../components/ContentBox";
import TableCard from "../../components/TableCard";
import CodeExample from "./../../components/CodeExample";

type Format = {
  Abbreviation: string;
  Format: string;
  Extension: string;
};

const Formats: Format[] = [
  {
    Abbreviation: "GIF",
    Format: "Graphics Interchange Format",
    Extension: ".gif",
  },
  {
    Abbreviation: "ICO",
    Format: "Microsoft Icon",
    Extension: ".ico, .cur",
  },
  {
    Abbreviation: "JPEG",
    Format: "Joint Photographic Expert Group image",
    Extension: ".jpg, .jpeg, .jfif, .pjpeg, .pjp",
  },
  {
    Abbreviation: "PNG",
    Format: "Portable Network Graphics",
    Extension: ".png",
  },
  {
    Abbreviation: "SVG",
    Format: "Scalable Vector Graphics",
    Extension: ".svg",
  },
];

const useStyles = makeStyles((theme) =>
  createStyles({
    image: {
      width: "100%",
      marginBottom: -10,
    },
    gif: {
      width: "100%",
      marginBottom: -10,
      [theme.breakpoints.up("md")]: {
        maxWidth: "60%",
        margin: "20px auto",
      },
    },
    gifCard: {
      display: "flex",
    },
  })
);

const ImageFormat = () => {
  const classes = useStyles();
  return (
    <ContentBox>
      <Typography variant="h4">Bildformate</Typography>
      <br />
      <Typography variant="h5">Gebräuchliche Formate</Typography>
      <TableCard>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Abkürzung</TableCell>
              <TableCell>Datei Format</TableCell>
              <TableCell>Endungen</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Formats.map((format) => (
              <TableRow key={format.Abbreviation}>
                <TableCell>{format.Abbreviation}</TableCell>
                <TableCell>{format.Format}</TableCell>
                <TableCell>{format.Extension}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableCard>
      <Typography variant="h5">JPEG einbinden</Typography>
      <Typography variant="body1">
        Die Komprimierung von JPEG ist verlustreich. Daher ist Dateigrösse
        kleiner als bei PNG Dateien. Dieses format sollte also verwendet werden,
        wenn Dateigrösse ein wichtiger Faktor ist.
      </Typography>
      <Card>
        <img
          className={classes.image}
          src={`${process.env.PUBLIC_URL}/assets/fileformats/images/image.jpg`}
          alt="Meine Aussicht"
        />
      </Card>
      <CodeExample>
        {`<Card>
  <img
    className={classes.image}
    src={\`\${process.env.PUBLIC_URL}/assets/fileformats/images/image.jpg\`}
    alt="Meine Aussicht"
  />
</Card>`}
      </CodeExample>
      <br />
      <Typography variant="h5">PNG einbinden</Typography>
      <Typography variant="body1">
        Ein grosser Vorteil von PNG ist die Unterstützung von Transparenz.
        Zusätzlich ist die Komprimierung von PNG verlustfrei, was zwar zu guter
        Qualität aber zu hoher Dateigrössen führt. Es eignet sich gut für
        Grafiken und Icons.
      </Typography>
      <Card>
        <img
          className={classes.image}
          src={`${process.env.PUBLIC_URL}/assets/fileformats/images/image.png`}
          alt="Meine Aussicht"
        />
      </Card>
      <CodeExample>
        {`<Card>
  <img
    className={classes.image}
    src={\`\${process.env.PUBLIC_URL}/assets/fileformats/images/image.png\`}
    alt="Meine Aussicht"
  />
</Card>`}
      </CodeExample>
      <br />
      <Typography variant="h5">GIF einbinden</Typography>
      <Typography variant="body1">
        Gifs ermöglichen das Einbinden von animierten Bildern. Sie werden recht
        stark komprimiert und haben daher eine recht geringe Dateigrösse. Gifs
        unterstützen aber nur einen kleinen Farbbereich und sind daher für
        Bilder ungeignet. Sie sollten vorallem für animierte Bilder verwendet
        werden.
      </Typography>
      <Card className={classes.gifCard}>
        <img
          className={classes.gif}
          src={`${process.env.PUBLIC_URL}/assets/fileformats/images/hello.gif`}
          alt="Hello Gif"
        />
      </Card>
      <CodeExample>
        {`<Card>
  <img
    className={classes.image}
    src={\`\${process.env.PUBLIC_URL}/assets/fileformats/images/Hello.gif\`}
    alt="Hello Gif"
  />
</Card>`}
      </CodeExample>
    </ContentBox>
  );
};

export default ImageFormat;
