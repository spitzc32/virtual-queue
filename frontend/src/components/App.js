import  React, {useState, createRef, useContext, Component } from 'react';
import { HashRouter as Router, Route, NavLink } from "react-router-dom";

import Director from "./Director";
import Dashboard from "./dashboard/Dashboard";

import { UserProvider } from "../context/UserContext";
import { StoreProvider } from "../context/StoreContext";
import { BranchProvider } from "../context/BranchContext";

import "../css/App.css";

class App extends Component {

  render() {
    return (
      <UserProvider>
      <StoreProvider>
      <BranchProvider>
        <Director />
      </BranchProvider>
      </StoreProvider>
      </UserProvider>
    );
  }
}

export default App;
