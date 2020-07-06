import React from "react";
import ContentBox from "../../components/ContentBox";
import {
  Typography,
  Tooltip,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import FullCalendar, { EventInput, EventContentArg } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import momentPlugin from "@fullcalendar/moment";
import delocale from "@fullcalendar/core/locales/de";

const events: EventInput[] = [
  //15.Mai
  {
    title: "Einführung",
    start: new Date(2020, 4, 15, 13, 0),
    end: new Date(2020, 4, 15, 14, 30),
  },
  {
    title: "Mockup erstellen",
    start: new Date(2020, 4, 15, 14, 30),
    end: new Date(2020, 4, 15, 16, 30),
  },
  {
    title: "Mockup erstellen",
    start: new Date(2020, 4, 15, 14, 30),
    end: new Date(2020, 4, 15, 16, 30),
  },
  //29.Mai
  {
    title: "Input Urheberrecht",
    start: new Date(2020, 4, 29, 13, 0),
    end: new Date(2020, 4, 29, 14, 0),
  },
  {
    title: "Mockup beenden",
    start: new Date(2020, 4, 29, 14, 0),
    end: new Date(2020, 4, 29, 16, 30),
  },
  //5.Juni
  {
    title: "Input SVG",
    start: new Date(2020, 5, 5, 13, 0),
    end: new Date(2020, 5, 5, 14, 0),
  },
  {
    title: "Style Guide erstellen",
    start: new Date(2020, 5, 5, 14, 0),
    end: new Date(2020, 5, 5, 15, 0),
  },
  {
    title: "React app initialisieren",
    start: new Date(2020, 5, 5, 15, 0),
    end: new Date(2020, 5, 5, 15, 30),
  },
  {
    title: "Grund Layout erstellen",
    start: new Date(2020, 5, 5, 15, 30),
    end: new Date(2020, 5, 5, 16, 30),
  },
  //12.Juni
  {
    title: "Input HTML Canvas",
    start: new Date(2020, 5, 12, 13, 0),
    end: new Date(2020, 5, 12, 14, 0),
  },
  {
    title: "Grund Layout erweitern",
    start: new Date(2020, 5, 12, 14, 0),
    end: new Date(2020, 5, 12, 16, 30),
  },
  //19.Juni
  {
    title: "Input zu Animationen",
    start: new Date(2020, 5, 19, 13, 0),
    end: new Date(2020, 5, 19, 13, 30),
  },
  {
    title: "React Routing einrichten",
    start: new Date(2020, 5, 19, 13, 30),
    end: new Date(2020, 5, 19, 14, 30),
  },
  {
    title: "Drawer hinzufügen",
    start: new Date(2020, 5, 19, 14, 30),
    end: new Date(2020, 5, 19, 16, 30),
  },
  //26.Juni
  {
    title: "CSS und SVG Animationen hinzufügen",
    start: new Date(2020, 5, 26, 13, 0),
    end: new Date(2020, 5, 26, 15, 30),
  },
  {
    title: "Drawer erweitern",
    start: new Date(2020, 5, 26, 15, 30),
    end: new Date(2020, 5, 26, 16, 30),
  },
  //03.Juli
  {
    title: "HTML Canvas Beispiel hinzufügen",
    start: new Date(2020, 6, 3, 13, 0),
    end: new Date(2020, 6, 3, 14, 30),
  },
  {
    title: "Impressum hinzufügen",
    start: new Date(2020, 6, 3, 14, 30),
    end: new Date(2020, 6, 3, 14, 45),
  },
  {
    title: "Bilder Seite einfügen",
    start: new Date(2020, 6, 3, 14, 45),
    end: new Date(2020, 6, 3, 15, 30),
  },
  {
    title: "Sound Seite hinzufügen",
    start: new Date(2020, 6, 3, 15, 30),
    end: new Date(2020, 6, 3, 16, 30),
  },
  //04.Juli
  {
    title: "Code Beispiele hinzufügen",
    start: new Date(2020, 6, 4, 8, 30),
    end: new Date(2020, 6, 4, 10, 0),
  },
  {
    title: "Kalender für Zeitplan hinzufügen",
    start: new Date(2020, 6, 4, 10, 0),
    end: new Date(2020, 6, 4, 11, 30),
  },
  //06.Juli
  {
    title: "Video Seite hinzufügen",
    start: new Date(2020, 6, 6, 18, 30),
    end: new Date(2020, 6, 6, 19, 0),
  },
  {
    title: "Zeitplan einfügen",
    start: new Date(2020, 6, 6, 19, 30),
    end: new Date(2020, 6, 6, 20, 0),
  },
];
const useStyles = makeStyles((theme) =>
  createStyles({
    tooltip: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.getContrastText(theme.palette.background.paper),
      fontSize: theme.typography.caption.fontSize,
      padding: theme.spacing(2),
      border: "0.5px solid",
    },
    event: {
      "&:hover": {
        cursor: "pointer",
      },
    },
  })
);
const Timeline = () => {
  const classes = useStyles();
  return (
    <ContentBox>
      <Typography variant="h4">Zeitplan</Typography>
      <br />
      <div>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, momentPlugin]}
          initialView="timeGridWeek"
          headerToolbar={{
            left: "prev,next",
            center: "title",
            right: "timeGridWeek,dayGridMonth",
          }}
          titleFormat={"DD.MM.yyyy"}
          allDaySlot={false}
          locale={delocale}
          slotLabelFormat="HH:00"
          slotMinTime="06:00:00"
          firstDay={1}
          events={events}
          eventContent={renderEventContent(classes)}
        />
      </div>
      <br />
      <br />
      <br />
    </ContentBox>
  );
};

const renderEventContent = (classes: Record<"tooltip" | "event", string>) => (
  eventInfo: EventContentArg
) => {
  return (
    <Tooltip
      classes={{ tooltip: classes.tooltip }}
      title={eventInfo.event.title}
      placement="right-end"
    >
      <div className={classes.event}>
        <b>{eventInfo.timeText}</b>
        <i> {eventInfo.event.title}</i>
      </div>
    </Tooltip>
  );
};

export default Timeline;
