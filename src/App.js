import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"; 
import './App.css';
import Navbar from './components/stateless_components/Navbar/Navbar'; 
import Dashboard from './components/stateless_components/Dashboard/Dashboard'; 


class App extends React.Component {
  render() {
    return (
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route exact path ="/" component={Dashboard} /> 
            </Switch>
          </BrowserRouter>
    );
  }
}

export default App;
