import { Link, Typography } from "@material-ui/core";
import React from "react";
import ContentBox from "../components/ContentBox";

const Index = () => {
  return (
    <ContentBox>
      <Typography variant="h4">Modul 152 Showcase</Typography>
      <br />
      <Typography variant="body1">
        Willkommen auf meiner Showcase Seite zum Modul 152. Auf dieser Website
        wurde das{" "}
        <Link href="https://docs.google.com/spreadsheets/d/1ThwJMPpVxhdH-PKnO9mBeibByK5aaCrvHyc6hRdd-0U/edit#gid=1190714047">
          Kompetenzraster
        </Link>{" "}
        abgearbeitet.
      </Typography>
      <br />
      <Typography variant="h5">Navigation</Typography>
      <Typography variant="body1">
        Auf der Linken seite sind sind die Punkte des Kompetenzrasters
        aufgereit. Diese verweisen auf die Seiten zu den jeweiligen Punkte.
        <br /> Die Seiten beinhalten Beschreibungen oder Beispiele zu den
        jeweiligen Themen.
      </Typography>
      <br />
      <Typography variant="h5">Source Code</Typography>
      <Typography variant="body1">
        Der Source Code zu dieser Seite kann in meinem{" "}
        <Link href="https://github.com/SeverinNauer/M152">
          Github Repository
        </Link>{" "}
        angeschaut und heruntergeladen werden.
      </Typography>
    </ContentBox>
  );
};

export default Index;
