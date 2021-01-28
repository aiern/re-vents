import React, {useState} from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';
// import 'styles.css';

function App() {
  const [formOpen, setFormOpen] = useState(false)

  return (
    <div>
      <NavBar setFormOpen={setFormOpen}/>
      <Container className='main'>

        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen}/>
      </Container>
    </div>
  );
}

export default App;
