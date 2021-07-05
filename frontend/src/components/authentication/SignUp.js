import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";

import SignUpForm from './SignUpForm';

class SignUp extends Component {
  constructor () {
    super();

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

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
            <SignUpForm />
          </div>
        </div>
    );
  }
}

export default SignUp;
