import React, { Component } from 'react';
import './App.css';
import {Route,BrowserRouter as Router, Switch} from 'react-router-dom'; //v4
import HomePage from './containers/HomePage';
import NotFindPage from './containers/NotFindPage';

class App extends Component {
  render() {
    return (
      <div className="App">
           <Switch>
                {/*相当于IndexRouter*/}
                <Route exact path='/' component={HomePage} />
                <Route  component={NotFindPage} />
            </Switch>
      </div>
    );
  }
}

export default App;
