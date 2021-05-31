import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";

import SignUpForm from "./authentication/SignUpForm";
import SignInForm from "./authentication/SignInForm";
import StoreForm from "./store/StoreForm";
import StoreBranchForm from "./store/StoreBranchForm";

import "../css/App.css";

class App extends Component {
  render() {
    return (
      <Router basename="/auth/">
        <div className="App">
          <div className="appAside" />
          <div className="appForm">
            <div className="pageSwitcher">
              <NavLink
                exact
                to="/"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/signup"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign Up
              </NavLink>
              <NavLink
                exact
                to="/store"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Apply Store
              </NavLink>
            </div>

            <Route exact path="/signup" component={SignUpForm} />
            <Route exact path="/" component={SignInForm} />
            <Route exact path="/store" component={StoreForm} />
            <Route path="/store/branch" component={StoreBranchForm} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
