import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Header from "../Header/Header";
import Profile from "../authentication/Profile";

class Dashboard extends Component {
  constructor(props){
    super();

    this.state = {
      step: 1
    }

  }

  render() {
    return (
      <>
      <Router basename="/account/">
        <div className="App">
          <div className="appDashboard">
            <Header />
            <Route exact path="/" component={Profile} />
          </div>
        </div>
      </Router>
      </>
    );
  }
}

export default Dashboard;