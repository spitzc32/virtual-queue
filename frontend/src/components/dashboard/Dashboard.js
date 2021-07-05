import React, { Component } from "react";
import { HashRouter as Router, Route, Switch, useRouteMatch } from "react-router-dom";

import Header from "../Header/Header";
import Profile from "../authentication/Profile";
import Home from "./Home";
import Order from "../order/Order";
import Message from "../elements/Message";
import MomentUtils from '@date-io/moment';

import { UserContext } from "../../context/UserContext";

class Dashboard extends Component {
  static contextType = UserContext;

  componentDidMount() {
    console.log(this.context);
  }

  constructor(){
    super();

    this.state = {
      step: 1,
      user: [],
      isWorker: false,
      open: false,
      message: 'Welcome to Virtual Queue!'
    };

  this.toHome = this.toHome.bind(this);
  this.toProfile = this.toProfile.bind(this);
  this.toOrder = this.toOrder.bind(this);
  this.handleModalOpen = this.handleModalOpen.bind(this);

  }

  toHome(event) {
    const { step } = this.state;
    this.setState({
        step: 1,
    });
  }

  handleModalOpen (event) {
   const { open } = this.state;
    this.setState({
        open: !open,
    });
  }

  toProfile(event) {
    const { step } = this.state;
    this.setState({
        step: 2,
    });
  }

  toOrder(event) {
    const { step } = this.state;
    this.setState({
        step: 3,
    });
  }



  render() {
    const { step, user, isWorker, open, message } = this.state;

    switch(step) {
    case 1:
      return (
        <div className="App">
          <div className="appDashboard">
            <Header
              step={step}
              toHome={this.toHome}
              toProfile={this.toProfile}
              toOrder={this.toOrder}
            />
            <Home />
            <Message
              show={open}
              handleModalOpen={this.handleModalOpen}
              message={message}
            />
          </div>
        </div>
      );
    case 2:
      return (
        <div className="App">
          <div className="appDashboard">
            <Header
              step={step}
              toHome={this.toHome}
              toProfile={this.toProfile}
              toOrder={this.toOrder}
            />
            <Profile />
          </div>
        </div>
      );
    }
  }
}

export default Dashboard;