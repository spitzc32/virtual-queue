import React, { Component } from "react";
import { Link } from "react-router-dom";
import MuiAlert from "@material-ui/lab/Alert";
import axios from 'axios';

import Confirmation from "../component/Confirmation";
import PersonalDetails from "../component/PersonalDetails";
import UserDetails from "../component/UserDetails";
import WorkerDetails from "../component/WorkerDetails";
import StepBar from "../elements/StepBar";

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      step: 1,
      percentage: 33,
      store: [],
      store_id: 0,
      store_uid: [],
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
      errors: {
        email: '',
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        preferred_name: '',
        secondary_email: '',
        store_id: '',
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.getId = this.getId.bind(this);
  }

  prevStep(event) {
    const { step, percentage } = this.state;
    this.setState({
        step: step - 1,
        percentage: percentage - 33
    });
  }

  getId(id, uid) {
    const { store_id, store_uid } = this.state;
    this.setState({
        store_id: id,
        store_uid: uid,
    });
  };

  nextStep(event) {
    const { step, percentage, is_worker } = this.state;
    if (is_worker) {
      this.setState({
        step: step + 1,
        percentage: percentage + 17
      });
    } else {
      this.setState({
        step: step + 1,
        percentage: percentage + 33
      });
    }
  }

  handleChange = input => e => {
    if (input === "is_worker") {
      this.setState({ is_worker: !this.state.is_worker });
      const { store } = this.state

      axios.get('http://127.0.0.1:8000/api/v1/store/list/')
        .then(response => {
          if (response.status == 200 || response.status == 201) {
            this.setState({
              store: response.data,
            });
            console.log(this.state, 'done')
          } else {
            console.log(response.data);
          }
        });
    } else {
      this.setState({ [input]: e.target.value });
    }

  }

  render() {
    const { step } = this.state;
    const { email, profile_picture, username, first_name, last_name, password, rpassword, preferred_name, secondary_email, longitude, latitude,  is_active, is_staff, is_worker, store, errors } = this.state;
    const values = { email, profile_picture, username, first_name, last_name, password, rpassword, preferred_name, secondary_email, longitude, latitude,  is_active, is_staff, is_worker, store, errors }

    switch(step) {
        case 1:
          return(
            <>
              <StepBar percentage={this.state.percentage}/>
              <UserDetails
                nextStep={ this.nextStep }
                handleChange={ this.handleChange }
                values={ values }
              />
            </>
          );
        case 2:
          return(
            <>
              <StepBar percentage={this.state.percentage}/>
              <PersonalDetails
                prevStep={ this.prevStep }
                nextStep={ this.nextStep }
                handleChange={ this.handleChange }
                values={ values }
              />
            </>
          );
        case 3:
          if (this.state.is_worker) {
            return(
             <>
               <StepBar percentage={this.state.percentage}/>
               <WorkerDetails
                  prevStep={ this.prevStep }
                  nextStep={ this.nextStep }
                  getId= { this.getId }
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
        default:
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
}
export default SignUpForm;
