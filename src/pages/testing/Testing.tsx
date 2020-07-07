import React from "react";
import ContentBox from "../../components/ContentBox";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Card,
  Grid,
} from "@material-ui/core";

type Test = {
  Title: string;
  Date: string;
  Description: string;
  Result: string;
  Status: string;
};

const Tests: Test[] = [
  {
    Title: "Navigation Drawer",
    Date: "07.07.2020",
    Description:
      "Der NavigationDrawer auf der Linken Seite wird automatisch ausgeblendet, sobal sich die Seite in der Mobilen Ansicht befindet. Bei der Desktopansicht soll der NavigationDrawer wieder automatisch eingeblendet werden.",
    Result: "Wie erwartet",
    Status: "Okay",
  },
  {
    Title: "Menü Button",
    Date: "07.07.2020",
    Description:
      "Die Navigation kann in der mobilen Ansicht mit einem Knopfdruck auf das Menü Icon in der linken oberen Ecke geöffnet und geschlossen werden",
    Result: "Wie erwartet",
    Status: "Okay",
  },
  {
    Title: "Menü Button auf Desktop ansicht",
    Date: "07.07.2020",
    Description: "Der Menü Button ist in der Desktop ansicht nicht sichtbar",
    Result: "Wie erwartet",
    Status: "Okay",
  },
  {
    Title: "Mockup Seite",
    Date: "07.07.2020",
    Description:
      "Die Gifs zum Mockup werden in der mobilen, sowie in der Desktop version komplett angezeigt und sind nicht abgeschnitten.",
    Result: "Wie erwartet",
    Status: "Okay",
  },
  {
    Title: "Videoformate Seite",
    Date: "07.07.2020",
    Description:
      "Die Videos werden in der mobilen, sowie in der Desktop version komplett angezeigt und sind nicht abgeschnitten.",
    Result: "Wie erwartet",
    Status: "Okay",
  },
  {
    Title: "Bildformate Seite",
    Date: "07.07.2020",
    Description:
      "Die Bilder werden in der mobilen, sowie in der Desktop version komplett angezeigt und sind nicht abgeschnitten.",
    Result: "Wie erwartet",
    Status: "Okay",
  },
  {
    Title: "HTML Canvas Seite",
    Date: "07.07.2020",
    Description:
      "Die Canvas Uhr wird in der mobilen, sowie in der Desktop version komplett angezeigt und ist nicht abgeschnitten.",
    Result: "Wie erwartet",
    Status: "Okay",
  },
  {
    Title: "Slideshow Seite",
    Date: "07.07.2020",
    Description:
      "Die Slideshow wird in der mobilen, sowie in der Desktop version komplett angezeigt und ist nicht abgeschnitten.",
    Result: "Wie erwartet",
    Status: "Okay",
  },
];

const Testing = () => {
  return (
    <ContentBox>
      <Typography variant="h4">Testfälle</Typography>
      <Typography variant="h6">
        Untenstehend sind einige Testfälle definiert und getestet um
        sicherzustellen, dass die Seite auf dem Desktop sowie in der Mobile
        Ansicht funktioniert.
      </Typography>
      <br />
      <Grid container spacing={2}>
        {Tests.map((test) => (
          <Grid item xs={12} lg={6}>
            <Typography variant="h5">{test.Title}</Typography>
            <br />
            <Card>
              <List>
                <ListItem>
                  <ListItemText primary="Datum" secondary={test.Date} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Beschreibung"
                    secondary={test.Description}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Resultat" secondary={test.Result} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Status" secondary={test.Status} />
                </ListItem>
              </List>
            </Card>
            <br />
          </Grid>
        ))}
      </Grid>
    </ContentBox>
  );
};

export default Testing;
