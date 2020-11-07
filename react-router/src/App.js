import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Page1} />
          <Route path='/Page2' component={Page2} />
          <Route path='/Page3' component={Page3} />
        </Switch>
      </Router>
    );
  }
}

export default App;

