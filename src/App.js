import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Login from './patient/Login';
import MetaMaskConnect from './patient/MetaMaskConnect';
import PatientDashBoard from './patient/PatientDashBoard';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/metamask" component={MetaMaskConnect} />
          <Route path="/dashboard" component={PatientDashBoard} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
