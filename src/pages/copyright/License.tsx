import React from "react";
import ContentBox from "../../components/ContentBox";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";

const License = () => {
  return (
    <ContentBox>
      <Typography variant="h4">Lizenzen und Urheberrecht</Typography>
      <Typography variant="h6">
        Auf dieser Seite werden Begriffe zum Thema Lizenzen und Urheberrecht in
        eigenen Worten beschrieben.
      </Typography>
      <br />
      <Typography variant="h5">Public Domain</Typography>
      <Typography variant="body1">
        Public Domain, oder auf Deutsch "Gemeinfreiheit", beschreibt Kunst,
        schriftstellerische Arbeiten und auch Computerprogramme, die nicht
        urheberrechtlich geschützt sind. Der Inhaber der Rechte kann auch selber
        einen Rechteverzicht leisten. Anschliessend gehören diese Werke
        ebenfalls zur Public Domain. Konkret bedeutet dass, das die Werke in der
        Public Domain frei genutzt werden können.
      </Typography>
      <br />
      <Typography variant="h5">Fair Use</Typography>
      <Typography variant="body1">
        Das Fair-Use-Prinzip bezieht sich auf die Benutzung von urheberrechtlich
        geschützen Materialien. Wie es der Name des Prinzips schon vermuten
        lässt, geht es darum die Nutzung und die Regelierung der Verwendung von
        geschützen Material möglichst fair (angemmesen) zu gestalten. Damit die
        Nutzung unter dem Fair-Use-Prinzip gültig gemacht werden kann, müssen
        einige Faktoren berücksichtigt werden:
      </Typography>
      <List>
        <ListItem alignItems="flex-start">
          <ListItemText
            primary="Zweck der Nutzung"
            secondary="Es muss unterschieden werden zwischen der Nutzung für Bildungszwecken oder kommerzieller Nutzung"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Art des Urheberrechts"
            secondary="Hier gilt es zu klären ob das Werk auf realen, nachweisbaren, Fakten basiert, oder von fiktiver Natur ist."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Anteil im Verhältnis zum gesamten Werk"
            secondary={`Die Nutzung von kleineren Textausschnitten aus dem Originalwerk ist in der Regel erlaubt. Bei längeren Abschnitten oder gar Absätzen kann es zu problemen führen. Auch hier gibt es aber ausnahmen, sofern die Anwendung noch mit "Angemessen" begründet werden kann`}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Eigene Originalinhalte hinzufügen"
            secondary={`Dem neuen Werk muss eine neue Bedeutung zugesprochen werden können. Hier gilt es das Verhältnis des geschützten Materials zum eigenen zugefügten Inhalt zu beachten.`}
          />
        </ListItem>
      </List>
    </ContentBox>
  );
};

export default License;
