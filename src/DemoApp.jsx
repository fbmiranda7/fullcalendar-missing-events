import React, { useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

function App() {
  const calendar = useRef(null);

  const customButtons = {
    dayGridMonth: {
      text: 'Month',
      click: () => console.log(3547567636),
    },
  };

  return (
    <FullCalendar
      ref={calendar}
      height="auto"
      plugins={[dayGridPlugin, timeGridPlugin]}
    />
  );
}

export default App;
