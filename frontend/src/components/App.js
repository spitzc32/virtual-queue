import  React, {useState, createRef, useContext, Component } from 'react';
import { HashRouter as Router, Route, NavLink } from "react-router-dom";

import Director from "./Director";
import Dashboard from "./dashboard/Dashboard";

import { UserProvider } from "../context/UserContext";
import { StoreProvider } from "../context/StoreContext";
import { OrderProvider } from "../context/OrderContext";
import { BranchProvider } from "../context/BranchContext";

import "../css/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
    return (
      <UserProvider>
      <StoreProvider>
      <BranchProvider>
      <OrderProvider>
        <Director />
      </OrderProvider>
      </BranchProvider>
      </StoreProvider>
      </UserProvider>
    );
  }
}

export default App;
