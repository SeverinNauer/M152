import React from "react";
import ContentBox from "../../components/ContentBox";
import { Typography } from "@material-ui/core";

const Impressum = () => {
  return (
    <ContentBox>
      <Typography variant="h4">Impressum</Typography>
      <br/>
      <Typography variant="h5">Kontaktadresse</Typography>
      <Typography variant="body2">Severin Nauer</Typography>
      <Typography variant="body2">Bodmern 2</Typography>
      <Typography variant="body2">8847 Egg</Typography>
      <Typography variant="body2">Schweiz</Typography>
      <Typography variant="body2">severin.nauer@gmail.com</Typography>
    </ContentBox>
  );
};

export default Impressum;
