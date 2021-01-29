import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
// import 'styles.css';

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setselectedEvent] = useState(null);

  function handleSelectEvent(event) {
    setselectedEvent(event);
    setFormOpen(true);
  }

  function handleCreateFormOpen() {
    setselectedEvent(null);
    setFormOpen(true);
  }

  return (
    <div>
      <NavBar setFormOpen={handleCreateFormOpen} />
      <Container className='main'>
        <EventDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          selectEvent={handleSelectEvent}
          selectedEvent={selectedEvent}
        />
      </Container>
    </div>
  );
}

export default App;
