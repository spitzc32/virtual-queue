import React, { Component } from "react";
import { Link } from "react-router-dom";

import Confirmation from "../component/Confirmation";
import PersonalDetails from "../component/PersonalDetails";
import UserDetails from "../component/UserDetails";

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      step: 1,
      email: "",
      profile_picture: null,
      username: "",
      first_name: "",
      last_name: "",
      password: "",
      preferred_name: "",
      secondary_email: "",
      longitude: null,
      latitude: null,
      is_active: true,
      is_staff: false,
      is_worker: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
  }

  prevStep(event) {
    const {step} = this.state;
    this.setState({
        step: step - 1
    });
  }

  nextStep(event) {
    const {step} = this.state;
    this.setState({
        step: step + 1
    });
  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }


  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    const { step } = this.state;
    const { email, profile_picture, username, first_name, last_name, password, preferred_name, secondary_email, longitude, latitude,  is_active, is_staff, is_worker } = this.state;
    const values = { email, profile_picture, username, first_name, last_name, password, preferred_name, secondary_email, longitude, latitude,  is_active, is_staff, is_worker}

    switch(step) {
        case 1:
          return(
              <UserDetails
                nextStep={ this.nextStep }
                handleChange={ this.handleChange }
                values={ values }
              />
          );
        case 2:
          return(
            <PersonalDetails
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              handleChange={ this.handleChange }
              values={ values }
            />
          );
        case 3:
          return(
             <Confirmation
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              values={ values }
            />
          );
    }

  }
}
export default SignUpForm;
