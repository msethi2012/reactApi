import React, { Component } from 'react';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom'
//import App from "./App";
import News from "./components/News";
class Header extends Component {
  render() {
    return (
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <Switch>
              <Route exact path="/" component={News}/>
              <Route exact path="/news" component={News}/>
            </Switch>
          </div>
        </Router>
   )
  }
}

export default Header;
