import React from "react";
import ContentBox from "../../components/ContentBox";
import { Typography, Card, makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      padding: theme.spacing(2),
    },
  })
);

const Impressum = () => {
  const classes = useStyles();
  return (
    <ContentBox>
      <Typography variant="h4">{`Impressum & Copyright`} </Typography>
      <br />
      <Card className={classes.card}>
        <Typography variant="h5">Kontaktadresse</Typography>
        <br />
        <Typography variant="body2">Severin Nauer</Typography>
        <Typography variant="body2">Bodmern 2</Typography>
        <Typography variant="body2">8847 Egg</Typography>
        <Typography variant="body2">Schweiz</Typography>
        <Typography variant="body2">+41 78 649 77 37</Typography>
        <Typography variant="body2">severin.nauer@gmail.com</Typography>
      </Card>
      <br />
      <br />
      <Card className={classes.card}>
        <Typography variant="h5">Copyright</Typography>
        <br />
        <Typography variant="body2">
          Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder
          anderen Dateien auf dieser Website, gehören ausschliesslich dem oben
          genannten Besitzer oder den speziell genannten Rechteinhabern. Für die
          Reproduktion jeglicher Elemente ist die schriftliche Zustimmung des
          Urheberrechtsträgers im Voraus einzuholen.
        </Typography>
      </Card>
    </ContentBox>
  );
};

export default Impressum;
