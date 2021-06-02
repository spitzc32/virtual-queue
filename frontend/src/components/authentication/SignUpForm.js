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
      errors: {
        email: 'Please enter an email address',
        username: 'Please enter a username',
        password: 'Please enter a password',
        first_name: 'Please enter your first name',
        last_name: 'Please enter your last name',
        preferred_name: 'Please enter your preferred name',
      }
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


   validationErrorMessage = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'email': 
        errors.user.email = value.length < 1 && value.length > 255 ? 'Please input a username' : '';
        break;
      case 'username': 
        errors.user.username = value.length < 1 && value.length > 255 ? 'Please input a username' : '';
        break;
      case 'first_name': 
        errors.user.first_name = value.length < 1 && value.length > 150? 'Please input your first name' : '';
        break;
      case 'last_name': 
        errors.user.last_name = value.length < 1 && value.length > 150? 'Please input your last name' : '';
        break;
      case 'password': 
        errors.user.password = value.length < 1 && value.length > 64 ? 'Please input a password' : '';
        break;
      case 'preferred_name': 
        errors.user.preferred_name = value.length < 1 && value.length > 128? 'Please input your preferred name' : '';
        break;
      default:
        break;
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
