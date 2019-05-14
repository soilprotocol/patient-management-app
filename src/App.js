import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"; 
import './App.css';
import auth from 'solid-auth-client'; 
import Navbar from './components/stateless_components/Navbar/Navbar'; 
import PatientsOverview from './components/stateful_components/PatientsOverview/PatientsOverview';
import LoggedOut from './components/stateless_components/LoggedOut/LoggedOut'; 
import PatientDetails from './components/stateful_components/PatientDetails/PatientDetails';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      webId: undefined
    }
  }

  async login() {
    const session = await auth.currentSession(); 
    if(!session) {
      await auth.login("https://solid.community"); 
    } else {
      this.setState({
        webId: session.webId
      });
    }
  }

  logout() {
    auth.logout().then(() => {
      this.setState({
        webId: undefined
      });
    }); 
  }

  componentDidMount () {
    auth.trackSession(session => {
      if(!session) {
        console.log("You are logged out"); 
      } else {
        console.log("You are logged in, fetching data now");
        this.setState({
          webId: session.webId
        }); 
        }
      });
  }

  render() {
    return (
          <BrowserRouter>
            <Navbar onClick={
              this.state.webId ? this.logout.bind(this) : this.login.bind(this)
            }
            webId={this.state.webId}
            />
            <Switch>
              <Route exact path ="/" component={this.state.webId ? PatientsOverview : LoggedOut} /> 
              <Route exact path ="/patient/detail" component= {this.state.webId ? PatientDetails : LoggedOut} /> 
            </Switch>
          </BrowserRouter>
    );
  }
}

export default App;

{/* <Route exact path ="/" render={() => this.state.webId ? <PatientsOverview /> : <LoggedOut /> } /> 
<Route exact path ="/patient/detail" render={() => this.state.webId ? <PatientDetails /> : <LoggedOut /> } />  */}
