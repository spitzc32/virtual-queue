import React from "react";
import { Container, Grid } from '@material-ui/core';


const PersonalDetails = ({ prevStep, nextStep, handleChange, values }) => {

  // for continue event listener
  const Continue = e => {
    e.preventDefault();
    nextStep();
  };

  const Previous = e => {
    e.preventDefault();
    prevStep();
  };

  return (
    <Container  component="main" maxWidth="xl">
      <div className="formTitle">
        Step 2: Personal Details
        <p className="formSub">
          In this section we will gather your personal details
          to use for our queue.
        </p>
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
                name="is_worker"
                value={values.is_worker}
                onChange={handleChange('is_worker')}
              />
              I am a worker in a store
            </label>
          </div>

         <br />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <div className="formField">
              <button
                className="formFieldButton"
                onClick={ Previous }
                type="submit"
               >
                Previous
              </button>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="formField">
              <button
                className="formFieldButton"
                onClick={ Continue }
                type="submit"
               >
                Next
              </button>
            </div>
          </Grid>
        </Grid>
        </form>
      </div>
    </Container>
  );
}

export default PersonalDetails;


