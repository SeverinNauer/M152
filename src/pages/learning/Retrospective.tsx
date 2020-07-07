import React from "react";
import ContentBox from "../../components/ContentBox";
import { Typography } from "@material-ui/core";

const Retrospective = () => {
  return (
    <ContentBox>
      <Typography variant="h4">Reflexion</Typography>
      <Typography variant="h6">
        Untenstehend habe ich meine Lernerfolge zum Modul festgehalten
      </Typography>
      <br />
      <Typography variant="h5">Vorwissen</Typography>
      <Typography variant="body1">
        Ich habe im Betrieb und in eigenen Projekten schon oft mit React im Web
        gearbeitet. Daher habe ich mich erneut für diese Library entschieden.
        <br />
        Mit Animationen habe ich mich aber im voraus kaum beschäftigt. Ich habe
        jeweils einfach die Komponenten genutzt, die mir von Material UI zur
        verfügung gestellt wurden.
      </Typography>
      <br />
      <Typography variant="h5">Neue Erfahrungen</Typography>
      <Typography variant="h6">Animationen</Typography>
      <Typography variant="body1">
        Ich habe in diesem Modul das erste mal eigene Animationen mit CSS und
        SVG erstellt. Ich war vorallem davon überrascht wie einfach es ist mit
        SVG, ohne CSS und JavaScript, Animationen zu erstellen. Ich denke ich
        werde wieder einmal eine SVG Animation in erwägung ziehen, wenn ich auf
        einen geeigneten Use-Case treffe.
        <br />
        Für CSS Animationen kannte ich zwar schon das "transform" Schlüsselwort,
        "Keyframes" und deren Anwendung waren mir aber neu. Ich war auch hier
        wieder überrascht wie einfach es ist mit diesen ein funktionierendes
        Beispiel zum Laufen zu bringen. Ich habe versucht bei den Beispielen
        keine fertigen Animationen zu kopieren, sondern meine eigenen zu
        erstellen.
      </Typography>
      <br />
      <Typography variant="h6">HTML Canvas</Typography>
      <Typography variant="body1">
        Mit dem HTML Canvas habe ich zuvor noch nie gearbeitet. Ich empfand es
        aber als mühsam damit ein Beispiel zu erstellen. Ich finde es gut dass
        ich jetzt weiss wie es funktioniert auf dem Canvas zu zeichnen, aber ich
        denke kaum, dass ich in naher Zukunft wieder einmal damit arbeiten
        werden. Ich glaube für Einsatzmöglichkeiten, in denen man HTML Canvas
        verwenden könnte, wäre es auch möglich SVG Grafiken in Verbindung mit
        JavaScript zu benutzen. Das wäre wahrscheinlich oft die bessere Option. 
      </Typography>
    </ContentBox>
  );
};
export default Retrospective;
