import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core';


const PersonalDetails = ({ prevStep, nextStep, handleChange, values }) => {

  // for continue event listener
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  return (
    <Container  component="main" maxWidth="xl">
      <div className="formTitle">
        Personal Details
      </div>
      <div className="formCenter">
        <form className="formFields">
          <div className="formField">
            <label className="formFieldLabel" htmlFor="first_name">
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              className="formFieldInput"
              placeholder="Enter your firstname"
              name="first_name"
              value={values.first_name}
              onChange={handleChange('first_name')}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="last_name">
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              className="formFieldInput"
              placeholder="Enter your lastname"
              name="last_name"
              value={values.last_name}
              onChange={handleChange('last_name')}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="preferred_name">
              Preferred Name
            </label>
            <input
              type="text"
              id="preferred_name"
              className="formFieldInput"
              placeholder="Enter your preferred name"
              name="preferred_name"
              value={values.preferred_name}
              onChange={handleChange('preferred_name')}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="secondary_email">
             Secondary Email
            </label>
            <input
              type="text"
              id="secondary_email"
              className="formFieldInput"
              placeholder="Enter your secondary email"
              name="secondary_email"
              value={values.secondary_email}
              onChange={handleChange('secondary_email')}
            />
          </div>

          <div className="formField">
            <label className="formFieldCheckboxLabel">
              <input
                className="formFieldCheckbox"
                type="checkbox"
                name="hasAgreed"
                value={values.hasAgreed}
                onChange={this.handleChange}
              />
             Allow location
            </label>
          </div>

          <div className="formField">
            <label className="formFieldCheckboxLabel">
              <input
                className="formFieldCheckbox"
                type="checkbox"
                name="hasAgreed"
                value={values.is_worker}
                onChange={this.handleChange}
              />
              I am a worker in a store
            </label>
          </div>

          <Button
                onClick={ Previous }
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Previous
          </Button>
          <Button
            onClick={ Continue }
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Next
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default PersonalDetails;


