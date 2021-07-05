import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";

import StoreForm from './StoreForm';

class Store extends Component {

  render() {
    return (
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
            <StoreForm />
          </div>
        </div>
    );
  }
}

export default Store;
