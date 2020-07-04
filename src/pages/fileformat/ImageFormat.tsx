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
        margin: "20px auto"
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
      <Card>
        <img
          className={classes.image}
          src={`${process.env.PUBLIC_URL}/assets/fileformats/images/image.jpg`}
          alt="Meine Aussicht"
        />
      </Card>
      <br />
      <Typography variant="h5">PNG einbinden</Typography>
      <Card>
        <img
          className={classes.image}
          src={`${process.env.PUBLIC_URL}/assets/fileformats/images/image.png`}
          alt="Meine Aussicht"
        />
      </Card>
      <br />
      <Typography variant="h5">GIF einbinden</Typography>
      <Card className={classes.gifCard}>
        <img
          className={classes.gif}
          src={`${process.env.PUBLIC_URL}/assets/fileformats/images/trump.gif`}
          alt="Funny Gif"
        />
      </Card>
    </ContentBox>
  );
};

export default ImageFormat;
