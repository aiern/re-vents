import React, { useState } from "react";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import HomePage from "../../features/home/HomePage";
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
        <Route exact path='/' component={HomePage} />
        <Route exact path='/events' component={EventDashboard} />
        <Route path='/events/:id' component={EventDetailedPage} />
        <Route path='/createEvent' component={EventForm} />
      </Container>
    </div>
  );
}

export default App;
