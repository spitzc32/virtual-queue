import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core';


const UserDetails = ({ nextStep, handleChange, values }) => {

  // for continue event listener
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  return (
    <Container  component="main" maxWidth="xl">
      <div className="formTitle">
        Sign Up
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
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Repeat Password
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

