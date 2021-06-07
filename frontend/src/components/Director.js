import  React, {useState, createRef, useContext, Component } from 'react';
import { HashRouter as Router, Route, NavLink } from "react-router-dom";

import Auth from "./authentication/Auth";
import Dashboard from "./dashboard/Dashboard";

import { UserContext } from "../context/UserContext";

const Director = () => {
  const [user, setUser] = useContext(UserContext);

  if ('id' in user) {
    return (<Dashboard />);
  } else {
    return (<Auth />);
  }
}

export default Director;