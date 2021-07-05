import  React, {useState, createRef, useContext, Component } from 'react';
import { HashRouter as Router, Route, NavLink } from "react-router-dom";

import { UserContext } from "../context/UserContext";
import SignUp from "./authentication/SignUp";
import SignInForm from "./authentication/SignInForm";
import Store from "./store/Store";
import Dashboard from "./dashboard/Dashboard";
import Order from "./order/Order";
import Profile from "./authentication/Profile";

const Director = () => {
  const [user, setUser] = useContext(UserContext);

  return (
    <Router basename="/auth/">
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/dashboard/order" component={Order} />
        <Route exact path="/dashboard/profile" component={Profile} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/" component={SignInForm} />
        <Route exact path="/store" component={Store} />
      </Router>
  );
}

export default Director;