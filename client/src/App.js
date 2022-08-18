import Tickets from './pages/Tickets';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Winner from './pages/Winner';
import Events from './pages/Events';
import EventsTable from './pages/EventsTable';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
    return (
    <div className='wrapper'>
      <Router>
        <Header />
        <Switch>
          <Route path="/winners">
            <Winner />
          </Route>
          <Route path="/tickets/:ticketID" component={EventsTable} />
          <Route path="/tickets">
            <Tickets />
          </Route>
          <Route path="/">
            <Events />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
