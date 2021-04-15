import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddService from './components/AddService/AddService';
import ManageServices from './components/Dashboard/ManageServices/ManageServices';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/addService">
            <AddService />
          </Route>
          <Route path="/manageService">
            <ManageServices />
          </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
