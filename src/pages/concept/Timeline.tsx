import React from "react";
import ContentBox from "../../components/ContentBox";
import { Typography } from "@material-ui/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import momentPlugin from "@fullcalendar/moment";

const Timeline = () => {
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
          slotLabelFormat="HH:00"
          slotMinTime="06:00:00"
          dayHeaderFormat="dd DD.MM"
          firstDay={1}
        />
      </div>
    </ContentBox>
  );
};

export default Timeline;
