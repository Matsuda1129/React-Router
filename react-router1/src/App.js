import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'


class App extends Component {
  render() {
    return (
      <Router>
        <Link to="/Page1" >Page1 </Link>
        <Link to="/Page2" >Page2 </Link>
        <Link to="/Page3" >Page3 </Link>
        <Switch>
          <Route path='/Page1' component={Page1} />
          <Route path='/Page2' component={Page2} />
          <Route path='/Page3' component={Page3} />
        </Switch>
      </Router>
    );
  }
}

export default App;
