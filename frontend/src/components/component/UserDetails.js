import React from "react";
import { Container } from '@material-ui/core';


const UserDetails = ({ nextStep, handleChange, values }) => {

  // for continue event listener
  const Continue = e => {
    validationErrorMessage(e);
    e.preventDefault();
  }
  const validationErrorMessage = (event) => {

    let err = false;
    if (values.email.length < 1 || values.email.length > 255) {
      values.errors.email = 'Please input a email';
      err = true;
    } if (values.username.length < 1 || values.username.length > 255) {
      values.errors.username = 'Please input a username';
      err = true;
    } if (values.password.length < 1 || values.password.length > 64) {
      values.errors.password =  'Please input a password';
      err = true;
    }  if (!err) {
      nextStep();
    }

  }



  return (
    <Container  component="main" maxWidth="xl">
      <div className="formTitle">
        Step 1: Basic user Details
        <p className="formSub">
          In this section we will gather your basic details
          to login on our site.
        </p>
      </div>
      <div className="formCenter">
        <form className="formFields">
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              value={values.email}
              onChange={handleChange('email')}
            />
            <br/>
            { values.errors.email }
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="formFieldInput"
              placeholder="Enter your username"
              name="username"
              value={values.username}
              onChange={handleChange('username')}
            />
            <br/>
            { values.errors.username }
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={values.password}
              onChange={handleChange('password')}
            />
            <br/>
            { values.errors.password }
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="rpassword">
              Repeat Password
            </label>
            <input
              type="password"
              id="rpassword"
              className="formFieldInput"
              placeholder="Repeat your password"
              name="rpassword"
              value={values.rpassword}
              onChange={handleChange('rpassword')}
            />
          </div>

          <div className="formField">
            <button
              className="formFieldButton"
              onClick={ Continue }
              type="submit"
             >
              Next
            </button>
          </div>
        </form>
      </div>
    </Container>
  )
}

export default UserDetails;

