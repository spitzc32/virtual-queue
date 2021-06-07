import React, { Component, useContext, useState } from "react";
import { Link } from "react-router-dom";
import MuiAlert from "@material-ui/lab/Alert";
import axios from 'axios';

import Confirmation from "../component/Confirmation";
import PersonalDetails from "../component/PersonalDetails";
import UserDetails from "../component/UserDetails";
import WorkerDetails from "../component/WorkerDetails";
import StepBar from "../elements/StepBar";

import { StoreContext } from "../../context/StoreContext";
import { UserContext } from "../../context/UserContext";


const Profile = () => {
    const [user, setUser] = useContext(UserContext);
    const [store, setStore] = useContext(StoreContext);

    let isWorking = 'id' in store;

    const state = {
      step: 1,
      percentage: 33,
      store: [],
      email: "",
      profile_picture: null,
      username: "",
      first_name: "",
      last_name: "",
      password: "",
      rpassword: "",
      preferred_name: "",
      secondary_email: "",
      longitude: 0,
      latitude: 0,
      is_active: true,
      is_staff: false,
      is_worker: false,
      is_auth: false,
    };

    if (isWorking) {
    return(
     <>
       <StepBar percentage={this.state.percentage}/>
       <WorkerDetails
          prevStep={ this.prevStep }
          nextStep={ this.nextStep }
          values={ values }
       />
     </>
    );
    } else {
    return(
     <>
       <StepBar percentage={this.state.percentage}/>
       <Confirmation
          prevStep={ this.prevStep }
          nextStep={ this.nextStep }
          values={ values }
       />
     </>
    );
  }
}
export default Profile;
